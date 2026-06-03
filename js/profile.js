// Список аватарок для выбора детьми
const AVATARS = [
  { id: "lion", emoji: "🦁", name: "Храбрый Лев" },
  { id: "owl", emoji: "🦉", name: "Мудрая Сова" },
  { id: "panda", emoji: "🐼", name: "Сонная Панда" },
  { id: "fox", emoji: "🦊", name: "Хитрая Лиса" },
  { id: "raccoon", emoji: "🦝", name: "Любопытный Енот" },
  { id: "penguin", emoji: "🐧", name: "Стильный Пингвин" },
  { id: "cat", emoji: "🐱", name: "Мягкий Котик" },
  { id: "dog", emoji: "🐶", name: "Верный Пёсик" }
];

// Достижения (значки)
const BADGES = [
  { id: "first_step", name: "Первый Шаг", icon: "🌱", desc: "Пройдена первая викторина!" },
  { id: "knowledge_hunter", name: "Охотник за Знаниями", icon: "🏹", desc: "Набрано более 50 призовых баллов." },
  { id: "bookworm", name: "Книжный Кот", icon: "🐈", desc: "Прочитано 5 и более книг из каталога." },
  { id: "super_brain", name: "Супермозг", icon: "🧠", desc: "Пройдена викторина без единой ошибки." },
  { id: "robot_friend", name: "Друг Роботов", icon: "🦾", desc: "Прочитана книга о роботах или технологиях." },
  { id: "space_explorer", name: "Звездный Штурман", icon: "🪐", desc: "Прочитана книга на космическую тему." }
];

// Ранги (звания) читателей в зависимости от баллов
const RANKS = [
  { minPoints: 0, name: "Книжный Новобранец", icon: "🎒" },
  { minPoints: 30, name: "Искатель Историй", icon: "🗺️" },
  { minPoints: 80, name: "Книжный Следопыт", icon: "🏹" },
  { minPoints: 150, name: "Мастер Чтения", icon: "👑" },
  { minPoints: 300, name: "Отважный Книгоход 57", icon: "🚀" }
];

// Доступные классы
const CLASSES = [
  "1 «А»", "1 «Б»", 
  "2 «А»", "2 «Б»", 
  "3 «А»", "3 «Б»", 
  "4 «А»", "4 «Б»", 
  "5 «А»", "5 «Б»"
];

// Глобальная база данных пользователей и текущая сессия
let usersDatabase = [];
let currentUserId = null;
let userProfile = null; // Будет указывать на текущего авторизованного пользователя или гостя

// Инициализация базы данных пользователей и сидирование mock-данных
function initUsersDatabase() {
  const savedUsers = localStorage.getItem("lib57_users_db");
  const savedSession = localStorage.getItem("lib57_current_user_id");
  
  if (savedUsers) {
    try {
      usersDatabase = JSON.parse(savedUsers);
    } catch (e) {
      console.error("Error parsing users database, resetting...", e);
      usersDatabase = [];
    }
  }
  
  // Если база данных пуста, заполняем её mock-пользователями
  if (usersDatabase.length === 0) {
    seedMockUsers();
  }
  
  // Восстановление сессии
  if (savedSession && usersDatabase.some(u => u.id === savedSession)) {
    currentUserId = savedSession;
    userProfile = usersDatabase.find(u => u.id === currentUserId);
  } else {
    // Вход в режиме гостя по умолчанию
    currentUserId = null;
    userProfile = {
      id: "guest",
      name: "Гость",
      grade: "1 «А»",
      avatar: "lion",
      points: 0,
      readBooks: [],
      badges: [],
      completedQuizzes: []
    };
  }
}

