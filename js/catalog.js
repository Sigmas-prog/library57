// URL для экспорта CSV из Google Sheets (из ТЗ)
const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/1O_gKZkexCZOMmL1Vd2CJ6J_ZznWX0T7FokVzxCbdXsU/export?format=csv&gid=0";

// Жанры и поджанры из ТЗ с кастомными цветами и темами
const GENRES = {
  "Сказки": {
    subgenres: ["Русские народные", "Сказки народов мира", "Авторские сказки"],
    color: "linear-gradient(135deg, #FFE082, #FFB300)",
    icon: "🌟",
    cover: "https://static.tildacdn.com/tild3330-3464-4432-b063-366432313364/kandinsky-download-1.png"
  },
  "Древний мир": {
    subgenres: ["Каменный век", "Мифы"],
    color: "linear-gradient(135deg, #FFAB91, #D84315)",
    icon: "🏺",
    cover: "https://static.tildacdn.com/tild6432-6463-4865-a134-393765323630/kandinsky-download-1.png"
  },
  "Космос": {
    subgenres: [],
    color: "linear-gradient(135deg, #B39DDB, #5E35B1)",
    icon: "🚀",
    cover: "https://static.tildacdn.com/tild6531-6230-4965-b964-396463316239/photo.png"
  },
  "Детективы": {
    subgenres: [],
    color: "linear-gradient(135deg, #80CBC4, #00695C)",
    icon: "🔍",
    cover: "https://static.tildacdn.com/tild6265-6166-4430-b831-666239646562/kandinsky-download-1.png"
  },
  "Мир науки": {
    subgenres: ["Математика", "Физика", "Биология", "История", "География", "Химия", "Психология", "Программирование", "Языкознание"],
    color: "linear-gradient(135deg, #90CAF9, #1565C0)",
    icon: "🔬",
    cover: "https://static.tildacdn.com/tild6161-6161-4239-a335-656535666666/kandinsky-download-1.png"
  },
  "Мир Магии (Фэнтези)": {
    subgenres: [],
    color: "linear-gradient(135deg, #E1BEE7, #8E24AA)",
    icon: "🔮",
    cover: "https://static.tildacdn.com/tild3830-6139-4935-a533-633363316164/_.jpg"
  },
  "Смешные истории": {
    subgenres: [],
    color: "linear-gradient(135deg, #FFE082, #F57C00)",
    icon: "😜",
    cover: "https://static.tildacdn.com/tild3261-3832-4365-a138-383063636631/kandinsky-download-1.png"
  },
  "Кругосветка(путешествия, приключения)": {
    subgenres: [],
    color: "linear-gradient(135deg, #A5D6A7, #2E7D32)",
    icon: "🧭",
    cover: "https://static.tildacdn.com/tild6332-3634-4162-a463-306162653635/photo1712844707.jpeg"
  },
  "Путешествия во времени": {
    subgenres: [],
    color: "linear-gradient(135deg, #F48FB1, #C2185B)",
    icon: "⏳",
    cover: "https://static.tildacdn.com/tild3137-3761-4262-b532-636134343331/__.jpg"
  },
  "Пираты и разбойники": {
    subgenres: [],
    color: "linear-gradient(135deg, #EF9A9A, #C62828)",
    icon: "🏴‍☠️",
    cover: "https://static.tildacdn.com/tild3864-6431-4765-a566-356134643936/___1.png"
  },
  "Истории о дружбе и любви": {
    subgenres: [],
    color: "linear-gradient(135deg, #F8BBD0, #E91E63)",
    icon: "❤️",
    cover: "https://static.tildacdn.com/tild3730-3633-4164-b238-636165633734/kandinsky-download-1.png"
  },
  "Папы, мамы, бабушки и дедушки": {
    subgenres: [],
    color: "linear-gradient(135deg, #FFCC80, #EF6C00)",
    icon: "🏡",
    cover: "https://static.tildacdn.com/tild3238-3264-4831-b935-663138343832/kandinsky-download-1.png"
  },
  "Другое детство": {
    subgenres: [],
    color: "linear-gradient(135deg, #CE93D8, #6A1B9A)",
    icon: "🎒",
    cover: "https://static.tildacdn.com/tild3233-3463-4932-b963-313065643034/kandinsky-download-1.png"
  },
  "Футболисты-Шахматисты": {
    subgenres: [],
    color: "linear-gradient(135deg, #C5E1A5, #558B2F)",
    icon: "⚽",
    cover: "https://static.tildacdn.com/tild6633-6330-4137-b336-303030653161/kandinsky-download-1.png"
  },
  "Драконы и динозавры": {
    subgenres: [],
    color: "linear-gradient(135deg, #81C784, #1B5E20)",
    icon: "🦖",
    cover: "https://static.tildacdn.com/tild6466-6130-4362-a630-383036643235/kandinsky-download-1.png"
  },
  "Роботы": {
    subgenres: [],
    color: "linear-gradient(135deg, #80DEEA, #00838F)",
    icon: "🤖",
    cover: "https://static.tildacdn.com/tild6363-3266-4063-b062-306130323938/kandinsky-download-1.png"
  },
  "Страшилки": {
    subgenres: [],
    color: "linear-gradient(135deg, #B0BEC5, #37474F)",
    icon: "👻",
    cover: "https://static.tildacdn.com/tild3033-3164-4564-b934-613565333833/kandinsky-download-1.png"
  },
  "Мир Искусства": {
    subgenres: ["Музыка, Театр, Балет", "Художники"],
    color: "linear-gradient(135deg, #D1C4E9, #4527A0)",
    icon: "🎨",
    cover: "https://static.tildacdn.com/tild3036-3366-4539-a463-633430323236/kandinsky-download-1.png"
  },
  "Мир Насекомых": {
    subgenres: [],
    color: "linear-gradient(135deg, #E6EE9C, #9E9D24)",
    icon: "🦋",
    cover: "https://static.tildacdn.com/tild3738-6435-4865-b862-643235326634/kandinsky-download-1.png"
  },
  "Мир Животных": {
    subgenres: ["Кошки", "Собаки", "Грызуны", "Лошади", "Другие животные", "Зоопарк", "Цирк", "Фантастические животные"],
    color: "linear-gradient(135deg, #D7CCC8, #4E342E)",
    icon: "🐾",
    cover: "https://static.tildacdn.com/tild6261-3835-4464-a466-653866336530/kandinsky-download-1.png"
  }
};

