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
  
  // 1. Секция интерактивных викторин
  const localHeader = document.createElement("div");
  localHeader.className = "quizzes-section-header";
  localHeader.style.gridColumn = "1 / -1";
  localHeader.style.width = "100%";
  localHeader.style.margin = "10px 0";
  localHeader.style.textAlign = "left";
  localHeader.style.borderBottom = "2px solid var(--color-teal)";
  localHeader.style.paddingBottom = "8px";
  localHeader.innerHTML = `<h2 style="font-size: 1.4rem; color: var(--color-teal); display: flex; align-items: center; gap: 8px; margin: 0;">🎮 Интерактивные викторины (на сайте)</h2>`;
  container.appendChild(localHeader);
  
  QUIZZES.forEach(quiz => {
    const isCompleted = userProfile.completedQuizzes.includes(quiz.id);
    const card = document.createElement("div");
    card.className = `quiz-card ${isCompleted ? 'completed' : ''}`;
    
    card.innerHTML = `
      <div class="quiz-card-header" style="position: relative; width: 100%; display: flex; justify-content: center; align-items: center; margin-bottom: 10px;">
        <span class="quiz-icon-large">${quiz.icon}</span>
        ${isCompleted ? '<span class="quiz-badge-completed" style="position: absolute; right: 0; top: 0;">Пройдено ✓</span>' : ''}
      </div>
      <h3 style="font-size: 1.15rem; font-weight: 700; margin: 5px 0;">${quiz.title}</h3>
      <p class="quiz-author" style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 10px;">${quiz.author}</p>
      <p class="quiz-reward" style="font-size: 0.9rem; margin-bottom: 15px;">награда: <strong>+${quiz.points} баллов</strong> 🌟</p>
      <button class="btn btn-primary quiz-start-btn" style="width: 100%; margin-top: auto;" onclick="startQuiz('${quiz.id}')">
        ${isCompleted ? 'Пройти снова' : 'Начать игру!'}
      </button>
    `;
    container.appendChild(card);
  });
  
  // 2. Секция внешних викторин
  const externalHeader = document.createElement("div");
  externalHeader.className = "quizzes-section-header";
  externalHeader.style.gridColumn = "1 / -1";
  externalHeader.style.width = "100%";
  externalHeader.style.margin = "30px 0 10px";
  externalHeader.style.textAlign = "left";
  externalHeader.style.borderBottom = "2px solid var(--color-teal)";
  externalHeader.style.paddingBottom = "8px";
  externalHeader.innerHTML = `<h2 style="font-size: 1.4rem; color: var(--color-teal); display: flex; align-items: center; gap: 8px; margin: 0;">📝 Литературные викторины по книгам (Google Forms)</h2>`;
  container.appendChild(externalHeader);
  
  EXTERNAL_QUIZZES.forEach(quiz => {
    const isCompleted = userProfile.completedQuizzes.includes(quiz.title);
    const card = document.createElement("div");
    card.className = `quiz-card ${isCompleted ? 'completed' : ''}`;
    
    // Отрисовка обложки
    let coverHTML = "";
    if (quiz.cover) {
      coverHTML = `<div class="quiz-cover-img" style="background-image: url('${quiz.cover}'); width: 90px; height: 130px; background-size: cover; background-position: center; border-radius: var(--border-radius-xs); box-shadow: var(--box-shadow-soft); margin-bottom: 10px;"></div>`;
    } else {
      // Ищем жанр в глобальном каталоге для подбора цвета обложки
      let bookInCatalog = null;
      if (typeof uniqueBooks !== 'undefined') {
        bookInCatalog = uniqueBooks.find(b => b.title.toLowerCase() === quiz.title.toLowerCase());
      }
      const genreData = bookInCatalog ? (GENRES[bookInCatalog.genre] || {}) : {};
      const color = genreData.color || 'linear-gradient(135deg, #FFE082, #FFB300)';
      const icon = genreData.icon || '📖';
      coverHTML = `
        <div class="book-cover-css quiz-cover-css" style="background: ${color}; width: 90px; height: 130px; margin-bottom: 10px; border-radius: 4px; box-shadow: var(--box-shadow-soft); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 10px;">
          <div class="book-spine" style="position: absolute; left: 0; top: 0; width: 6px; height: 100%; background: rgba(0,0,0,0.15);"></div>
          <div style="text-align: center; color: white;">
            <div style="font-size: 1.5rem; margin-bottom: 5px;">${icon}</div>
            <div style="font-size: 0.65rem; font-weight: 700; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.1;">${quiz.title}</div>
          </div>
        </div>
      `;
    }
    
    card.innerHTML = `
      <div class="quiz-card-header-external" style="position: relative; width: 100%; display: flex; justify-content: center; align-items: center;">
        ${coverHTML}
        ${isCompleted ? '<span class="quiz-badge-completed" style="position: absolute; right: 0; top: 0;">Пройдено ✓</span>' : ''}
      </div>
      <h3 style="font-size: 1.15rem; font-weight: 700; margin: 5px 0;">${quiz.title}</h3>
      <p class="quiz-author" style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 10px;">${quiz.author}</p>
      <p class="quiz-reward" style="font-size: 0.9rem; margin-bottom: 15px;">награда: <strong>+15 баллов</strong> 🌟</p>
      <button class="btn btn-primary quiz-start-btn" style="width: 100%; margin-top: auto;" onclick="awardExternalQuizPoints('${quiz.title.replace(/'/g, "\'")}', '${quiz.author.replace(/'/g, "\'")}', '${quiz.quiz_link}')">
        ${isCompleted ? 'Пройти снова' : 'Начать квиз! 📝'}
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


const EXTERNAL_QUIZZES = [
  {
    "title": "В стране невыученных уроков",
    "author": "Гераскина Лия",
    "cover": "https://static.tildacdn.com/tild6133-3535-4134-a634-336561326632/image.png",
    "descr": "Нерадивый ученик - мальчик Витя попадает в волшебную страну. Его ждут приключения и смертельные опасности. Придётся решить не одну задачку, чтобы вернуться домой…",
    "quiz_link": "https://docs.google.com/forms/d/13Qi4lUfVd3gI2aMX7vtRr6XdirXtppzg5cArJvS6Oio/viewform?usp=sf_link"
  },
  {
    "title": "Весёлая семейка",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1mS3KkVgxRNelqlmDkNkgR9oTAFG4jlZw5Kien6ea0-o/viewform?usp=sf_link"
  },
  {
    "title": "Витя Малеев",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3163-3832-4339-a165-343534396462/image.png",
    "descr": "О школьных буднях и переживаниях, о преодолении трудностей в учёбе и, конечно, о приключениях, взаимовыручке и о настоящей, крепкой дружбе.",
    "quiz_link": "https://docs.google.com/forms/d/1jJNU0Zgf8scpBZiIaU4v7sRufU8VgFBfOro9ZfUeOmk/viewform?usp=sf_link"
  },
  {
    "title": "Гарри Поттер и Философский камень",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1H3AYObL4qAr6iICpzwF5QpgSCKasyCO1yW1-HhWuUtI/viewform?usp=sf_link"
  },
  {
    "title": "Дело о пропавшей учительнице",
    "author": "Маша Рупасова",
    "cover": "https://static.tildacdn.com/tild3565-3163-4166-a337-656637383266/image.png",
    "descr": "В жизни 6 «А» происходит нечто фантастическое! Во время экскурсии по музею антропологии бесследно исчезает Антонина Ивановна, классный руководитель 6 «А». Одноклассники Миша и Оля начинают собственное детективное расследование. И выясняют, что учительницу нужно искать в далёком прошлом!",
    "quiz_link": "https://docs.google.com/forms/d/1wPl3JqeKeggCzMSzMgCIjgb1Lj4hNlvnt_OKxe8KUgs/viewform?usp=sf_link"
  },
  {
    "title": "Джордж и Тайны Вселенной",
    "author": "Хокинг Люси и Стивен",
    "cover": "https://static.tildacdn.com/tild6432-3062-4336-a663-336262633562/image.png",
    "descr": "Это история о космических приключениях, одиноком мальчике и законах физики, которые управляют этим миром.",
    "quiz_link": "https://docs.google.com/forms/d/1XPxEqR62W9JQWU6kH6EuN6cAZSxU3Hwarny3FgdXFnw/viewform?usp=sf_link"
  },
  {
    "title": "Здесь в реальном мире",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1mkC0jau3suzZHomTa77ON8TQkpQ4GmCo-LOIJayF4nA/viewform?usp=sf_link"
  },
  {
    "title": "Лучше лети Ася Кравченко",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1kQcxJpY3cHvAhwcMGPqt6_fnRw45gcabJlk7pSTbPw4/viewform?usp=sf_link"
  },
  {
    "title": "Мартин не плачет",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1ohqOe_j1yl0anLyYBGIAHrp_CiNylopEgym4OXSJoaw/viewform?usp=sf_link"
  },
  {
    "title": "Незнайка на Луне",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3530-3535-4935-a131-623233383163/image.png",
    "descr": "Продолжение историй про Незнайку, полёт на Луну и встреча с лунными коротышками. Опасности, весёлые моменты и неожиданные повороты событий!",
    "quiz_link": "https://docs.google.com/forms/d/1UFQzjfyCkYF66Uw-b5TSWNeK0rnx-8oHFGs7qyPqUIg/viewform?usp=sf_link"
  },
  {
    "title": "Непоседа, Мякиш и Нетак",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1rWMfAdgfhXV0AX0CGBwh541XGHK93bVv8pP5WTy8eMM/viewform?usp=sf_link"
  },
  {
    "title": "Приключения Карика и Вали",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild6431-3031-4464-b138-313637663861/image.png",
    "descr": "Научно-фантастическая повесть. Дети выпили эликсир и уменьшились. Их унесла стрекоза. Обнаружив пропажу ребят, профессор обо всём догадывается и отправляется на поиски. Путь домой по травяным джунглям окажется не только страшным, но и интересным.",
    "quiz_link": "https://docs.google.com/forms/d/16T8mQ4TYPOh5ETNMSPwjZwtWSFrLiFLB0C_1P1Mp3t8/viewform?usp=sf_link"
  },
  {
    "title": "Сказки Пушкина А. С.",
    "author": "Андерсен Г-Х",
    "cover": "https://static.tildacdn.com/tild3762-3331-4139-a538-383464643262/image.png",
    "descr": "Герои Андерсена добры и отважны, их сердца полны надежды и сострадания. И ещё - любви. Ведь, когда мы любим, жизнь превращается в сказку - удивительную историю с волшебным концом.",
    "quiz_link": "https://docs.google.com/forms/d/1h2ZLIapP7oa5Wcw__-6fpL9r9hJsBd9sh8hBkD7nLsI/viewform?usp=sf_link"
  },
  {
    "title": "Скрипка неизвестного мастера",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3239-3864-4133-a633-333238663831/image.png",
    "descr": "Кешка терпеть не может музыку. Из-за неё он разругался со своим лучшим другом...",
    "quiz_link": "https://docs.google.com/forms/d/1k9BY51ptmhWEfHj_zm5m7ldGqaOwsHjFRAkHcQqnw-I/viewform?usp=sf_link"
  },
  {
    "title": "Смерть мёртвым душам",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1QiC7TU9y9hil1eedxFQLi_PeZDiaSw74a-92jIxi9U0/viewform?usp=sf_link"
  },
  {
    "title": "Эмиль из Лённеберги",
    "author": "Линдгрен Астрид",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1t3sqK_d621HZrC5NPboX6gmgu44TbraBcoxnUlFTm0M/viewform?usp=sf_link"
  },
  {
    "title": "5 похищенных монахов",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1jhx8BBJkeHYWkLUWZQbFomXIVctSdBNVcCI-OkvXEg8/viewform?usp=sf_link"
  },
  {
    "title": "5 Принц и нищий",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1oYpXEVdewVhzqt_tmMZDUPyPHatVXsb4idPUHVaCr3c/viewform?usp=sf_link"
  },
  {
    "title": "8 детей и грузовик",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1XVbzZtI5EMj9jJrS77j1F7ZEmin9DV85eLGiyhZBeAk/viewform?usp=sf_link"
  },
  {
    "title": "36 ключей",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1XRE6BfezaKqij_GipPhFUdUOrPRP-E2J-zyLEEWPvUA/viewform?usp=sf_link"
  },
  {
    "title": "Баранкин, будь человеком",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1tizjCXtubGTHUfXsdCrWOr2FcOa_ZgYPFiLFACk9P8w/viewform?usp=sf_link"
  },
  {
    "title": "Бесконечная книга",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3430-6161-4838-b464-636536393335/image.png",
    "descr": "Он принялся читать и уже не смог оторваться от удивительной истории, погрузившись в которую он сам превратился в героя невероятных, фантастических приключений…",
    "quiz_link": "https://docs.google.com/forms/d/1Tv16IiVSe1LHz-L6FDhVYAcbLf5vIzPBjRISQysow2E/viewform?usp=sf_link"
  },
  {
    "title": "Буратино",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3038-3934-4233-a161-333465613232/image.png",
    "descr": "Увлекательные приключения, страшные злодеи, весёлые герои, добрые друзья и большая тайна, спрятанная на дне пруда…",
    "quiz_link": "https://docs.google.com/forms/d/1WlMfxRNh9hXjeCnjiyMLMfbp3vmW1rIpHV9h4FXbUH4/viewform?usp=sf_link"
  },
  {
    "title": "Винни-Пух",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1-X24Zwm40xpTjGWqop3NkYgyi61euCxVWI3hV6dwV_k/viewform?usp=sf_link"
  },
  {
    "title": "Волшебник Изумрудного города",
    "author": "Волков Александр",
    "cover": "https://static.tildacdn.com/tild6262-6164-4431-b438-313930636431/image.png",
    "descr": "Девочка Элли живёт с мамой, папой и псом Тотошкой в пустынных землях Канзаса. Во время урагана она в поисках Тотошки забегает в домик, который подхватывает ветром и уносит в Волшебную страну.",
    "quiz_link": "https://docs.google.com/forms/d/1txxZV8_g7PQ9qde_cAnGkyrKaSGXHvHDf67svl4urMs/viewform?usp=sf_link"
  },
  {
    "title": "Восьмирье 32 августа",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/19tNCvprUh7LKeqounrV8IH-_7uolv6j7WCy0ZFqUxgg/viewform?usp=sf_link"
  },
  {
    "title": "Время всегда хорошее",
    "author": "Жвалевский, Пастернак",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1ydpsfbYbadQ8ZOPXmRhXBlXsYR3t5RyzE5ehaJI-828/viewform?usp=sf_link"
  },
  {
    "title": "Гарри Поттер",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3033-6430-4533-b066-666164383636/image.png",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1vG_KmhuLPD1xXhUVxCPQhsAH--HkKUJOv1LqFTtXtnU/viewform?usp=sf_link"
  },
  {
    "title": "Глаз волка",
    "author": "Пеннак Даниэль",
    "cover": "https://static.tildacdn.com/tild6531-3532-4232-a465-663533323161/image.png",
    "descr": "В Парижском зоопарке происходят невероятные события: одноглазый полярный Волк и маленький африканский мальчик молча рассказывают друг другу истории, одна удивительнее другой.",
    "quiz_link": "https://docs.google.com/forms/d/1KZY5ZyxKoakTthRtP8qt5YOShB5cT9h0kBgscx3tZxU/viewform?usp=sf_link"
  },
  {
    "title": "Денискины рассказы",
    "author": "Бианки Виталий",
    "cover": "https://static.tildacdn.com/tild6535-3934-4136-a537-393665643537/image.png",
    "descr": "Эти веселые, умные и добрые истории смешат до слез и запоминаются навсегда. Прошло уже полвека, но Дениска Кораблев остается все тем же веселым мальчишкой, который с удовольствием рассказывает читателям свои замечательные истории.",
    "quiz_link": "https://docs.google.com/forms/d/17_JFqKwb3zSMk_xAiQzDmdYxTbKwTBN4u4aNB8bQYcY/viewform?usp=sf_link"
  },
  {
    "title": "Джельсомино",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1viROKLBtsus8i_ZhOoVOinpf-zJTplHRjqgghylV1iQ/viewform?usp=sf_link"
  },
  {
    "title": "Дикий робот",
    "author": "Браун Питер",
    "cover": "https://static.tildacdn.com/tild6230-6363-4335-b836-316337633231/image.png",
    "descr": "Попавшее в шторм судно идет на дно вместе со своим грузом - многочисленными коробками, в которых аккуратно упакованы сотни роботов.",
    "quiz_link": "https://docs.google.com/forms/d/1K3muibZwBjOvWE1OxesiRTw7xNDH84LfoOCH-hJxf60/viewform?usp=sf_link"
  },
  {
    "title": "Дневник фокса Микки 1927",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3730-3730-4330-b763-356132626339/image.png",
    "descr": "В ироничной манере Микки рассказывает о своей полной событий собачьей жизни, о маленькой хозяйке Зине, обо всём, что его окружает.",
    "quiz_link": "https://docs.google.com/forms/d/1zhqrp1iU4FX22AX383GRVGM3CtS3MLdPzYHtOWZ23Ec/viewform?usp=sf_link"
  },
  {
    "title": "Заметки Гоши Куницына, ученика 4 А класса",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1ukp8lm2E31SddH5g4m9gAsGxbOJoABAudNURM6EmZD0/viewform?usp=sf_link"
  },
  {
    "title": "Квартетные сказки",
    "author": "Андерсен Г-Х",
    "cover": "https://static.tildacdn.com/tild3062-6635-4266-b761-653865316436/image.png",
    "descr": "Это история о скрипачке Жене и ее новых друзьях, о силе музыки и волшебстве, которому всегда есть место в обычной жизни.",
    "quiz_link": "https://docs.google.com/forms/d/1m9ff0y2PF083mFRAF6ZYUHGyZ6hZ4_H2A7IA2xRkUTs/viewform?usp=sf_link"
  },
  {
    "title": "Книга Чудомищ",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3462-6564-4539-b964-396530623366/image.png",
    "descr": "Вы открываете дверь в другую реальность и оказываетесь в своем собственном доме, где обитают Неряшля, Жадинг-говядинг, Скисла, Ленивдель и другие существа, о которых вы наверняка слышите впервые. Кто они и откуда там взялись вы узнаете, погостив у чуДОМищ.",
    "quiz_link": "https://docs.google.com/forms/d/17EFgbL5bbQ1jRmuIfAE7UYrNU7CtOFIulaptzvYDQY4/viewform?usp=sf_link"
  },
  {
    "title": "Королевство кривых зеркал",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1LjK5Pvaa4Lu_rWGtiUs8Z_QsE13AWXfcHMKrRiflm9E/viewform?usp=sf_link"
  },
  {
    "title": "Кубок Огня",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1fB0fPitmnpUVB6O5bFMlD4a3rSI2JuCG_eD-r6zH9BU/viewform?usp=sf_link"
  },
  {
    "title": "Кыш и Двапортфеля",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1kWGu31bSlDMdrGg9j8NwT5-x_sT3GNhMqTfhtlAoEig/viewform?usp=sf_link"
  },
  {
    "title": "Лошадь без головы",
    "author": "Берна Поль",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1CbEHT-73rs0da_9dEjaPDZirpITTOHKZ9daM_-sN-aA/viewform?usp=sf_link"
  },
  {
    "title": "Малыш и Карлсон. Три повести",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1ck3UJltR8Kcu4elzHZ-Q6Oy7Dxmszv7zn890UQTHSjw/viewform?usp=sf_link"
  },
  {
    "title": "Мама-Кот",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3663-3662-4630-b436-666132353937/image.png",
    "descr": "Может ли кот высидеть яйцо? А уж тем более научить птенца летать? Конечно же, нет! Но чего не сделаешь, если дал кому-то честное слово…",
    "quiz_link": "https://docs.google.com/forms/d/1M0G-LBE8_TSsQBWfEdL2P_2NAKrghb64vfwPE4AtfSI/viewform?usp=sf_link"
  },
  {
    "title": "Маугли",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1KZiusS-gVbRmw5wnNeQmTt6T9mwrJrNkR1tkD1oJ4x0/viewform?usp=sf_link"
  },
  {
    "title": "Между Северной и Южной",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1GtPW0FaJcsCGPPmVezmk8ESkx0hQdQ-zOETOSjaaIKM/viewform?usp=sf_link"
  },
  {
    "title": "Меховой интернат",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1g80qRLLSU7ophgP3UNGyUCuyCV12Y6JiYFLg8JLncy8/viewform?usp=sf_link"
  },
  {
    "title": "Мой дедушка был вишней",
    "author": "Нанетти Анджела",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1vkR_4e_NwH_z9kxphQ2zDbRfyi6FnOHeR-LaxHKvDUE/viewform?usp=sf_link"
  },
  {
    "title": "Момо",
    "author": "Михаэль Энде",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1JnwOc1CJQ_3my8_5x5UkIOEhRMk1oogpGSuJ0xEedjs/viewform?usp=sf_link"
  },
  {
    "title": "Мышонок Пик",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3963-6363-4663-b735-346537393233/image.png",
    "descr": "Рассказ о крошечном мышонке, который оказался совершенно один на незнакомом острове.",
    "quiz_link": "https://docs.google.com/forms/d/1dtb7aM7LqD5vdZk1yX3qF5FSpMT5OaqQSl-OVFGR-F0/viewform?usp=sf_link"
  },
  {
    "title": "Мэри Поппинс",
    "author": "Детский автор",
    "cover": "",
    "descr": "Увлекательная викторина по книге. Ответь на вопросы формы и заработай баллы!",
    "quiz_link": "https://docs.google.com/forms/d/1Q3CeBD7XQW5oWCnvC-85penyLy109JhWleRjJTlYuZk/viewform?usp=sf_link"
  },
  {
    "title": "Недопёсок",
    "author": "Детский автор",
    "cover": "https://static.tildacdn.com/tild3231-6163-4931-b065-393133363265/image.png",
    "descr": "О молодом песце, недопёске, Наполеоне Третьем, который сбежал со зверофермы и отправился на Северный полюс, на свободу! По пути недопёску встречаются и люди, и звери, друзья и недруги, и маленькому Наполеону приходится самому решать, кому можно доверять, а кому нет",
    "quiz_link": "https://docs.google.com/forms/d/1P1UhWlBmTumpz1r4w5kvNTGE5VHSMEG873S-An2wjmU/viewform?usp=sf_link"
  }
];