// Заполнение базы данных вымышленными учениками для рейтингов
function seedMockUsers() {
  const mockUsers = [
    {
      id: "mock_vanya",
      name: "Ваня Иванов",
      grade: "2 «А»",
      avatar: "lion",
      points: 180,
      password: "123",
      readBooks: [
        { title: "Волшебник Изумрудного Города", author: "Александр Волков", date: "15.05.2026" },
        { title: "Дело о пропавшей учительнице", author: "Маша Рупасова", date: "20.05.2026" },
        { title: "Незнайка на Луне", author: "Николай Носов", date: "28.05.2026" }
      ],
      badges: ["first_step", "knowledge_hunter"],
      completedQuizzes: ["Волшебник изумрудного города"]
    },
    {
      id: "mock_masha",
      name: "Маша Петрова",
      grade: "1 «А»",
      avatar: "cat",
      points: 120,
      password: "123",
      readBooks: [
        { title: "Русские народные сказки", author: "Не указан", date: "10.05.2026" },
        { title: "Славянская чудо-юдология", author: "Анна Никольская", date: "22.05.2026" }
      ],
      badges: ["first_step"],
      completedQuizzes: ["Сказки"]
    },
    {
      id: "mock_nikita",
      name: "Никита Сергеев",
      grade: "2 «Б»",
      avatar: "fox",
      points: 150,
      password: "123",
      readBooks: [
        { title: "Робин Гуд", author: "Михаил Гершензон", date: "02.05.2026" }
      ],
      badges: ["first_step", "knowledge_hunter"],
      completedQuizzes: ["Робин Гуд"]
    },
    {
      id: "mock_sonya",
      name: "Соня Смирнова",
      grade: "1 «Б»",
      avatar: "panda",
      points: 90,
      password: "123",
      readBooks: [
        { title: "Сказки про мам", author: "Сергей Седов", date: "18.05.2026" }
      ],
      badges: [],
      completedQuizzes: []
    },
    {
      id: "mock_danya",
      name: "Даня Козлов",
      grade: "3 «А»",
      avatar: "dog",
      points: 220,
      password: "123",
      readBooks: [
        { title: "Затерянный мир", author: "Артур Конан Дойл", date: "05.05.2026" },
        { title: "Джордж и тайны Вселенной", author: "Люси и Стивен Хокинг", date: "12.05.2026" }
      ],
      badges: ["first_step", "knowledge_hunter", "space_explorer"],
      completedQuizzes: ["Затерянный мир"]
    },
    {
      id: "mock_katya",
      name: "Катя Кузнецова",
      grade: "4 «А»",
      avatar: "owl",
      points: 290,
      password: "123",
      readBooks: [
        { title: "Дикий робот.", author: "Питер Браун", date: "01.05.2026" },
        { title: "Приключения Электроника", author: "Евгений Велтистов", date: "10.05.2026" }
      ],
      badges: ["first_step", "knowledge_hunter", "robot_friend", "super_brain"],
      completedQuizzes: ["Дикий робот", "Приключения Электроника"]
    },
    {
      id: "mock_artem",
      name: "Артем Морозов",
      grade: "5 «А»",
      avatar: "raccoon",
      points: 240,
      password: "123",
      readBooks: [
        { title: "Хоббит", author: "Джон Толкин", date: "24.04.2026" }
      ],
      badges: ["first_step", "knowledge_hunter"],
      completedQuizzes: []
    },
    {
      id: "mock_liza",
      name: "Лиза Попова",
      grade: "2 «А»",
      avatar: "penguin",
      points: 95,
      password: "123",
      readBooks: [
        { title: "Секрет серебряных подков", author: "Холли Вебб", date: "14.05.2026" }
      ],
      badges: [],
      completedQuizzes: []
    },
    {
      id: "mock_misha",
      name: "Миша Соколов",
      grade: "1 «А»",
      avatar: "dog",
      points: 70,
      password: "123",
      readBooks: [
        { title: "Мы живем в Древнем Риме", author: "Виктор Сонькин", date: "09.05.2026" }
      ],
      badges: [],
      completedQuizzes: []
    },
    {
      id: "mock_anya",
      name: "Аня Лебедева",
      grade: "3 «А»",
      avatar: "cat",
      points: 110,
      password: "123",
      readBooks: [
        { title: "Мой дедушка был вишней", author: "Анджела Нанетти", date: "25.04.2026" }
      ],
      badges: ["first_step"],
      completedQuizzes: []
    },
    {
      id: "mock_roma",
      name: "Рома Федоров",
      grade: "4 «А»",
      avatar: "lion",
      points: 130,
      password: "123",
      readBooks: [
        { title: "Как приручить дракона. Книга 1", author: "Крессида Коуэлл", date: "11.05.2026" }
      ],
      badges: ["first_step"],
      completedQuizzes: []
    },
    {
      id: "mock_yulya",
      name: "Юля Васильева",
      grade: "2 «Б»",
      avatar: "fox",
      points: 80,
      password: "123",
      readBooks: [
        { title: "Бабушка! - кричит Фридер", author: "Гудрун Мебс", date: "07.05.2026" }
      ],
      badges: [],
      completedQuizzes: []
    },
    {
      id: "mock_sasha",
      name: "Саша Воробьев",
      grade: "1 «Б»",
      avatar: "raccoon",
      points: 50,
      password: "123",
      readBooks: [
        { title: "Дино-парк", author: "Арно Плюмери", date: "19.05.2026" }
      ],
      badges: [],
      completedQuizzes: []
    }
  ];
  
  usersDatabase = mockUsers;
  localStorage.setItem("lib57_users_db", JSON.stringify(usersDatabase));
}

// Загрузка (переопределение старой функции для обратной совместимости)
function loadUserProfile() {
  initUsersDatabase();
}

