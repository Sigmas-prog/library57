// База данных викторин по популярным детским книгам
const QUIZZES = [
  {
    id: "Волшебник изумрудного города",
    title: "Волшебник Изумрудного города",
    author: "Александр Волков",
    icon: "👠",
    points: 20,
    questions: [
      {
        text: "Какого цвета были волшебные очки, которые все обязаны были носить в Изумрудном городе?",
        options: ["Жёлтые", "Синие", "Зелёные", "Красные"],
        answer: 2 // Зелёные
      },
      {
        text: "Как звали верного пёсика Элли, который заговорил в волшебной стране?",
        options: ["Тотошка", "Шарик", "Дружок", "Бобик"],
        answer: 0 // Тотошка
      },
      {
        text: "Кто охранял Золотую Шапку, исполняющую желания владельца?",
        options: ["Болотные кикиморы", "Летучие Обезьяны", "Саблезубые тигры", "Железные рыцари"],
        answer: 1 // Летучие Обезьяны
      },
      {
        text: "О чём больше всего мечтал Страшила Мудрый?",
        options: ["О тёплом доме", "О золотой короне", "О мозгах", "О верных слугах"],
        answer: 2 // О мозгах
      },
      {
        text: "Из какого материала был сделан Железный Дровосек до того, как стал железным?",
        options: ["Он был обычным человеком-дровосеком", "Из дерева", "Из глины", "Из камня"],
        answer: 0 // Обычным человеком
      }
    ]
  },
  {
    id: "Дикий робот",
    title: "Дикий робот",
    author: "Питер Браун",
    icon: "🤖",
    points: 20,
    questions: [
      {
        text: "Как звали робота-помощницу, которая очутилась на необитаемом острове?",
        options: ["Роз", "Ева", "Алиса", "ВАЛЛ-И"],
        answer: 0 // Роз
      },
      {
        text: "Кто стал приёмным сыном робота Роз на острове?",
        options: ["Медвежонок", "Лисёнок", "Гусёнок Яркое Клювико", "Оленёнок"],
        answer: 2 // Гусёнок
      },
      {
        text: "Каким образом Роз подружилась с дикими зверями?",
        options: ["Она построила им дома", "Она выучила их язык, терпеливо слушая их", "Она кормила их робо-едой", "Она напугала их лазерами"],
        answer: 1 // Выучила их язык
      },
      {
        text: "Как называется суровое испытание, сплотившее Роз и животных зимой?",
        options: ["Великий шторм", "Ледяной плен", "Лютая зима", "Великое половодье"],
        answer: 2 // Лютая зима
      }
    ]
  },
  {
    id: "Приключения Электроника",
    title: "Приключения Электроника",
    author: "Евгений Велтистов",
    icon: "⚡",
    points: 20,
    questions: [
      {
        text: "Кто был живым двойником мальчика-робота Электроника?",
        options: ["Вова Корольков", "Сергей Сыроежкин", "Макар Гусев", "Денис Кораблев"],
        answer: 1 // Сыроежкин
      },
      {
        text: "Какая верная электронная собака помогала Электронику в его приключениях?",
        options: ["Рэсси (редчайшая электронная собака)", "Артемон", "Шарик", "Электрон"],
        answer: 0 // Рэсси
      },
      {
        text: "Из какого прибора профессор Громов собрал Электроника?",
        options: ["Из старого радиоприемника", "По образу мальчика с обложки журнала", "Из деталей пылесоса", "Из сломанного компьютера"],
        answer: 1 // По образу мальчика
      },
      {
        text: "Какая удивительная суперспособность была у Электроника в математике?",
        options: ["Он считал быстрее любого калькулятора", "Он мог видеть формулы в воздухе", "Он предсказывал погоду числами", "Он не умел считать совсем"],
        answer: 0 // Считал быстрее
      }
    ]
  },
  {
    id: "Сказки",
    title: "Сказки Пушкина",
    author: "Александр Пушкин",
    icon: "✒️",
    points: 20,
    questions: [
      {
        text: "Что кричал Золотой Петушок царю Дадону, предупреждая об опасности?",
        options: [
          "Враг близко, берегись!",
          "Кири-ку-ку! Царствуй, лёжа на боку!",
          "Проснись, царь, беда пришла!",
          "Ку-ка-ре-ку! Враг бежит в тайгу!"
        ],
        answer: 1 // Кири-ку-ку
      },
      {
        text: "За какую плату Балда согласился работать у Попа в сказке?",
        options: ["За три щелчка по лбу Попа в год", "За мешок пшеницы в месяц", "За золотую монету", "За бесплатную еду"],
        answer: 0 // Три щелчка
      },
      {
        text: "В каких насекомых превращался князь Гвидон, чтобы улететь на корабль к отцу?",
        options: [
          "В пчелу, муравья и жука",
          "В комара, муху и шмеля",
          "В стрекозу и бабочку",
          "В кузнечика и светлячка"
        ],
        answer: 1 // Комара, муху и шмеля
      },
      {
        text: "Сколько лет прожили старик со старухой у самого синего моря?",
        options: ["10 лет", "25 лет", "30 лет и 3 года", "50 лет"],
        answer: 2 // 30 лет и 3 года
      }
    ]
  },
  {
    id: "Затерянный мир",
    title: "Затерянный мир",
    author: "Артур Конан Дойл",
    icon: "🌋",
    points: 20,
    questions: [
      {
        text: "Каких древних животных обнаружила экспедиция на загадочном плато в Южной Америке?",
        options: ["Саблезубых тигров", "Динозавров", "Мамонтов", "Драконов"],
        answer: 1 // Динозавров
      },
      {
        text: "Кто возглавлял эту опасную научную экспедицию?",
        options: ["Шерлок Холмс", "Доктор Уотсон", "Профессор Челленджер", "Капитан Немо"],
        answer: 2 // Профессор Челленджер
      },
      {
        text: "Какое существо утащило сумку с ценной записной книжкой журналиста Неда Малоуна?",
        options: ["Птеродактиль", "Обезьяночеловек", "Хищный динозавр", "Огромная летучая мышь"],
        answer: 0 // Птеродактиль
      }
    ]
  },
  {
    id: "Робин Гуд",
    title: "Робин Гуд",
    author: "Михаил Гершензон",
    icon: "🏹",
    points: 20,
    questions: [
      {
        text: "В каком лесу жил и скрывался знаменитый благородный разбойник Робин Гуд?",
        options: ["Гримпенский лес", "Шервудский лес", "Черный бор", "Волшебная пуща"],
        answer: 1 // Шервудский лес
      },
      {
        text: "Какое оружие прославило Робина Гуда как непревзойденного стрелка?",
        options: ["Меч", "Арбалет", "Лук и стрелы", "Мушкет"],
        answer: 2 // Лук
      },
      {
        text: "Как Робин Гуд поступал с золотом, которое отбирал у богатых рыцарей и епископов?",
        options: ["Прятал в лесной пещере", "Раздавал бедным людям", "Отправлял королю Ричарду", "Покупал новое оружие"],
        answer: 1 // Раздавал бедным
      }
    ]
  }
];

