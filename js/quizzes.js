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

let activeQuiz = null;
let currentQuestionIndex = 0;
let selectedAnswers = [];

// Рендеринг викторины в окне игры
function renderQuizzesList() {
  const container = document.getElementById("quiz-list-container");
  if (!container) return;
  
  container.innerHTML = "";
  
  QUIZZES.forEach(quiz => {
    const isCompleted = userProfile.completedQuizzes.includes(quiz.id);
    const card = document.createElement("div");
    card.className = `quiz-card ${isCompleted ? 'completed' : ''}`;
    
    card.innerHTML = `
      <div class="quiz-card-header">
        <span class="quiz-icon-large">${quiz.icon}</span>
        ${isCompleted ? '<span class="quiz-badge-completed">Пройдено ✓</span>' : ''}
      </div>
      <h3>${quiz.title}</h3>
      <p class="quiz-author">${quiz.author}</p>
      <p class="quiz-reward">награда: <strong>+${quiz.points} баллов</strong> 🌟</p>
      <button class="btn btn-primary quiz-start-btn" onclick="startQuiz('${quiz.id}')">
        ${isCompleted ? 'Пройти снова' : 'Начать игру!'}
      </button>
    `;
    container.appendChild(card);
  });
}

function startQuiz(quizId) {
  const quiz = QUIZZES.find(q => q.id === quizId);
  if (!quiz) return;
  
  activeQuiz = quiz;
  currentQuestionIndex = 0;
  selectedAnswers = [];
  
  // Показываем модальное окно викторины
  const modal = document.getElementById("quiz-modal");
  modal.classList.add("active");
  
  renderQuestion();
}

function closeQuizModal() {
  const modal = document.getElementById("quiz-modal");
  modal.classList.remove("active");
  activeQuiz = null;
}

function renderQuestion() {
  const questionElement = document.getElementById("quiz-question-text");
  const optionsContainer = document.getElementById("quiz-options-container");
  const progressText = document.getElementById("quiz-progress-text");
  const progressBar = document.getElementById("quiz-modal-progress-fill");
  
  if (!activeQuiz || !questionElement || !optionsContainer) return;
  
  const question = activeQuiz.questions[currentQuestionIndex];
  questionElement.innerText = question.text;
  
  // Обновление прогресс-бара
  const progressPercent = Math.round((currentQuestionIndex / activeQuiz.questions.length) * 100);
  progressBar.style.width = `${progressPercent}%`;
  progressText.innerText = `Вопрос ${currentQuestionIndex + 1} из ${activeQuiz.questions.length}`;
  
  optionsContainer.innerHTML = "";
  question.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.innerText = option;
    btn.onclick = () => selectOption(idx);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(optionIndex) {
  selectedAnswers.push(optionIndex);
  
  if (currentQuestionIndex + 1 < activeQuiz.questions.length) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const resultsContainer = document.getElementById("quiz-options-container");
  const questionElement = document.getElementById("quiz-question-text");
  const progressText = document.getElementById("quiz-progress-text");
  const progressBar = document.getElementById("quiz-modal-progress-fill");
  
  progressBar.style.width = "100%";
  progressText.innerText = "Викторина завершена!";
  
  // Подсчет правильных ответов
  let correctCount = 0;
  activeQuiz.questions.forEach((q, idx) => {
    if (selectedAnswers[idx] === q.answer) {
      correctCount++;
    }
  });
  
  const isPerfect = correctCount === activeQuiz.questions.length;
  const earnedPoints = Math.round((correctCount / activeQuiz.questions.length) * activeQuiz.points);
  
  // Записываем прохождение
  const firstTime = !userProfile.completedQuizzes.includes(activeQuiz.id);
  if (!userProfile.completedQuizzes.includes(activeQuiz.id)) {
    userProfile.completedQuizzes.push(activeQuiz.id);
  }
  
  // Добавляем книгу в прочитанные
  markBookAsRead(activeQuiz.title, activeQuiz.author);
  
  // Начисляем баллы
  if (earnedPoints > 0) {
    addPoints(earnedPoints);
  }
  
  // Проверка ачивок
  if (!userProfile.badges.includes("first_step")) {
    awardBadge("first_step");
  }
  if (isPerfect && !userProfile.badges.includes("super_brain")) {
    awardBadge("super_brain");
  }
  
  // Показываем результаты в модальном окне
  questionElement.innerHTML = `Отличный результат!`;
  resultsContainer.innerHTML = `
    <div class="quiz-results-summary">
      <div class="quiz-result-score">${correctCount} / ${activeQuiz.questions.length}</div>
      <p>Правильных ответов</p>
      <div class="quiz-result-points">Вы заработали <strong>+${earnedPoints} баллов</strong> 🌟</div>
      <p class="quiz-result-book-added">Книга «${activeQuiz.title}» добавлена в список твоих прочитанных книг! 📚</p>
      <button class="btn btn-primary" onclick="closeQuizModal(); renderQuizzesList();">Отлично!</button>
    </div>
  `;
}