// Сохранение в localStorage текущего вошедшего пользователя
function saveUserProfile() {
  if (currentUserId && currentUserId !== "guest") {
    // Находим индекс пользователя в базе и обновляем его данные
    const idx = usersDatabase.findIndex(u => u.id === currentUserId);
    if (idx !== -1) {
      usersDatabase[idx] = userProfile;
      localStorage.setItem("lib57_users_db", JSON.stringify(usersDatabase));
    }
  }
  
  // Вызов триггера обновления интерфейса
  if (window.updateProfileUI) {
    window.updateProfileUI();
  }
}

// Регистрация нового ученика
function registerUser(name, grade, password, avatar = "lion") {
  // Проверка: уникальность имени в пределах класса
  const exists = usersDatabase.some(u => u.name.toLowerCase() === name.toLowerCase() && u.grade === grade);
  if (exists) {
    return { success: false, message: `Ученик с именем "${name}" уже зарегистрирован в ${grade}!` };
  }
  
  const newId = "user_" + Date.now();
  const newUser = {
    id: newId,
    name: name.trim(),
    grade: grade,
    avatar: avatar,
    points: 0,
    password: password,
    readBooks: [],
    badges: [],
    completedQuizzes: []
  };
  
  usersDatabase.push(newUser);
  localStorage.setItem("lib57_users_db", JSON.stringify(usersDatabase));
  
  // Автоматический вход после регистрации
  currentUserId = newId;
  userProfile = newUser;
  localStorage.setItem("lib57_current_user_id", newId);
  
  saveUserProfile();
  return { success: true, user: newUser };
}

// Авторизация ученика
function loginUser(grade, name, password) {
  // Проверяем админский логин
  if (name.trim().toLowerCase() === "лиди нефф" && password === "admin") {
    let adminUser = usersDatabase.find(u => u.id === "admin_lidi");
    if (!adminUser) {
      adminUser = {
        id: "admin_lidi",
        name: "Лиди Нефф",
        grade: "Библиотекарь",
        avatar: "owl",
        points: 999,
        password: "admin",
        readBooks: [],
        badges: ["first_step", "knowledge_hunter", "bookworm", "super_brain"],
        completedQuizzes: [],
        isAdmin: true
      };
      usersDatabase.push(adminUser);
      localStorage.setItem("lib57_users_db", JSON.stringify(usersDatabase));
    }
    
    currentUserId = adminUser.id;
    userProfile = adminUser;
    localStorage.setItem("lib57_current_user_id", adminUser.id);
    
    if (window.updateProfileUI) window.updateProfileUI();
    return { success: true, user: adminUser };
  }

  const user = usersDatabase.find(u => u.grade === grade && u.name.toLowerCase() === name.toLowerCase());
  
  if (!user) {
    return { success: false, message: `Ученик "${name}" не найден в классе ${grade}!` };
  }
  
  if (user.password !== password) {
    return { success: false, message: "Неверный пароль!" };
  }
  
  currentUserId = user.id;
  userProfile = user;
  localStorage.setItem("lib57_current_user_id", user.id);
  
  // Обновляем интерфейс
  if (window.updateProfileUI) window.updateProfileUI();
  return { success: true, user: user };
}

// Выход из профиля
function logoutUser() {
  currentUserId = null;
  localStorage.removeItem("lib57_current_user_id");
  
  // Возвращаем гостевой режим
  userProfile = {
    id: "guest",
    name: "Гость",
    grade: "1 «А»",
    avatar: "lion",
    points: 0,
    readBooks: [],
    badges: [],
    completedQuizzes: []
  };
  
  if (window.updateProfileUI) window.updateProfileUI();
}

// Получить список учеников для конкретного класса (для выпадающего списка при входе)
function getUsersInClass(grade) {
  return usersDatabase.filter(u => u.grade === grade).map(u => u.name);
}

// Расчет рейтинга классов (сумма баллов учеников)
function getClassRankings() {
  const rankings = {};
  
  // Инициализируем нулями все известные классы
  CLASSES.forEach(c => {
    rankings[c] = 0;
  });
  
  // Суммируем баллы учеников
  usersDatabase.forEach(user => {
    if (rankings[user.grade] !== undefined) {
      rankings[user.grade] += user.points;
    } else {
      rankings[user.grade] = user.points;
    }
  });
  
  // Превращаем в массив и сортируем по убыванию баллов
  return Object.keys(rankings).map(className => ({
    className: className,
    points: rankings[className]
  })).sort((a, b) => b.points - a.points);
}

