// Глобальные переменные роутинга
window.currentRoute = "home";

document.addEventListener("DOMContentLoaded", async () => {
  // 1. Инициализация систем данных
  loadUserProfile();
  loadNews();
  await loadCatalog(); // Загружает книги (сначала кеш, потом Sheets)
  
  // 2. Инициализация роутера и навигации
  initRouter();
  initNavigation();
  
  // 3. Инициализация ИИ Чат-виджета
  initAIChat();
  
  // 4. Первичный рендеринг главной страницы
  renderHomePage();

  // Заполняем выпадающие списки классов при инициализации
  const loginGradeSelect = document.getElementById("login-grade");
  const registerGradeSelect = document.getElementById("register-grade");
  const editGradeSelect = document.getElementById("edit-profile-grade");
  
  if (loginGradeSelect && loginGradeSelect.children.length <= 1) {
    CLASSES.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.innerText = c;
      loginGradeSelect.appendChild(opt.cloneNode(true));
      if (registerGradeSelect) registerGradeSelect.appendChild(opt.cloneNode(true));
      if (editGradeSelect) editGradeSelect.appendChild(opt.cloneNode(true));
    });
  }

  
  // 5. Инициализация форм обратной связи и админки
  initFormListeners();
});

// --- Клиентский Роутер (Хэш-роутер) ---
function initRouter() {
  const handleRoute = () => {
    const hash = window.location.hash || "#/home";
    const route = hash.replace("#/", "");
    window.currentRoute = route;
    
    // Переключение классов active для вкладок
    document.querySelectorAll(".page-view").forEach(view => {
      view.classList.remove("active");
    });
    
    const activeView = document.getElementById(`view-${route}`);
    if (activeView) {
      activeView.classList.add("active");
    }
    
    // Подсветка ссылок в меню
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("data-target") === route) {
        link.classList.add("active");
      }
    });
    
    // Прокрутка наверх при смене страницы
    window.scrollTo(0, 0);
    
    // Закрыть мобильное меню при переходе
    const navMenu = document.querySelector(".nav-menu");
    if (navMenu) navMenu.classList.remove("active");
    
    // Вызов специфичных рендереров страниц
    if (route === "catalog") {
      renderCatalogPage();
    } else if (route === "quizzes") {
      renderQuizzesList();
    } else if (route === "profile") {
      updateProfileUI();
    } else if (route === "news") {
      renderNewsPage();
    } else if (route === "home") {
      renderHomePage();
    }
  };
  
  window.addEventListener("hashchange", handleRoute);
  // Первичный вызов при загрузке
  handleRoute();
}

// Привязка кликов меню
function initNavigation() {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      const target = link.getAttribute("data-target");
      window.location.hash = `#/${target}`;
    });
  });
  
  // Бургер меню
  const burger = document.getElementById("burger-toggle-btn");
  const navMenu = document.querySelector(".nav-menu");
  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
}

// --- Рендеринг Главной Страницы ---

// Функция генерации премиальной обложки книги (реальный URL или CSS 3D-книга)
function getBookCoverHTML(book, genreData) {
  if (book.coverUrl) {
    return `<div class="book-cover-img" style="background-image: url('${book.coverUrl}')"></div>`;
  } else {
    return `
      <div class="book-cover-css" style="background: ${genreData.color || 'linear-gradient(135deg, #ddd, #999)'}">
        <div class="book-spine"></div>
        <div class="book-cover-content">
          <span class="book-cover-icon">${genreData.icon || '📖'}</span>
          <div class="book-cover-title-text">${book.title}</div>
          <div class="book-cover-author-text">${book.author || 'Автор'}</div>
        </div>
      </div>
    `;
  }
}