let bookCatalog = [];
let uniqueBooks = [];

// Кастомный парсер CSV (поддерживает переносы строк и кавычки)
function parseCSV(text) {
  const lines = [];
  let row = [""];
  let inQuotes = false;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        row[row.length - 1] += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push("");
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      lines.push(row);
      row = [""];
    } else {
      row[row.length - 1] += char;
    }
  }
  if (row.length > 1 || row[0] !== "") {
    lines.push(row);
  }
  return lines;
}

// Умный эвристический маппинг книги на 20 детских жанров/поджанров
function classifyBook(title, author) {
  const t = title.toLowerCase();
  const a = author.toLowerCase();
  
  // 1. Сказки
  if (t.includes("сказк") || t.includes("сказочн") || a.includes("андерсен") || a.includes("гримм") || a.includes("перро") || t.includes("русалочка") || t.includes("питер пэн")) {
    let sub = "Авторские сказки";
    if (t.includes("русские народные") || t.includes("теремок") || t.includes("колобок") || t.includes("гуси-лебеди")) {
      sub = "Русские народные";
    } else if (t.includes("народов мира") || t.includes("английские народные") || t.includes("шведские сказки")) {
      sub = "Сказки народов мира";
    }
    return { genre: "Сказки", subgenre: sub };
  }
  
  // 2. Древний мир
  if (t.includes("миф") || t.includes("древнег") || t.includes("древн") || t.includes("греци") || t.includes("египет") || t.includes("одиссея") || t.includes("гильгамеш")) {
    return { genre: "Древний мир", subgenre: "Мифы" };
  }
  
  // 3. Космос
  if (t.includes("космос") || t.includes("космич") || t.includes("марсоход") || t.includes("планет") || t.includes("звезд") || t.includes("астроном") || t.includes("луна")) {
    return { genre: "Космос", subgenre: "" };
  }
  
  // 4. Детективы
  if (t.includes("детектив") || t.includes("шерлок") || t.includes("холм") || t.includes("расслед") || t.includes("тайн") || t.includes("сыщик") || t.includes("кража") || t.includes("улика")) {
    return { genre: "Детективы", subgenre: "" };
  }
  
  // 5. Роботы
  if (t.includes("робот") || t.includes("электроник") || t.includes("киборг")) {
    return { genre: "Роботы", subgenre: "" };
  }
  
  // 6. Драконы и динозавры
  if (t.includes("дракон") || t.includes("динозавр") || t.includes("ящер") || t.includes("дино-парк") || t.includes("палеонтолог")) {
    return { genre: "Драконы и динозавры", subgenre: "" };
  }
  
  // 7. Мир науки
  if (t.includes("наук") || t.includes("математ") || t.includes("физик") || t.includes("биолог") || t.includes("хими") || t.includes("географ") || t.includes("истори") || t.includes("наномир") || t.includes("учен") || t.includes("изобрет") || t.includes("энциклопед") || t.includes("языкознан") || t.includes("программир") || t.includes("python") || t.includes("код")) {
    let sub = "История";
    if (t.includes("математ") || t.includes("цифр") || t.includes("счет")) sub = "Математика";
    else if (t.includes("физик") || t.includes("свет")) sub = "Физика";
    else if (t.includes("биолог") || t.includes("клетк") || t.includes("микро")) sub = "Биология";
    else if (t.includes("географ") || t.includes("атлас")) sub = "География";
    else if (t.includes("хими") || t.includes("элемент")) sub = "Химия";
    else if (t.includes("программир") || t.includes("python") || t.includes("код")) sub = "Программирование";
    else if (t.includes("язык") || t.includes("слово") || t.includes("букв")) sub = "Языкознание";
    else if (t.includes("психолог") || t.includes("эмоци") || t.includes("чувств")) sub = "Психология";
    return { genre: "Мир науки", subgenre: sub };
  }
  
  // 8. Мир Магии (Фэнтези)
  if (t.includes("маги") || t.includes("волшебн") || t.includes("фэнтези") || t.includes("чародей") || t.includes("поттер") || t.includes("нарни") || t.includes("амулет") || t.includes("заклинание")) {
    return { genre: "Мир Магии (Фэнтези)", subgenre: "" };
  }
  
  // 9. Смешные истории
  if (t.includes("смешн") || t.includes("весел") || t.includes("юмор") || t.includes("шалун") || t.includes("ротозей") || t.includes("аверченко") || t.includes("денискин") || a.includes("носов") || t.includes("петрова и васечкина")) {
    return { genre: "Смешные истории", subgenre: "" };
  }
  
  // 10. Пираты и разбойники
  if (t.includes("пират") || t.includes("разбойник") || t.includes("робин гуд") || t.includes("сокровищ") || t.includes("остров сокровищ")) {
    return { genre: "Пираты и разбойники", subgenre: "" };
  }
  
  // 11. Футболисты-Шахматисты
  if (t.includes("футбол") || t.includes("шахмат") || t.includes("мяч") || t.includes("спорт") || t.includes("игра") || t.includes("матч")) {
    return { genre: "Футболисты-Шахматисты", subgenre: "" };
  }
  
  // 12. Мир Искусства
  if (t.includes("искусств") || t.includes("музык") || t.includes("театр") || t.includes("балет") || t.includes("художн") || t.includes("акварел") || t.includes("картин") || t.includes("галере")) {
    let sub = "Художники";
    if (t.includes("музык") || t.includes("хорал") || t.includes("театр") || t.includes("спектакл") || t.includes("балет")) {
      sub = "Музыка, Театр, Балет";
    }
    return { genre: "Мир Искусства", subgenre: sub };
  }
  
  // 13. Мир Насекомых
  if (t.includes("насеком") || t.includes("бабочк") || t.includes("муравей") || t.includes("пчел") || t.includes("паразит") || t.includes("жук") || t.includes("гусениц")) {
    return { genre: "Мир Насекомых", subgenre: "" };
  }
  
  // 14. Мир Животных
  if (t.includes("собак") || t.includes("щен") || t.includes("пёс") || t.includes("кот") || t.includes("кош") || t.includes("грызун") || t.includes("мыш") || t.includes("крыс") || t.includes("лошад") || t.includes("коза") || t.includes("медвеж") || t.includes("животн") || t.includes("зоопарк") || t.includes("цирк") || a.includes("бианки") || t.includes("хвост") || t.includes("звер")) {
    let sub = "Другие животные";
    if (t.includes("собак") || t.includes("щен") || t.includes("пёс") || a.includes("сергеев")) sub = "Собаки";
    else if (t.includes("кот") || t.includes("кош")) sub = "Кошки";
    else if (t.includes("мыш") || t.includes("крыс") || t.includes("хомяк") || t.includes("кролик") || t.includes("кроличья")) sub = "Грызуны";
    else if (t.includes("лошад") || t.includes("конь")) sub = "Лошади";
    else if (t.includes("зоопарк")) sub = "Зоопарк";
    else if (t.includes("цирк")) sub = "Цирк";
    else if (t.includes("фантастич")) sub = "Фантастические животные";
    return { genre: "Мир Животных", subgenre: sub };
  }
  
  // 15. Папы, мамы, бабушки и дедушки (Семейные)
  if (t.includes("папа") || t.includes("мама") || t.includes("бабушк") || t.includes("дедушк") || t.includes("семейн") || t.includes("родител") || t.includes("дом")) {
    return { genre: "Папы, мамы, бабушки и дедушки", subgenre: "" };
  }
  
  // 16. Путешествия во времени
  if (t.includes("время") || t.includes("вчера") || t.includes("завтра") || t.includes("век") || t.includes("эпоха")) {
    return { genre: "Путешествия во времени", subgenre: "" };
  }
  
  // 17. Страшилки
  if (t.includes("страшил") || t.includes("ужас") || t.includes("кошмар") || t.includes("привид") || t.includes("монстр") || t.includes("вампир") || t.includes("призрак")) {
    return { genre: "Страшилки", subgenre: "" };
  }
  
  // 18. Другое детство
  if (t.includes("детство") || t.includes("отрок") || t.includes("юность") || t.includes("школ") || t.includes("класс")) {
    return { genre: "Другое детство", subgenre: "" };
  }
  
  // По умолчанию: приключения/кругосветка
  return { genre: "Кругосветка(путешествия, приключения)", subgenre: "" };
}