// =========== QUIZ ENGINE STATE ===========
let activeQuiz = null;
let currentQuestionIndex = 0;
let selectedAnswers = [];
let liveCorrectCount = 0;
let answering = false; // lock while showing feedback

// =========== RENDER QUIZ LIST ===========
function renderQuizzesList() {
  const container = document.getElementById("quiz-list-container");
  if (!container) return;
  container.innerHTML = "";

  // --- Helper: get best result for a quiz ---
  function getBestResult(quizId) {
    if (!userProfile || !userProfile.quizResults) return null;
    return userProfile.quizResults[quizId] || null;
  }

  // 1. Интерактивные викторины (локальные с правильными ответами)
  const localHeader = document.createElement("div");
  localHeader.className = "quizzes-section-header";
  localHeader.style.gridColumn = "1 / -1";
  localHeader.innerHTML = `<h2>🎮 Интерактивные викторины (с подсчётом очков)</h2>`;
  container.appendChild(localHeader);

  QUIZZES.forEach(quiz => {
    const best = getBestResult(quiz.id);
    const isCompleted = !!best;
    const card = document.createElement("div");
    card.className = `quiz-card ${isCompleted ? 'completed' : ''}`;

    let bestScoreHTML = "";
    if (best) {
      const pct = Math.round((best.score / best.total) * 100);
      const stars = pct >= 90 ? "⭐⭐⭐" : pct >= 60 ? "⭐⭐" : "⭐";
      bestScoreHTML = `<div class="quiz-card-best-score">${stars} ${best.score}/${best.total} · ${best.points} баллов</div>`;
    }

    card.innerHTML = `
      <div class="quiz-card-header" style="position: relative; width: 100%; display: flex; justify-content: center; align-items: center; margin-bottom: 10px;">
        <span class="quiz-icon-large">${quiz.icon}</span>
        ${isCompleted ? '<span class="quiz-badge-completed">Пройдено ✓</span>' : ''}
      </div>
      ${bestScoreHTML}
      <h3 style="font-size: 1.1rem; font-weight: 700; margin: 5px 0;">${quiz.title}</h3>
      <p class="quiz-author" style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 6px;">${quiz.author}</p>
      <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 10px;">${quiz.questions.length} вопросов</p>
      <p class="quiz-reward" style="font-size: 0.9rem; margin-bottom: 15px;">до <strong>+${quiz.points} баллов</strong> 🌟</p>
      <button class="btn btn-primary quiz-start-btn" style="width: 100%; margin-top: auto;" onclick="startQuiz('${quiz.id}')">
        ${isCompleted ? 'Пройти снова' : 'Начать игру!'}
      </button>
    `;
    container.appendChild(card);
  });

  // 2. Секция импортированных викторин из Google Forms
  if (typeof IMPORTED_QUIZZES !== "undefined" && IMPORTED_QUIZZES.length > 0) {
    const importedHeader = document.createElement("div");
    importedHeader.className = "quizzes-section-header";
    importedHeader.style.gridColumn = "1 / -1";
    importedHeader.innerHTML = `<h2>📚 Викторины по книгам (${IMPORTED_QUIZZES.length} книг)</h2>`;
    container.appendChild(importedHeader);

    IMPORTED_QUIZZES.forEach(quiz => {
      const best = getBestResult(quiz.id);
      const isCompleted = !!best;
      const card = document.createElement("div");
      card.className = `quiz-card ${isCompleted ? 'completed' : ''}`;

      // Find cover from EXTERNAL_QUIZZES list
      const extMatch = typeof EXTERNAL_QUIZZES !== "undefined"
        ? EXTERNAL_QUIZZES.find(eq => eq.title.toLowerCase() === quiz.title.toLowerCase())
        : null;
      const coverUrl = extMatch && extMatch.cover ? extMatch.cover : "";

      let coverHTML = "";
      if (coverUrl) {
        coverHTML = `<div style="width: 80px; height: 115px; background-image: url('${coverUrl}'); background-size: cover; background-position: center; border-radius: 8px; box-shadow: var(--box-shadow-soft); margin-bottom: 10px;"></div>`;
      } else {
        const colors = ["linear-gradient(135deg,#FFE082,#FFB300)","linear-gradient(135deg,#80DEEA,#00BCD4)","linear-gradient(135deg,#CE93D8,#9C27B0)","linear-gradient(135deg,#A5D6A7,#43A047)","linear-gradient(135deg,#FFAB91,#FF5722)"];
        const col = colors[quiz.title.charCodeAt(0) % colors.length];
        coverHTML = `<div style="width: 80px; height: 115px; background: ${col}; border-radius: 8px; box-shadow: var(--box-shadow-soft); margin-bottom: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem;">📖</div>`;
      }

      let bestScoreHTML = "";
      if (best) {
        const pct = Math.round((best.score / best.total) * 100);
        const stars = pct >= 90 ? "⭐⭐⭐" : pct >= 60 ? "⭐⭐" : "⭐";
        bestScoreHTML = `<div class="quiz-card-best-score">${stars} ${best.score}/${best.total} · ${best.points} баллов</div>`;
      }

      card.innerHTML = `
        <div style="position: relative; display: flex; justify-content: center;">
          ${coverHTML}
          ${isCompleted ? '<span class="quiz-badge-completed" style="position: absolute; right: 0; top: 0;">✓</span>' : ''}
        </div>
        ${bestScoreHTML}
        <h3 style="font-size: 1rem; font-weight: 700; margin: 5px 0; line-height: 1.3;">${quiz.title}</h3>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 6px;">${quiz.author || "Детский автор"}</p>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 10px;">${quiz.questions.length} вопросов</p>
        <p style="font-size: 0.85rem; margin-bottom: 15px;">до <strong>+15 баллов</strong> 🌟</p>
        <button class="btn btn-primary quiz-start-btn" style="width: 100%; margin-top: auto;" onclick="startQuiz('${quiz.id.replace(/'/g,"\\'")}')">
          ${isCompleted ? 'Пройти снова' : 'Начать игру! 🎮'}
        </button>
      `;
      container.appendChild(card);
    });
  }

  // 3. Секция внешних квизов Google Forms (оставшиеся без вопросов)
  const externalOnlyQuizzes = (typeof EXTERNAL_QUIZZES !== "undefined" ? EXTERNAL_QUIZZES : []).filter(eq => {
    if (typeof IMPORTED_QUIZZES === "undefined") return true;
    return !IMPORTED_QUIZZES.some(iq => iq.title.toLowerCase() === eq.title.toLowerCase());
  });

  if (externalOnlyQuizzes.length > 0) {
    const extHeader = document.createElement("div");
    extHeader.className = "quizzes-section-header";
    extHeader.style.gridColumn = "1 / -1";
    extHeader.innerHTML = `<h2>📝 Квизы в Google Forms (${externalOnlyQuizzes.length})</h2>`;
    container.appendChild(extHeader);

    externalOnlyQuizzes.forEach(quiz => {
      const isCompleted = userProfile.completedQuizzes.includes(quiz.title);
      const card = document.createElement("div");
      card.className = `quiz-card ${isCompleted ? 'completed' : ''}`;

      const coverHTML = quiz.cover
        ? `<div style="width: 80px; height: 115px; background-image: url('${quiz.cover}'); background-size: cover; background-position: center; border-radius: 8px; box-shadow: var(--box-shadow-soft); margin-bottom: 10px;"></div>`
        : `<div style="width: 80px; height: 115px; background: linear-gradient(135deg,#FFE082,#FFB300); border-radius: 8px; margin-bottom: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem;">📖</div>`;

      card.innerHTML = `
        <div style="position: relative; display: flex; justify-content: center;">
          ${coverHTML}
          ${isCompleted ? '<span class="quiz-badge-completed" style="position: absolute; right: 0; top: 0;">✓</span>' : ''}
        </div>
        <h3 style="font-size: 1rem; font-weight: 700; margin: 5px 0; line-height: 1.3;">${quiz.title}</h3>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 10px;">${quiz.author}</p>
        <p style="font-size: 0.85rem; margin-bottom: 15px;"><strong>+15 баллов</strong> за участие</p>
        <button class="btn btn-primary quiz-start-btn" style="width: 100%; margin-top: auto; background: var(--color-teal);" onclick="awardExternalQuizPoints('${quiz.title.replace(/'/g,"\\'")}', '${quiz.author.replace(/'/g,"\\'")}', '${quiz.quiz_link}')">
          ${isCompleted ? 'Пройти снова' : 'Открыть квиз 📝'}
        </button>
      `;
      container.appendChild(card);
    });
  }
}

