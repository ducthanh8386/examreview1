/* =========================================================
   WAYGROUND / QUIZIZZ APPLICATION LOGIC (MULTI-SUBJECT)
   Hỗ trợ:
   1. Khởi Nghiệp Kinh Doanh & Đổi Mới Sáng Tạo (startup)
   2. English for Logistics & Supply Chain (logistics)
   ========================================================= */

// ---------------------------------------------------------
// 1. GLOBAL STATE & UTILITIES
// ---------------------------------------------------------

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleQuestionOptions(q) {
  const correctAnswer = q.options[q.correctIndex];
  const shuffledOptions = shuffleArray(q.options);
  const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
  return { ...q, options: shuffledOptions, correctIndex: newCorrectIndex };
}

// Normalize stored high scores to support per-subject high scores
function loadStoredHighScores() {
  const raw = localStorage.getItem('quiz_high_scores');
  let data = {};
  try {
    data = JSON.parse(raw) || {};
  } catch (e) {
    data = {};
  }

  // If old flat format exists ({ "1": 1000 }), migrate it to startup
  if (data["1"] !== undefined && typeof data["1"] === 'number' && !data.startup) {
    return {
      startup: data,
      logistics: { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 }
    };
  }

  return {
    startup: data.startup || { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 },
    logistics: data.logistics || { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 }
  };
}

let state = {
  currentSubjectId: localStorage.getItem('quiz_current_subject') || 'startup',
  selectedExamId: null,
  selectedMode: 'standard', // 'standard' | 'mastery'
  currentExam: null,
  questionQueue: [],
  currentQueueIndex: 0,
  masteredIds: new Set(),
  totalAttempts: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  userAnswers: [],
  timerInterval: null,
  timeLeft: 0,
  isAnswered: false,
  soundEnabled: true,
  isThemeDark: true,
  currentTheoryChapter: 1,
  currentWrongSubjectFilter: 'all',
  currentWrongChapterFilter: 'all',
  wrongQuestions: JSON.parse(localStorage.getItem('quiz_wrong_questions') || '[]'),
  highScores: loadStoredHighScores()
};

// ---------------------------------------------------------
// 2. SOUND SYNTHESIZER (WEB AUDIO API)
// ---------------------------------------------------------
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playCorrect() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'triangle';

    osc1.frequency.setValueAtTime(659.25, now);
    osc1.frequency.setValueAtTime(880.00, now + 0.1);

    osc2.frequency.setValueAtTime(329.63, now);
    osc2.frequency.setValueAtTime(440.00, now + 0.1);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.4);
    osc2.stop(now + 0.4);
  }

  playWrong() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.25);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  playFinish() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);

      gain.gain.setValueAtTime(0.2, now + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.3);
    });
  }
}

const sounds = new SoundFX();

// ---------------------------------------------------------
// 3. DOM ELEMENTS
// ---------------------------------------------------------
const views = {
  lobby: document.getElementById('lobbyView'),
  theory: document.getElementById('theoryView'),
  wrong: document.getElementById('wrongView'),
  quiz: document.getElementById('quizView'),
  result: document.getElementById('resultView')
};

