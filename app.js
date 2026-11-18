/* =========================================================
   EXAMMASTER - CLEAN MINIMALIST MULTI-SUBJECT LEARNING PLATFORM
   Hỗ trợ 4 Học Phần Toàn Diện:
   1. Chủ Nghĩa Xã Hội Khoa Học (cnxhkh) - 86 câu hỏi trọng tâm
   2. Tư Tưởng Hồ Chí Minh (hochiminh) - 80 câu hỏi trọng tâm
   3. Khởi Nghiệp Kinh Doanh & Đổi Mới Sáng Tạo (startup) - 80 câu
   4. English for Logistics & Supply Chain (logistics) - 70 câu
   ========================================================= */

// ---------------------------------------------------------
// 1. STATE & UTILITIES
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

function loadStoredHighScores() {
  const raw = localStorage.getItem('quiz_high_scores');
  let data = {};
  try {
    data = JSON.parse(raw) || {};
  } catch (e) {
    data = {};
  }

  return {
    cnxhkh: data.cnxhkh || { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0 },
    hochiminh: data.hochiminh || { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 },
    startup: data.startup || { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 },
    logistics: data.logistics || { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 }
  };
}

let state = {
  currentSubjectId: localStorage.getItem('quiz_current_subject') || 'cnxhkh',
  currentFilterSubject: 'all', // 'all' or subjectId
  selectedExamId: null,
  selectedMode: 'standard', // 'standard' | 'mastery' | 'exam'
  currentExam: null,
  questionQueue: [],
  currentQueueIndex: 0,
  masteredIds: new Set(),
  totalAttempts: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  // Array of question answers: { question, selectedIndex, isCorrect, revealed }
  recordedAnswers: [],
  timerInterval: null,
  timeLeft: 0,
  examTotalSeconds: 0,
  examTotalRemaining: 0,
  flaggedQuestionIndices: new Set(),
  personalNotes: JSON.parse(localStorage.getItem('quiz_personal_notes') || '{}'),
  examHistory: JSON.parse(localStorage.getItem('quiz_exam_history') || '[]'),
  customExams: JSON.parse(localStorage.getItem('quiz_custom_exams') || '{}'),
  isAnswered: false,
  soundEnabled: true,
  isMusicPlaying: false,
  isThemeDark: false, // Default light minimalist per screenshots
  currentTheoryChapter: 1,
  currentWrongSubjectFilter: 'all',
  currentWrongChapterFilter: 'all',
  wrongQuestions: JSON.parse(localStorage.getItem('quiz_wrong_questions') || '[]'),
  highScores: loadStoredHighScores()
};

// Merge saved custom exams into SUBJECTS_DATA
function initCustomExams() {
  if (!state.customExams) return;
  Object.keys(state.customExams).forEach(examId => {
    const exam = state.customExams[examId];
    const subId = exam.subjectId || 'cnxhkh';
    if (SUBJECTS_DATA[subId]) {
      SUBJECTS_DATA[subId].exams[examId] = exam;
    } else if (subId === 'custom') {
      if (!SUBJECTS_DATA.custom) {
        SUBJECTS_DATA.custom = {
          id: 'custom',
          name: 'Học Phần Tự Tạo (Custom)',
          shortName: 'TỰ TẠO',
          icon: 'fa-solid fa-file-circle-plus',
          heroTitle: 'Đề Thi Tự Tạo &',
          heroSubtitle: 'Đề Riêng Của Bạn',
          heroDesc: 'Tổng hợp các bộ đề thi do bạn tự nhập từ file Word, tài liệu Zalo hoặc giáo trình ngoài.',
          totalQuestionsCount: 0,
          exams: {},
          theoryTitle: 'Tài Liệu Tự Tạo',
          theoryDesc: 'Tự ôn tập với các đề tự tạo',
          theorySearchPlaceholder: 'Tìm kiếm câu hỏi...',
          chapters: [{ id: 1, name: 'Bộ đề tự tạo', label: 'Tự tạo', icon: 'fa-solid fa-folder-open' }],
          theoryData: [{ chapter: 1, title: 'Đề tự tạo', icon: 'fa-solid fa-folder-open', content: '<p>Tất cả đề tự nhập của bạn được lưu trữ an toàn trên trình duyệt.</p>' }]
        };
      }
      SUBJECTS_DATA.custom.exams[examId] = exam;
    }
  });
}
initCustomExams();

// ---------------------------------------------------------
// 2. AUDIO & AMBIENT STUDY MUSIC (WEB AUDIO API)
// ---------------------------------------------------------
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.musicTimer = null;
    this.isPlayingMusic = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playCorrect() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc1.frequency.setValueAtTime(783.99, now + 0.16); // G5

      osc2.frequency.setValueAtTime(261.63, now);
      osc2.frequency.setValueAtTime(329.63, now + 0.08);
      osc2.frequency.setValueAtTime(392.00, now + 0.16);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.38);
      osc2.stop(now + 0.38);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  playWrong() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(75, now + 0.28);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  playFinish() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const now = this.ctx.currentTime + idx * 0.1;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.35);
      });
    } catch (e) {
      console.warn("Audio finish error", e);
    }
  }

  // Gentle Lo-Fi Ambient Study Sound Generator (Calm Chord Cycles)
  toggleStudyMusic() {
    this.init();
    if (this.isPlayingMusic) {
      this.stopStudyMusic();
      return false;
    } else {
      this.startStudyMusic();
      return true;
    }
  }

  startStudyMusic() {
    if (!this.ctx) return;
    this.isPlayingMusic = true;

    // Chords: Cmaj7, Am7, Fmaj7, G6
    const chordProgressions = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [196.00, 246.94, 293.66, 329.63]  // G6
    ];

    let chordIdx = 0;
    const playChordStep = () => {
      if (!this.isPlayingMusic || !this.ctx) return;
      const now = this.ctx.currentTime;
      const currentChord = chordProgressions[chordIdx % chordProgressions.length];
      chordIdx++;

      currentChord.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.025, now + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 3.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 4.0);
      });

      this.musicTimer = setTimeout(playChordStep, 4000);
    };

    playChordStep();
  }

  stopStudyMusic() {
    this.isPlayingMusic = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }
}

const sounds = new AudioEngine();

// ---------------------------------------------------------
// 3. DOM ELEMENTS CACHE
// ---------------------------------------------------------
const views = {
  lobby: document.getElementById('lobbyView'),
  quiz: document.getElementById('quizView'),
  theory: document.getElementById('theoryView'),
  wrong: document.getElementById('wrongView'),
  result: document.getElementById('resultView')
};