// =========== START QUIZ ===========
function startQuiz(quizId) {
  let quiz = QUIZZES.find(q => q.id === quizId);

  if (!quiz && typeof IMPORTED_QUIZZES !== "undefined") {
    const imported = IMPORTED_QUIZZES.find(q => q.id === quizId);
    if (imported) {
      quiz = {
        id: imported.id,
        title: imported.title,
        author: imported.author || "Детский автор",
        icon: "📚",
        points: 15,
        questions: imported.questions,
        isImported: true
      };
    }
  }

  if (!quiz) return;

  activeQuiz = quiz;
  currentQuestionIndex = 0;
  selectedAnswers = [];
  liveCorrectCount = 0;
  answering = false;

  const modal = document.getElementById("quiz-modal");
  modal.classList.add("active");

  renderQuestion();
}

// =========== CLOSE MODAL ===========
function closeQuizModal() {
  const modal = document.getElementById("quiz-modal");
  modal.classList.remove("active");
  activeQuiz = null;
  answering = false;
}

// =========== RENDER QUESTION ===========
function renderQuestion() {
  const questionElement = document.getElementById("quiz-question-text");
  const optionsContainer = document.getElementById("quiz-options-container");
  const progressText = document.getElementById("quiz-progress-text");
  const progressBar = document.getElementById("quiz-modal-progress-fill");
  const modalTitleEl = document.getElementById("quiz-modal-title");

  if (!activeQuiz || !questionElement || !optionsContainer) return;

  const q = activeQuiz.questions[currentQuestionIndex];
  const totalQ = activeQuiz.questions.length;

  // Title
  if (modalTitleEl) modalTitleEl.textContent = activeQuiz.title;

  // Progress
  const progressPercent = Math.round((currentQuestionIndex / totalQ) * 100);
  progressBar.style.width = `${progressPercent}%`;
  progressText.innerText = `Вопрос ${currentQuestionIndex + 1} из ${totalQ} · ✅ ${liveCorrectCount}`;

  // Question
  questionElement.innerText = q.text;
  // Re-trigger animation
  questionElement.style.animation = "none";
  questionElement.offsetHeight; // reflow
  questionElement.style.animation = "";

  // Options
  optionsContainer.innerHTML = "";
  const letters = ["А", "Б", "В", "Г", "Д", "Е"];
  q.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.setAttribute("data-letter", letters[idx] || String(idx + 1));
    btn.setAttribute("data-idx", idx);
    btn.innerText = option;
    btn.onclick = () => {
      if (!answering) selectOption(idx);
    };
    optionsContainer.appendChild(btn);
  });
}