const elems = {
  // Navigation & Subject Switchers
  logoBtn: document.getElementById('logoBtn'),
  navSubStartup: document.getElementById('navSubStartup'),
  navSubLogistics: document.getElementById('navSubLogistics'),
  hubCardStartup: document.getElementById('hubCardStartup'),
  hubCardLogistics: document.getElementById('hubCardLogistics'),
  soundToggleBtn: document.getElementById('soundToggleBtn'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  theoryNavBtn: document.getElementById('theoryNavBtn'),
  wrongBookNavBtn: document.getElementById('wrongBookNavBtn'),
  wrongCountBadge: document.getElementById('wrongCountBadge'),

  // Lobby Dynamic Elements
  heroBadge: document.getElementById('heroBadge'),
  heroTitle: document.getElementById('heroTitle'),
  heroTitleGradient: document.getElementById('heroTitleGradient'),
  heroDesc: document.getElementById('heroDesc'),
  theoryBannerIcon: document.getElementById('theoryBannerIcon'),
  theoryBannerTitle: document.getElementById('theoryBannerTitle'),
  theoryBannerDesc: document.getElementById('theoryBannerDesc'),
  openTheoryBannerBtn: document.getElementById('openTheoryBannerBtn'),
  exploreTheoryBtn: document.getElementById('exploreTheoryBtn'),
  openWrongBannerBtn: document.getElementById('openWrongBannerBtn'),
  wrongBannerTitle: document.getElementById('wrongBannerTitle'),
  wrongBannerCount: document.getElementById('wrongBannerCount'),
  wrongBannerDesc: document.getElementById('wrongBannerDesc'),
  practiceWrongBtn: document.getElementById('practiceWrongBtn'),
  viewWrongListBtn: document.getElementById('viewWrongListBtn'),
  examSubjectLabel: document.getElementById('examSubjectLabel'),
  examsGridContainer: document.getElementById('examsGridContainer'),

  // Theory View Elements
  backToLobbyFromTheoryBtn: document.getElementById('backToLobbyFromTheoryBtn'),
  theoryTabStartup: document.getElementById('theoryTabStartup'),
  theoryTabLogistics: document.getElementById('theoryTabLogistics'),
  theoryViewTitle: document.getElementById('theoryViewTitle'),
  theoryViewSubtitle: document.getElementById('theoryViewSubtitle'),
  theorySearchInput: document.getElementById('theorySearchInput'),
  theorySidebar: document.getElementById('theorySidebar'),
  theoryContentBody: document.getElementById('theoryContentBody'),

  // Wrong Questions Notebook View Elements
  backToLobbyFromWrongBtn: document.getElementById('backToLobbyFromWrongBtn'),
  clearAllWrongBtn: document.getElementById('clearAllWrongBtn'),
  startWrongQuizFromViewBtn: document.getElementById('startWrongQuizFromViewBtn'),
  wrongEmptyState: document.getElementById('wrongEmptyState'),
  wrongEmptyLobbyBtn: document.getElementById('wrongEmptyLobbyBtn'),
  wrongContentArea: document.getElementById('wrongContentArea'),
  wrongSearchInput: document.getElementById('wrongSearchInput'),
  wrongCardsList: document.getElementById('wrongCardsList'),
  wrongSubjectFilterTabs: document.getElementById('wrongSubjectFilterTabs'),
  wrongChapterFilterTabs: document.getElementById('wrongChapterFilterTabs'),
  filterAllCount: document.getElementById('filterAllCount'),
  filterStartupCount: document.getElementById('filterStartupCount'),
  filterLogisticsCount: document.getElementById('filterLogisticsCount'),

  // Mode Selection Modal
  modeModal: document.getElementById('modeModal'),
  modalExamTitle: document.getElementById('modalExamTitle'),
  modalExamSubtitle: document.getElementById('modalExamSubtitle'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  confirmStartBtn: document.getElementById('confirmStartBtn'),
  modeCards: document.querySelectorAll('.mode-card'),

  // Quiz Player View
  exitQuizBtn: document.getElementById('exitQuizBtn'),
  questionProgressText: document.getElementById('questionProgressText'),
  quizModeBadge: document.getElementById('quizModeBadge'),
  progressBarFill: document.getElementById('progressBarFill'),
  timerBarFill: document.getElementById('timerBarFill'),
  streakCount: document.getElementById('streakCount'),
  currentScore: document.getElementById('currentScore'),
  questionCategory: document.getElementById('questionCategory'),
  questionPoints: document.getElementById('questionPoints'),
  questionText: document.getElementById('questionText'),
  optionsGrid: document.getElementById('optionsGrid'),
  feedbackBanner: document.getElementById('feedbackBanner'),
  feedbackIcon: document.getElementById('feedbackIcon'),
  feedbackTitle: document.getElementById('feedbackTitle'),
  feedbackExplanation: document.getElementById('feedbackExplanation'),
  nextQuestionBtn: document.getElementById('nextQuestionBtn'),

  // Result View
  finalScoreVal: document.getElementById('finalScoreVal'),
  accuracyVal: document.getElementById('accuracyVal'),
  accuracyLabel: document.getElementById('accuracyLabel'),
  maxStreakVal: document.getElementById('maxStreakVal'),
  correctCountVal: document.getElementById('correctCountVal'),
  attemptsLabel: document.getElementById('attemptsLabel'),
  resultSubtitle: document.getElementById('resultSubtitle'),
  retryBtn: document.getElementById('retryBtn'),
  reviewBtn: document.getElementById('reviewBtn'),
  backToLobbyBtn: document.getElementById('backToLobbyBtn'),
  reviewContainer: document.getElementById('reviewContainer'),
  reviewList: document.getElementById('reviewList')
};

// ---------------------------------------------------------
// 4. INITIALIZATION & EVENT LISTENERS
// ---------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // 1. Set initial subject and render lobby UI
  selectSubject(state.currentSubjectId, false);
  updateWrongBadges();

  // 2. Setup Subject Hub Card Listeners
  if (elems.hubCardStartup) {
    elems.hubCardStartup.addEventListener('click', () => selectSubject('startup'));
  }
  if (elems.hubCardLogistics) {
    elems.hubCardLogistics.addEventListener('click', () => selectSubject('logistics'));
  }

  // 3. Setup Nav Subject Switcher
  if (elems.navSubStartup) {
    elems.navSubStartup.addEventListener('click', () => selectSubject('startup'));
  }
  if (elems.navSubLogistics) {
    elems.navSubLogistics.addEventListener('click', () => selectSubject('logistics'));
  }

  // 4. Theory Subject Tabs Listeners
  if (elems.theoryTabStartup) {
    elems.theoryTabStartup.addEventListener('click', () => selectSubject('startup', true, true));
  }
  if (elems.theoryTabLogistics) {
    elems.theoryTabLogistics.addEventListener('click', () => selectSubject('logistics', true, true));
  }

  // 5. Global Nav controls
  elems.soundToggleBtn.addEventListener('click', toggleSound);
  elems.themeToggleBtn.addEventListener('click', toggleTheme);
  elems.logoBtn.addEventListener('click', () => switchView('lobby'));
  elems.theoryNavBtn.addEventListener('click', openTheoryView);
  elems.openTheoryBannerBtn.addEventListener('click', openTheoryView);
  if (elems.exploreTheoryBtn) elems.exploreTheoryBtn.addEventListener('click', openTheoryView);
  elems.backToLobbyFromTheoryBtn.addEventListener('click', () => switchView('lobby'));

  // 6. Wrong Questions Notebook Navigation & Actions
  if (elems.wrongBookNavBtn) elems.wrongBookNavBtn.addEventListener('click', openWrongView);
  if (elems.viewWrongListBtn) elems.viewWrongListBtn.addEventListener('click', openWrongView);
  if (elems.openWrongBannerBtn) {
    elems.openWrongBannerBtn.addEventListener('click', (e) => {
      if (!e.target.closest('button')) openWrongView();
    });
  }
  if (elems.practiceWrongBtn) {
    elems.practiceWrongBtn.addEventListener('click', () => {
      if (state.wrongQuestions.length > 0) openModeModal('wrong_book');
    });
  }
  if (elems.backToLobbyFromWrongBtn) elems.backToLobbyFromWrongBtn.addEventListener('click', () => switchView('lobby'));
  if (elems.wrongEmptyLobbyBtn) elems.wrongEmptyLobbyBtn.addEventListener('click', () => switchView('lobby'));
  if (elems.clearAllWrongBtn) elems.clearAllWrongBtn.addEventListener('click', clearAllWrongQuestions);
  if (elems.startWrongQuizFromViewBtn) {
    elems.startWrongQuizFromViewBtn.addEventListener('click', () => {
      if (state.wrongQuestions.length > 0) openModeModal('wrong_book');
    });
  }

  // 7. Wrong Search & Filter Listeners
  if (elems.wrongSearchInput) {
    elems.wrongSearchInput.addEventListener('input', () => renderWrongQuestionsList());
  }

  // Subject filter buttons inside wrong view
  if (elems.wrongSubjectFilterTabs) {
    elems.wrongSubjectFilterTabs.querySelectorAll('.filter-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        elems.wrongSubjectFilterTabs.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentWrongSubjectFilter = btn.dataset.subjectFilter;
        state.currentWrongChapterFilter = 'all';
        renderWrongChapterFilterTabs();
        renderWrongQuestionsList();
      });
    });
  }

  // 8. Modal interactions
  elems.closeModalBtn.addEventListener('click', closeModeModal);
  elems.modeModal.addEventListener('click', (e) => {
    if (e.target === elems.modeModal) closeModeModal();
  });

  elems.modeCards.forEach(card => {
    card.addEventListener('click', () => {
      elems.modeCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.selectedMode = card.dataset.mode;
    });
  });

  elems.confirmStartBtn.addEventListener('click', () => {
    closeModeModal();
    startQuiz(state.selectedExamId, state.selectedMode);
  });

  // 9. Quiz navigation
  elems.exitQuizBtn.addEventListener('click', () => {
    if (confirm("Bạn có chắc chắn muốn thoát bài làm không?")) {
      clearInterval(state.timerInterval);
      switchView('lobby');
    }
  });

  elems.nextQuestionBtn.addEventListener('click', handleNextQuestion);

  // 10. Result navigation
  elems.retryBtn.addEventListener('click', () => openModeModal(state.currentExam.id));
  elems.backToLobbyBtn.addEventListener('click', () => switchView('lobby'));
  elems.reviewBtn.addEventListener('click', toggleReview);

  // 11. Option selection
  const optionBtns = elems.optionsGrid.querySelectorAll('.option-card');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedIndex = parseInt(btn.dataset.index);
      selectOption(selectedIndex);
    });
  });

  // 12. Theory Search Listener
  elems.theorySearchInput.addEventListener('input', handleTheorySearch);

  // 13. Keyboard Shortcuts Navigation (1, 2, 3, 4, Enter, Space)
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (elems.modeModal && !elems.modeModal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeModeModal();
      return;
    }

    if (views.quiz && views.quiz.classList.contains('active')) {
      if (!state.isAnswered) {
        if (e.key === '1' || e.code === 'Digit1' || e.code === 'Numpad1') {
          e.preventDefault();
          selectOption(0);
        } else if (e.key === '2' || e.code === 'Digit2' || e.code === 'Numpad2') {
          e.preventDefault();
          selectOption(1);
        } else if (e.key === '3' || e.code === 'Digit3' || e.code === 'Numpad3') {
          e.preventDefault();
          selectOption(2);
        } else if (e.key === '4' || e.code === 'Digit4' || e.code === 'Numpad4') {
          e.preventDefault();
          selectOption(3);
        }
      } else {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight' || ['1', '2', '3', '4'].includes(e.key)) {
          e.preventDefault();
          handleNextQuestion();
        }
      }
    }
  });
});