function renderHomePage() {
  // 1. Отрисовка ТОП-7 книг
  const slider = document.getElementById("top-books-slider");
  if (!slider) return;
  slider.innerHTML = "";
  
  // Выбираем детские книги с реальными обложками для Топ-7
  let topBooks = [...uniqueBooks]
    .filter(book => book.coverUrl && !book.title.includes("АГП") && !book.title.includes("Основы") && !book.title.includes("конфликт") && !book.title.includes("патриотич"))
    .sort((a, b) => b.copies - a.copies)
    .slice(0, 7);
    
  if (topBooks.length < 7) {
    const remaining = [...uniqueBooks]
      .filter(book => !topBooks.includes(book) && !book.title.includes("АГП"))
      .sort((a, b) => b.copies - a.copies);
    topBooks = topBooks.concat(remaining.slice(0, 7 - topBooks.length));
  }
    
  topBooks.forEach((book, idx) => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.style.minWidth = "220px";
    card.style.flexShrink = "0";
    
    const genreData = GENRES[book.genre] || { color: "linear-gradient(135deg, #ddd, #999)", icon: "📖" };
    
    // Проверка статуса "Прочитано"
    const isRead = userProfile.readBooks.some(rb => rb.title.toLowerCase() === book.title.toLowerCase());
    
    card.innerHTML = `
      <div class="book-cover-wrapper-card">
        ${getBookCoverHTML(book, genreData)}
        <span class="top-badge-rank">ТОП ${idx + 1}</span>
      </div>
      <div class="book-card-genre">${book.genre}</div>
      <h4 class="book-card-title">${book.title}</h4>
      <p class="book-card-author">${book.author}</p>
      <div class="book-card-footer">
        <span class="book-copies-badge">${book.copies} экз.</span>
        <div class="book-actions-btn">
          ${book.hasQuiz ? 
            `<span class="quiz-indicator-badge" onclick="window.location.hash='#/quizzes'; startQuiz('${book.quizId}')">🎮 Игры</span>` : 
            (book.quizLink ? `<span class="quiz-indicator-badge external-quiz" onclick="awardExternalQuizPoints('${book.title.replace(/'/g, "\\'")}', '${book.author.replace(/'/g, "\\'")}', '${getExternalQuizUrl(book.quizLink).replace(/'/g, "\\'")}')">📝 Квиз</span>` : '')
          }
          <button class="btn-read-toggle" onclick="toggleReadBook('${book.title.replace(/'/g, "\\'")}', '${book.author.replace(/'/g, "\\'")}')">
            ${isRead ? '💚' : '🤍'}
          </button>
        </div>
      </div>
    `;
    slider.appendChild(card);
  });
  
  // 2. Отображение анонсов последних 2-х новостей
  const newsAnnContainer = document.getElementById("home-news-announcements");
  if (newsAnnContainer) {
    newsAnnContainer.innerHTML = "";
    newsArticles.slice(0, 2).forEach(art => {
      const item = document.createElement("div");
      item.className = "home-news-item";
      item.style.background = "#fff";
      item.style.padding = "15px";
      item.style.borderRadius = "12px";
      item.style.boxShadow = "var(--box-shadow-soft)";
      item.style.cursor = "pointer";
      item.onclick = () => { window.location.hash = "#/news"; };
      
      item.innerHTML = `
        <span style="font-size: 0.75rem; color: var(--color-secondary); font-weight: 700;">${art.category} • ${art.date}</span>
        <h4 style="margin: 5px 0; font-size: 1.05rem;">${art.title}</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">${art.summary}</p>
      `;
      newsAnnContainer.appendChild(item);
    });
  }
}