// Загрузка каталога (сначала кешированный PRELOADED_BOOKS, затем попытка загрузить живую таблицу)
async function loadCatalog() {
  console.log("Initializing catalog...");
  
  // Шаг 1: Загрузить встроенный список как мгновенный старт
  if (typeof PRELOADED_BOOKS !== "undefined" && PRELOADED_BOOKS.length > 0) {
    processRawBooks(PRELOADED_BOOKS);
    console.log(`Loaded ${uniqueBooks.length} pre-cached books.`);
  }
  
  // Шаг 2: Попытаться стянуть живые данные из Google Sheets
  try {
    const res = await fetch(SPREADSHEET_URL);
    if (!res.ok) throw new Error("Network response was not ok");
    const csvText = await res.text();
    const rows = parseCSV(csvText);
    
    // Ищем строку заголовка
    let headerIdx = -1;
    for (let i = 0; i < rows.length; i++) {
      const rowStr = rows[i].join(" ");
      if (rowStr.includes("Автор") || rowStr.includes("Название")) {
        headerIdx = i;
        break;
      }
    }
    
    if (headerIdx !== -1) {
      const header = rows[headerIdx];
      const authorCol = header.findIndex(c => c.toLowerCase().includes("автор"));
      const titleCol = header.findIndex(c => c.toLowerCase().includes("название"));
      const yearCol = header.findIndex(c => c.toLowerCase().includes("год"));
      
      if (authorCol !== -1 && titleCol !== -1) {
        const rawBooks = [];
        for (let i = headerIdx + 1; i < rows.length; i++) {
          const r = rows[i];
          if (r.length > Math.max(authorCol, titleCol)) {
            const author = r[authorCol].trim();
            const title = r[titleCol].trim();
            const year = yearCol !== -1 && r.length > yearCol ? r[yearCol].trim() : "";
            
            if (title) {
              rawBooks.push({ author, title, year });
            }
          }
        }
        
        if (rawBooks.length > 0) {
          processRawBooks(rawBooks);
          console.log(`Live sync complete: ${uniqueBooks.length} unique books loaded from Google Sheets.`);
          // Перерисовать каталог, если активен
          if (window.currentRoute === "catalog") {
            renderCatalogPage();
          }
        }
      }
    }
  } catch (err) {
    console.warn("Could not sync with Google Sheets (CORS or network issues). Using pre-cached database.", err);
  }
}