// ---------------------------------------------------------
// 5. SUBJECT SWITCHING & RENDERING LOGIC
// ---------------------------------------------------------

function selectSubject(subjectId, shouldScroll = true, keepInTheory = false) {
  if (!SUBJECTS_DATA[subjectId]) subjectId = 'startup';
  state.currentSubjectId = subjectId;
  localStorage.setItem('quiz_current_subject', subjectId);

  const sub = SUBJECTS_DATA[subjectId];

  // 1. Update In-Nav Pill Switcher
  if (elems.navSubStartup) elems.navSubStartup.classList.toggle('active', subjectId === 'startup');
  if (elems.navSubLogistics) elems.navSubLogistics.classList.toggle('active', subjectId === 'logistics');

  // 2. Update Hub Cards in Lobby
  if (elems.hubCardStartup) {
    const isStartup = (subjectId === 'startup');
    elems.hubCardStartup.classList.toggle('active', isStartup);
    const pill = elems.hubCardStartup.querySelector('.subject-status-pill');
    if (pill) {
      pill.className = isStartup ? 'subject-status-pill active-pill' : 'subject-status-pill idle-pill';
      pill.innerHTML = isStartup ? '<i class="fa-solid fa-circle-check"></i> Đang Chọn' : '<i class="fa-solid fa-arrow-pointer"></i> Nhấn Để Chọn';
    }
  }

  if (elems.hubCardLogistics) {
    const isLogistics = (subjectId === 'logistics');
    elems.hubCardLogistics.classList.toggle('active', isLogistics);
    const pill = elems.hubCardLogistics.querySelector('.subject-status-pill');
    if (pill) {
      pill.className = isLogistics ? 'subject-status-pill active-pill' : 'subject-status-pill idle-pill';
      pill.innerHTML = isLogistics ? '<i class="fa-solid fa-circle-check"></i> Đang Chọn' : '<i class="fa-solid fa-arrow-pointer"></i> Nhấn Để Chọn';
    }
  }

  // 3. Update Hero Section
  if (elems.heroBadge) {
    elems.heroBadge.className = subjectId === 'logistics' ? 'badge-tag logistics-badge' : 'badge-tag';
    elems.heroBadge.innerHTML = `<i class="${sub.icon}"></i> ${sub.badgeText}`;
  }
  if (elems.heroTitle) {
    elems.heroTitle.innerHTML = `${sub.heroTitle} <span class="gradient-text ${subjectId === 'logistics' ? 'logistics-gradient-text' : ''}" id="heroTitleGradient">${sub.heroSubtitle}</span>`;
  }
  if (elems.heroDesc) {
    elems.heroDesc.textContent = sub.heroDesc;
  }

  // 4. Update Hero Theory Banner
  if (elems.theoryBannerTitle) elems.theoryBannerTitle.textContent = sub.theoryBannerTitle;
  if (elems.theoryBannerDesc) elems.theoryBannerDesc.textContent = sub.theoryBannerDesc;
  if (elems.theoryBannerIcon) {
    elems.theoryBannerIcon.className = subjectId === 'logistics' ? 'theory-banner-icon logistics-icon' : 'theory-banner-icon';
    elems.theoryBannerIcon.innerHTML = `<i class="${sub.icon}"></i>`;
  }
  if (elems.openTheoryBannerBtn) {
    elems.openTheoryBannerBtn.classList.toggle('logistics-theme', subjectId === 'logistics');
  }

  // 5. Update Exam Grid Header Label
  if (elems.examSubjectLabel) {
    elems.examSubjectLabel.textContent = sub.name;
    elems.examSubjectLabel.className = subjectId === 'logistics' ? 'section-subtitle-tag logistics-tag' : 'section-subtitle-tag';
  }

  // 6. Re-render the 5 exam cards for the selected subject
  renderExamsGrid();

  // 7. Update Theory View
  updateTheoryViewForSubject();

  // 8. Update Wrong View filters & badges
  updateWrongBadges();

  if (!keepInTheory && shouldScroll) {
    // Smooth scroll down to exams if on lobby
    if (views.lobby.classList.contains('active')) {
      const target = document.querySelector('.exams-header-bar');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

// Render dynamic exam cards for active subject
function renderExamsGrid() {
  if (!elems.examsGridContainer) return;
  const sub = SUBJECTS_DATA[state.currentSubjectId];
  const exams = sub.exams;
  const subHighScores = state.highScores[state.currentSubjectId] || {};

  elems.examsGridContainer.innerHTML = '';

  const bannerClassesStartup = ['banner-1', 'banner-2', 'banner-3', 'banner-4', 'banner-5'];
  const bannerClassesLogistics = ['logistics-banner-1', 'logistics-banner-2', 'logistics-banner-3', 'logistics-banner-4', 'logistics-banner-5'];
  const bannerIcons = [
    sub.id === 'logistics' ? 'fa-solid fa-earth-americas' : 'fa-solid fa-brain',
    sub.id === 'logistics' ? 'fa-solid fa-ship' : 'fa-solid fa-lightbulb',
    sub.id === 'logistics' ? 'fa-solid fa-warehouse' : 'fa-solid fa-bullseye',
    sub.id === 'logistics' ? 'fa-solid fa-file-contract' : 'fa-solid fa-chart-pie',
    'fa-solid fa-trophy'
  ];
  const bannerTags = [
    'ĐỀ TỔNG HỢP',
    sub.id === 'logistics' ? 'UNIT 1 & 2' : 'CHƯƠNG 1',
    sub.id === 'logistics' ? 'UNIT 3' : 'CHƯƠNG 2',
    sub.id === 'logistics' ? 'UNIT 4 & 5' : 'CHƯƠNG 3',
    'THI THỬ VIP'
  ];

  Object.keys(exams).forEach((examKey, idx) => {
    const exam = exams[examKey];
    const bannerClass = sub.id === 'logistics' ? bannerClassesLogistics[idx % 5] : bannerClassesStartup[idx % 5];
    const iconClass = bannerIcons[idx % 5];
    const tagText = bannerTags[idx % 5];
    const highScoreVal = subHighScores[exam.id] || 0;

    const card = document.createElement('div');
    card.className = 'exam-card';
    card.dataset.examId = exam.id;

    card.innerHTML = `
      <div class="card-banner ${bannerClass}">
        <span class="exam-tag">${tagText}</span>
        <i class="${iconClass} card-bg-icon"></i>
      </div>
      <div class="card-body">
        <h2 class="exam-title">${exam.title}</h2>
        <p class="exam-info">${exam.description}</p>
        <div class="exam-meta">
          <span><i class="fa-solid fa-list-check"></i> <strong>${exam.questions.length}</strong> câu hỏi</span>
          <span><i class="fa-solid fa-clock"></i> ${exam.timePerQuestion}s/câu</span>
        </div>
        <div class="card-footer">
          <div class="high-score">High Score: <span>${highScoreVal}</span> điểm</div>
          <button class="btn-play primary-btn">
            <span>Bắt Đầu</span>
            <i class="fa-solid fa-play"></i>
          </button>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openModeModal(exam.id);
    });

    elems.examsGridContainer.appendChild(card);
  });
}

// ---------------------------------------------------------
// 6. THEORY VIEW LOGIC
// ---------------------------------------------------------

function openTheoryView() {
  switchView('theory');
  updateTheoryViewForSubject();
}

function updateTheoryViewForSubject() {
  const sub = SUBJECTS_DATA[state.currentSubjectId];

  // Update in-theory subject tabs
  if (elems.theoryTabStartup) elems.theoryTabStartup.classList.toggle('active', state.currentSubjectId === 'startup');
  if (elems.theoryTabLogistics) elems.theoryTabLogistics.classList.toggle('active', state.currentSubjectId === 'logistics');

  // Update Header Text
  if (elems.theoryViewTitle) {
    elems.theoryViewTitle.innerHTML = `<i class="${sub.icon}"></i> ${sub.theoryTitle}`;
  }
  if (elems.theoryViewSubtitle) {
    elems.theoryViewSubtitle.textContent = sub.theoryDesc;
  }
  if (elems.theorySearchInput) {
    elems.theorySearchInput.placeholder = sub.theorySearchPlaceholder;
    elems.theorySearchInput.value = '';
  }

  // Render Sidebar Chapters
  elems.theorySidebar.innerHTML = '';
  sub.chapters.forEach((ch, idx) => {
    const btn = document.createElement('button');
    btn.className = `chapter-tab-btn ${idx === 0 ? 'active' : ''}`;
    btn.dataset.chapter = ch.id;
    btn.innerHTML = `<i class="${ch.icon}"></i> <span>${ch.name}</span>`;

    btn.addEventListener('click', () => {
      elems.theorySidebar.querySelectorAll('.chapter-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentTheoryChapter = ch.id;
      renderChapterContent(ch.id);
    });

    elems.theorySidebar.appendChild(btn);
  });

  state.currentTheoryChapter = sub.chapters[0].id;
  renderChapterContent(sub.chapters[0].id);
}

function renderChapterContent(chapterId) {
  const sub = SUBJECTS_DATA[state.currentSubjectId];
  const chapterData = sub.theoryData.find(c => c.chapter === chapterId) || sub.theoryData[0];

  elems.theoryContentBody.innerHTML = `
    <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-main); margin-bottom: 20px;">
      <i class="${chapterData.icon}"></i> ${chapterData.title}
    </h2>
    ${chapterData.content}
  `;

  renderMath(elems.theoryContentBody);
}

function renderMath(container) {
  if (!window.MathJax) return;

  const doTypeset = () => {
    if (MathJax.typesetPromise) {
      MathJax.typesetClear([container]);
      MathJax.typesetPromise([container]).catch(err => console.warn('MathJax error:', err));
    }
  };

  if (MathJax.startup && MathJax.startup.promise) {
    MathJax.startup.promise.then(doTypeset);
  } else {
    doTypeset();
  }
}

function handleTheorySearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const sub = SUBJECTS_DATA[state.currentSubjectId];

  if (!query) {
    renderChapterContent(state.currentTheoryChapter);
    return;
  }

  let matchedHtml = '';
  let matchCount = 0;

  sub.theoryData.forEach(ch => {
    if (ch.title.toLowerCase().includes(query) || ch.content.toLowerCase().includes(query)) {
      matchCount++;
      matchedHtml += `
        <div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px dashed var(--border-color);">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--accent-purple); margin-bottom: 16px;">
            <i class="${ch.icon}"></i> ${ch.title}
          </h2>
          ${ch.content}
        </div>
      `;
    }
  });

  if (matchCount > 0) {
    elems.theoryContentBody.innerHTML = `
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 20px;">
        🔍 Tìm thấy <strong>${matchCount}</strong> phần chứa từ khóa "<em>${query}</em>":
      </p>
      ${matchedHtml}
    `;
  } else {
    elems.theoryContentBody.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-circle-exclamation" style="font-size: 3rem; margin-bottom: 12px; color: var(--accent-pink);"></i>
        <h3>Không tìm thấy nội dung phù hợp</h3>
        <p>Vui lòng thử từ khóa tìm kiếm khác (ví dụ: Canvas, Design Thinking, Incoterms, B/L, FCL, WMS, SKU...)</p>
      </div>
    `;
  }

  renderMath(elems.theoryContentBody);
}

// ---------------------------------------------------------
// 7. CORE MODAL & VIEW SWITCHING
// ---------------------------------------------------------

function openModeModal(examId) {
  state.selectedExamId = examId;
  const sub = SUBJECTS_DATA[state.currentSubjectId];
  const exam = examId === 'wrong_book' ? getWrongExamData() : sub.exams[examId];

  if (!exam || !exam.questions || exam.questions.length === 0) {
    alert("Sổ tay câu sai đang trống! Hãy làm các bộ đề thi để tích lũy câu hỏi cần củng cố kiến thức.");
    return;
  }

  elems.modalExamTitle.textContent = exam.title;
  if (elems.modalExamSubtitle) {
    elems.modalExamSubtitle.textContent = `Học phần: ${sub.name} • ${exam.questions.length} câu hỏi`;
  }
  elems.modeModal.classList.remove('hidden');
}

function closeModeModal() {
  elems.modeModal.classList.add('hidden');
}

function switchView(viewName) {
  Object.keys(views).forEach(v => {
    views[v].classList.remove('active');
  });
  views[viewName].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  const icon = elems.soundToggleBtn.querySelector('i');
  if (state.soundEnabled) {
    icon.className = 'fa-solid fa-volume-high';
    elems.soundToggleBtn.title = "Tắt Âm Thanh";
  } else {
    icon.className = 'fa-solid fa-volume-xmark';
    elems.soundToggleBtn.title = "Bật Âm Thanh";
  }
}

function toggleTheme() {
  state.isThemeDark = !state.isThemeDark;
  document.body.classList.toggle('light-theme', !state.isThemeDark);
  const icon = elems.themeToggleBtn.querySelector('i');
  icon.className = state.isThemeDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

// ---------------------------------------------------------
// 8. QUIZ EXECUTION LOGIC
// ---------------------------------------------------------

function startQuiz(examId, mode) {
  state.selectedExamId = examId;
  const sub = SUBJECTS_DATA[state.currentSubjectId];
  state.currentExam = examId === 'wrong_book' ? getWrongExamData() : sub.exams[examId];
  state.selectedMode = mode;

  // Shuffle questions and options
  const shuffledQuestions = shuffleArray(state.currentExam.questions)
    .map(q => shuffleQuestionOptions(q));

  state.questionQueue = shuffledQuestions;
  state.currentQueueIndex = 0;
  state.masteredIds = new Set();
  state.totalAttempts = 0;
  state.score = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.userAnswers = [];
  state.isAnswered = false;

  elems.currentScore.textContent = '0';
  elems.streakCount.textContent = '0';

  if (mode === 'mastery') {
    elems.quizModeBadge.textContent = '🔄 Học thuộc (100%)';
    elems.quizModeBadge.className = 'mode-pill mastery';
  } else {
    elems.quizModeBadge.textContent = '🎯 Thi thử (1 lần)';
    elems.quizModeBadge.className = 'mode-pill';
  }

  switchView('quiz');
  renderQuestion();
}

function renderQuestion() {
  state.isAnswered = false;
  elems.feedbackBanner.classList.add('hidden');

  const q = state.questionQueue[state.currentQueueIndex];
  const totalUnique = state.currentExam.questions.length;
  const sub = SUBJECTS_DATA[state.currentSubjectId];

  if (state.selectedMode === 'mastery') {
    elems.questionProgressText.textContent = `Đã thuộc ${state.masteredIds.size} / ${totalUnique} câu`;
    elems.progressBarFill.style.width = `${(state.masteredIds.size / totalUnique) * 100}%`;
  } else {
    elems.questionProgressText.textContent = `Câu ${state.currentQueueIndex + 1} / ${totalUnique}`;
    elems.progressBarFill.style.width = `${((state.currentQueueIndex + 1) / totalUnique) * 100}%`;
  }

  elems.questionCategory.textContent = `[${sub.shortName}] MÃ ĐỀ ${state.currentExam.code}`;
  elems.questionText.textContent = q.question;

  const optionBtns = elems.optionsGrid.querySelectorAll('.option-card');
  optionBtns.forEach((btn, idx) => {
    btn.className = getOptionBaseClass(idx);
    btn.disabled = false;
    const textSpan = btn.querySelector('.option-text');
    textSpan.textContent = q.options[idx];
  });

  renderMath(elems.questionText);
  renderMath(elems.optionsGrid);

  startTimer();
}

function getOptionBaseClass(idx) {
  const colors = ['option-red', 'option-blue', 'option-yellow', 'option-green'];
  return `option-card ${colors[idx % 4]}`;
}

function startTimer() {
  clearInterval(state.timerInterval);
  const duration = state.currentExam.timePerQuestion || 20;
  let startTime = Date.now();

  elems.timerBarFill.className = 'timer-bar-fill';
  elems.timerBarFill.style.width = '100%';

  state.timerInterval = setInterval(() => {
    const elapsed = (Date.now() - startTime) / 1000;
    const remaining = Math.max(0, duration - elapsed);
    const percentage = (remaining / duration) * 100;

    elems.timerBarFill.style.width = `${percentage}%`;

    if (percentage < 30) {
      elems.timerBarFill.className = 'timer-bar-fill danger';
    } else if (percentage < 65) {
      elems.timerBarFill.className = 'timer-bar-fill warning';
    }

    if (remaining <= 0) {
      clearInterval(state.timerInterval);
      if (!state.isAnswered) {
        handleTimeOut();
      }
    }
  }, 50);
}

function selectOption(selectedIndex) {
  if (state.isAnswered) return;
  state.isAnswered = true;
  clearInterval(state.timerInterval);

  state.totalAttempts++;
  const q = state.questionQueue[state.currentQueueIndex];
  const isCorrect = (selectedIndex === q.correctIndex);
  const optionBtns = elems.optionsGrid.querySelectorAll('.option-card');

  let pointsEarned = 0;
  if (isCorrect) {
    state.streak++;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;
    state.masteredIds.add(q.id);

    const currentWidth = parseFloat(elems.timerBarFill.style.width) || 50;
    const speedBonus = Math.round(currentWidth * 5);
    const streakBonus = Math.min(state.streak * 100, 500);
    pointsEarned = 1000 + speedBonus + streakBonus;

    state.score += pointsEarned;
    sounds.playCorrect();

    if (state.streak >= 3 && window.confetti) {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    }

    // Auto resolve from wrong notebook if practicing wrong book
    if (state.selectedExamId === 'wrong_book') {
      const cleanQ = getCleanQuestionText(q.question);
      removeWrongQuestion(cleanQ, false);
    }
  } else {
    state.streak = 0;
    sounds.playWrong();

    // Save to mistake notebook with active subject tag
    saveWrongQuestion(q, selectedIndex);

    if (state.selectedMode === 'mastery') {
      state.questionQueue.push(q);
    }
  }

  elems.currentScore.textContent = state.score;
  elems.streakCount.textContent = state.streak;

  optionBtns.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === selectedIndex) {
      btn.classList.add(isCorrect ? 'correct-selected' : 'wrong-selected');
    } else if (idx === q.correctIndex) {
      btn.classList.add('correct-dimmed');
    } else {
      btn.classList.add('dimmed');
    }
  });

  state.userAnswers.push({
    question: q,
    selectedIndex: selectedIndex,
    isCorrect: isCorrect,
    pointsEarned: pointsEarned
  });

  let expText = q.explanation;
  if (!isCorrect && state.selectedMode === 'mastery') {
    expText += " 🔄 (Câu này sẽ xuất hiện lại ở cuối bài để bạn ôn lại)";
  }

  showFeedback(isCorrect, expText);
}

function handleTimeOut() {
  state.isAnswered = true;
  state.totalAttempts++;
  const q = state.questionQueue[state.currentQueueIndex];
  state.streak = 0;
  elems.streakCount.textContent = '0';
  sounds.playWrong();

  saveWrongQuestion(q, -1);

  if (state.selectedMode === 'mastery') {
    state.questionQueue.push(q);
  }

  const optionBtns = elems.optionsGrid.querySelectorAll('.option-card');
  optionBtns.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctIndex) {
      btn.classList.add('correct-dimmed');
    } else {
      btn.classList.add('dimmed');
    }
  });

  state.userAnswers.push({
    question: q,
    selectedIndex: -1,
    isCorrect: false,
    pointsEarned: 0
  });

  let expText = `Hết giờ! ${q.explanation}`;
  if (state.selectedMode === 'mastery') {
    expText += " 🔄 (Câu này sẽ lặp lại ở cuối bài)";
  }

  showFeedback(false, expText);
}

