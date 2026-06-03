// База знаний FAQ библиотеки для ИИ-помощника
const FAQ_KNOWLEDGE = [
  {
    keywords: ["время", "расписание", "когда", "часы", "работает", "открыта", "будни"],
    answer: "🏫 Библиотека начальной школы «Библиотека 57» открыта для вас **с понедельника по пятницу с 9:00 до 16:00**. Лучше всего приходить на больших переменах или после уроков!"
  },
  {
    keywords: ["где", "находится", "адрес", "найти", "кабинет", "комната", "каком"],
    answer: "📍 Мы находимся на **втором этаже** здания начальной школы (Хользунов переулок, д. 8), в уютном **кабинете №204**. Заходи, у нас много мягких пуфиков для чтения!"
  },
  {
    keywords: ["как взять", "записать", "формуляр", "карточка", "зарегистрироваться"],
    answer: "📚 Чтобы взять книгу домой, тебе нужно просто прийти в библиотеку, выбрать книгу и назвать библиотекарю свою фамилию и класс. Мы запишем книгу в твой бумажный читательский формуляр. Книгу можно взять на **14 дней**!"
  },
  {
    keywords: ["вернуть", "сдать", "продлить", "потерял", "порвал"],
    answer: "🔄 Вернуть книгу очень просто — принеси её на стойку библиотекаря. Если не успел дочитать, скажи нам, и мы **продлим её еще на 2 недели**! Если книга случайно порвалась или потерялась, обязательно подойди к библиотекарю, мы вместе решим, как её починить или заменить."
  },
  {
    keywords: ["балл", "очки", "рейтинг", "отважн", "викторин", "заработать"],
    answer: "🏆 Баллы начисляются за чтение книг и прохождение викторин в разделе **«Литературные игры»**! За каждую викторину можно получить до 20 баллов, а за прочтение книги — 10 баллов. Копи баллы, чтобы повышать своё звание от *Новобранца* до *Отважного Книгохода 57*! Таблицу лидеров ты можешь увидеть в Личном кабинете."
  },
  {
    keywords: ["клуб", "мероприятия", "встречи", "новости", "кружок"],
    answer: "🎉 В нашей библиотеке регулярно проходят встречи **Клуба Книголюбов 57**, где мы обсуждаем сказки, рисуем комиксы и устраиваем квесты. Анонсы всех встреч публикуются в разделе **«Хорошие Новости»**! Ближайшая встреча состоится в пятницу в 15:00."
  }
];

// Приветственные сообщения ИИ-помощника
const BOT_WELCOME = "Привет! Я твой ИИ-ассистент библиотеки 57. 🧙‍♂️ Я могу посоветовать книгу по твоим интересам, рассказать о правилах библиотеки или передать вопрос нашему живому библиотекарю. Что бы ты хотел почитать?";

// Локальный стеммер/нормализатор слов на русском (убирает окончания для лучшего сопоставления)
function normalizeWord(word) {
  let w = word.toLowerCase().trim();
  // Удаляем знаки препинания
  w = w.replace(/[^а-яёa-z0-9]/g, "");
  
  if (w.length < 3) return w;
  
  // Простая эвристика для отсечения окончаний
  w = w.replace(/(ами|ями|ов|ев|ей|ах|ях|ых|их|ия|ие|ию|ия|ом|ем|ой|ей|ью|а|я|о|е|ы|и|у|ю|ь)$/, "");
  return w;
}

// Стоп-слова (предлоги и союзы), которые нужно игнорировать при поиске
const STOP_WORDS = new Set(["и", "в", "во", "на", "с", "со", "по", "о", "про", "а", "но", "да", "за", "из", "к", "ко", "у", "от", "для", "что", "как", "это"]);