// Получить рейтинг всех учеников (с фильтрацией)
function getStudentLeaderboard(gradeFilter = "") {
  let list = [...usersDatabase];
  if (gradeFilter) {
    list = list.filter(u => u.grade === gradeFilter);
  }
  // Сортируем по очкам
  return list.sort((a, b) => b.points - a.points);
}

// Получить аватарку по ID
function getAvatarEmoji(avatarId) {
  const av = AVATARS.find(a => a.id === avatarId);
  return av ? av.emoji : "🦁";
}

// Начисление баллов
function addPoints(amount) {
  if (currentUserId === null || currentUserId === "guest") {
    showToast("Баллы начисляются только вошедшим ученикам! Войди в кабинет 🦁");
    return;
  }
  
  userProfile.points += amount;
  
  // Проверка на значок "Охотник за Знаниями"
  if (userProfile.points >= 50 && !userProfile.badges.includes("knowledge_hunter")) {
    awardBadge("knowledge_hunter");
  }
  
  saveUserProfile();
  showToast(`Получено +${amount} баллов! 🌟`);
}

// Награждение значком
function awardBadge(badgeId) {
  if (currentUserId === null || currentUserId === "guest") return;
  
  if (!userProfile.badges.includes(badgeId)) {
    userProfile.badges.push(badgeId);
    saveUserProfile();
    
    const badge = BADGES.find(b => b.id === badgeId);
    if (badge) {
      showBadgeAlert(badge);
    }
  }
}

// Добавление книги в прочитанные
function markBookAsRead(title, author) {
  if (currentUserId === null || currentUserId === "guest") {
    showToast("Войди в свой кабинет, чтобы собирать прочитанные книги! 🦁");
    return false;
  }
  
  const alreadyRead = userProfile.readBooks.some(b => b.title.toLowerCase() === title.toLowerCase());
  
  if (!alreadyRead) {
    const today = new Date();
    const dateStr = today.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
    
    userProfile.readBooks.push({
      title: title,
      author: author,
      date: dateStr
    });
    
    // Проверка на значки
    if (userProfile.readBooks.length >= 5 && !userProfile.badges.includes("bookworm")) {
      awardBadge("bookworm");
    }
    
    // Проверка жанровых значков по классификатору
    const t = title.toLowerCase();
    if (t.includes("робот") || t.includes("электроник")) {
      awardBadge("robot_friend");
    }
    if (t.includes("космос") || t.includes("планет") || t.includes("марсоход")) {
      awardBadge("space_explorer");
    }
    
    addPoints(10); // 10 баллов за каждую прочитанную книгу!
    saveUserProfile();
    return true;
  }
  return false;
}

// Получить текущее звание
function getCurrentRank() {
  let activeRank = RANKS[0];
  for (const rank of RANKS) {
    if (userProfile.points >= rank.minPoints) {
      activeRank = rank;
    }
  }
  return activeRank;
}

// Получить прогресс до следующего звания
function getNextRankProgress() {
  const currentPoints = userProfile.points;
  let nextRank = null;
  let currentRank = RANKS[0];
  
  for (let i = 0; i < RANKS.length; i++) {
    if (currentPoints >= RANKS[i].minPoints) {
      currentRank = RANKS[i];
      nextRank = RANKS[i + 1] || null;
    }
  }
  
  if (!nextRank) {
    return { progress: 100, nextPoints: currentPoints, remaining: 0, nextName: "Максимум!" };
  }
  
  const range = nextRank.minPoints - currentRank.minPoints;
  const currentOffset = currentPoints - currentRank.minPoints;
  const progress = Math.min(100, Math.max(0, Math.round((currentOffset / range) * 100)));
  const remaining = nextRank.minPoints - currentPoints;
  
  return {
    progress: progress,
    nextPoints: nextRank.minPoints,
    remaining: remaining,
    nextName: nextRank.name + " " + nextRank.icon
  };
}

// Вспомогательный баннер достижений
function showBadgeAlert(badge) {
  const alertDiv = document.createElement("div");
  alertDiv.className = "badge-unlock-alert";
  alertDiv.innerHTML = `
    <div class="badge-alert-content">
      <div class="badge-alert-icon">${badge.icon}</div>
      <div class="badge-alert-info">
        <h4>Достижение открыто!</h4>
        <h3>${badge.name}</h3>
        <p>${badge.desc}</p>
      </div>
    </div>
  `;
  document.body.appendChild(alertDiv);
  
  // Анимация удаления
  setTimeout(() => {
    alertDiv.classList.add("fade-out");
    setTimeout(() => {
      alertDiv.remove();
    }, 500);
  }, 4000);
}

// Toast сообщения
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerText = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add("visible");
    setTimeout(() => {
      toast.classList.remove("visible");
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 2500);
  }, 50);
}

// Инициализация при загрузке скрипта
initUsersDatabase();