function showFeedback(isCorrect, explanation) {
  elems.feedbackBanner.className = `feedback-banner ${isCorrect ? 'correct' : 'wrong'}`;
  elems.feedbackIcon.innerHTML = isCorrect ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-xmark"></i>';
  elems.feedbackTitle.textContent = isCorrect ? 'Chính Xác! 🎉' : 'Chưa Đúng! 💡';
  elems.feedbackExplanation.textContent = explanation;
  elems.feedbackBanner.classList.remove('hidden');
  renderMath(elems.feedbackExplanation);
}

function handleNextQuestion() {
  state.currentQueueIndex++;

  if (state.selectedMode === 'mastery') {
    const totalUnique = state.currentExam.questions.length;
    if (state.masteredIds.size >= totalUnique || state.currentQueueIndex >= state.questionQueue.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  } else {
    if (state.currentQueueIndex < state.questionQueue.length) {
      renderQuestion();
    } else {
      finishQuiz();
    }
  }
}

// ---------------------------------------------------------
// 9. RESULT SUMMARY & REVIEW LOGIC
// ---------------------------------------------------------

function finishQuiz() {
  sounds.playFinish();
  if (window.confetti) {
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
  }

  const totalUnique = state.currentExam.questions.length;
  const sub = SUBJECTS_DATA[state.currentSubjectId];

  if (state.selectedExamId === 'wrong_book') {
    const correctCount = state.userAnswers.filter(a => a.isCorrect).length;
    elems.accuracyLabel.textContent = "Sổ Câu Sai";
    elems.accuracyVal.textContent = "Đã Khắc Phục";
    elems.attemptsLabel.textContent = "Số Câu Đúng";
    elems.correctCountVal.textContent = `${correctCount}/${totalUnique}`;
    elems.resultSubtitle.textContent = `Tuyệt vời! Bạn đã hoàn thành ôn tập Sổ tay câu sai. Những câu làm đúng đã được xóa khỏi sổ! 🎉`;
  } else if (state.selectedMode === 'mastery') {
    elems.accuracyLabel.textContent = "Chế Độ";
    elems.accuracyVal.textContent = "Học Thuộc 100%";
    elems.attemptsLabel.textContent = "Lượt Trả Lời";
    elems.correctCountVal.textContent = `${state.totalAttempts} lượt`;
    elems.resultSubtitle.textContent = `Tuyệt vời! Bạn đã thuộc đúng 100% tất cả ${totalUnique} câu hỏi của [${sub.shortName}] Mã đề ${state.currentExam.code}! 🎉`;
  } else {
    const correctCount = state.userAnswers.filter(a => a.isCorrect).length;
    const accuracy = Math.round((correctCount / totalUnique) * 100);

    elems.accuracyLabel.textContent = "Tỷ Lệ Đúng";
    elems.accuracyVal.textContent = `${accuracy}%`;
    elems.attemptsLabel.textContent = "Số Câu Đúng";
    elems.correctCountVal.textContent = `${correctCount}/${totalUnique}`;

    if (accuracy === 100) {
      elems.resultSubtitle.textContent = `Xuất sắc! Bạn đã đạt điểm tuyệt đối 100% môn ${sub.name}! 🏆`;
    } else if (accuracy >= 80) {
      elems.resultSubtitle.textContent = `Kết quả rất tốt! Hãy tiếp tục rèn luyện thêm các mã đề khác. 🌟`;
    } else {
      elems.resultSubtitle.textContent = `Bạn có thể chọn 'Chế độ Học Thuộc' để luyện lại cho đến khi thuộc 100%! 💪`;
    }
  }

  elems.finalScoreVal.textContent = state.score;
  elems.maxStreakVal.textContent = `🔥 ${state.maxStreak}`;

  // Update High Score per subject
  const examId = state.currentExam.id;
  if (typeof examId === 'number') {
    if (!state.highScores[state.currentSubjectId]) {
      state.highScores[state.currentSubjectId] = {};
    }
    const currentHigh = state.highScores[state.currentSubjectId][examId] || 0;
    if (state.score > currentHigh) {
      state.highScores[state.currentSubjectId][examId] = state.score;
      localStorage.setItem('quiz_high_scores', JSON.stringify(state.highScores));
      renderExamsGrid();
    }
  }

  buildReviewList();
  elems.reviewContainer.classList.add('hidden');

  switchView('result');
}

function buildReviewList() {
  elems.reviewList.innerHTML = '';

  state.userAnswers.forEach((ans, idx) => {
    const q = ans.question;
    const isCorrect = ans.isCorrect;
    const selectedText = ans.selectedIndex >= 0 ? q.options[ans.selectedIndex] : 'Hết giờ (Chưa chọn)';
    const correctText = q.options[q.correctIndex];

    const reviewItem = document.createElement('div');
    reviewItem.className = `review-item ${isCorrect ? 'is-correct' : 'is-wrong'}`;

    reviewItem.innerHTML = `
      <div class="review-q-num">Lượt ${idx + 1} • ${isCorrect ? 'Chính xác' : 'Chưa chính xác'}</div>
      <div class="review-q-text">${q.question}</div>
      <div class="review-ans-group">
        <div class="user-ans">Lựa chọn của bạn: <span class="${isCorrect ? 'correct' : 'wrong'}">${selectedText}</span></div>
        ${!isCorrect ? `<div class="correct-ans">Đáp án đúng: <span>${correctText}</span></div>` : ''}
        <div class="review-exp"><i class="fa-solid fa-lightbulb"></i> <strong>Lời giải chi tiết:</strong> ${q.explanation}</div>
      </div>
    `;

    elems.reviewList.appendChild(reviewItem);
  });

  renderMath(elems.reviewList);
}

function toggleReview() {
  elems.reviewContainer.classList.toggle('hidden');
  if (!elems.reviewContainer.classList.contains('hidden')) {
    elems.reviewContainer.scrollIntoView({ behavior: 'smooth' });
  }
}

// ---------------------------------------------------------
// 10. WRONG QUESTIONS NOTEBOOK LOGIC (MULTI-SUBJECT)
// ---------------------------------------------------------

function getCleanQuestionText(text) {
  if (!text) return '';
  return text.replace(/^\[.*?\]\s*/, '').trim();
}

function detectQuestionSubjectAndChapter(cleanText) {
  // Check Logistics
  if (SUBJECTS_DATA.logistics && SUBJECTS_DATA.logistics.allQuestions) {
    const logIdx = SUBJECTS_DATA.logistics.allQuestions.findIndex(q => q.question.trim() === cleanText);
    if (logIdx >= 0) {
      let ch = 1;
      if (logIdx < 15) ch = 1; // Logistics Entities & Systems (Câu 2 - 16)
      else if (logIdx < 21) ch = 3; // Quotation Structures (Câu 17 - 22)
      else ch = 4; // Passive Voice & Comparisons (Câu 23 - 34)
      return { subjectId: 'logistics', chapter: ch };
    }
  }

  // Check Startup
  for (let ch = 1; ch <= 3; ch++) {
    const rawList = SUBJECTS_DATA.startup.rawQuestions[ch];
    if (rawList && rawList.some(q => q.question.trim() === cleanText)) {
      return { subjectId: 'startup', chapter: ch };
    }
  }

  return { subjectId: state.currentSubjectId, chapter: 1 };
}

function updateWrongBadges() {
  const totalCount = state.wrongQuestions.length;
  const startupCount = state.wrongQuestions.filter(q => (q.subjectId || 'startup') === 'startup').length;
  const logisticsCount = state.wrongQuestions.filter(q => q.subjectId === 'logistics').length;

  if (elems.wrongCountBadge) {
    elems.wrongCountBadge.textContent = totalCount;
    elems.wrongCountBadge.classList.toggle('hidden', totalCount === 0);
  }

  if (elems.wrongBannerCount) {
    // Show count for active subject in banner
    const activeSubWrongCount = state.currentSubjectId === 'logistics' ? logisticsCount : startupCount;
    elems.wrongBannerCount.textContent = activeSubWrongCount;
  }

  if (elems.practiceWrongBtn) {
    const activeSubWrongCount = state.currentSubjectId === 'logistics' ? logisticsCount : startupCount;
    elems.practiceWrongBtn.disabled = (activeSubWrongCount === 0 && totalCount === 0);
  }

  if (elems.filterAllCount) elems.filterAllCount.textContent = totalCount;
  if (elems.filterStartupCount) elems.filterStartupCount.textContent = startupCount;
  if (elems.filterLogisticsCount) elems.filterLogisticsCount.textContent = logisticsCount;
}

function saveWrongQuestion(q, selectedIndex) {
  const cleanText = getCleanQuestionText(q.question);
  const info = detectQuestionSubjectAndChapter(cleanText);
  const existingIdx = state.wrongQuestions.findIndex(item => item.cleanText === cleanText);

  const wrongItem = {
    id: q.id || Date.now(),
    cleanText: cleanText,
    subjectId: info.subjectId,
    chapter: info.chapter,
    question: {
      question: q.question,
      options: [...q.options],
      correctIndex: q.correctIndex,
      explanation: q.explanation
    },
    userWrongOption: selectedIndex >= 0 ? q.options[selectedIndex] : 'Hết giờ (Chưa chọn)',
    lastWrongTime: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }),
    wrongCount: existingIdx >= 0 ? ((state.wrongQuestions[existingIdx].wrongCount || 1) + 1) : 1
  };

  if (existingIdx >= 0) {
    state.wrongQuestions[existingIdx] = wrongItem;
  } else {
    state.wrongQuestions.unshift(wrongItem);
  }

  localStorage.setItem('quiz_wrong_questions', JSON.stringify(state.wrongQuestions));
  updateWrongBadges();
}