// Поиск обложки и описания книги в базе спарсенных данных Tilda
function findTildaBook(title) {
  if (typeof TILDA_BOOKS === 'undefined') return null;
  
  const clean = t => t.toLowerCase()
    .replace(/[^a-zа-я0-9]/gi, "")
    .replace(/ё/g, "е")
    .trim();
    
  const cleanTitle = clean(title);
  if (!cleanTitle) return null;
  
  // 1. Точное совпадение
  for (const key in TILDA_BOOKS) {
    if (clean(key) === cleanTitle) {
      return TILDA_BOOKS[key];
    }
  }
  
  // 2. Частичное совпадение по длине
  for (const key in TILDA_BOOKS) {
    const cleanKey = clean(key);
    if (cleanKey.includes(cleanTitle) || cleanTitle.includes(cleanKey)) {
      if (Math.abs(cleanKey.length - cleanTitle.length) < 5) {
        return TILDA_BOOKS[key];
      }
    }
  }
  return null;
}

// Обработка сырых записей: дедупликация, подсчет экземпляров и категоризация
function processRawBooks(rawBooks) {
  const booksMap = new Map();
  
  for (const b of rawBooks) {
    // Чистим названия
    const author = b.author ? b.author.replace(/[\?]/g, "").trim() : "Не указан";
    const title = b.title ? b.title.replace(/[\?]/g, "").trim() : "";
    if (!title || title === "Название") continue;
    
    const key = `${author.toLowerCase()}|||${title.toLowerCase()}`;
    
    if (booksMap.has(key)) {
      const existing = booksMap.get(key);
      existing.copies++;
    } else {
      const classification = classifyBook(title, author);
      const tildaMatch = findTildaBook(title);
      
      const coverUrl = b.coverUrl || (tildaMatch ? tildaMatch.cover : "");
      const annotation = b.annotation || (tildaMatch && tildaMatch.descr ? tildaMatch.descr : `Замечательная книга от автора ${author}. Подходит для юных читателей нашей школы. Показывает приключения, дружбу и много открытий!`);
      const quizLink = b.quizLink || (tildaMatch ? tildaMatch.quiz_link : "");
      
      booksMap.set(key, {
        author: author || "Неизвестный автор",
        title: title,
        year: b.year || "Не указан",
        genre: classification.genre,
        subgenre: classification.subgenre,
        copies: 1,
        coverUrl: coverUrl, 
        annotation: annotation,
        quizLink: quizLink,
        keywords: b.keywords || `${classification.genre} ${classification.subgenre} ${title} ${author} ${annotation}`
      });
    }
  }
  
  uniqueBooks = Array.from(booksMap.values());
  
  // Добавляем к некоторым книгам встроенные викторины для геймификации
  enrichBooksWithQuizzes();
}