// --- Рендеринг Страницы Каталога ---
let selectedGenre = "";
function renderCatalogPage() {
  const grid = document.getElementById("books-grid-container");
  const countLabel = document.getElementById("catalog-books-count");
  if (!grid) return;
  
  // Рендеринг кнопок жанров, если пустые
  const genreGrid = document.getElementById("genres-cards-grid");
  if (genreGrid && genreGrid.children.length === 0) {
    genreGrid.innerHTML = "";
    
    // Добавляем карточку "Все книги"
    const allCard = document.createElement("div");
    allCard.className = `genre-card ${selectedGenre === "" ? "active" : ""}`;
    allCard.id = "genre-card-all";
    allCard.style.backgroundImage = "url('assets/library_hero.png')";
    allCard.onclick = () => filterByGenre("");
    allCard.innerHTML = `
      <h3>Все книги</h3>
    `;
    genreGrid.appendChild(allCard);
    
    // Добавляем остальные жанры
    Object.keys(GENRES).forEach(genreKey => {
      const g = GENRES[genreKey];
      const card = document.createElement("div");
      card.className = `genre-card ${selectedGenre === genreKey ? "active" : ""}`;
      card.id = `genre-card-${genreKey}`;
      card.style.backgroundImage = `url('${g.cover}')`;
      card.onclick = () => filterByGenre(genreKey);
      
      card.innerHTML = `
        <h3>${genreKey}</h3>
      `;
      genreGrid.appendChild(card);
    });
  }
  
  // Получаем значения фильтров
  const searchVal = document.getElementById("catalog-search").value.toLowerCase();
  const subgenreSelect = document.getElementById("catalog-subgenre-filter");
  const sortVal = document.getElementById("catalog-sort").value;
  
  // Обновление опций поджанров
  if (subgenreSelect) {
    const currentSub = subgenreSelect.value;
    subgenreSelect.innerHTML = `<option value="">Все поджанры</option>`;
    if (selectedGenre && GENRES[selectedGenre].subgenres.length > 0) {
      subgenreSelect.style.display = "block";
      GENRES[selectedGenre].subgenres.forEach(sub => {
        const opt = document.createElement("option");
        opt.value = sub;
        opt.innerText = sub;
        if (sub === currentSub) opt.selected = true;
        subgenreSelect.appendChild(opt);
      });
    } else {
      subgenreSelect.style.display = "none";
    }
  }
  
  const subgenreVal = subgenreSelect ? subgenreSelect.value : "";
  
  // Фильтрация
  let filtered = uniqueBooks.filter(book => {
    const matchesGenre = selectedGenre === "" || book.genre === selectedGenre;
    const matchesSubgenre = subgenreVal === "" || book.subgenre === subgenreVal;
    
    const matchesSearch = book.title.toLowerCase().includes(searchVal) || 
                          book.author.toLowerCase().includes(searchVal) ||
                          book.annotation.toLowerCase().includes(searchVal) ||
                          book.keywords.toLowerCase().includes(searchVal);
                          
    return matchesGenre && matchesSubgenre && matchesSearch;
  });
  
  // Сортировка
  if (sortVal === "title") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortVal === "year") {
    filtered.sort((a, b) => b.year.localeCompare(a.year)); // свежие первыми
  } else if (sortVal === "popularity") {
    filtered.sort((a, b) => b.copies - a.copies); // больше экземпляров - популярнее
  }
  
  // Отрисовка
  grid.innerHTML = "";
  countLabel.innerText = `Найдено книг: ${filtered.length}`;
  
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">
        <span style="font-size: 4rem">🔍</span>
        <h3>Книги не найдены</h3>
        <p>Попробуй написать в поиске что-то другое или спроси совета у ИИ-помощника в чате справа!</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    
    const genreData = GENRES[book.genre] || { color: "linear-gradient(135deg, #ddd, #999)", icon: "📖" };
    
    // Проверяем статус "Прочитано"
    const isRead = userProfile.readBooks.some(rb => rb.title.toLowerCase() === book.title.toLowerCase());
    
    card.innerHTML = `
      <div class="book-cover-wrapper-card">
        ${getBookCoverHTML(book, genreData)}
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="book-card-genre">${book.subgenre || book.genre}</span>
        <span style="font-size:0.8rem; color:var(--text-secondary);">${book.year} г.</span>
      </div>
      <h3 class="book-card-title" title="${book.title}">${book.title}</h3>
      <p class="book-card-author">${book.author}</p>
      <p style="font-size: 0.8rem; color: var(--text-secondary); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom:10px;">${book.annotation}</p>
      <div class="book-card-footer">
        <span class="book-copies-badge">${book.copies} экз.</span>
        <div class="book-actions-btn">
          ${book.hasQuiz ? 
            `<span class="quiz-indicator-badge" onclick="window.location.hash='#/quizzes'; startQuiz('${book.quizId}')">🎮 Викторина</span>` : 
            (book.quizLink ? `<span class="quiz-indicator-badge external-quiz" onclick="awardExternalQuizPoints('${book.title.replace(/'/g, "\\'")}', '${book.author.replace(/'/g, "\\'")}', '${getExternalQuizUrl(book.quizLink).replace(/'/g, "\\'")}')">📝 Викторина</span>` : '')
          }
          <button class="btn-read-toggle" onclick="toggleReadBook('${book.title.replace(/'/g, "\\'")}', '${book.author.replace(/'/g, "\\'")}')">
            ${isRead ? '💚 Прочитано' : '🤍 Хочу прочесть'}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterByGenre(genre) {
  selectedGenre = genre;
  document.querySelectorAll(".genre-card").forEach(c => c.classList.remove("active"));
  if (genre === "") {
    document.getElementById("genre-card-all").classList.add("active");
  } else {
    document.getElementById(`genre-card-${genre}`).classList.add("active");
  }
  // Сбросить поджанр
  const subSelect = document.getElementById("catalog-subgenre-filter");
  if (subSelect) subSelect.value = "";
  
  renderCatalogPage();
}

// Добавить/удалить из прочитанных по клику на сердечко
function toggleReadBook(title, author) {
  const isRead = userProfile.readBooks.some(rb => rb.title.toLowerCase() === title.toLowerCase());
  if (isRead) {
    // Удаляем
    userProfile.readBooks = userProfile.readBooks.filter(rb => rb.title.toLowerCase() !== title.toLowerCase());
    saveUserProfile();
    showToast("Книга удалена из прочитанных 🤍");
  } else {
    // Добавляем
    markBookAsRead(title, author);
  }
  
  // Перерисовать текущий вид
  if (window.currentRoute === "catalog") {
    renderCatalogPage();
  } else if (window.currentRoute === "home") {
    renderHomePage();
  } else if (window.currentRoute === "profile") {
    updateProfileUI();
  }
}

// --- Обновление Личного Кабинета ---
function updateProfileUI() {
  const authContainer = document.getElementById("profile-auth-container");
  const dashContainer = document.getElementById("profile-dashboard-container");
  
  if (!authContainer || !dashContainer) return;
  
  // Если не авторизован (или в гостевом режиме), показываем форму входа
  if (!currentUserId || currentUserId === "guest") {
    authContainer.style.display = "block";
    dashContainer.style.display = "none";
    
    // Заполняем списки классов, если не заполнены
    const loginGradeSelect = document.getElementById("login-grade");
    const registerGradeSelect = document.getElementById("register-grade");
    if (loginGradeSelect && loginGradeSelect.children.length <= 1) {
      CLASSES.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c;
        opt.innerText = c;
        loginGradeSelect.appendChild(opt.cloneNode(true));
        if (registerGradeSelect) registerGradeSelect.appendChild(opt.cloneNode(true));
      });
    }
    return;
  }
  
  // Иначе показываем панель управления
  authContainer.style.display = "none";
  dashContainer.style.display = "block";
  
  // Показываем/скрываем вкладку админа
  const adminTabBtn = document.getElementById("btn-tab-admin-panel");
  if (adminTabBtn) {
    if (userProfile && userProfile.isAdmin) {
      adminTabBtn.style.display = "inline-block";
    } else {
      adminTabBtn.style.display = "none";
    }
  }
  
  // Синхронизируем вкладку "Мой кабинет"
  if (currentDashboardTab === "my-cabinet") {
    const nameLabel = document.getElementById("profile-name-val");
    const gradeLabel = document.getElementById("profile-grade-val");
    const avatarLabel = document.getElementById("profile-avatar-emoji");
    const pointsLabel = document.getElementById("profile-points-val");
    const rankLabel = document.getElementById("profile-rank-badge-val");
    
    if (nameLabel) {
      nameLabel.innerText = userProfile.name;
      gradeLabel.innerText = userProfile.grade;
      avatarLabel.innerText = getAvatarEmoji(userProfile.avatar);
      pointsLabel.innerText = `${userProfile.points} баллов`;
      
      const rank = getCurrentRank();
      rankLabel.innerHTML = `${rank.icon} ${rank.name}`;
      
      // Наполняем инпуты редактирования данных
      const nameInput = document.getElementById("edit-profile-name");
      const gradeSelect = document.getElementById("edit-profile-grade");
      if (nameInput) nameInput.value = userProfile.name;
      if (gradeSelect) {
        gradeSelect.innerHTML = "";
        CLASSES.forEach(c => {
          const opt = document.createElement("option");
          opt.value = c;
          opt.innerText = c;
          if (c === userProfile.grade) opt.selected = true;
          gradeSelect.appendChild(opt);
        });
      }
    }
    
    // Обновление прогресс-бара звания
    const progressData = getNextRankProgress();
    const fill = document.getElementById("profile-progress-fill");
    const desc = document.getElementById("profile-next-rank-desc");
    if (fill && desc) {
      fill.style.width = `${progressData.progress}%`;
      if (progressData.remaining > 0) {
        desc.innerHTML = `Следующий ранг: <strong>${progressData.nextName}</strong> (нужно еще ${progressData.remaining} баллов)`;
      } else {
        desc.innerHTML = `Вы достигли максимального звания! 🎉`;
      }
    }
    
    // Отрисовка списка прочитанных книг
    const tableBody = document.getElementById("read-list-table-body");
    if (tableBody) {
      tableBody.innerHTML = "";
      if (userProfile.readBooks.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--text-secondary); padding: 15px;">Ты пока не отметил ни одной книги. Найди интересную книгу в каталоге и отметь её сердечком! 💚</td></tr>`;
      } else {
        [...userProfile.readBooks].reverse().forEach(b => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td><strong>${b.title}</strong></td>
            <td>${b.author}</td>
            <td style="color:var(--text-secondary); font-size:0.9rem;">${b.date}</td>
          `;
          tableBody.appendChild(tr);
        });
      }
    }
    
    // Обновление сетки достижений (значков)
    const badgesGrid = document.getElementById("badges-grid-container");
    if (badgesGrid) {
      badgesGrid.innerHTML = "";
      BADGES.forEach(badge => {
        const isUnlocked = userProfile.badges.includes(badge.id);
        const item = document.createElement("div");
        item.className = `badge-item ${isUnlocked ? 'unlocked' : ''}`;
        item.innerHTML = `
          <div class="badge-icon">${isUnlocked ? badge.icon : "🔒"}</div>
          <h4>${badge.name}</h4>
          <p>${isUnlocked ? badge.desc : "Секретное достижение"}</p>
        `;
        badgesGrid.appendChild(item);
      });
    }
  } else if (currentDashboardTab === "class-ratings") {
    renderClassRatings();
  } else if (currentDashboardTab === "student-ratings") {
    renderStudentLeaderboard();
  }
}


// --- УПРАВЛЕНИЕ АВТОРИЗАЦИЕЙ И ТАБАМИ ---
let currentDashboardTab = "my-cabinet";

function switchAuthTab(tab) {
  document.querySelectorAll(".auth-tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".auth-form").forEach(form => form.classList.remove("active"));
  
  if (tab === "login") {
    document.getElementById("auth-tab-login-btn").classList.add("active");
    document.getElementById("auth-login-form").classList.add("active");
  } else {
    document.getElementById("auth-tab-register-btn").classList.add("active");
    document.getElementById("auth-register-form").classList.add("active");
    renderRegisterAvatarStrip();
  }
}

function switchDashboardTab(tab) {
  currentDashboardTab = tab;
  document.querySelectorAll(".dash-tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".dash-tab-content").forEach(content => content.classList.remove("active"));
  
  if (tab === "my-cabinet") {
    document.getElementById("btn-tab-my-cabinet").classList.add("active");
    document.getElementById("dash-tab-view-my-cabinet").classList.add("active");
    updateProfileUI();
  } else if (tab === "class-ratings") {
    document.getElementById("btn-tab-class-ratings").classList.add("active");
    document.getElementById("dash-tab-view-class-ratings").classList.add("active");
    renderClassRatings();
  } else if (tab === "student-ratings") {
    document.getElementById("btn-tab-student-ratings").classList.add("active");
    document.getElementById("dash-tab-view-student-ratings").classList.add("active");
    renderStudentLeaderboard();
  } else if (tab === "admin-panel") {
    document.getElementById("btn-tab-admin-panel").classList.add("active");
    document.getElementById("dash-tab-view-admin-panel").classList.add("active");
  }
}

// Заполнение аватарок в форме регистрации
function renderRegisterAvatarStrip() {
  const container = document.getElementById("register-avatar-strip");
  if (!container || container.children.length > 0) return;
  
  AVATARS.forEach(av => {
    const item = document.createElement("div");
    item.className = "avatar-strip-item" + (av.id === "lion" ? " active" : "");
    item.innerText = av.emoji;
    item.title = av.name;
    item.onclick = () => {
      document.querySelectorAll(".avatar-strip-item").forEach(el => el.classList.remove("active"));
      item.classList.add("active");
      document.getElementById("register-avatar-val").value = av.id;
    };
    container.appendChild(item);
  });
}

// Обновление списка подсказок имен для логина при выборе класса
function updateLoginNamesDropdown() {
  const grade = document.getElementById("login-grade").value;
  const nameInput = document.getElementById("login-name");
  const datalist = document.getElementById("login-names-list");
  
  if (!datalist) return;
  datalist.innerHTML = "";
  
  if (!grade) {
    nameInput.placeholder = "Сначала выбери класс";
    return;
  }
  
  nameInput.placeholder = "Введи своё имя...";
  const names = getUsersInClass(grade);
  names.forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    datalist.appendChild(opt);
  });
}

// Рендеринг рейтинга классов
function renderClassRatings() {
  const podiumContainer = document.getElementById("class-podium-container");
  const barsContainer = document.getElementById("class-ratings-bars-list");
  if (!podiumContainer || !barsContainer) return;
  
  const rankings = getClassRankings(); // Массив объектов {className, points}
  
  // 1. Подиум (Топ-3 класса)
  podiumContainer.innerHTML = "";
  
  // Берем топ 3
  const top3 = rankings.slice(0, 3);
  
  // Отрисовываем 2-е место, 1-е место, 3-е место для визуального сходства с пьедесталом
  const order = [1, 0, 2]; // Индексы в массиве top3: 2-е место (индекс 1), 1-е место (индекс 0), 3-е место (индекс 2)
  
  order.forEach(placeIdx => {
    if (placeIdx < top3.length) {
      const item = top3[placeIdx];
      const placeNum = placeIdx + 1;
      const podiumCol = document.createElement("div");
      podiumCol.className = `podium-column place-${placeNum}`;
      
      let cup = "🥇";
      if (placeNum === 2) cup = "🥈";
      if (placeNum === 3) cup = "🥉";
      
      podiumCol.innerHTML = `
        <div class="podium-cup">${cup}</div>
        <div class="podium-class-name">${item.className}</div>
        <div class="podium-pedestal">
          <span class="podium-points">${item.points} б.</span>
        </div>
      `;
      podiumContainer.appendChild(podiumCol);
    }
  });
  
  // 2. Полный список классов в виде прогресс-баров
  barsContainer.innerHTML = "";
  
  // Находим максимальный балл класса для пропорции шкал
  const maxPoints = Math.max(1, ...rankings.map(r => r.points));
  
  rankings.forEach((r, idx) => {
    const barItem = document.createElement("div");
    barItem.className = "class-rating-bar-item";
    
    const percentage = Math.round((r.points / maxPoints) * 100);
    const placeNum = idx + 1;
    
    barItem.innerHTML = `
      <div class="class-bar-info">
        <span class="class-bar-rank">${placeNum}. <strong>Класс ${r.className}</strong></span>
        <span class="class-bar-score">${r.points} баллов</span>
      </div>
      <div class="class-bar-wrapper">
        <div class="class-bar-fill" style="width: ${percentage}%; background: var(--gradient-teal);"></div>
      </div>
    `;
    barsContainer.appendChild(barItem);
  });
}

// Рендеринг таблицы лидеров-учеников
function renderStudentLeaderboard() {
  const tableBody = document.getElementById("student-leaderboard-table-body");
  const filterSelect = document.getElementById("leaderboard-class-filter");
  if (!tableBody) return;
  
  // Заполняем фильтр классов, если пустой
  if (filterSelect && filterSelect.children.length === 1) {
    CLASSES.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.innerText = c;
      filterSelect.appendChild(opt);
    });
  }
  
  const selectedGrade = filterSelect ? filterSelect.value : "";
  const students = getStudentLeaderboard(selectedGrade);
  
  tableBody.innerHTML = "";
  if (students.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-secondary); padding: 20px;">Нет зарегистрированных учеников в этом классе</td></tr>`;
    return;
  }
  
  students.forEach((student, idx) => {
    const tr = document.createElement("tr");
    if (student.id === currentUserId) {
      tr.style.background = "#E0F2F1"; // подсветить текущего вошедшего
    }
    
    const place = idx + 1;
    let placeHTML = `${place}`;
    if (place === 1) placeHTML = "🥇";
    else if (place === 2) placeHTML = "🥈";
    else if (place === 3) placeHTML = "🥉";
    
    // Получить ранг звания
    let studentPoints = student.points;
    let activeRank = RANKS[0];
    for (const rank of RANKS) {
      if (studentPoints >= rank.minPoints) {
        activeRank = rank;
      }
    }
    
    tr.innerHTML = `
      <td style="text-align: center; font-weight: bold; font-size: 1.1rem;">${placeHTML}</td>
      <td style="font-weight: 600;">
        ${getAvatarEmoji(student.avatar)} ${student.name} ${student.id === currentUserId ? '<span class="you-badge">Ты</span>' : ''}
      </td>
      <td style="text-align: center; font-weight: bold; color: var(--color-teal);">${student.grade}</td>
      <td style="text-align: center; font-size: 0.85rem;">${activeRank.icon} ${activeRank.name}</td>
      <td style="text-align: right; font-weight: bold; padding-right:20px; color: var(--color-orange);">${student.points}</td>
    `;
    tableBody.appendChild(tr);
  });
}


// --- Выбор Аватарки ---
function openAvatarModal() {
  const modal = document.getElementById("avatar-modal");
  if (!modal) return;
  modal.classList.add("active");
  
  const container = document.getElementById("avatar-modal-grid");
  container.innerHTML = "";
  
  AVATARS.forEach(av => {
    const item = document.createElement("div");
    item.className = "avatar-select-item";
    item.innerText = av.emoji;
    item.title = av.name;
    item.onclick = () => {
      userProfile.avatar = av.id;
      saveUserProfile();
      modal.classList.remove("active");
      showToast(`Выбран аватар: ${av.name} ${av.emoji}`);
    };
    container.appendChild(item);
  });
}

function closeAvatarModal() {
  const modal = document.getElementById("avatar-modal");
  if (modal) modal.classList.remove("active");
}

// --- Слушатели форм: Обратная связь и Админка ---
function initFormListeners() {

  // 1. Форма логина
  const loginForm = document.getElementById("auth-login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const grade = document.getElementById("login-grade").value;
      const name = document.getElementById("login-name").value;
      const password = document.getElementById("login-password").value;
      
      if (grade && name && password) {
        const res = loginUser(grade, name, password);
        if (res.success) {
          showToast(`Добро пожаловать, ${res.user.name}! 🦁`);
          // Сбросить форму
          loginForm.reset();
          updateLoginNamesDropdown();
          // Перейти на вкладку кабинета
          switchDashboardTab('my-cabinet');
        } else {
          showToast(res.message + " ❌");
        }
      }
    });
  }

  // 2. Форма регистрации
  const registerForm = document.getElementById("auth-register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("register-name").value.trim();
      const grade = document.getElementById("register-grade").value;
      const avatar = document.getElementById("register-avatar-val").value;
      const password = document.getElementById("register-password").value;
      
      if (name && grade && password) {
        const res = registerUser(name, grade, password, avatar);
        if (res.success) {
          showToast(`Регистрация успешна! Привет, ${res.user.name}! 🌱`);
          registerForm.reset();
          switchDashboardTab('my-cabinet');
        } else {
          showToast(res.message + " ❌");
        }
      }
    });
  }

  // 1. Форма редактирования профиля
  const editProfileForm = document.getElementById("edit-profile-form");
  if (editProfileForm) {
    editProfileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("edit-profile-name");
      const gradeSelect = document.getElementById("edit-profile-grade");
      
      if (nameInput.value.trim()) {
        userProfile.name = nameInput.value.trim();
        userProfile.grade = gradeSelect.value;
        saveUserProfile();
        showToast("Профиль успешно обновлен! 👍");
      }
    });
  }
  
  // 2. Форма обратной связи в контактах
  const feedbackForm = document.getElementById("contacts-feedback-form");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("feedback-name").value.trim();
      const email = document.getElementById("feedback-email").value.trim();
      const msg = document.getElementById("feedback-message").value.trim();
      
      if (name && msg) {
        // Симулируем отправку сообщения
        const messages = JSON.parse(localStorage.getItem("lib57_librarian_messages") || "[]");
        messages.push({ name, email, msg, date: new Date().toLocaleString() });
        localStorage.setItem("lib57_librarian_messages", JSON.stringify(messages));
        
        feedbackForm.reset();
        showToast("Сообщение отправлено библиотекарю! ✉️");
      }
    });
  }
  
  // 3. Форма добавления новости (Админка библиотекаря)
  const addNewsForm = document.getElementById("admin-add-news-form");
  if (addNewsForm) {
    addNewsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("admin-news-title").value.trim();
      const category = document.getElementById("admin-news-category").value;
      const summary = document.getElementById("admin-news-summary").value.trim();
      const content = document.getElementById("admin-news-content").value.trim();
      
      if (title && summary && content) {
        addNewsArticle(title, category, summary, content);
        addNewsForm.reset();
        showToast("Новость успешно добавлена в ленту! 📢");
      }
    });
  }
}
window.openAvatarModal = openAvatarModal;
window.closeAvatarModal = closeAvatarModal;
window.startQuiz = startQuiz;
window.closeQuizModal = closeQuizModal;
window.toggleReadBook = toggleReadBook;
window.filterByGenre = filterByGenre;

