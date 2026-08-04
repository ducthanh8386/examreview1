/* =========================================================
   WAYGROUND / QUIZIZZ APPLICATION LOGIC
   Học phần: Kiến Trúc Máy Tính
   ========================================================= */

// ---------------------------------------------------------
// 1. GLOBAL STATE
// ---------------------------------------------------------
// ---------------------------------------------------------
// UTILITY: Fisher-Yates Shuffle
// ---------------------------------------------------------
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Nhận một câu hỏi gốc, xáo trộn các đáp án và cập nhật correctIndex.
 * Trả về bản sao của câu hỏi với options và correctIndex đã được xáo.
 */
function shuffleQuestionOptions(q) {
  const correctAnswer = q.options[q.correctIndex];
  const shuffledOptions = shuffleArray(q.options);
  const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
  return { ...q, options: shuffledOptions, correctIndex: newCorrectIndex };
}

let state = {
  selectedExamId: null,
  selectedMode: 'standard', // 'standard' hoặc 'mastery'
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
  highScores: JSON.parse(localStorage.getItem('quiz_high_scores') || '{"1":0,"2":0,"3":0}')
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
  quiz: document.getElementById('quizView'),
  result: document.getElementById('resultView')
};

const elems = {
  highScore1: document.getElementById('highScore1'),
  highScore2: document.getElementById('highScore2'),
  highScore3: document.getElementById('highScore3'),
  soundToggleBtn: document.getElementById('soundToggleBtn'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  logoBtn: document.getElementById('logoBtn'),
  theoryNavBtn: document.getElementById('theoryNavBtn'),
  openTheoryBannerBtn: document.getElementById('openTheoryBannerBtn'),
  backToLobbyFromTheoryBtn: document.getElementById('backToLobbyFromTheoryBtn'),
  
  // Theory View
  theorySidebar: document.getElementById('theorySidebar'),
  theoryContentBody: document.getElementById('theoryContentBody'),
  theorySearchInput: document.getElementById('theorySearchInput'),

  // Modal Mode Selection
  modeModal: document.getElementById('modeModal'),
  modalExamTitle: document.getElementById('modalExamTitle'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  confirmStartBtn: document.getElementById('confirmStartBtn'),
  modeCards: document.querySelectorAll('.mode-card'),

  // Quiz view
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
  
  // Result view
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
// 4. EVENT LISTENERS SETUP
// ---------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderHighScores();
  initTheoryView();

  // Open modal on exam card click
  document.querySelectorAll('.exam-card').forEach(card => {
    card.addEventListener('click', () => {
      const examId = parseInt(card.dataset.examId);
      openModeModal(examId);
    });
  });

  // Modal interactions
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

  // Navigation
  elems.soundToggleBtn.addEventListener('click', toggleSound);
  elems.themeToggleBtn.addEventListener('click', toggleTheme);
  elems.logoBtn.addEventListener('click', () => switchView('lobby'));
  elems.theoryNavBtn.addEventListener('click', () => switchView('theory'));
  elems.openTheoryBannerBtn.addEventListener('click', () => switchView('theory'));
  elems.backToLobbyFromTheoryBtn.addEventListener('click', () => switchView('lobby'));

  // Quiz navigation
  elems.exitQuizBtn.addEventListener('click', () => {
    if (confirm("Bạn có chắc chắn muốn thoát bài làm không?")) {
      clearInterval(state.timerInterval);
      switchView('lobby');
    }
  });

  elems.nextQuestionBtn.addEventListener('click', handleNextQuestion);

  // Result navigation
  elems.retryBtn.addEventListener('click', () => openModeModal(state.currentExam.id));
  elems.backToLobbyBtn.addEventListener('click', () => switchView('lobby'));
  elems.reviewBtn.addEventListener('click', toggleReview);

  // Option selection
  const optionBtns = elems.optionsGrid.querySelectorAll('.option-card');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedIndex = parseInt(btn.dataset.index);
      selectOption(selectedIndex);
    });
  });

  // Theory Search Listener
  elems.theorySearchInput.addEventListener('input', handleTheorySearch);
});