// =========== SELECT OPTION ===========
function selectOption(chosenIdx) {
  if (answering) return;
  answering = true;

  selectedAnswers.push(chosenIdx);

  const q = activeQuiz.questions[currentQuestionIndex];
  const correctIdx = q.answer;
  const isCorrect = chosenIdx === correctIdx;

  if (isCorrect) liveCorrectCount++;

  // Highlight all buttons
  const buttons = document.querySelectorAll(".quiz-option-btn");
  buttons.forEach(btn => {
    btn.disabled = true;
    const idx = parseInt(btn.getAttribute("data-idx"));
    if (idx === correctIdx) {
      btn.classList.add("correct");
    } else if (idx === chosenIdx && !isCorrect) {
      btn.classList.add("wrong");
    }
  });

  // Update progress text immediately
  const progressText = document.getElementById("quiz-progress-text");
  if (progressText) {
    progressText.innerText = `Вопрос ${currentQuestionIndex + 1} из ${activeQuiz.questions.length} · ✅ ${liveCorrectCount}`;
  }

  // Advance after delay
  const delay = isCorrect ? 900 : 1400;
  setTimeout(() => {
    currentQuestionIndex++;
    answering = false;
    if (currentQuestionIndex < activeQuiz.questions.length) {
      renderQuestion();
    } else {
      finishQuiz();
    }
  }, delay);
}