function removeWrongQuestion(cleanText, shouldRerender = true) {
  state.wrongQuestions = state.wrongQuestions.filter(item => item.cleanText !== cleanText);
  localStorage.setItem('quiz_wrong_questions', JSON.stringify(state.wrongQuestions));
  updateWrongBadges();
  if (shouldRerender && views.wrong.classList.contains('active')) {
    renderWrongQuestionsList();
  }
}

function clearAllWrongQuestions() {
  if (state.wrongQuestions.length === 0) return;
  if (confirm("Bạn có chắc chắn muốn xóa tất cả câu hỏi trong Sổ tay câu sai không?")) {
    state.wrongQuestions = [];
    localStorage.setItem('quiz_wrong_questions', JSON.stringify([]));
    updateWrongBadges();
    renderWrongQuestionsList();
  }
}

function getWrongExamData() {
  let list = state.wrongQuestions;

  // If filtered by subject, only quiz those questions
  if (state.currentWrongSubjectFilter !== 'all') {
    list = list.filter(q => (q.subjectId || 'startup') === state.currentWrongSubjectFilter);
  } else {
    // Default to active subject if available, or all
    const activeList = list.filter(q => (q.subjectId || 'startup') === state.currentSubjectId);
    if (activeList.length > 0) list = activeList;
  }

  return {
    id: 'wrong_book',
    code: 'SỔ-SAI',
    title: `Sổ Tay Câu Sai (${list.length} Câu)`,
    description: "Bộ đề gồm các câu bạn từng trả lời chưa chính xác. Khi trả lời đúng câu nào, câu đó sẽ tự động được xóa khỏi sổ tay!",
    timePerQuestion: 25,
    questions: list.map((item, idx) => ({
      id: idx + 1,
      question: `[Câu Sai ${idx + 1}] ${item.cleanText}`,
      options: [...item.question.options],
      correctIndex: item.question.correctIndex,
      explanation: item.question.explanation
    }))
  };
}

