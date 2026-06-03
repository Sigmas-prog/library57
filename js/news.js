// Предопределенные новости библиотеки
const DEFAULT_NEWS = [
  {
    id: 1,
    title: "Встреча Клуба Книголюбов: Рисуем свои комиксы! 🎨",
    date: "05.06.2026",
    category: "Мероприятие",
    summary: "В эту пятницу собираемся в библиотеке, читаем смешные рассказы и рисуем супергероев!",
    content: "Ждем всех ребят из 1–5 классов в пятницу в 15:00 в кабинете №204! На этой встрече мы обсудим самые забавные детские книжки, а потом профессиональный художник-иллюстратор покажет нам, как превратить любимую историю в настоящий комикс. Приноси фломастеры, карандаши и свою фантазию! За участие все получат по +15 баллов в Личный кабинет."
  },
  {
    id: 2,
    title: "Большое пополнение: Космические приключения ждут! 🚀",
    date: "01.06.2026",
    category: "Книжные новинки",
    summary: "В библиотеку поступили новые интерактивные книги про планеты, звёзды и марсоходы.",
    content: "Рады сообщить, что наш книжный фонд пополнился потрясающими энциклопедиями и художественными книгами про космос! Среди новинок: «Резилиенс. Марсоход с большим сердцем» и «Просто космос». Книги полны трехмерных картинок, открывающихся окошек и интерактивных схем. Спеши взять их домой на стойке регистрации!"
  },
  {
    id: 3,
    title: "Ура победителям! Итоги майского марафона чтения 🏆",
    date: "28.05.2026",
    category: "Конкурсы",
    summary: "Подведены итоги конкурса «57 Отважных читателей» за май. Рекорд побит!",
    content: "В мае наши ученики прошли более 450 литературных викторин! Самым активным читателем стал ученик 3 'Б' класса Даниил, набравший рекордные 380 баллов. Он безошибочно ответил на вопросы по 15 книгам! Даниил получил супер-значок «Легенда Чтения» и подарочную книгу с автографом. Начинаем новый марафон в июне — баллы уже обнулились, шансы равны у всех!"
  },
  {
    id: 4,
    title: "Книжная выставка: Сказки народов нашей планеты 🌍",
    date: "22.05.2026",
    category: "Выставка",
    summary: "Приглашаем посетить выставку волшебных историй из разных стран мира.",
    content: "Вы когда-нибудь читали японские или шведские сказки? На этой неделе на центральном выставочном стенде библиотеки представлена уникальная подборка народных сказок со всего земного шара. Сказки научат дружбе, смелости и покажут, как живут дети в разных уголках Земли. Выставка продлится до конца недели, все книги доступны для чтения в зале и на вынос."
  }
];

let newsArticles = [];

// Загрузка новостей (из localStorage или дефолтные)
function loadNews() {
  const saved = localStorage.getItem("lib57_news_articles");
  if (saved) {
    try {
      newsArticles = JSON.parse(saved);
    } catch (e) {
      newsArticles = [...DEFAULT_NEWS];
      saveNews();
    }
  } else {
    newsArticles = [...DEFAULT_NEWS];
    saveNews();
  }
}

function saveNews() {
  localStorage.setItem("lib57_news_articles", JSON.stringify(newsArticles));
}

// Добавление новой новости библиотекарем
function addNewsArticle(title, category, summary, content) {
  const today = new Date();
  const dateStr = today.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
  
  const newArticle = {
    id: Date.now(),
    title,
    date: dateStr,
    category,
    summary,
    content
  };
  
  newsArticles.unshift(newArticle);
  saveNews();
  
  if (window.currentRoute === "news") {
    renderNewsPage();
  }
  return newArticle;
}

// Рендеринг списка новостей на странице
function renderNewsPage() {
  const container = document.getElementById("news-feed-container");
  if (!container) return;
  
  container.innerHTML = "";
  
  newsArticles.forEach(article => {
    const card = document.createElement("div");
    card.className = "news-card";
    
    card.innerHTML = `
      <div class="news-card-meta">
        <span class="news-category-badge">${article.category}</span>
        <span class="news-date">${article.date}</span>
      </div>
      <h2>${article.title}</h2>
      <p class="news-summary">${article.summary}</p>
      <div class="news-details" id="news-details-${article.id}">
        <p>${article.content}</p>
      </div>
      <button class="news-toggle-btn" onclick="toggleNewsDetails(${article.id})">Читать полностью</button>
    `;
    container.appendChild(card);
  });
}

function toggleNewsDetails(id) {
  const details = document.getElementById(`news-details-${id}`);
  const btn = details.nextElementSibling;
  
  if (details.classList.contains("active")) {
    details.classList.remove("active");
    btn.innerText = "Читать полностью";
  } else {
    details.classList.add("active");
    btn.innerText = "Свернуть";
  }
}