// =========== FINISH QUIZ ===========
function finishQuiz() {
  const resultsContainer = document.getElementById("quiz-options-container");
  const questionElement = document.getElementById("quiz-question-text");
  const progressText = document.getElementById("quiz-progress-text");
  const progressBar = document.getElementById("quiz-modal-progress-fill");

  progressBar.style.width = "100%";
  progressText.innerText = "Викторина завершена! 🎉";

  const total = activeQuiz.questions.length;
  const correct = liveCorrectCount;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const earnedPoints = Math.max(1, Math.round((correct / total) * activeQuiz.points));

  // Stars: 3 = 90%+, 2 = 60%+, 1 = otherwise
  const starCount = pct >= 90 ? 3 : pct >= 60 ? 2 : 1;
  const starHTML = Array.from({length: 3}, (_, i) =>
    `<span class="quiz-result-star" style="${i >= starCount ? 'filter: grayscale(1); opacity:0.25;' : ''}">${i < starCount ? '⭐' : '☆'}</span>`
  ).join('');

  // Class comparison
  let classCompareHTML = "";
  if (currentUserId && currentUserId !== "guest" && userProfile.grade) {
    const classmates = usersDatabase.filter(u => u.grade === userProfile.grade && u.id !== currentUserId);
    const classQuizResults = classmates.map(u => {
      if (!u.quizResults || !u.quizResults[activeQuiz.id]) return null;
      const r = u.quizResults[activeQuiz.id];
      return r.total > 0 ? Math.round((r.score / r.total) * 100) : 0;
    }).filter(x => x !== null);

    if (classQuizResults.length > 0) {
      const avgPct = Math.round(classQuizResults.reduce((a,b) => a+b, 0) / classQuizResults.length);
      const better = classQuizResults.filter(x => pct > x).length;
      const betterPct = Math.round((better / classQuizResults.length) * 100);
      classCompareHTML = `
        <div class="quiz-result-class-compare">
          <h4>📊 Твой результат в классе ${userProfile.grade}</h4>
          <div>Средний результат класса: <strong>${avgPct}%</strong></div>
          <div>Ты лучше, чем <strong>${betterPct}%</strong> одноклассников, которые прошли этот квиз!</div>
        </div>`;
    } else {
      classCompareHTML = `
        <div class="quiz-result-class-compare">
          <h4>🏆 Первый в классе!</h4>
          <div>Ты первый в ${userProfile.grade}, кто прошёл этот квиз. Зови одноклассников посоревноваться!</div>
        </div>`;
    }
  }

  questionElement.innerHTML = `<span style="font-size:1rem; font-weight:500; color:var(--text-secondary);">${activeQuiz.title}</span>`;

  resultsContainer.innerHTML = `
    <div class="quiz-results-summary">
      <div class="quiz-result-stars">${starHTML}</div>
      <div class="quiz-result-score-big">${correct}<span style="font-size:2rem; color: var(--text-secondary);">/${total}</span></div>
      <div class="quiz-result-score-label">правильных ответов (${pct}%)</div>
      <div class="quiz-result-points-earned">+${earnedPoints} баллов заработано! 🌟</div>
      ${classCompareHTML}
      <p class="quiz-result-book-added">📚 Книга «${activeQuiz.title}» добавлена в твой формуляр!</p>
      <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="closeQuizModal(); renderQuizzesList();">Отлично!</button>
        <button class="btn btn-secondary" onclick="closeQuizModal(); window.location.hash='#/profile';">Мой рейтинг 🏆</button>
      </div>
    </div>
  `;

  // Save result to profile
  saveQuizResult(activeQuiz.id, correct, total, earnedPoints);

  // Mark book as read
  markBookAsRead(activeQuiz.title, activeQuiz.author || "");

  // Award badges
  if (!userProfile.badges.includes("first_step")) awardBadge("first_step");
  if (pct === 100 && !userProfile.badges.includes("super_brain")) awardBadge("super_brain");
}