function openWrongView() {
  switchView('wrong');
  renderWrongChapterFilterTabs();
  renderWrongQuestionsList();
}

function renderWrongChapterFilterTabs() {
  if (!elems.wrongChapterFilterTabs) return;
  elems.wrongChapterFilterTabs.innerHTML = '';

  const subFilter = state.currentWrongSubjectFilter;
  let chapters = [];

  if (subFilter === 'startup') {
    chapters = SUBJECTS_DATA.startup.chapters;
  } else if (subFilter === 'logistics') {
    chapters = SUBJECTS_DATA.logistics.chapters;
  }

  if (chapters.length === 0) {
    elems.wrongChapterFilterTabs.style.display = 'none';
    return;
  }

  elems.wrongChapterFilterTabs.style.display = 'flex';

  // All chapter tab
  const allBtn = document.createElement('button');
  allBtn.className = `filter-tab-btn ${state.currentWrongChapterFilter === 'all' ? 'active' : ''}`;
  allBtn.textContent = 'Tất cả chương/unit';
  allBtn.addEventListener('click', () => {
    elems.wrongChapterFilterTabs.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
    state.currentWrongChapterFilter = 'all';
    renderWrongQuestionsList();
  });
  elems.wrongChapterFilterTabs.appendChild(allBtn);

  chapters.forEach(ch => {
    const chCount = state.wrongQuestions.filter(q => (q.subjectId || 'startup') === subFilter && q.chapter === ch.id).length;
    const btn = document.createElement('button');
    btn.className = `filter-tab-btn ${state.currentWrongChapterFilter === String(ch.id) ? 'active' : ''}`;
    btn.textContent = `${ch.label} (${chCount})`;
    btn.addEventListener('click', () => {
      elems.wrongChapterFilterTabs.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentWrongChapterFilter = String(ch.id);
      renderWrongQuestionsList();
    });
    elems.wrongChapterFilterTabs.appendChild(btn);
  });
}