// ---------------------------------------------------------
// 5. THEORY VIEW LOGIC
// ---------------------------------------------------------

function initTheoryView() {
  elems.theorySidebar.innerHTML = '';
  THEORY_DATA.forEach((ch, idx) => {
    const btn = document.createElement('button');
    btn.className = `chapter-tab-btn ${ch.chapter === 1 ? 'active' : ''}`;
    btn.dataset.chapter = ch.chapter;
    btn.innerHTML = `<i class="${ch.icon}"></i> <span>Chương ${ch.chapter}</span>`;

    btn.addEventListener('click', () => {
      document.querySelectorAll('.chapter-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentTheoryChapter = ch.chapter;
      renderChapterContent(ch.chapter);
    });

    elems.theorySidebar.appendChild(btn);
  });

  renderChapterContent(1);
}

function renderChapterContent(chapterNum) {
  const chapterData = THEORY_DATA.find(c => c.chapter === chapterNum) || THEORY_DATA[0];
  elems.theoryContentBody.innerHTML = `
    <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--text-main); margin-bottom: 20px;">
      <i class="${chapterData.icon}"></i> ${chapterData.title}
    </h2>
    ${chapterData.content}
  `;

  renderMath(elems.theoryContentBody);
}

/**
 * Render LaTeX math an toàn — dùng typesetPromise() với element cụ thể.
 * Xử lý cả trường hợp MathJax chưa load xong (startup.promise).
 */
function renderMath(container) {
  if (!window.MathJax) return;

  const doTypeset = () => {
    if (MathJax.typesetPromise) {
      // Reset previous renders trên element để tránh double-process
      MathJax.typesetClear([container]);
      MathJax.typesetPromise([container]).catch(err => console.warn('MathJax error:', err));
    }
  };

  // Nếu MathJax chưa khởi động xong, đợi startup.promise
  if (MathJax.startup && MathJax.startup.promise) {
    MathJax.startup.promise.then(doTypeset);
  } else {
    doTypeset();
  }
}

function handleTheorySearch(e) {
  const query = e.target.value.toLowerCase().trim();
  if (!query) {
    renderChapterContent(state.currentTheoryChapter);
    return;
  }

  let matchedHtml = '';
  let matchCount = 0;

  THEORY_DATA.forEach(ch => {
    if (ch.title.toLowerCase().includes(query) || ch.content.toLowerCase().includes(query)) {
      matchCount++;
      matchedHtml += `
        <div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px dashed var(--border-color);">
          <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--accent-purple); margin-bottom: 16px;">
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
        🔍 Tìm thấy <strong>${matchCount}</strong> chương chứa từ khóa "<em>${query}</em>":
      </p>
      ${matchedHtml}
    `;
  } else {
    elems.theoryContentBody.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-circle-exclamation" style="font-size: 3rem; margin-bottom: 12px; color: var(--accent-pink);"></i>
        <h3>Không tìm thấy nội dung phù hợp</h3>
        <p>Vui lòng thử từ khóa khác như "ISA", "Cache", "Pipeline", "IEEE 754", "Bù 2"...</p>
      </div>
    `;
  }

  renderMath(elems.theoryContentBody);
}

// ---------------------------------------------------------
// 6. CORE LOGIC & MODAL HANDLING
// ---------------------------------------------------------

function openModeModal(examId) {
  state.selectedExamId = examId;
  const exam = EXAMS_DATA[examId];
  elems.modalExamTitle.textContent = exam.title;
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

function renderHighScores() {
  elems.highScore1.textContent = state.highScores[1] || 0;
  elems.highScore2.textContent = state.highScores[2] || 0;
  elems.highScore3.textContent = state.highScores[3] || 0;
}

// ---------------------------------------------------------
// 7. QUIZ EXECUTION LOGIC
// ---------------------------------------------------------

function startQuiz(examId, mode) {
  state.currentExam = EXAMS_DATA[examId];
  state.selectedMode = mode;

  // Xáo trộn thứ tự câu hỏi, sau đó xáo trộn đáp án của từng câu
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

  if (state.selectedMode === 'mastery') {
    elems.questionProgressText.textContent = `Đã thuộc ${state.masteredIds.size} / ${totalUnique} câu`;
    elems.progressBarFill.style.width = `${(state.masteredIds.size / totalUnique) * 100}%`;
  } else {
    elems.questionProgressText.textContent = `Câu ${state.currentQueueIndex + 1} / ${totalUnique}`;
    elems.progressBarFill.style.width = `${((state.currentQueueIndex + 1) / totalUnique) * 100}%`;
  }

  elems.questionCategory.textContent = `MÃ ĐỀ ${state.currentExam.code}`;
  elems.questionText.textContent = q.question;

  // Options reset
  const optionBtns = elems.optionsGrid.querySelectorAll('.option-card');
  optionBtns.forEach((btn, idx) => {
    btn.className = getOptionBaseClass(idx);
    btn.disabled = false;
    const textSpan = btn.querySelector('.option-text');
    textSpan.textContent = q.options[idx];
  });

  startTimer();
}

function getOptionBaseClass(idx) {
  const colors = ['option-red', 'option-blue', 'option-yellow', 'option-green'];
  return `option-card ${colors[idx % 4]}`;
}

function startTimer() {
  clearInterval(state.timerInterval);
  const duration = state.currentExam.timePerQuestion; // 20s per question
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
  } else {
    state.streak = 0;
    sounds.playWrong();

    if (state.selectedMode === 'mastery') {
      state.questionQueue.push(q);
    }
  }

  // Update UI Stats
  elems.currentScore.textContent = state.score;
  elems.streakCount.textContent = state.streak;

  // Highlight options
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

  // Record answer
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
// 8. RESULT SUMMARY & REVIEW LOGIC
// ---------------------------------------------------------

function finishQuiz() {
  sounds.playFinish();
  if (window.confetti) {
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
  }

  const totalUnique = state.currentExam.questions.length;

  if (state.selectedMode === 'mastery') {
    elems.accuracyLabel.textContent = "Chế Độ";
    elems.accuracyVal.textContent = "Học Thuộc 100%";
    elems.attemptsLabel.textContent = "Lượt Trả Lời";
    elems.correctCountVal.textContent = `${state.totalAttempts} lượt`;
    elems.resultSubtitle.textContent = `Tuyệt vời! Bạn đã thuộc đúng 100% tất cả 65 câu hỏi của Mã đề ${state.currentExam.code} (sau ${state.totalAttempts} lượt thực hiện)! 🎉`;
  } else {
    const correctCount = state.userAnswers.filter(a => a.isCorrect).length;
    const accuracy = Math.round((correctCount / totalUnique) * 100);

    elems.accuracyLabel.textContent = "Tỷ Lệ Đúng";
    elems.accuracyVal.textContent = `${accuracy}%`;
    elems.attemptsLabel.textContent = "Số Câu Đúng";
    elems.correctCountVal.textContent = `${correctCount}/${totalUnique}`;

    if (accuracy === 100) {
      elems.resultSubtitle.textContent = "Tuyệt vời! Bạn đã đạt điểm tuyệt đối 100%! 🏆";
    } else if (accuracy >= 80) {
      elems.resultSubtitle.textContent = "Kết quả rất xuất sắc! Hãy thử sức ở các mã đề khác. 🌟";
    } else {
      elems.resultSubtitle.textContent = "Bạn có thể chọn 'Chế độ Học Thuộc' để luyện lại cho đến khi thuộc 100%! 💪";
    }
  }

  elems.finalScoreVal.textContent = state.score;
  elems.maxStreakVal.textContent = `🔥 ${state.maxStreak}`;

  // Update high score
  const examId = state.currentExam.id;
  if (state.score > (state.highScores[examId] || 0)) {
    state.highScores[examId] = state.score;
    localStorage.setItem('quiz_high_scores', JSON.stringify(state.highScores));
    renderHighScores();
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
}

function toggleReview() {
  elems.reviewContainer.classList.toggle('hidden');
  if (!elems.reviewContainer.classList.contains('hidden')) {
    elems.reviewContainer.scrollIntoView({ behavior: 'smooth' });
  }
}