// =========== SAVE QUIZ RESULT ===========
function saveQuizResult(quizId, score, total, points) {
  if (!currentUserId || currentUserId === "guest") return;

  if (!userProfile.quizResults) userProfile.quizResults = {};

  // Check if new personal best
  const prev = userProfile.quizResults[quizId];
  const isNewBest = !prev || score > prev.score;

  userProfile.quizResults[quizId] = {
    score: score,
    total: total,
    points: points,
    pct: total > 0 ? Math.round((score / total) * 100) : 0,
    date: new Date().toLocaleDateString("ru-RU")
  };

  if (!userProfile.completedQuizzes.includes(quizId)) {
    userProfile.completedQuizzes.push(quizId);
  }

  // Award points only for new best or first time
  if (isNewBest) {
    userProfile.points += points;
    const idx = usersDatabase.findIndex(u => u.id === currentUserId);
    if (idx !== -1) usersDatabase[idx] = userProfile;
    localStorage.setItem("lib57_users_db", JSON.stringify(usersDatabase));
    localStorage.setItem("lib57_current_user_id", currentUserId);
    showToast(`+${points} баллов добавлено к рейтингу! 🌟`);
  }

  saveUserProfile();
}

// =========== EXTERNAL QUIZ ARRAY (Google Forms) ===========
const EXTERNAL_QUIZZES = [
  {
    "title": "В стране невыученных уроков",
    "author": "Гераскина Лия",
    "cover": "https://static.tildacdn.com/tild6133-3535-4134-a634-336561326632/image.png",
    "quiz_link": "https://docs.google.com/forms/d/13Qi4lUfVd3gI2aMX7vtRr6XdirXtppzg5cArJvS6Oio/viewform"
  },
  {
    "title": "Весёлая семейка",
    "author": "Николай Носов",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1mS3KkVgxRNelqlmDkNkgR9oTAFG4jlZw5Kien6ea0-o/viewform"
  },
  {
    "title": "Витя Малеев",
    "author": "Николай Носов",
    "cover": "https://static.tildacdn.com/tild3163-3832-4339-a165-343534396462/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1jJNU0Zgf8scpBZiIaU4v7sRufU8VgFBfOro9ZfUeOmk/viewform"
  },
  {
    "title": "Гарри Поттер и Философский камень",
    "author": "Дж. К. Роулинг",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1H3AYObL4qAr6iICpzwF5QpgSCKasyCO1yW1-HhWuUtI/viewform"
  },
  {
    "title": "Дело о пропавшей учительнице",
    "author": "Маша Рупасова",
    "cover": "https://static.tildacdn.com/tild3565-3163-4166-a337-656637383266/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1wPl3JqeKeggCzMSzMgCIjgb1Lj4hNlvnt_OKxe8KUgs/viewform"
  },
  {
    "title": "Джордж и Тайны Вселенной",
    "author": "Хокинг Люси и Стивен",
    "cover": "https://static.tildacdn.com/tild6432-3062-4336-a663-336262633562/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1XPxEqR62W9JQWU6kH6EuN6cAZSxU3Hwarny3FgdXFnw/viewform"
  },
  {
    "title": "Здесь в реальном мире",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1mkC0jau3suzZHomTa77ON8TQkpQ4GmCo-LOIJayF4nA/viewform"
  },
  {
    "title": "Лучше лети Ася Кравченко",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1kQcxJpY3cHvAhwcMGPqt6_fnRw45gcabJlk7pSTbPw4/viewform"
  },
  {
    "title": "Мартин не плачет",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1ohqOe_j1yl0anLyYBGIAHrp_CiNylopEgym4OXSJoaw/viewform"
  },
  {
    "title": "Незнайка на Луне",
    "author": "Николай Носов",
    "cover": "https://static.tildacdn.com/tild3530-3535-4935-a131-623233383163/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1UFQzjfyCkYF66Uw-b5TSWNeK0rnx-8oHFGs7qyPqUIg/viewform"
  },
  {
    "title": "Непоседа, Мякиш и Нетак",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1rWMfAdgfhXV0AX0CGBwh541XGHK93bVv8pP5WTy8eMM/viewform"
  },
  {
    "title": "Приключения Карика и Вали",
    "author": "Ян Ларри",
    "cover": "https://static.tildacdn.com/tild6431-3031-4464-b138-313637663861/image.png",
    "quiz_link": "https://docs.google.com/forms/d/16T8mQ4TYPOh5ETNMSPwjZwtWSFrLiFLB0C_1P1Mp3t8/viewform"
  },
  {
    "title": "Сказки Пушкина А. С.",
    "author": "Александр Пушкин",
    "cover": "https://static.tildacdn.com/tild3762-3331-4139-a538-383464643262/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1h2ZLIapP7oa5Wcw__-6fpL9r9hJsBd9sh8hBkD7nLsI/viewform"
  },
  {
    "title": "Скрипка неизвестного мастера",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3239-3864-4133-a633-333238663831/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1k9BY51ptmhWEfHj_zm5m7ldGqaOwsHjFRAkHcQqnw-I/viewform"
  },
  {
    "title": "Смерть мёртвым душам",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1QiC7TU9y9hil1eedxFQLi_PeZDiaSw74a-92jIxi9U0/viewform"
  },
  {
    "title": "Эмиль из Лённеберги",
    "author": "Линдгрен Астрид",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1t3sqK_d621HZrC5NPboX6gmgu44TbraBcoxnUlFTm0M/viewform"
  },
  {
    "title": "5 похищенных монахов",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1jhx8BBJkeHYWkLUWZQbFomXIVctSdBNVcCI-OkvXEg8/viewform"
  },
  {
    "title": "Принц и нищий",
    "author": "Марк Твен",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1oYpXEVdewVhzqt_tmMZDUPyPHatVXsb4idPUHVaCr3c/viewform"
  },
  {
    "title": "8 детей и грузовик",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1XVbzZtI5EMj9jJrS77j1F7ZEmin9DV85eLGiyhZBeAk/viewform"
  },
  {
    "title": "36 ключей",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1XRE6BfezaKqij_GipPhFUdUOrPRP-E2J-zyLEEWPvUA/viewform"
  },
  {
    "title": "Баранкин, будь человеком",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1tizjCXtubGTHUfXsdCrWOr2FcOa_ZgYPFiLFACk9P8w/viewform"
  },
  {
    "title": "Бесконечная книга",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3430-6161-4838-b464-636536393335/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1Tv16IiVSe1LHz-L6FDhVYAcbLf5vIzPBjRISQysow2E/viewform"
  },
  {
    "title": "Буратино",
    "author": "Алексей Толстой",
    "cover": "https://static.tildacdn.com/tild3038-3934-4233-a161-333465613232/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1WlMfxRNh9hXjeCnjiyMLMfbp3vmW1rIpHV9h4FXbUH4/viewform"
  },
  {
    "title": "Винни-Пух",
    "author": "Алан Милн",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1-X24Zwm40xpTjGWqop3NkYgyi61euCxVWI3hV6dwV_k/viewform"
  },
  {
    "title": "Волшебник Изумрудного города",
    "author": "Волков Александр",
    "cover": "https://static.tildacdn.com/tild6262-6164-4431-b438-313930636431/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1txxZV8_g7PQ9qde_cAnGkyrKaSGXHvHDf67svl4urMs/viewform"
  },
  {
    "title": "Восьмирье 32 августа",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/19tNCvprUh7LKeqounrV8IH-_7uolv6j7WCy0ZFqUxgg/viewform"
  },
  {
    "title": "Время всегда хорошее",
    "author": "Жвалевский, Пастернак",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1ydpsfbYbadQ8ZOPXmRhXBlXsYR3t5RyzE5ehaJI-828/viewform"
  },
  {
    "title": "Гарри Поттер",
    "author": "Дж. К. Роулинг",
    "cover": "https://static.tildacdn.com/tild3033-6430-4533-b066-666164383636/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1vG_KmhuLPD1xXhUVxCPQhsAH--HkKUJOv1LqFTtXtnU/viewform"
  },
  {
    "title": "Глаз волка",
    "author": "Пеннак Даниэль",
    "cover": "https://static.tildacdn.com/tild6531-3532-4232-a465-663533323161/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1KZY5ZyxKoakTthRtP8qt5YOShB5cT9h0kBgscx3tZxU/viewform"
  },
  {
    "title": "Денискины рассказы",
    "author": "Виктор Драгунский",
    "cover": "https://static.tildacdn.com/tild6535-3934-4136-a537-393665643537/image.png",
    "quiz_link": "https://docs.google.com/forms/d/17_JFqKwb3zSMk_xAiQzDmdYxTbKwTBN4u4aNB8bQYcY/viewform"
  },
  {
    "title": "Джельсомино",
    "author": "Джанни Родари",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1viROKLBtsus8i_ZhOoVOinpf-zJTplHRjqgghylV1iQ/viewform"
  },
  {
    "title": "Дикий робот",
    "author": "Браун Питер",
    "cover": "https://static.tildacdn.com/tild6230-6363-4335-b836-316337633231/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1K3muibZwBjOvWE1OxesiRTw7xNDH84LfoOCH-hJxf60/viewform"
  },
  {
    "title": "Дневник фокса Микки 1927",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3730-3730-4330-b763-356132626339/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1zhqrp1iU4FX22AX383GRVGM3CtS3MLdPzYHtOWZ23Ec/viewform"
  },
  {
    "title": "Заметки Гоши Куницына, ученика 4 А класса",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1ukp8lm2E31SddH5g4m9gAsGxbOJoABAudNURM6EmZD0/viewform"
  },
  {
    "title": "Квартетные сказки",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3062-6635-4266-b761-653865316436/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1m9ff0y2PF083mFRAF6ZYUHGyZ6hZ4_H2A7IA2xRkUTs/viewform"
  },
  {
    "title": "Книга Чудомищ",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3462-6564-4539-b964-396530623366/image.png",
    "quiz_link": "https://docs.google.com/forms/d/17EFgbL5bbQ1jRmuIfAE7UYrNU7CtOFIulaptzvYDQY4/viewform"
  },
  {
    "title": "Королевство кривых зеркал",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1LjK5Pvaa4Lu_rWGtiUs8Z_QsE13AWXfcHMKrRiflm9E/viewform"
  },
  {
    "title": "Кубок Огня",
    "author": "Дж. К. Роулинг",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1fB0fPitmnpUVB6O5bFMlD4a3rSI2JuCG_eD-r6zH9BU/viewform"
  },
  {
    "title": "Кыш и Двапортфеля",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1kWGu31bSlDMdrGg9j8NwT5-x_sT3GNhMqTfhtlAoEig/viewform"
  },
  {
    "title": "Лошадь без головы",
    "author": "Берна Поль",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1CbEHT-73rs0da_9dEjaPDZirpITTOHKZ9daM_-sN-aA/viewform"
  },
  {
    "title": "Малыш и Карлсон. Три повести",
    "author": "Линдгрен Астрид",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1ck3UJltR8Kcu4elzHZ-Q6Oy7Dxmszv7zn890UQTHSjw/viewform"
  },
  {
    "title": "Мама-Кот",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3663-3662-4630-b436-666132353937/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1M0G-LBE8_TSsQBWfEdL2P_2NAKrghb64vfwPE4AtfSI/viewform"
  },
  {
    "title": "Маугли",
    "author": "Редьярд Киплинг",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1KZiusS-gVbRmw5wnNeQmTt6T9mwrJrNkR1tkD1oJ4x0/viewform"
  },
  {
    "title": "Между Северной и Южной",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1GtPW0FaJcsCGPPmVezmk8ESkx0hQdQ-zOETOSjaaIKM/viewform"
  },
  {
    "title": "Меховой интернат",
    "author": "Детский автор",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1g80qRLLSU7ophgP3UNGyUCuyCV12Y6JiYFLg8JLncy8/viewform"
  },
  {
    "title": "Мой дедушка был вишней",
    "author": "Нанетти Анджела",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1vkR_4e_NwH_z9kxphQ2zDbRfyi6FnOHeR-LaxHKvDUE/viewform"
  },
  {
    "title": "Момо",
    "author": "Михаэль Энде",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1JnwOc1CJQ_3my8_5x5UkIOEhRMk1oogpGSuJ0xEedjs/viewform"
  },
  {
    "title": "Мышонок Пик",
    "author": "Виталий Бианки",
    "cover": "https://static.tildacdn.com/tild3963-6363-4663-b735-346537393233/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1dtb7aM7LqD5vdZk1yX3qF5FSpMT5OaqQSl-OVFGR-F0/viewform"
  },
  {
    "title": "Мэри Поппинс",
    "author": "П.Л. Трэверс",
    "cover": "",
    "quiz_link": "https://docs.google.com/forms/d/1Q3CeBD7XQW5oWCnvC-85penyLy109JhWleRjJTlYuZk/viewform"
  },
  {
    "title": "Недопёсок",
    "author": "Юрий Коваль",
    "cover": "https://static.tildacdn.com/tild3231-6163-4931-b065-393133363265/image.png",
    "quiz_link": "https://docs.google.com/forms/d/1P1UhWlBmTumpz1r4w5kvNTGE5VHSMEG873S-An2wjmU/viewform"
  }
];