const elems = {
  // Top Header
  logoBtn: document.getElementById('logoBtn'),
  navFreeDocsBtn: document.getElementById('navFreeDocsBtn'),
  navAllCoursesBtn: document.getElementById('navAllCoursesBtn'),
  wrongBookNavBtn: document.getElementById('wrongBookNavBtn'),
  theoryNavBtn: document.getElementById('theoryNavBtn'),
  navContactBtn: document.getElementById('navContactBtn'),
  wrongCountBadge: document.getElementById('wrongCountBadge'),
  soundToggleBtn: document.getElementById('soundToggleBtn'),
  audioBtnLabel: document.getElementById('audioBtnLabel'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),

  // Lobby Sub Filter & Hero Elements
  navSubjectSelector: document.getElementById('navSubjectSelector'),
  filterAllSubBtn: document.getElementById('filterAllSubBtn'),
  navSubCnxhkh: document.getElementById('navSubCnxhkh'),
  navSubHochiminh: document.getElementById('navSubHochiminh'),
  navSubStartup: document.getElementById('navSubStartup'),
  navSubLogistics: document.getElementById('navSubLogistics'),

  heroBadge: document.getElementById('heroBadge'),
  heroTitle: document.getElementById('heroTitle'),
  heroTitleGradient: document.getElementById('heroTitleGradient'),
  heroDesc: document.getElementById('heroDesc'),
  heroTotalQuestionsVal: document.getElementById('heroTotalQuestionsVal'),
  heroTotalExamsVal: document.getElementById('heroTotalExamsVal'),
  heroHighScoreVal: document.getElementById('heroHighScoreVal'),
  heroWrongCountVal: document.getElementById('heroWrongCountVal'),
  openTheoryBannerBtn: document.getElementById('openTheoryBannerBtn'),
  openWrongBannerBtn: document.getElementById('openWrongBannerBtn'),
  wrongBannerCount: document.getElementById('wrongBannerCount'),
  examSubjectLabel: document.getElementById('examSubjectLabel'),
  coursesCountText: document.getElementById('coursesCountText'),
  examsGridContainer: document.getElementById('examsGridContainer'),

  // Quiz Player Sidebar
  quizSidebar: document.getElementById('quizSidebar'),
  sidebarSubjectTitle: document.getElementById('sidebarSubjectTitle'),
  sidebarSubBadge: document.getElementById('sidebarSubBadge'),
  toggleSidebarBtn: document.getElementById('toggleSidebarBtn'),
  sidebarChevronIcon: document.getElementById('sidebarChevronIcon'),
  sidebarLessonsList: document.getElementById('sidebarLessonsList'),
  sidebarChangeSubjectBtn: document.getElementById('sidebarChangeSubjectBtn'),
  reopenSidebarBtn: document.getElementById('reopenSidebarBtn'),

  // Quiz Player Card & Options
  quizCard: document.getElementById('quizCard'),
  questionProgressText: document.getElementById('questionProgressText'),
  streakContainer: document.getElementById('streakContainer'),
  streakCount: document.getElementById('streakCount'),
  quizTimerBadge: document.getElementById('quizTimerBadge'),
  quizTimerCountdown: document.getElementById('quizTimerCountdown'),
  currentScore: document.getElementById('currentScore'),
  questionText: document.getElementById('questionText'),
  optionsGrid: document.getElementById('optionsGrid'),

  // Feedback & Explanations
  feedbackBanner: document.getElementById('feedbackBanner'),
  feedbackTitle: document.getElementById('feedbackTitle'),
  feedbackIcon: document.getElementById('feedbackIcon'),
  feedbackExplanation: document.getElementById('feedbackExplanation'),

  // Quiz Card Navigation
  prevQuestionBtn: document.getElementById('prevQuestionBtn'),
  showAnswerBtn: document.getElementById('showAnswerBtn'),
  nextQuestionBtn: document.getElementById('nextQuestionBtn'),

  // Question Palette Popover
  togglePaletteBtn: document.getElementById('togglePaletteBtn'),
  paletteChevron: document.getElementById('paletteChevron'),
  questionPalettePopover: document.getElementById('questionPalettePopover'),
  closePaletteBtn: document.getElementById('closePaletteBtn'),
  paletteGrid: document.getElementById('paletteGrid'),
  exitQuizFloatingBtn: document.getElementById('exitQuizFloatingBtn'),

  // Mode Selection Modal
  modeModal: document.getElementById('modeModal'),
  modalExamTitle: document.getElementById('modalExamTitle'),
  modalExamSubtitle: document.getElementById('modalExamSubtitle'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  confirmStartBtn: document.getElementById('confirmStartBtn'),
  modeCards: document.querySelectorAll('.mode-card'),

  // Theory View
  backToLobbyFromTheoryBtn: document.getElementById('backToLobbyFromTheoryBtn'),
  theorySubjectTabs: document.getElementById('theorySubjectTabs'),
  theoryTabCnxhkh: document.getElementById('theoryTabCnxhkh'),
  theoryTabHochiminh: document.getElementById('theoryTabHochiminh'),
  theoryTabStartup: document.getElementById('theoryTabStartup'),
  theoryTabLogistics: document.getElementById('theoryTabLogistics'),
  theoryViewTitle: document.getElementById('theoryViewTitle'),
  theoryViewSubtitle: document.getElementById('theoryViewSubtitle'),
  theorySearchInput: document.getElementById('theorySearchInput'),
  theorySidebar: document.getElementById('theorySidebar'),
  theoryContentBody: document.getElementById('theoryContentBody'),

  // Wrong View
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
  filterCnxhkhCount: document.getElementById('filterCnxhkhCount'),
  filterHochiminhCount: document.getElementById('filterHochiminhCount'),
  filterStartupCount: document.getElementById('filterStartupCount'),
  filterLogisticsCount: document.getElementById('filterLogisticsCount'),

  // Result View
  finalScoreVal: document.getElementById('finalScoreVal'),
  accuracyVal: document.getElementById('accuracyVal'),
  maxStreakVal: document.getElementById('maxStreakVal'),
  correctCountVal: document.getElementById('correctCountVal'),
  resultSubtitle: document.getElementById('resultSubtitle'),
  retryBtn: document.getElementById('retryBtn'),
  reviewBtn: document.getElementById('reviewBtn'),
  backToLobbyBtn: document.getElementById('backToLobbyBtn'),
  reviewContainer: document.getElementById('reviewContainer'),
  reviewList: document.getElementById('reviewList'),

  // New Upgrade 1: Flag, Notes & Print in Quiz
  historyNavBtn: document.getElementById('historyNavBtn'),
  importExamNavBtn: document.getElementById('importExamNavBtn'),
  flagQuestionBtn: document.getElementById('flagQuestionBtn'),
  flagBtnText: document.getElementById('flagBtnText'),
  toggleNoteBtn: document.getElementById('toggleNoteBtn'),
  printExamInQuizBtn: document.getElementById('printExamInQuizBtn'),
  printResultBtn: document.getElementById('printResultBtn'),
  questionNoteBox: document.getElementById('questionNoteBox'),
  closeNoteBoxBtn: document.getElementById('closeNoteBoxBtn'),
  questionNoteInput: document.getElementById('questionNoteInput'),
  saveNoteBtn: document.getElementById('saveNoteBtn'),
  savedNoteDisplay: document.getElementById('savedNoteDisplay'),

  // New Upgrade 2: History & Analytics Modal
  historyModal: document.getElementById('historyModal'),
  closeHistoryModalBtn: document.getElementById('closeHistoryModalBtn'),
  historyTabs: document.querySelectorAll('.history-tab-btn'),
  historyTabContent: document.getElementById('historyTabContent'),
  analyticsTabContent: document.getElementById('analyticsTabContent'),
  historyTotalCountText: document.getElementById('historyTotalCountText'),
  clearHistoryBtn: document.getElementById('clearHistoryBtn'),
  historyListContainer: document.getElementById('historyListContainer'),
  analyticsContentContainer: document.getElementById('analyticsContentContainer'),

  // New Upgrade 3: Quick Import Modal
  importExamModal: document.getElementById('importExamModal'),
  closeImportModalBtn: document.getElementById('closeImportModalBtn'),
  cancelImportBtn: document.getElementById('cancelImportBtn'),
  confirmImportBtn: document.getElementById('confirmImportBtn'),
  importSubjectSelect: document.getElementById('importSubjectSelect'),
  importExamTitleInput: document.getElementById('importExamTitleInput'),
  fillSampleExamBtn: document.getElementById('fillSampleExamBtn'),
  importExamTextarea: document.getElementById('importExamTextarea'),
  importParsedCountBadge: document.getElementById('importParsedCountBadge'),
  printExamContainer: document.getElementById('printExamContainer')
};

// ---------------------------------------------------------
// 4. INITIALIZATION & GLOBAL LISTENERS
// ---------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // 0. Load saved theme preference
  const savedTheme = localStorage.getItem('quiz_theme_dark');
  if (savedTheme === '1') {
    state.isThemeDark = true;
    document.body.classList.add('dark-theme');
    const icon = elems.themeToggleBtn ? elems.themeToggleBtn.querySelector('i') : null;
    if (icon) icon.className = 'fa-solid fa-sun';
  }

  // 1. Initial subject & lobby render
  selectSubject(state.currentSubjectId, false);
  updateWrongBadges();

  // 2. Setup Top Header Navigation
  if (elems.logoBtn) {
    elems.logoBtn.addEventListener('click', () => switchView('lobby'));
  }
  if (elems.navAllCoursesBtn) {
    elems.navAllCoursesBtn.addEventListener('click', () => {
      setNavActive(elems.navAllCoursesBtn);
      state.currentFilterSubject = 'all';
      updateFilterPills();
      renderCoursesGrid();
      switchView('lobby');
    });
  }
  if (elems.wrongBookNavBtn) {
    elems.wrongBookNavBtn.addEventListener('click', () => {
      setNavActive(elems.wrongBookNavBtn);
      openWrongView();
    });
  }
  if (elems.theoryNavBtn) {
    elems.theoryNavBtn.addEventListener('click', () => {
      setNavActive(elems.theoryNavBtn);
      openTheoryView();
    });
  }
  if (elems.navFreeDocsBtn) {
    elems.navFreeDocsBtn.addEventListener('click', () => {
      setNavActive(elems.theoryNavBtn);
      openTheoryView();
    });
  }
  if (elems.navContactBtn) {
    elems.navContactBtn.addEventListener('click', () => {
      alert("ExamMaster - Nền tảng ôn thi đại học và trắc nghiệm chuyên nghiệp. Liên hệ hỗ trợ: support@exammaster.vn");
    });
  }

  // 3. Audio & Theme Controls
  if (elems.soundToggleBtn) {
    elems.soundToggleBtn.addEventListener('click', toggleAudioStudy);
  }
  if (elems.themeToggleBtn) {
    elems.themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // 4. Subject Filter Pills on Lobby
  document.querySelectorAll('.sub-filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const sub = btn.dataset.subject;
      state.currentFilterSubject = sub;
      updateFilterPills();

      if (sub !== 'all') {
        selectSubject(sub, false);
      } else {
        updateHeroBanner();
        renderCoursesGrid();
      }
    });
  });

  // 5. Hero Action Buttons
  if (elems.openTheoryBannerBtn) {
    elems.openTheoryBannerBtn.addEventListener('click', openTheoryView);
  }
  if (elems.openWrongBannerBtn) {
    elems.openWrongBannerBtn.addEventListener('click', openWrongView);
  }

  // 6. Quiz Navigation & Options Controls
  if (elems.prevQuestionBtn) {
    elems.prevQuestionBtn.addEventListener('click', handlePrevQuestion);
  }
  if (elems.showAnswerBtn) {
    elems.showAnswerBtn.addEventListener('click', handleShowAnswer);
  }
  if (elems.nextQuestionBtn) {
    elems.nextQuestionBtn.addEventListener('click', handleNextQuestion);
  }

  // Setup Radio Option Click Delegation
  if (elems.optionsGrid) {
    elems.optionsGrid.querySelectorAll('.radio-option-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.index, 10);
        selectOption(idx);
      });
    });
  }

  // 7. Palette Popover Toggle & Close
  if (elems.togglePaletteBtn) {
    elems.togglePaletteBtn.addEventListener('click', togglePalettePopover);
  }
  if (elems.closePaletteBtn) {
    elems.closePaletteBtn.addEventListener('click', closePalettePopover);
  }
  // Close palette when clicking outside
  document.addEventListener('click', (e) => {
    if (!elems.questionPalettePopover || elems.questionPalettePopover.classList.contains('hidden')) return;
    const isClickInsidePopover = elems.questionPalettePopover.contains(e.target);
    const isClickOnToggleBtn = elems.togglePaletteBtn && elems.togglePaletteBtn.contains(e.target);
    if (!isClickInsidePopover && !isClickOnToggleBtn) {
      closePalettePopover();
    }
  });
  if (elems.exitQuizFloatingBtn) {
    elems.exitQuizFloatingBtn.addEventListener('click', () => {
      if (confirm("Bạn có muốn thoát bài thi để về trang danh sách khóa học không?")) {
        clearInterval(state.timerInterval);
        switchView('lobby');
      }
    });
  }

  // 8. Quiz Sidebar Controls
  if (elems.toggleSidebarBtn) {
    elems.toggleSidebarBtn.addEventListener('click', toggleQuizSidebar);
  }
  if (elems.reopenSidebarBtn) {
    elems.reopenSidebarBtn.addEventListener('click', toggleQuizSidebar);
  }
  if (elems.sidebarChangeSubjectBtn) {
    elems.sidebarChangeSubjectBtn.addEventListener('click', () => {
      clearInterval(state.timerInterval);
      switchView('lobby');
    });
  }

  // 9. Mode Selection Modal
  if (elems.closeModalBtn) {
    elems.closeModalBtn.addEventListener('click', closeModeModal);
  }
  if (elems.confirmStartBtn) {
    elems.confirmStartBtn.addEventListener('click', () => {
      closeModeModal();
      startQuiz(state.selectedExamId, state.selectedMode);
    });
  }
  elems.modeCards.forEach(card => {
    card.addEventListener('click', () => {
      elems.modeCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.selectedMode = card.dataset.mode;
    });
  });

  // 10. Theory View Controls
  if (elems.backToLobbyFromTheoryBtn) {
    elems.backToLobbyFromTheoryBtn.addEventListener('click', () => switchView('lobby'));
  }
  if (elems.theorySearchInput) {
    elems.theorySearchInput.addEventListener('input', handleTheorySearch);
  }
  document.querySelectorAll('.theory-sub-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const sub = tab.dataset.subject;
      selectSubject(sub, true, true);
    });
  });

  // 11. Wrong View Controls
  if (elems.backToLobbyFromWrongBtn) {
    elems.backToLobbyFromWrongBtn.addEventListener('click', () => switchView('lobby'));
  }
  if (elems.wrongEmptyLobbyBtn) {
    elems.wrongEmptyLobbyBtn.addEventListener('click', () => switchView('lobby'));
  }
  if (elems.clearAllWrongBtn) {
    elems.clearAllWrongBtn.addEventListener('click', clearAllWrongQuestions);
  }
  if (elems.startWrongQuizFromViewBtn) {
    elems.startWrongQuizFromViewBtn.addEventListener('click', () => openModeModal('wrong_book'));
  }
  if (elems.wrongSearchInput) {
    elems.wrongSearchInput.addEventListener('input', renderWrongQuestionsList);
  }

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

  // 12. Result View Controls
  if (elems.retryBtn) {
    elems.retryBtn.addEventListener('click', () => {
      startQuiz(state.selectedExamId, state.selectedMode);
    });
  }
  if (elems.reviewBtn) {
    elems.reviewBtn.addEventListener('click', toggleReview);
  }
  if (elems.printResultBtn) {
    elems.printResultBtn.addEventListener('click', () => printCurrentExam(true));
  }
  if (elems.backToLobbyBtn) {
    elems.backToLobbyBtn.addEventListener('click', () => switchView('lobby'));
  }

  // 13. Upgrade 1 Controls: Flag, Note, Print in Quiz
  if (elems.flagQuestionBtn) {
    elems.flagQuestionBtn.addEventListener('click', toggleFlagCurrentQuestion);
  }
  if (elems.toggleNoteBtn) {
    elems.toggleNoteBtn.addEventListener('click', toggleNoteBox);
  }
  if (elems.closeNoteBoxBtn) {
    elems.closeNoteBoxBtn.addEventListener('click', toggleNoteBox);
  }
  if (elems.saveNoteBtn) {
    elems.saveNoteBtn.addEventListener('click', saveCurrentQuestionNote);
  }
  if (elems.printExamInQuizBtn) {
    elems.printExamInQuizBtn.addEventListener('click', () => printCurrentExam(false));
  }

  // 14. Upgrade 2 Controls: History & Analytics Modal
  if (elems.historyNavBtn) {
    elems.historyNavBtn.addEventListener('click', openHistoryModal);
  }
  if (elems.closeHistoryModalBtn) {
    elems.closeHistoryModalBtn.addEventListener('click', closeHistoryModal);
  }
  if (elems.clearHistoryBtn) {
    elems.clearHistoryBtn.addEventListener('click', clearExamHistory);
  }
  elems.historyTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      elems.historyTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const tabName = tab.dataset.tab;
      if (elems.historyTabContent) elems.historyTabContent.classList.toggle('hidden', tabName !== 'history');
      if (elems.analyticsTabContent) elems.analyticsTabContent.classList.toggle('hidden', tabName !== 'analytics');
      if (tabName === 'analytics') renderAnalyticsBreakdown();
    });
  });

  // 15. Upgrade 3 Controls: Quick Import Modal
  if (elems.importExamNavBtn) {
    elems.importExamNavBtn.addEventListener('click', openImportModal);
  }
  if (elems.closeImportModalBtn) {
    elems.closeImportModalBtn.addEventListener('click', closeImportModal);
  }
  if (elems.cancelImportBtn) {
    elems.cancelImportBtn.addEventListener('click', closeImportModal);
  }
  if (elems.fillSampleExamBtn) {
    elems.fillSampleExamBtn.addEventListener('click', fillSampleImportExam);
  }
  if (elems.importExamTextarea) {
    elems.importExamTextarea.addEventListener('input', updateParsedQuestionsBadge);
  }
  if (elems.confirmImportBtn) {
    elems.confirmImportBtn.addEventListener('click', handleConfirmImport);
  }

  // Keyboard shortcut listeners (A, B, C, D, Left, Right, Space)
  document.addEventListener('keydown', handleGlobalKeydown);
});