// Оверлей создания/кредитов сайта
function showCreditsAlert() {
  const creditsOverlay = document.createElement("div");
  creditsOverlay.className = "quiz-modal active";
  creditsOverlay.id = "credits-overlay";
  creditsOverlay.innerHTML = `
    <div class="quiz-modal-box" style="text-align: center; max-width: 480px; animation: scaleUp 0.25s ease;">
      <button class="quiz-modal-close" onclick="document.getElementById('credits-overlay').remove()">✕</button>
      <span style="font-size: 3rem">👥</span>
      <h2 style="margin: 10px 0 15px;">Над сайтом работали</h2>
      <div style="display: flex; flex-direction: column; gap: 15px; text-align: left; font-size: 0.95rem;">
        <div style="background: #F5F7F8; padding: 12px; border-radius: 8px;">
          <strong>Руководитель проекта:</strong><br>
          Библиотекарь начальной школы ГБОУ Школа №57 (г. Москва)
        </div>
        <div style="background: #F5F7F8; padding: 12px; border-radius: 8px;">
          <strong>Разработка и интерактивный ИИ:</strong><br>
          Команда программирования Antigravity AI
        </div>
        <div style="background: #F5F7F8; padding: 12px; border-radius: 8px;">
          <strong>Техническая поддержка:</strong><br>
          Учителя информатики и юные программисты Школы №57
        </div>
      </div>
      <button class="btn btn-primary" onclick="document.getElementById('credits-overlay').remove()" style="width: 100%; margin-top: 20px;">Отлично, спасибо!</button>
    </div>
  `;
  document.body.appendChild(creditsOverlay);
}
window.showCreditsAlert = showCreditsAlert;