// Движок семантико-ключевого поиска книг
function searchBooksAI(query) {
  const words = query.split(/\s+/)
                     .map(normalizeWord)
                     .filter(w => w.length > 0 && !STOP_WORDS.has(w));
                     
  if (words.length === 0) return [];
  
  const scores = [];
  
  for (const book of uniqueBooks) {
    let score = 0;
    const titleLower = book.title.toLowerCase();
    const authorLower = book.author.toLowerCase();
    const annLower = book.annotation.toLowerCase();
    const keywLower = book.keywords.toLowerCase();
    
    for (const word of words) {
      // Совпадение в названии
      if (titleLower.includes(word)) {
        score += 8;
        // Точное совпадение слова даёт бонус
        if (titleLower.split(/\s+/).some(w => normalizeWord(w) === word)) {
          score += 5;
        }
      }
      // Совпадение в авторе
      if (authorLower.includes(word)) {
        score += 6;
      }
      // Совпадение в ключевых словах
      if (keywLower.includes(word)) {
        score += 4;
      }
      // Совпадение в аннотации
      if (annLower.includes(word)) {
        score += 2;
      }
      // Совпадение с жанром
      if (book.genre.toLowerCase().includes(word)) {
        score += 5;
      }
    }
    
    if (score > 0) {
      scores.push({ book, score });
    }
  }
  
  // Сортируем по убыванию очков
  scores.sort((a, b) => b.score - a.score);
  return scores.map(s => s.book).slice(0, 3); // Возвращаем топ-3 рекомендации
}

// Поиск ответа в базе FAQ
function searchFAQ(query) {
  const words = query.split(/\s+/).map(normalizeWord).filter(w => w.length > 0);
  
  let bestMatch = null;
  let maxMatches = 0;
  
  for (const faq of FAQ_KNOWLEDGE) {
    let matches = 0;
    for (const word of words) {
      if (faq.keywords.some(k => k.startsWith(word) || word.startsWith(k))) {
        matches++;
      }
    }
    if (matches > maxMatches) {
      maxMatches = matches;
      bestMatch = faq;
    }
  }
  
  return maxMatches > 0 ? bestMatch.answer : null;
}

// Логика взаимодействия с чатом
function initAIChat() {
  const sendBtn = document.getElementById("chat-send-btn");
  const input = document.getElementById("chat-input-field");
  const messagesContainer = document.getElementById("chat-messages-box");
  const widgetToggle = document.getElementById("ai-widget-toggle-btn");
  const chatContainer = document.getElementById("ai-chat-container");
  const closeBtn = document.getElementById("chat-close-btn");
  
  if (!sendBtn || !input || !messagesContainer) return;
  
  // Открытие/закрытие чата
  widgetToggle.addEventListener("click", () => {
    chatContainer.classList.toggle("active");
  });
  
  closeBtn.addEventListener("click", () => {
    chatContainer.classList.remove("active");
  });
  
  // Отправка сообщений
  const handleSend = () => {
    const text = input.value.trim();
    if (!text) return;
    
    appendMessage(text, "user");
    input.value = "";
    
    // Эффект печатания бота
    showTypingIndicator();
    
    setTimeout(() => {
      removeTypingIndicator();
      const botResponse = generateBotResponse(text);
      appendMessage(botResponse.text, "bot", botResponse.books);
    }, 800 + Math.random() * 500);
  };
  
  sendBtn.addEventListener("click", handleSend);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSend();
  });
  
  // Добавление приветственного сообщения, если чат пуст
  if (messagesContainer.children.length === 0) {
    appendMessage(BOT_WELCOME, "bot");
    renderSuggestions();
  }
}