function setNavActive(activeBtn) {
  document.querySelectorAll('.nav-links .nav-link-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (activeBtn) activeBtn.classList.add('active');
}

function updateFilterPills() {
  document.querySelectorAll('.sub-filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.subject === state.currentFilterSubject);
  });
}

function toggleAudioStudy() {
  const isPlaying = sounds.toggleStudyMusic();
  state.isMusicPlaying = isPlaying;

  if (elems.audioBtnLabel) {
    elems.audioBtnLabel.textContent = isPlaying ? "Đang phát nhạc học bài ♪" : "Nghe nhạc khi học bài?";
  }
  if (elems.soundToggleBtn) {
    elems.soundToggleBtn.classList.toggle('playing', isPlaying);
  }
}

function toggleTheme() {
  state.isThemeDark = !state.isThemeDark;
  document.body.classList.toggle('dark-theme', state.isThemeDark);
  localStorage.setItem('quiz_theme_dark', state.isThemeDark ? '1' : '0');
  const icon = elems.themeToggleBtn.querySelector('i');
  if (icon) {
    icon.className = state.isThemeDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

// ---------------------------------------------------------
// 5. SUBJECT & COURSES LOBBY RENDERING
// ---------------------------------------------------------
function updateHeroBanner() {
  if (state.currentFilterSubject === 'all') {
    if (elems.heroBadge) {
      elems.heroBadge.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> Tất cả học phần đại học`;
    }
    if (elems.heroTitle) {
      elems.heroTitle.innerHTML = `Kho Đề Thi & Trắc Nghiệm <span class="gradient-text" id="heroTitleGradient">Toàn Diện</span>`;
    }
    if (elems.heroDesc) {
      elems.heroDesc.textContent = `Hệ thống ôn luyện trắc nghiệm chất lượng cao, bao gồm đầy đủ các môn: Triết học & CNXHKH, Tư tưởng Hồ Chí Minh, Khởi nghiệp kinh doanh, Tiếng Anh chuyên ngành Logistics.`;
    }

    let totalQuestions = 0;
    let totalExams = 0;
    let maxScoreAll = 0;
    Object.keys(SUBJECTS_DATA).forEach(subId => {
      const s = SUBJECTS_DATA[subId];
      totalQuestions += s.totalQuestionsCount || 0;
      totalExams += Object.keys(s.exams).length;
      const subScores = state.highScores[subId] || {};
      const subMax = Math.max(0, ...Object.values(subScores));
      if (subMax > maxScoreAll) maxScoreAll = subMax;
    });

    if (elems.heroTotalQuestionsVal) elems.heroTotalQuestionsVal.textContent = `${totalQuestions} câu`;
    if (elems.heroTotalExamsVal) elems.heroTotalExamsVal.textContent = `${totalExams} bộ đề`;
    if (elems.heroHighScoreVal) elems.heroHighScoreVal.textContent = `${maxScoreAll.toLocaleString('vi-VN')} đ`;
    if (elems.heroWrongCountVal) elems.heroWrongCountVal.textContent = `${state.wrongQuestions.length} câu`;
    if (elems.examSubjectLabel) elems.examSubjectLabel.textContent = `Tất cả học phần (${totalExams} bộ đề)`;
  } else {
    const sub = SUBJECTS_DATA[state.currentSubjectId];
    if (!sub) return;

    if (elems.heroBadge) {
      elems.heroBadge.innerHTML = `<i class="${sub.icon}"></i> Học Phần: ${sub.shortName} (Giữa Kỳ)`;
    }
    if (elems.heroTitle) {
      elems.heroTitle.innerHTML = `${sub.heroTitle} <span class="gradient-text" id="heroTitleGradient">${sub.heroSubtitle}</span>`;
    }
    if (elems.heroDesc) {
      elems.heroDesc.textContent = sub.heroDesc;
    }

    if (elems.heroTotalQuestionsVal) {
      elems.heroTotalQuestionsVal.textContent = `${sub.totalQuestionsCount} câu`;
    }
    if (elems.heroTotalExamsVal) {
      elems.heroTotalExamsVal.textContent = `${Object.keys(sub.exams).length} bộ đề`;
    }
    if (elems.heroHighScoreVal) {
      const subScores = state.highScores[state.currentSubjectId] || {};
      const maxScore = Math.max(0, ...Object.values(subScores));
      elems.heroHighScoreVal.textContent = `${maxScore.toLocaleString('vi-VN')} đ`;
    }
    if (elems.heroWrongCountVal) {
      const wrongCount = state.wrongQuestions.filter(q => (q.subjectId || 'cnxhkh') === state.currentSubjectId).length;
      elems.heroWrongCountVal.textContent = `${wrongCount} câu`;
    }
    if (elems.examSubjectLabel) {
      elems.examSubjectLabel.textContent = sub.name;
    }
  }
}

function selectSubject(subjectId, shouldScroll = false, keepInTheory = false) {
  if (!SUBJECTS_DATA[subjectId]) subjectId = 'cnxhkh';

  state.currentSubjectId = subjectId;
  localStorage.setItem('quiz_current_subject', subjectId);
  const sub = SUBJECTS_DATA[subjectId];

  // 1. Update Hero Banner
  updateHeroBanner();

  // 3. Render Course Cards in Lobby Grid
  renderCoursesGrid();

  // 4. Update Theory View for subject
  updateTheoryViewForSubject();

  // 5. Update Wrong Badges
  updateWrongBadges();

  // 6. Update Sidebar in Quiz
  updateSidebarInfo();
}

// Renders course cards formatted identically to Screenshot 1
function renderCoursesGrid() {
  if (!elems.examsGridContainer) return;
  elems.examsGridContainer.innerHTML = '';

  const subFilter = state.currentFilterSubject;
  const subjectsToRender = (subFilter === 'all') 
    ? Object.keys(SUBJECTS_DATA) 
    : [state.currentSubjectId];

  let totalCardCount = 0;

  subjectsToRender.forEach(subId => {
    const sub = SUBJECTS_DATA[subId];
    if (!sub) return;

    const exams = sub.exams;
    const subHighScores = state.highScores[subId] || {};

    Object.keys(exams).forEach(examKey => {
      totalCardCount++;
      const exam = exams[examKey];
      const highScore = subHighScores[exam.id] || 0;

      const card = document.createElement('div');
      card.className = 'course-card';
      card.dataset.examId = exam.id;
      card.dataset.subjectId = subId;

      card.innerHTML = `
        <div class="course-card-thumb">
          <div class="thumb-illustration">
            <div class="thumb-wood-block">
              <span class="thumb-text-sub">TIME TO</span>
              <span class="thumb-text-main">STUDY</span>
            </div>
            <span class="thumb-badge">
              <i class="fa-solid fa-book-open"></i> Quiz Ôn Tập
            </span>
          </div>
        </div>

        <div class="course-card-body">
          <h3 class="course-title" title="${exam.title}">${exam.title}</h3>
          <p class="course-desc">
            ${exam.description || `Làm thử miễn phí không giới hạn • ${exam.questions.length} câu`}
          </p>
        </div>

        <div class="course-card-footer">
          <span class="course-price">Miễn phí</span>
          <button class="btn-start-course" type="button">
            <span>Bắt đầu</span>
          </button>
        </div>
      `;

      card.addEventListener('click', (e) => {
        state.currentSubjectId = subId;
        updateSidebarInfo();
        openModeModal(exam.id);
      });

      elems.examsGridContainer.appendChild(card);
    });
  });

  if (elems.coursesCountText) {
    elems.coursesCountText.textContent = `Hiển thị ${totalCardCount} bộ đề trắc nghiệm chuẩn`;
  }
}

// ---------------------------------------------------------
// 6. QUIZ SIDEBAR MANAGEMENT (Screenshot 2)
// ---------------------------------------------------------
function updateSidebarInfo() {
  const sub = SUBJECTS_DATA[state.currentSubjectId];
  if (!sub) return;

  if (elems.sidebarSubjectTitle) {
    elems.sidebarSubjectTitle.textContent = sub.name.toUpperCase();
  }
  if (elems.sidebarSubBadge) {
    elems.sidebarSubBadge.textContent = "HỌC PHẦN";
  }

  renderSidebarLessons();
}

function renderSidebarLessons() {
  if (!elems.sidebarLessonsList) return;
  elems.sidebarLessonsList.innerHTML = '';

  const sub = SUBJECTS_DATA[state.currentSubjectId];
  if (!sub) return;

  const exams = sub.exams;
  Object.keys(exams).forEach(examKey => {
    const exam = exams[examKey];
    const isCurrent = (state.selectedExamId === exam.id);

    const item = document.createElement('div');
    item.className = `sidebar-lesson-item ${isCurrent ? 'active' : ''}`;
    item.dataset.examId = exam.id;

    item.innerHTML = `
      <i class="fa-regular fa-circle-question"></i>
      <span>${exam.title}</span>
    `;

    item.addEventListener('click', () => {
      // If quiz is currently in progress, confirm before switching exams
      if (views.quiz && views.quiz.classList.contains('active') && state.selectedExamId !== exam.id) {
        const confirmed = confirm("Bạn đang làm dở bài thi, bạn có chắc muốn chuyển sang bộ đề khác?");
        if (!confirmed) return;
        clearInterval(state.timerInterval);
      }
      elems.sidebarLessonsList.querySelectorAll('.sidebar-lesson-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      openModeModal(exam.id);
    });

    elems.sidebarLessonsList.appendChild(item);
  });
}

function toggleQuizSidebar() {
  if (!elems.quizSidebar) return;
  const isCollapsed = elems.quizSidebar.classList.toggle('collapsed');
  if (elems.sidebarChevronIcon) {
    elems.sidebarChevronIcon.className = isCollapsed ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left';
  }
  if (elems.reopenSidebarBtn) {
    elems.reopenSidebarBtn.classList.toggle('hidden', !isCollapsed);
  }
}

// ---------------------------------------------------------
// 7. QUESTION PALETTE POPOVER (Screenshot 3)
// ---------------------------------------------------------
function togglePalettePopover() {
  if (!elems.questionPalettePopover) return;
  const isHidden = elems.questionPalettePopover.classList.contains('hidden');
  if (isHidden) {
    renderQuestionPalette();
    elems.questionPalettePopover.classList.remove('hidden');
    if (elems.paletteChevron) elems.paletteChevron.className = 'fa-solid fa-chevron-down';
  } else {
    closePalettePopover();
  }
}

function closePalettePopover() {
  if (elems.questionPalettePopover) {
    elems.questionPalettePopover.classList.add('hidden');
  }
  if (elems.paletteChevron) {
    elems.paletteChevron.className = 'fa-solid fa-chevron-up';
  }
}

function renderQuestionPalette() {
  if (!elems.paletteGrid) return;
  elems.paletteGrid.innerHTML = '';

  const total = state.questionQueue.length;

  for (let i = 0; i < total; i++) {
    const btn = document.createElement('button');
    btn.className = 'palette-num-btn';
    btn.textContent = i + 1;

    const recorded = state.recordedAnswers[i];
    const isFlagged = state.flaggedQuestionIndices.has(i);

    if (isFlagged) {
      btn.classList.add('flagged');
    }

    if (i === state.currentQueueIndex) {
      btn.classList.add('current');
    } else if (recorded && recorded.answered) {
      if (state.selectedMode === 'exam') {
        btn.classList.add('answered');
      } else {
        btn.classList.add(recorded.isCorrect ? 'correct' : 'wrong');
      }
    } else {
      btn.classList.add('unanswered');
    }

    btn.addEventListener('click', () => {
      closePalettePopover();
      jumpToQuestion(i);
    });

    elems.paletteGrid.appendChild(btn);
  }
}

function jumpToQuestion(index) {
  if (index < 0 || index >= state.questionQueue.length) return;
  state.currentQueueIndex = index;
  renderQuestion();
}

// ---------------------------------------------------------
// 8. QUIZ EXECUTION ENGINE (Screenshot 2 & 3)
// ---------------------------------------------------------
function openModeModal(examId) {
  state.selectedExamId = examId;
  const sub = SUBJECTS_DATA[state.currentSubjectId];
  const exam = examId === 'wrong_book' ? getWrongExamData() : sub.exams[examId];

  if (!exam || !exam.questions || exam.questions.length === 0) {
    alert("Sổ tay câu sai đang trống! Hãy làm các bộ đề thi để tích lũy câu hỏi cần củng cố kiến thức.");
    return;
  }

  if (elems.modalExamTitle) {
    elems.modalExamTitle.textContent = exam.title;
  }
  if (elems.modalExamSubtitle) {
    elems.modalExamSubtitle.textContent = `Học phần: ${sub.name} • ${exam.questions.length} câu hỏi`;
  }

  if (elems.modeModal) {
    elems.modeModal.classList.remove('hidden');
  }
}

function closeModeModal() {
  if (elems.modeModal) {
    elems.modeModal.classList.add('hidden');
  }
}

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
  state.flaggedQuestionIndices.clear();
  state.totalAttempts = 0;
  state.score = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.isAnswered = false;

  // Initialize recorded answers array
  state.recordedAnswers = state.questionQueue.map(() => ({
    answered: false,
    selectedIndex: null,
    isCorrect: null,
    revealed: false
  }));

  if (elems.currentScore) elems.currentScore.textContent = '0';
  if (elems.streakCount) elems.streakCount.textContent = '0';

  // In Exam Simulation Mode: Hide Show Answer button, start overall countdown
  if (state.selectedMode === 'exam') {
    if (elems.showAnswerBtn) elems.showAnswerBtn.classList.add('hidden');
    state.examTotalSeconds = Math.max(15 * 60, state.questionQueue.length * 45); // 45s/câu
    state.examTotalRemaining = state.examTotalSeconds;
    startExamTotalTimer();
  } else {
    if (elems.showAnswerBtn) elems.showAnswerBtn.classList.remove('hidden');
  }

  // Auto collapse sidebar on mobile / small screens to give full width to questions
  if (window.innerWidth <= 860 && elems.quizSidebar && !elems.quizSidebar.classList.contains('collapsed')) {
    elems.quizSidebar.classList.add('collapsed');
    if (elems.sidebarChevronIcon) elems.sidebarChevronIcon.className = 'fa-solid fa-chevron-right';
  }

  // Highlight active lesson in sidebar
  renderSidebarLessons();
  if (elems.reopenSidebarBtn && elems.quizSidebar) {
    const isCollapsed = elems.quizSidebar.classList.contains('collapsed');
    elems.reopenSidebarBtn.classList.toggle('hidden', !isCollapsed);
  }

  switchView('quiz');
  closePalettePopover();
  renderQuestion();
}

function startExamTotalTimer() {
  clearInterval(state.timerInterval);
  updateExamTimerDisplay();

  state.timerInterval = setInterval(() => {
    state.examTotalRemaining--;
    updateExamTimerDisplay();

    if (state.examTotalRemaining <= 0) {
      clearInterval(state.timerInterval);
      alert("Đã hết giờ làm bài thi thử! Hệ thống sẽ tự động nộp bài và chấm điểm.");
      finishQuiz();
    }
  }, 1000);
}

function updateExamTimerDisplay() {
  if (!elems.quizTimerCountdown) return;
  const m = Math.floor(Math.max(0, state.examTotalRemaining) / 60);
  const s = Math.max(0, state.examTotalRemaining) % 60;
  elems.quizTimerCountdown.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function renderQuestion() {
  if (state.selectedMode !== 'exam') {
    clearInterval(state.timerInterval);
  }
  const q = state.questionQueue[state.currentQueueIndex];
  const total = state.questionQueue.length;
  const recorded = state.recordedAnswers[state.currentQueueIndex];

  // 1. Update Progress Pill (Câu 1 / 30)
  if (elems.questionProgressText) {
    elems.questionProgressText.textContent = `Câu ${state.currentQueueIndex + 1} / ${total}`;
  }

  // 2. Update Question Title
  if (elems.questionText) {
    elems.questionText.textContent = q.question;
    renderMath(elems.questionText);
  }

  // 3. Update Flag Button state
  const isFlagged = state.flaggedQuestionIndices.has(state.currentQueueIndex);
  if (elems.flagQuestionBtn) {
    elems.flagQuestionBtn.classList.toggle('flagged', isFlagged);
  }
  if (elems.flagBtnText) {
    elems.flagBtnText.textContent = isFlagged ? 'Đã gắn cờ' : 'Gắn cờ';
  }

  // 4. Update Personal Note display
  const cleanQ = getCleanQuestionText(q.question);
  const existingNote = state.personalNotes[cleanQ] || '';
  if (elems.questionNoteInput) elems.questionNoteInput.value = existingNote;
  if (elems.savedNoteDisplay) {
    if (existingNote) {
      elems.savedNoteDisplay.innerHTML = `<i class="fa-solid fa-bookmark"></i> <strong>Ghi chú:</strong> ${existingNote}`;
      elems.savedNoteDisplay.classList.remove('hidden');
    } else {
      elems.savedNoteDisplay.classList.add('hidden');
    }
  }

  // 5. Render Radio Options
  const optionItems = elems.optionsGrid.querySelectorAll('.radio-option-item');
  optionItems.forEach((item, idx) => {
    item.className = 'radio-option-item';
    const textSpan = item.querySelector('.option-text');
    if (textSpan) textSpan.textContent = q.options[idx] || '';

    if (recorded && recorded.answered) {
      if (state.selectedMode === 'exam') {
        // In Exam Mode: only highlight selected, do not reveal correct/wrong
        if (idx === recorded.selectedIndex) {
          item.classList.add('selected');
        }
      } else {
        // Standard / Mastery Mode: reveal correct/wrong
        if (idx === q.correctIndex) {
          item.classList.add('correct');
        } else if (idx === recorded.selectedIndex) {
          item.classList.add('wrong');
        }
      }
    }
  });
  renderMath(elems.optionsGrid);

  // 6. Update Explanation Feedback Panel (Only in non-exam mode)
  if (state.selectedMode !== 'exam' && recorded && (recorded.answered || recorded.revealed)) {
    showExplanation(recorded.isCorrect, q.explanation);
  } else {
    if (elems.feedbackBanner) elems.feedbackBanner.classList.add('hidden');
  }

  // 7. Update Back button state
  if (elems.prevQuestionBtn) {
    elems.prevQuestionBtn.disabled = (state.currentQueueIndex === 0);
    elems.prevQuestionBtn.style.opacity = (state.currentQueueIndex === 0) ? '0.45' : '1';
  }

  // 8. Update Next button text
  if (elems.nextQuestionBtn) {
    const isLast = (state.currentQueueIndex === total - 1);
    elems.nextQuestionBtn.innerHTML = isLast 
      ? `<span>Nộp bài</span> <i class="fa-solid fa-flag-checkered"></i>`
      : `<span>Tiếp theo</span> <i class="fa-solid fa-arrow-right"></i>`;
  }

  // 9. Start question timer (only if not in Exam mode)
  if (state.selectedMode !== 'exam') {
    if (!recorded || !recorded.answered) {
      startQuestionTimer();
    } else {
      if (elems.quizTimerCountdown) elems.quizTimerCountdown.textContent = '0s';
    }
  }
}

function startQuestionTimer() {
  clearInterval(state.timerInterval);
  const duration = state.currentExam.timePerQuestion || 25;
  let remaining = duration;

  if (elems.quizTimerCountdown) {
    elems.quizTimerCountdown.textContent = `${remaining}s`;
  }

  state.timerInterval = setInterval(() => {
    remaining--;
    if (elems.quizTimerCountdown) {
      elems.quizTimerCountdown.textContent = `${Math.max(0, remaining)}s`;
    }

    if (remaining <= 0) {
      clearInterval(state.timerInterval);
      const recorded = state.recordedAnswers[state.currentQueueIndex];
      if (!recorded || !recorded.answered) {
        handleTimeout();
      }
    }
  }, 1000);
}

function selectOption(selectedIndex) {
  const recorded = state.recordedAnswers[state.currentQueueIndex];
  const q = state.questionQueue[state.currentQueueIndex];

  // In Exam mode: allow changing answer freely before submit
  if (state.selectedMode === 'exam') {
    state.recordedAnswers[state.currentQueueIndex] = {
      answered: true,
      selectedIndex: selectedIndex,
      isCorrect: null, // will be evaluated at finish
      revealed: false
    };

    const optionItems = elems.optionsGrid.querySelectorAll('.radio-option-item');
    optionItems.forEach((item, idx) => {
      item.classList.toggle('selected', idx === selectedIndex);
    });

    if (elems.questionPalettePopover && !elems.questionPalettePopover.classList.contains('hidden')) {
      renderQuestionPalette();
    }
    return;
  }

  // Standard & Mastery Mode logic:
  if (recorded && recorded.answered) return; // Prevent re-clicking once answered

  clearInterval(state.timerInterval);
  state.totalAttempts++;

  const isCorrect = (selectedIndex === q.correctIndex);

  // Record user answer
  state.recordedAnswers[state.currentQueueIndex] = {
    answered: true,
    selectedIndex: selectedIndex,
    isCorrect: isCorrect,
    revealed: true
  };

  const optionItems = elems.optionsGrid.querySelectorAll('.radio-option-item');
  optionItems.forEach((item, idx) => {
    if (idx === q.correctIndex) {
      item.classList.add('correct');
    } else if (idx === selectedIndex) {
      item.classList.add('wrong');
    }
  });

  if (isCorrect) {
    state.streak++;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;
    state.masteredIds.add(q.id);

    const points = 1000 + Math.min(state.streak * 100, 500);
    state.score += points;
    sounds.playCorrect();

    if (state.streak >= 3 && window.confetti) {
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.85 } });
    }

    // Auto resolve from wrong notebook if currently practicing wrong book
    if (state.selectedExamId === 'wrong_book') {
      const cleanQ = getCleanQuestionText(q.question);
      removeWrongQuestion(cleanQ, false);
    }
  } else {
    state.streak = 0;
    sounds.playWrong();

    // Save to mistake notebook
    saveWrongQuestion(q, selectedIndex);

    // If Mastery mode, append to end of queue to re-test
    if (state.selectedMode === 'mastery') {
      state.questionQueue.push(q);
      state.recordedAnswers.push({ answered: false, selectedIndex: null, isCorrect: null, revealed: false });
    }
  }

  if (elems.currentScore) elems.currentScore.textContent = state.score;
  if (elems.streakCount) elems.streakCount.textContent = state.streak;

  showExplanation(isCorrect, q.explanation);

  // Update palette if open
  if (elems.questionPalettePopover && !elems.questionPalettePopover.classList.contains('hidden')) {
    renderQuestionPalette();
  }
}

function handleShowAnswer() {
  if (state.selectedMode === 'exam') return; // Not available in exam mode

  const q = state.questionQueue[state.currentQueueIndex];
  const recorded = state.recordedAnswers[state.currentQueueIndex];

  // If already answered, do nothing extra
  if (recorded && recorded.answered) return;

  // Stop the timer
  clearInterval(state.timerInterval);
  if (elems.quizTimerCountdown) elems.quizTimerCountdown.textContent = '0s';

  // Mark as answered (user chose to reveal without selecting)
  state.totalAttempts++;
  state.streak = 0;
  if (elems.streakCount) elems.streakCount.textContent = '0';

  state.recordedAnswers[state.currentQueueIndex] = {
    answered: true,
    selectedIndex: -1,
    isCorrect: false,
    revealed: true
  };

  // Save to wrong notebook
  saveWrongQuestion(q, -1);

  // If Mastery mode, re-queue this question
  if (state.selectedMode === 'mastery') {
    state.questionQueue.push(q);
    state.recordedAnswers.push({ answered: false, selectedIndex: null, isCorrect: null, revealed: false });
  }

  // Highlight correct answer in green
  const optionItems = elems.optionsGrid.querySelectorAll('.radio-option-item');
  optionItems.forEach((item, idx) => {
    if (idx === q.correctIndex) {
      item.classList.add('correct');
    }
  });

  showExplanation(false, `Bạn đã xem đáp án mà chưa tự trả lời. ${q.explanation}`);

  // Update palette if open
  if (elems.questionPalettePopover && !elems.questionPalettePopover.classList.contains('hidden')) {
    renderQuestionPalette();
  }
}

function showExplanation(isCorrect, explanationText) {
  if (!elems.feedbackBanner) return;

  if (elems.feedbackTitle) {
    elems.feedbackTitle.innerHTML = isCorrect 
      ? `<i class="fa-solid fa-circle-check" style="color: var(--success);"></i> <span>Chính xác! Lời giải chi tiết</span>`
      : `<i class="fa-solid fa-circle-xmark" style="color: var(--danger);"></i> <span>Chưa chính xác! Lời giải chi tiết</span>`;
  }

  if (elems.feedbackExplanation) {
    elems.feedbackExplanation.textContent = explanationText;
    renderMath(elems.feedbackExplanation);
  }

  elems.feedbackBanner.classList.remove('hidden');
}

function handleTimeout() {
  const q = state.questionQueue[state.currentQueueIndex];
  state.streak = 0;
  if (elems.streakCount) elems.streakCount.textContent = '0';
  sounds.playWrong();

  state.recordedAnswers[state.currentQueueIndex] = {
    answered: true,
    selectedIndex: -1,
    isCorrect: false,
    revealed: true
  };

  saveWrongQuestion(q, -1);

  if (state.selectedMode === 'mastery') {
    state.questionQueue.push(q);
    state.recordedAnswers.push({ answered: false, selectedIndex: null, isCorrect: null, revealed: false });
  }

  // Highlight correct answer
  const optionItems = elems.optionsGrid.querySelectorAll('.radio-option-item');
  optionItems.forEach((item, idx) => {
    if (idx === q.correctIndex) {
      item.classList.add('correct');
    }
  });

  showExplanation(false, `Hết giờ làm câu hỏi này! ${q.explanation}`);
}

function handlePrevQuestion() {
  if (state.currentQueueIndex > 0) {
    state.currentQueueIndex--;
    renderQuestion();
  }
}

function handleNextQuestion() {
  const total = state.questionQueue.length;

  if (state.currentQueueIndex < total - 1) {
    state.currentQueueIndex++;
    renderQuestion();
  } else {
    // Last question: confirm before finishing if there are unanswered questions
    const unanswered = state.recordedAnswers.filter(a => !a.answered).length;
    if (unanswered > 0) {
      if (!confirm(`Bạn còn ${unanswered} câu chưa trả lời. Bạn có chắc muốn nộp bài?`)) return;
    }
    finishQuiz();
  }
}

// Global keyboard navigation
function handleGlobalKeydown(e) {
  if (!views.quiz.classList.contains('active')) return;

  // Don't fire shortcuts when typing in an input/textarea
  const tag = document.activeElement ? document.activeElement.tagName : '';
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

  // Don't fire shortcuts when mode modal or other modals are open
  if (elems.modeModal && !elems.modeModal.classList.contains('hidden')) return;
  if (elems.historyModal && !elems.historyModal.classList.contains('hidden')) return;
  if (elems.importExamModal && !elems.importExamModal.classList.contains('hidden')) return;

  const key = e.key.toLowerCase();

  if (key === 'a' || key === '1') selectOption(0);
  else if (key === 'b' || key === '2') selectOption(1);
  else if (key === 'c' || key === '3') selectOption(2);
  else if (key === 'd' || key === '4') selectOption(3);
  else if (key === 'f') toggleFlagCurrentQuestion();
  else if (key === 'arrowleft') handlePrevQuestion();
  else if (key === 'arrowright') handleNextQuestion();
  else if (key === ' ') {
    e.preventDefault();
    handleNextQuestion();
  }
}

// ---------------------------------------------------------
// 9. RESULT SUMMARY, REVIEW & ADVANCED ACTIONS
// ---------------------------------------------------------
function finishQuiz() {
  clearInterval(state.timerInterval);
  sounds.playFinish();

  const total = state.questionQueue.length;
  const sub = SUBJECTS_DATA[state.currentSubjectId];

  // In Exam Simulation Mode: Evaluate all answers now
  if (state.selectedMode === 'exam') {
    state.score = 0;
    state.streak = 0;
    state.maxStreak = 0;

    state.questionQueue.forEach((q, idx) => {
      const rec = state.recordedAnswers[idx];
      const isCorrect = (rec && rec.answered && rec.selectedIndex === q.correctIndex);
      
      if (rec) {
        rec.isCorrect = isCorrect;
        rec.revealed = true;
      }

      if (isCorrect) {
        state.streak++;
        if (state.streak > state.maxStreak) state.maxStreak = state.streak;
        state.score += 1000 + Math.min(state.streak * 100, 500);
      } else {
        state.streak = 0;
        const selectedIdx = rec ? rec.selectedIndex : -1;
        saveWrongQuestion(q, selectedIdx);
      }
    });
  }

  if (window.confetti) {
    confetti({ particleCount: 120, spread: 90, origin: { y: 0.6 } });
  }

  const correctCount = state.recordedAnswers.filter(a => a.isCorrect).length;
  const accuracy = Math.round((correctCount / total) * 100);

  if (elems.finalScoreVal) elems.finalScoreVal.textContent = state.score.toLocaleString('vi-VN');
  if (elems.accuracyVal) elems.accuracyVal.textContent = `${accuracy}%`;
  if (elems.maxStreakVal) elems.maxStreakVal.textContent = `🔥 ${state.maxStreak}`;
  if (elems.correctCountVal) elems.correctCountVal.textContent = `${correctCount}/${total}`;

  if (elems.resultSubtitle) {
    if (accuracy === 100) {
      elems.resultSubtitle.textContent = `Tuyệt đỉnh! Bạn đã đạt điểm số tuyệt đối 100% cho bộ đề môn ${sub.name}! 🏆`;
    } else if (accuracy >= 80) {
      elems.resultSubtitle.textContent = `Rất tốt! Bạn nắm vững kiến thức trọng tâm với tỷ lệ đúng ${accuracy}%.`;
    } else {
      elems.resultSubtitle.textContent = `Hãy xem lại các câu sai trong Sổ tay câu sai hoặc chọn chế độ Học thuộc để ôn luyện thêm! 💪`;
    }
  }

  // Update High Score in LocalStorage
  const examId = state.currentExam.id;
  if (typeof examId === 'number' || typeof examId === 'string') {
    if (!state.highScores[state.currentSubjectId]) {
      state.highScores[state.currentSubjectId] = {};
    }
    const currentHigh = state.highScores[state.currentSubjectId][examId] || 0;
    if (state.score > currentHigh) {
      state.highScores[state.currentSubjectId][examId] = state.score;
      localStorage.setItem('quiz_high_scores', JSON.stringify(state.highScores));
      renderCoursesGrid();
    }
  }

  // Save to Exam History Log
  saveExamHistoryRecord({
    examTitle: state.currentExam.title,
    subjectId: state.currentSubjectId,
    mode: state.selectedMode,
    totalQuestions: total,
    correctCount: correctCount,
    accuracy: accuracy,
    score: state.score,
    timestamp: Date.now(),
    dateStr: new Date().toLocaleDateString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' })
  });

  buildReviewList();
  if (elems.reviewContainer) elems.reviewContainer.classList.add('hidden');

  switchView('result');
}

function buildReviewList() {
  if (!elems.reviewList) return;
  elems.reviewList.innerHTML = '';

  state.questionQueue.forEach((q, idx) => {
    const rec = state.recordedAnswers[idx] || {};
    const isCorrect = rec.isCorrect;
    const userSelectedText = (rec.selectedIndex !== null && rec.selectedIndex >= 0)
      ? q.options[rec.selectedIndex]
      : 'Hết giờ (Chưa chọn)';
    const correctText = q.options[q.correctIndex];
    const cleanQ = getCleanQuestionText(q.question);
    const savedNote = state.personalNotes[cleanQ] || '';

    const item = document.createElement('div');
    item.className = `review-item ${isCorrect ? 'is-correct' : 'is-wrong'}`;

    item.innerHTML = `
      <div class="review-q-num">Câu ${idx + 1} • ${isCorrect ? 'Chính xác' : 'Chưa chính xác'}</div>
      <div class="review-q-text">${q.question}</div>
      <div class="review-ans-group">
        <div class="user-ans">Lựa chọn của bạn: <span class="${isCorrect ? 'correct' : 'wrong'}">${userSelectedText}</span></div>
        ${!isCorrect ? `<div class="correct-ans">Đáp án đúng: <span>${correctText}</span></div>` : ''}
        <div class="review-exp"><i class="fa-solid fa-lightbulb"></i> <strong>Lời giải chi tiết:</strong> ${q.explanation}</div>
        ${savedNote ? `<div class="review-exp" style="color: #92400e; background: #fef3c7; border-left: 3px solid #f59e0b; padding: 6px 10px; margin-top: 6px; border-radius: 4px;"><i class="fa-solid fa-note-sticky"></i> <strong>Ghi chú cá nhân của bạn:</strong> ${savedNote}</div>` : ''}
      </div>
    `;

    elems.reviewList.appendChild(item);
  });

  renderMath(elems.reviewList);
}

// ---------------------------------------------------------
// 9.1 UPGRADE 1: FLAG & PERSONAL NOTES
// ---------------------------------------------------------
function toggleFlagCurrentQuestion() {
  const idx = state.currentQueueIndex;
  if (state.flaggedQuestionIndices.has(idx)) {
    state.flaggedQuestionIndices.delete(idx);
  } else {
    state.flaggedQuestionIndices.add(idx);
  }

  const isFlagged = state.flaggedQuestionIndices.has(idx);
  if (elems.flagQuestionBtn) {
    elems.flagQuestionBtn.classList.toggle('flagged', isFlagged);
  }
  if (elems.flagBtnText) {
    elems.flagBtnText.textContent = isFlagged ? 'Đã gắn cờ' : 'Gắn cờ';
  }

  if (elems.questionPalettePopover && !elems.questionPalettePopover.classList.contains('hidden')) {
    renderQuestionPalette();
  }
}

function toggleNoteBox() {
  if (!elems.questionNoteBox) return;
  const isHidden = elems.questionNoteBox.classList.toggle('hidden');
  if (!isHidden && elems.questionNoteInput) {
    elems.questionNoteInput.focus();
  }
}

function saveCurrentQuestionNote() {
  if (!elems.questionNoteInput) return;
  const q = state.questionQueue[state.currentQueueIndex];
  if (!q) return;

  const cleanQ = getCleanQuestionText(q.question);
  const noteText = elems.questionNoteInput.value.trim();

  if (noteText) {
    state.personalNotes[cleanQ] = noteText;
  } else {
    delete state.personalNotes[cleanQ];
  }

  localStorage.setItem('quiz_personal_notes', JSON.stringify(state.personalNotes));

  if (elems.savedNoteDisplay) {
    if (noteText) {
      elems.savedNoteDisplay.innerHTML = `<i class="fa-solid fa-bookmark"></i> <strong>Ghi chú:</strong> ${noteText}`;
      elems.savedNoteDisplay.classList.remove('hidden');
    } else {
      elems.savedNoteDisplay.classList.add('hidden');
    }
  }

  alert("Đã lưu ghi chú cho câu hỏi này thành công!");
}

// ---------------------------------------------------------
// 9.2 UPGRADE 2: HISTORY LOG & ANALYTICS
// ---------------------------------------------------------
function saveExamHistoryRecord(record) {
  state.examHistory.unshift(record);
  if (state.examHistory.length > 30) {
    state.examHistory = state.examHistory.slice(0, 30);
  }
  localStorage.setItem('quiz_exam_history', JSON.stringify(state.examHistory));
}

function openHistoryModal() {
  if (!elems.historyModal) return;
  renderHistoryList();
  elems.historyModal.classList.remove('hidden');
}

function closeHistoryModal() {
  if (elems.historyModal) {
    elems.historyModal.classList.add('hidden');
  }
}

function clearExamHistory() {
  if (state.examHistory.length === 0) return;
  if (confirm("Bạn có chắc muốn xóa toàn bộ lịch sử thi đã lưu không?")) {
    state.examHistory = [];
    localStorage.setItem('quiz_exam_history', JSON.stringify([]));
    renderHistoryList();
  }
}

function renderHistoryList() {
  if (!elems.historyListContainer) return;
  elems.historyListContainer.innerHTML = '';

  const total = state.examHistory.length;
  if (elems.historyTotalCountText) {
    elems.historyTotalCountText.textContent = `Đã hoàn thành ${total} bài thi`;
  }

  if (total === 0) {
    elems.historyListContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-clock-rotate-left" style="font-size: 2.2rem; margin-bottom: 12px; color: var(--primary);"></i>
        <h3>Chưa có bài thi nào</h3>
        <p>Hãy làm một bộ đề thi bất kỳ để hệ thống tự động ghi lại quá trình ôn luyện của bạn!</p>
      </div>
    `;
    return;
  }

  state.examHistory.forEach(rec => {
    const card = document.createElement('div');
    card.className = 'history-card';

    let modeLabel = 'Luyện tập nhanh';
    if (rec.mode === 'mastery') modeLabel = 'Học thuộc 100%';
    else if (rec.mode === 'exam') modeLabel = 'Thi thử bấm giờ';

    card.innerHTML = `
      <div class="history-card-main">
        <h4>${rec.examTitle}</h4>
        <div class="history-card-meta">
          <span><i class="fa-solid fa-calendar-day"></i> ${rec.dateStr}</span>
          <span><i class="fa-solid fa-layer-group"></i> ${modeLabel}</span>
          <span><i class="fa-solid fa-circle-check"></i> ${rec.correctCount}/${rec.totalQuestions} câu</span>
        </div>
      </div>
      <div class="history-score-chip">
        <div class="history-score-val">${rec.score.toLocaleString('vi-VN')} đ</div>
        <div class="history-acc-val">Độ chính xác: ${rec.accuracy}%</div>
      </div>
    `;

    elems.historyListContainer.appendChild(card);
  });
}

function renderAnalyticsBreakdown() {
  if (!elems.analyticsContentContainer) return;
  elems.analyticsContentContainer.innerHTML = '';

  const sub = SUBJECTS_DATA[state.currentSubjectId];
  if (!sub || !sub.chapters) {
    elems.analyticsContentContainer.innerHTML = '<p>Không có dữ liệu chương học phần.</p>';
    return;
  }

  let html = `<div class="analytics-grid">`;

  sub.chapters.forEach(ch => {
    const wrongCount = state.wrongQuestions.filter(q => (q.subjectId || 'cnxhkh') === state.currentSubjectId && q.chapter === ch.id).length;
    
    // Estimate mastery rate based on mistakes
    let estimatedRate = Math.max(30, 100 - wrongCount * 12);
    if (wrongCount === 0) estimatedRate = 100;

    let barColor = 'var(--success)';
    let rateClass = 'text-success';
    let suggestionText = `<span style="color: var(--success);"><i class="fa-solid fa-circle-check"></i> Bạn nắm rất vững chương này!</span>`;

    if (estimatedRate < 60) {
      barColor = 'var(--danger)';
      suggestionText = `<span style="color: var(--danger);"><i class="fa-solid fa-triangle-exclamation"></i> Có ${wrongCount} câu sai. Nên đọc lại lý thuyết & làm Sổ câu sai!</span>`;
    } else if (estimatedRate < 80) {
      barColor = '#f59e0b';
      suggestionText = `<span style="color: #d97706;"><i class="fa-solid fa-circle-info"></i> Kiến thức khá ổn, cần rèn luyện thêm vài câu bẫy.</span>`;
    }

    html += `
      <div class="analytics-chapter-card">
        <div class="analytics-ch-top">
          <span class="analytics-ch-name"><i class="${ch.icon}"></i> ${ch.name}</span>
          <span class="analytics-ch-rate" style="color: ${barColor}">${estimatedRate}%</span>
        </div>
        <div class="analytics-progress-track">
          <div class="analytics-progress-bar" style="width: ${estimatedRate}%; background: ${barColor}"></div>
        </div>
        <div class="analytics-suggestion">${suggestionText}</div>
      </div>
    `;
  });

  html += `</div>`;
  elems.analyticsContentContainer.innerHTML = html;
}

// ---------------------------------------------------------
// 9.3 UPGRADE 3: QUICK EXAM IMPORT TOOL
// ---------------------------------------------------------
function openImportModal() {
  if (!elems.importExamModal) return;
  if (elems.importExamTitleInput) elems.importExamTitleInput.value = '';
  if (elems.importExamTextarea) elems.importExamTextarea.value = '';
  updateParsedQuestionsBadge();
  elems.importExamModal.classList.remove('hidden');
}

function closeImportModal() {
  if (elems.importExamModal) {
    elems.importExamModal.classList.add('hidden');
  }
}

function parseExamText(rawText) {
  if (!rawText || !rawText.trim()) return [];

  const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const questions = [];
  let currentQ = null;
  let waitingForQuestionText = false;

  lines.forEach(line => {
    // Detect Question header: "Question 1", "Câu 1", "Câu 1: ...", "1. ..."
    const isHeaderOnly = /^(?:question|câu)\s*\d+$/i.test(line);
    const isQuestionWithText = /^(?:question|câu)\s*\d+[\.:\s]+(.+)$/i.test(line) || /^\d+[\.:]\s*(.+)$/.test(line);

    if (isHeaderOnly) {
      if (currentQ && currentQ.options.length >= 2) {
        questions.push(finalizeParsedQuestion(currentQ));
      }
      currentQ = {
        question: '',
        options: [],
        correctIndex: 0,
        explanation: 'Đáp án được nhận diện từ đề thi nhập vào.'
      };
      waitingForQuestionText = true;
      return;
    }

    if (isQuestionWithText) {
      if (currentQ && currentQ.options.length >= 2) {
        questions.push(finalizeParsedQuestion(currentQ));
      }
      const titleMatch = line.match(/^(?:question|câu|\d+[\.:])\s*(\d+)?[\.:\s]*(.*)/i);
      const title = (titleMatch && titleMatch[2]) ? titleMatch[2].trim() : line;
      currentQ = {
        question: title,
        options: [],
        correctIndex: 0,
        explanation: 'Đáp án được nhận diện từ đề thi nhập vào.'
      };
      waitingForQuestionText = false;
      return;
    }

    if (waitingForQuestionText && currentQ && !currentQ.question) {
      currentQ.question = line;
      waitingForQuestionText = false;
      return;
    }

    if (!currentQ) {
      currentQ = {
        question: line,
        options: [],
        correctIndex: 0,
        explanation: 'Đáp án được nhận diện từ đề thi nhập vào.'
      };
      return;
    }

    // Option detection
    const isCorrectMarked = line.includes('(đáp án đúng)') || line.includes('*') || line.includes('[x]');
    let cleanOption = line
      .replace(/\(đáp án đúng\)/gi, '')
      .replace(/^\*\s*/, '')
      .replace(/\[x\]/gi, '')
      .replace(/^[A-Da-d][\.\)]\s*/, '')
      .trim();

    if (cleanOption.length > 0) {
      currentQ.options.push(cleanOption);
      if (isCorrectMarked) {
        currentQ.correctIndex = currentQ.options.length - 1;
      }
    }
  });

  if (currentQ && currentQ.options.length >= 2) {
    questions.push(finalizeParsedQuestion(currentQ));
  }

  return questions;
}

function finalizeParsedQuestion(q) {
  // Ensure at least 4 options padding if less
  while (q.options.length < 4) {
    q.options.push(`Phương án ${String.fromCharCode(65 + q.options.length)}`);
  }
  return {
    id: Date.now() + Math.random(),
    question: q.question,
    options: q.options.slice(0, 4),
    correctIndex: (q.correctIndex >= 0 && q.correctIndex < 4) ? q.correctIndex : 0,
    explanation: q.explanation
  };
}

function updateParsedQuestionsBadge() {
  if (!elems.importExamTextarea || !elems.importParsedCountBadge) return;
  const questions = parseExamText(elems.importExamTextarea.value);
  elems.importParsedCountBadge.textContent = `${questions.length} câu nhận diện`;
}

function fillSampleImportExam() {
  if (!elems.importExamTitleInput) return;
  elems.importExamTitleInput.value = "Đề Thi Thử Tự Tạo - Ôn Tập Trọng Tâm";
  if (elems.importExamTextarea) {
    elems.importExamTextarea.value = `Question 1
Chủ nghĩa duy vật biện chứng do ai sáng lập?
  C.Mác và Ph.Ăngghen. (đáp án đúng)
  V.I.Lênin.
  Hồ Chí Minh.
  Hêghen.

Question 2
Nguồn gốc lý luận trực tiếp của Chủ nghĩa Mác là gì?
  Triết học cổ điển Đức, Kinh tế chính trị cổ điển Anh, Chủ nghĩa xã hội không tưởng Pháp. (đáp án đúng)
  Triết học cổ đại Hy Lạp.
  Văn hóa Phục hưng châu Âu.
  Chủ nghĩa kinh nghiệm Anh.

Question 3
Giai cấp công nhân là lực lượng sản xuất hàng đầu của xã hội hiện đại đúng hay sai?
  Đúng. (đáp án đúng)
  Sai.
  Chỉ đúng ở các nước tư bản phát triển.
  Chỉ đúng ở các nước xã hội chủ nghĩa.

Question 4
Tác phẩm nào đánh dấu sự ra đời của Chủ nghĩa xã hội khoa học?
  Tuyên ngôn của Đảng Cộng sản (1848). (đáp án đúng)
  Tư bản (1867).
  Biện chứng của tự nhiên.
  Chống Đuyrinh.`;
    updateParsedQuestionsBadge();
  }
}

function handleConfirmImport() {
  if (!elems.importExamTextarea) return;
  const rawText = elems.importExamTextarea.value;
  const questions = parseExamText(rawText);

  if (questions.length === 0) {
    alert("Chưa nhận diện được câu hỏi nào hợp lệ! Vui lòng kiểm tra lại định dạng đề thi.");
    return;
  }

  const subId = elems.importSubjectSelect ? elems.importSubjectSelect.value : 'cnxhkh';
  const examTitle = (elems.importExamTitleInput && elems.importExamTitleInput.value.trim()) 
    ? elems.importExamTitleInput.value.trim() 
    : `Đề Tự Tạo (${questions.length} câu) - ${new Date().toLocaleDateString('vi-VN')}`;

  const newExamId = `custom_${Date.now()}`;
  const newExamData = {
    id: newExamId,
    code: 'CUSTOM',
    subjectId: subId,
    title: examTitle,
    description: `Đề thi do bạn tự nhập • ${questions.length} câu hỏi`,
    timePerQuestion: 25,
    questions: questions
  };

  // Save to state & localStorage
  state.customExams[newExamId] = newExamData;
  localStorage.setItem('quiz_custom_exams', JSON.stringify(state.customExams));

  // Attach to SUBJECTS_DATA
  initCustomExams();

  closeImportModal();
  selectSubject(subId, false);
  alert(`Nhập thành công đề "${examTitle}" gồm ${questions.length} câu hỏi! Bấm "Bắt đầu" để làm bài ngay.`);
}

// ---------------------------------------------------------
// 9.4 UPGRADE 4: PRINT EXAM / EXPORT PDF
// ---------------------------------------------------------
function printCurrentExam(includeAnswers = false) {
  const exam = state.currentExam;
  if (!exam || !exam.questions || exam.questions.length === 0) {
    alert("Chưa có đề thi nào được chọn để in!");
    return;
  }

  if (!elems.printExamContainer) return;

  const sub = SUBJECTS_DATA[state.currentSubjectId];
  const total = exam.questions.length;
  const timeLimit = Math.max(15, Math.ceil(total * 0.75)); // phút

  let questionsHtml = '';
  let answerKeyHtml = '';

  exam.questions.forEach((q, idx) => {
    questionsHtml += `
      <div class="print-question-item">
        <div class="print-q-text">Câu ${idx + 1}: ${q.question}</div>
        <div class="print-options-grid">
          ${q.options.map((opt, oIdx) => `
            <div class="print-opt-item">
              <span class="print-bubble"></span>
              <strong>${String.fromCharCode(65 + oIdx)}.</strong> ${opt}
            </div>
          `).join('')}
        </div>
      </div>
    `;

    answerKeyHtml += `
      <div style="padding: 4px; border: 1px solid #ddd; text-align: center;">
        <strong>Câu ${idx + 1}:</strong> ${String.fromCharCode(65 + q.correctIndex)}
      </div>
    `;
  });

  elems.printExamContainer.innerHTML = `
    <div class="print-header">
      <div class="print-school-title">HỆ THỐNG ÔN THI ĐẠI HỌC - EXAMMASTER</div>
      <div class="print-exam-title">${exam.title.toUpperCase()}</div>
      <div class="print-meta-row">
        Học phần: ${sub ? sub.name : ''} • Số lượng: ${total} câu • Thời gian làm bài: ${timeLimit} phút
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 14px; font-size: 10pt;">
        <span>Họ và tên thí sinh: ..............................................................</span>
        <span>Mã sinh viên: .........................</span>
      </div>
    </div>

    <div class="print-questions-body">
      ${questionsHtml}
    </div>

    ${includeAnswers ? `
      <div class="print-ans-key-section">
        <h3 style="text-align: center; margin-bottom: 12px; font-size: 12pt;">BẢNG ĐÁP ÁN ĐỀ THI</h3>
        <div class="print-ans-grid">
          ${answerKeyHtml}
        </div>
      </div>
    ` : ''}
  `;

  window.print();
}

function toggleReview() {
  if (!elems.reviewContainer) return;
  elems.reviewContainer.classList.toggle('hidden');
  if (!elems.reviewContainer.classList.contains('hidden')) {
    elems.reviewContainer.scrollIntoView({ behavior: 'smooth' });
  }
}

// ---------------------------------------------------------
// 10. WRONG QUESTIONS NOTEBOOK (SỔ TAY CÂU SAI ĐA MÔN)
// ---------------------------------------------------------
function getCleanQuestionText(text) {
  if (!text) return '';
  return text.replace(/^\[.*?\]\s*/, '').trim();
}

function detectQuestionSubjectAndChapter(cleanText) {
  // Check CNXHKH
  if (SUBJECTS_DATA.cnxhkh && SUBJECTS_DATA.cnxhkh.rawQuestions) {
    for (let ch = 1; ch <= 4; ch++) {
      const rawList = SUBJECTS_DATA.cnxhkh.rawQuestions[ch];
      if (rawList && rawList.some(q => q.question.trim() === cleanText)) {
        return { subjectId: 'cnxhkh', chapter: ch };
      }
    }
  }

  // Check Ho Chi Minh
  if (SUBJECTS_DATA.hochiminh && SUBJECTS_DATA.hochiminh.rawQuestions) {
    for (let ch = 1; ch <= 3; ch++) {
      const rawList = SUBJECTS_DATA.hochiminh.rawQuestions[ch];
      if (rawList && rawList.some(q => q.question.trim() === cleanText)) {
        return { subjectId: 'hochiminh', chapter: ch };
      }
    }
  }

  // Check Logistics
  if (SUBJECTS_DATA.logistics && SUBJECTS_DATA.logistics.allQuestions) {
    const logIdx = SUBJECTS_DATA.logistics.allQuestions.findIndex(q => q.question.trim() === cleanText);
    if (logIdx >= 0) {
      let ch = (logIdx < 15) ? 1 : (logIdx < 21 ? 3 : 4);
      return { subjectId: 'logistics', chapter: ch };
    }
  }

  // Check Startup
  if (SUBJECTS_DATA.startup && SUBJECTS_DATA.startup.rawQuestions) {
    for (let ch = 1; ch <= 3; ch++) {
      const rawList = SUBJECTS_DATA.startup.rawQuestions[ch];
      if (rawList && rawList.some(q => q.question.trim() === cleanText)) {
        return { subjectId: 'startup', chapter: ch };
      }
    }
  }

  return { subjectId: state.currentSubjectId, chapter: 1 };
}

function updateWrongBadges() {
  const totalCount = state.wrongQuestions.length;
  const cnxhkhCount = state.wrongQuestions.filter(q => q.subjectId === 'cnxhkh').length;
  const hochiminhCount = state.wrongQuestions.filter(q => q.subjectId === 'hochiminh').length;
  const startupCount = state.wrongQuestions.filter(q => (q.subjectId || 'startup') === 'startup').length;
  const logisticsCount = state.wrongQuestions.filter(q => q.subjectId === 'logistics').length;

  if (elems.wrongCountBadge) {
    elems.wrongCountBadge.textContent = totalCount;
    elems.wrongCountBadge.classList.toggle('hidden', totalCount === 0);
  }

  let activeSubWrongCount = cnxhkhCount;
  if (state.currentSubjectId === 'hochiminh') activeSubWrongCount = hochiminhCount;
  else if (state.currentSubjectId === 'startup') activeSubWrongCount = startupCount;
  else if (state.currentSubjectId === 'logistics') activeSubWrongCount = logisticsCount;

  if (elems.wrongBannerCount) elems.wrongBannerCount.textContent = activeSubWrongCount;
  if (elems.heroWrongCountVal) elems.heroWrongCountVal.textContent = `${activeSubWrongCount} câu`;

  if (elems.filterAllCount) elems.filterAllCount.textContent = totalCount;
  if (elems.filterCnxhkhCount) elems.filterCnxhkhCount.textContent = cnxhkhCount;
  if (elems.filterHochiminhCount) elems.filterHochiminhCount.textContent = hochiminhCount;
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

  if (state.currentWrongSubjectFilter !== 'all') {
    list = list.filter(q => (q.subjectId || 'cnxhkh') === state.currentWrongSubjectFilter);
  } else {
    const activeList = list.filter(q => (q.subjectId || 'cnxhkh') === state.currentSubjectId);
    if (activeList.length > 0) list = activeList;
  }

  return {
    id: 'wrong_book',
    code: 'SỔ-SAI',
    title: `Sổ Tay Câu Sai (${list.length} Câu)`,
    description: "Bộ đề gồm các câu bạn từng làm chưa đúng. Khi trả lời đúng, câu hỏi sẽ tự động được xóa khỏi sổ!",
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

  if (SUBJECTS_DATA[subFilter] && SUBJECTS_DATA[subFilter].chapters) {
    chapters = SUBJECTS_DATA[subFilter].chapters;
  }

  if (chapters.length === 0) {
    elems.wrongChapterFilterTabs.style.display = 'none';
    return;
  }

  elems.wrongChapterFilterTabs.style.display = 'flex';

  const allBtn = document.createElement('button');
  allBtn.className = `filter-tab-btn ${state.currentWrongChapterFilter === 'all' ? 'active' : ''}`;
  allBtn.textContent = 'Tất cả chương';
  allBtn.addEventListener('click', () => {
    elems.wrongChapterFilterTabs.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
    state.currentWrongChapterFilter = 'all';
    renderWrongQuestionsList();
  });
  elems.wrongChapterFilterTabs.appendChild(allBtn);

  chapters.forEach(ch => {
    const chCount = state.wrongQuestions.filter(q => (q.subjectId || 'cnxhkh') === subFilter && q.chapter === ch.id).length;
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
    if (elems.wrongEmptyState) elems.wrongEmptyState.classList.remove('hidden');
    if (elems.wrongContentArea) elems.wrongContentArea.classList.add('hidden');
    return;
  }

  if (elems.wrongEmptyState) elems.wrongEmptyState.classList.add('hidden');
  if (elems.wrongContentArea) elems.wrongContentArea.classList.remove('hidden');

  const subFilter = state.currentWrongSubjectFilter;
  const chFilter = state.currentWrongChapterFilter;
  const searchQuery = (elems.wrongSearchInput ? elems.wrongSearchInput.value : '').toLowerCase().trim();

  let filtered = state.wrongQuestions;

  if (subFilter !== 'all') {
    filtered = filtered.filter(item => (item.subjectId || 'cnxhkh') === subFilter);
  }

  if (chFilter !== 'all') {
    const chNum = parseInt(chFilter, 10);
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

  if (!elems.wrongCardsList) return;
  elems.wrongCardsList.innerHTML = '';

  if (filtered.length === 0) {
    elems.wrongCardsList.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.2rem; margin-bottom: 12px; color: var(--primary);"></i>
        <h3>Không tìm thấy câu hỏi phù hợp</h3>
        <p>Vui lòng thử từ khóa tìm kiếm khác hoặc đổi bộ lọc môn/chương.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'wrong-card';

    const itemSubject = item.subjectId || 'cnxhkh';
    const subMeta = SUBJECTS_DATA[itemSubject] || SUBJECTS_DATA.cnxhkh;
    const correctText = item.question.options[item.question.correctIndex];
    const userText = item.userWrongOption || 'Chưa rõ';

    let chapterLabel = `Chương ${item.chapter}`;
    if (itemSubject === 'logistics') chapterLabel = `Unit ${item.chapter}`;
    else if (itemSubject === 'hochiminh') chapterLabel = `Phần ${item.chapter}`;

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

// ---------------------------------------------------------
// 11. THEORY VIEW LOGIC
// ---------------------------------------------------------
function openTheoryView() {
  switchView('theory');
  updateTheoryViewForSubject();
}

function updateTheoryViewForSubject() {
  const sub = SUBJECTS_DATA[state.currentSubjectId];
  if (!sub) return;

  document.querySelectorAll('.theory-sub-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.subject === state.currentSubjectId);
  });

  if (elems.theoryViewTitle) {
    elems.theoryViewTitle.innerHTML = `<i class="${sub.icon}"></i> ${sub.theoryTitle}`;
  }
  if (elems.theoryViewSubtitle) {
    elems.theoryViewSubtitle.textContent = sub.theoryDesc;
  }
  if (elems.theorySearchInput) {
    elems.theorySearchInput.placeholder = sub.theorySearchPlaceholder || "Tìm kiếm bài học...";
    elems.theorySearchInput.value = '';
  }

  if (elems.theorySidebar) {
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
  }

  state.currentTheoryChapter = sub.chapters[0].id;
  renderChapterContent(sub.chapters[0].id);
}

function renderChapterContent(chapterId) {
  const sub = SUBJECTS_DATA[state.currentSubjectId];
  const chapterData = sub.theoryData.find(c => c.chapter === chapterId) || sub.theoryData[0];

  if (!elems.theoryContentBody) return;

  elems.theoryContentBody.innerHTML = `
    <h2 style="font-size: 1.45rem; font-weight: 800; color: var(--text-main); margin-bottom: 20px;">
      <i class="${chapterData.icon}"></i> ${chapterData.title}
    </h2>
    ${chapterData.content}
  `;

  renderMath(elems.theoryContentBody);
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
        <div style="margin-bottom: 28px; padding-bottom: 20px; border-bottom: 1px dashed var(--border-color);">
          <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--primary); margin-bottom: 14px;">
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
        🔍 Tìm thấy <strong>${matchCount}</strong> nội dung chứa từ khóa "<em>${query}</em>":
      </p>
      ${matchedHtml}
    `;
  } else {
    elems.theoryContentBody.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-circle-exclamation" style="font-size: 2.8rem; margin-bottom: 12px; color: var(--warning);"></i>
        <h3>Không tìm thấy nội dung phù hợp</h3>
        <p>Vui lòng thử từ khóa khác (ví dụ: C.Mác, Giai cấp công nhân, Dân chủ XHCN, Thời kỳ quá độ...)</p>
      </div>
    `;
  }

  renderMath(elems.theoryContentBody);
}

// ---------------------------------------------------------
// 12. VIEW SWITCHING & MATHJAX
// ---------------------------------------------------------
function switchView(viewName) {
  Object.keys(views).forEach(v => {
    if (views[v]) views[v].classList.remove('active');
  });
  if (views[viewName]) {
    views[viewName].classList.add('active');
  }

  // Update top nav active styling
  if (viewName === 'lobby') setNavActive(elems.navAllCoursesBtn);
  else if (viewName === 'theory') setNavActive(elems.theoryNavBtn);
  else if (viewName === 'wrong') setNavActive(elems.wrongBookNavBtn);
  else setNavActive(null);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderMath(container) {
  if (!window.MathJax || !container) return;

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