function enrichBooksWithQuizzes() {
  // Список книг, к которым у нас есть викторины (в quizzes.js)
  const quizTitles = [
    "Волшебник изумрудного города",
    "Приключения Электроника",
    "Дикий робот",
    "Сказки",
    "Затерянный мир",
    "Робин Гуд"
  ];
  
  for (const book of uniqueBooks) {
    const matchedQuiz = quizTitles.find(title => book.title.toLowerCase().includes(title.toLowerCase()));
    if (matchedQuiz) {
      book.hasQuiz = true;
      book.quizId = matchedQuiz;
    }
  }
}

// Заглушка для добавления новой книги через форму библиотекаря (симуляция)
function simulateAddBook(book) {
  const classification = classifyBook(book.title, book.author);
  const newBook = {
    author: book.author,
    title: book.title,
    year: book.year || new Date().getFullYear().toString(),
    genre: book.genre || classification.genre,
    subgenre: book.subgenre || classification.subgenre,
    copies: 1,
    coverUrl: book.coverUrl || "",
    annotation: book.annotation || "Новое поступление в библиотеку начальной школы!",
    keywords: book.keywords || "",
    hasQuiz: false
  };
  
  uniqueBooks.unshift(newBook);
  if (window.currentRoute === "catalog") {
    renderCatalogPage();
  }
  return newBook;
}