function appendMessage(text, sender, recommendedBooks = []) {
  const container = document.getElementById("chat-messages-box");
  if (!container) return;
  
  const msg = document.createElement("div");
  msg.className = `chat-message ${sender}-message`;
  
  // Обработка markdown-жирности в тексте
  let formattedText = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  formattedText = formattedText.replace(/\*(.*?)\*/g, "<em>$1</em>");
  formattedText = formattedText.replace(/\n/g, "<br>");
  
  msg.innerHTML = `<div class="message-bubble">${formattedText}</div>`;
  
  // Если есть рекомендуемые книги, рисуем их мини-карточки
  if (recommendedBooks && recommendedBooks.length > 0) {
    const booksList = document.createElement("div");
    booksList.className = "chat-recommended-books";
    
    recommendedBooks.forEach(book => {
      const card = document.createElement("div");
      card.className = "chat-book-mini-card";
      card.onclick = () => {
        // Переход в каталог и поиск этой книги
        window.location.hash = "#/catalog";
        setTimeout(() => {
          const searchInput = document.getElementById("catalog-search");
          if (searchInput) {
            searchInput.value = book.title;
            const event = new Event("input");
            searchInput.dispatchEvent(event);
          }
        }, 100);
      };
      
      const genreData = GENRES[book.genre] || { icon: "📖" };
      card.innerHTML = `
        <span class="chat-book-icon">${genreData.icon}</span>
        <div class="chat-book-info">
          <span class="chat-book-title">${book.title}</span>
          <span class="chat-book-author">${book.author}</span>
        </div>
      `;
      booksList.appendChild(card);
    });
    
    msg.appendChild(booksList);
  }
  
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function showTypingIndicator() {
  const container = document.getElementById("chat-messages-box");
  if (!container) return;
  
  const indicator = document.createElement("div");
  indicator.className = "chat-message bot-message typing-indicator-wrapper";
  indicator.id = "bot-typing-indicator";
  indicator.innerHTML = `
    <div class="message-bubble typing-dots">
      <span></span><span></span><span></span>
    </div>
  `;
  container.appendChild(indicator);
  container.scrollTop = container.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.getElementById("bot-typing-indicator");
  if (indicator) indicator.remove();
}

// Логика подбора ответов
function generateBotResponse(query) {
  const q = query.toLowerCase();
  
  // 1. Поиск в FAQ
  const faqAnswer = searchFAQ(q);
  if (faqAnswer) {
    return { text: faqAnswer, books: [] };
  }
  
  // 2. Поиск книг
  const matchedBooks = searchBooksAI(q);
  if (matchedBooks.length > 0) {
    let responseText = "Вот отличные книги из нашей библиотеки, которые подойдут под твой запрос! Нажми на карточку, чтобы увидеть её в каталоге:";
    if (q.includes("смешн") || q.includes("юмор")) {
      responseText = "Ха-ха, отличный выбор! 😄 Вот самые весёлые истории, которые поднимут тебе настроение:";
    } else if (q.includes("космос") || q.includes("звезд")) {
      responseText = "Космос — это невероятно интересно! 🚀 Держи книги про далёкие планеты и приключения среди звёзд:";
    } else if (q.includes("робот") || q.includes("техн")) {
      responseText = "Бип-буп! Роботы спешат на помощь! 🤖 Вот отличные истории про искусственный интеллект и технологии:";
    } else if (q.includes("сказк")) {
      responseText = "Волшебство начинается! ✨ Я нашёл для тебя замечательные сказки:";
    }
    return { text: responseText, books: matchedBooks };
  }
  
  // 3. Форма отправки сообщения библиотекарю, если ничего не найдено
  return {
    text: "Хм, сложный вопрос! Я еще только учусь быть настоящим библиотекарем. 🤓 Хочешь передать этот вопрос нашему главному библиотекарю? Напиши своё имя и вопрос ниже в форме обратной связи в разделе **«Контакты»**, или назови имя, и я сам запишу его!",
    books: []
  };
}

// Кнопки быстрых подсказок
const SUGGESTIONS = [
  { text: "Посоветуй сказку ✨", query: "Посоветуй интересную авторскую сказку" },
  { text: "Что есть про роботов? 🤖", query: "Расскажи про книги про роботов" },
  { text: "Как заработать баллы? 🏆", query: "Как заработать баллы в играх?" },
  { text: "Где библиотека? 📍", query: "Где находится школьная библиотека?" }
];

function renderSuggestions() {
  const container = document.getElementById("chat-suggestions-box");
  if (!container) return;
  
  container.innerHTML = "";
  SUGGESTIONS.forEach(s => {
    const chip = document.createElement("button");
    chip.className = "chat-suggestion-chip";
    chip.innerText = s.text;
    chip.onclick = () => {
      appendMessage(s.text, "user");
      showTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        const botResponse = generateBotResponse(s.query);
        appendMessage(botResponse.text, "bot", botResponse.books);
      }, 700);
    };
    container.appendChild(chip);
  });
}