// Вспомогательные функции для внешних викторин Tilda
function getExternalQuizUrl(quizLink) {
  if (!quizLink) return "";
  if (quizLink.startsWith("http://") || quizLink.startsWith("https://")) {
    return quizLink;
  }
  const cleanLink = quizLink.startsWith("/") ? quizLink.slice(1) : quizLink;
  return "http://biblioteka57.tilda.ws/" + cleanLink;
}

function awardExternalQuizPoints(title, author, quizLink) {
  if (!currentUserId || currentUserId === "guest") {
    showToast("Войди в кабинет, чтобы получить 15 баллов за прохождение квиза! 🦁");
    setTimeout(() => {
      window.open(quizLink, "_blank");
    }, 1500);
    return;
  }
  
  // Отмечаем книгу как прочитанную (+10 баллов, если не прочитана)
  markBookAsRead(title, author);
  
  // Добавляем +15 баллов за прохождение самого квиза
  addPoints(15);
  
  showToast(`Запуск квиза! Тебе начислено +15 баллов за участие! 🌟`);
  
  // Открываем квиз в новой вкладке
  window.open(quizLink, "_blank");
}

window.getExternalQuizUrl = getExternalQuizUrl;
window.awardExternalQuizPoints = awardExternalQuizPoints;

window.switchAuthTab = switchAuthTab;
window.switchDashboardTab = switchDashboardTab;
window.updateLoginNamesDropdown = updateLoginNamesDropdown;
window.renderStudentLeaderboard = renderStudentLeaderboard;
window.logoutUser = logoutUser;