function renderWrongQuestionsList() {
  updateWrongBadges();
  const totalCount = state.wrongQuestions.length;

  if (totalCount === 0) {
    elems.wrongEmptyState.classList.remove('hidden');
    elems.wrongContentArea.classList.add('hidden');
    return;
  }

  elems.wrongEmptyState.classList.add('hidden');
  elems.wrongContentArea.classList.remove('hidden');

  const subFilter = state.currentWrongSubjectFilter;
  const chFilter = state.currentWrongChapterFilter;
  const searchQuery = (elems.wrongSearchInput ? elems.wrongSearchInput.value : '').toLowerCase().trim();

  let filtered = state.wrongQuestions;

  if (subFilter !== 'all') {
    filtered = filtered.filter(item => (item.subjectId || 'startup') === subFilter);
  }

  if (chFilter !== 'all') {
    const chNum = parseInt(chFilter);
    filtered = filtered.filter(item => item.chapter === chNum);
  }

  if (searchQuery) {
    filtered = filtered.filter(item => {
      const qText = item.cleanText.toLowerCase();
      const expText = (item.question.explanation || '').toLowerCase();
      const optText = item.question.options.join(' ').toLowerCase();
      return qText.includes(searchQuery) || expText.includes(searchQuery) || optText.includes(searchQuery);
    });
  }

  elems.wrongCardsList.innerHTML = '';

  if (filtered.length === 0) {
    elems.wrongCardsList.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--accent-purple);"></i>
        <h3>Không tìm thấy câu hỏi phù hợp</h3>
        <p>Vui lòng thử từ khóa tìm kiếm khác hoặc chuyển bộ lọc môn/chương.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'wrong-card';

    const itemSubject = item.subjectId || 'startup';
    const subMeta = SUBJECTS_DATA[itemSubject] || SUBJECTS_DATA.startup;
    const correctText = item.question.options[item.question.correctIndex];
    const userText = item.userWrongOption || 'Chưa rõ';

    const chapterLabel = itemSubject === 'logistics' ? `Unit ${item.chapter}` : `Chương ${item.chapter}`;

    card.innerHTML = `
      <div class="wrong-card-top">
        <div class="wrong-card-tags">
          <span class="subject-badge-chip ${itemSubject}"><i class="${subMeta.icon}"></i> ${subMeta.shortName}</span>
          <span class="chapter-badge">${chapterLabel}</span>
          <span class="wrong-count-badge"><i class="fa-solid fa-triangle-exclamation"></i> Sai ${item.wrongCount} lần</span>
        </div>
        <div class="wrong-card-actions-top">
          <button class="btn-remove-wrong" title="Đánh dấu đã hiểu & Xóa khỏi sổ tay">
            <i class="fa-solid fa-check"></i>
            <span>Đã hiểu</span>
          </button>
        </div>
      </div>

      <div class="wrong-card-q">${item.cleanText}</div>

      <div class="wrong-card-answers">
        <div class="wrong-ans-user">
          <div class="wrong-ans-label"><i class="fa-solid fa-xmark"></i> Bạn từng chọn:</div>
          <div class="wrong-ans-val">${userText}</div>
        </div>
        <div class="wrong-ans-correct">
          <div class="wrong-ans-label"><i class="fa-solid fa-check"></i> Đáp án đúng:</div>
          <div class="wrong-ans-val">${correctText}</div>
        </div>
      </div>

      <div class="wrong-card-exp">
        <strong><i class="fa-solid fa-lightbulb"></i> Lời giải chi tiết:</strong> ${item.question.explanation}
      </div>
    `;

    const removeBtn = card.querySelector('.btn-remove-wrong');
    removeBtn.addEventListener('click', () => {
      removeWrongQuestion(item.cleanText);
    });

    elems.wrongCardsList.appendChild(card);
  });

  renderMath(elems.wrongCardsList);
}
