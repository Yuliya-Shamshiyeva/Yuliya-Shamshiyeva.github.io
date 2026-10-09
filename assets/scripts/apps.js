/* Каталог приложений.
   Чтобы добавить приложение, добавьте объект в массив ниже.
   icon и screenshots — пути к вашим изображениям в assets/img/apps/.
   packageId должен быть точным Android application ID из Google Play. */
const APPS = [
  {
    name: "Моя Капибара",
    packageId: "space.clevercake.kapibaraapp",
    category: "pet",
    label: "Главный проект",
    description: "Милая виртуальная капибара ходит прямо по экрану телефона. Выбирай скины и играй.",
    icon: "assets/img/apps/capybara.svg",
    details: "Виртуальная капибара-компаньон, которая гуляет поверх других приложений. Перемещай питомца по экрану и меняй его образ с помощью скинов.",
    features: ["Питомец поверх других приложений", "Разные скины и образы", "Маленький компаньон на каждый день"],
    tech: ["Kotlin", "Firebase", "Google Play Billing", "AdMob"]
  },
  {
    name: "Моя Лама: Питомец на экран",
    packageId: "space.apppie.aab.myscreenlama",
    category: "pet",
    description: "Милая лама на экране телефона — забавный виртуальный питомец рядом с тобой.",
    icon: "assets/img/apps/llama.svg",
    details: "Виртуальный питомец для тех, кто хочет добавить немного веселья и милоты на экран своего телефона.",
    features: ["Питомец на экране", "Милый персонаж", "Простой способ добавить индивидуальности телефону"],
    tech: ["Android", "Kotlin"]
  },
  {
    name: "Клинок рассекающий: Тест аниме",
    packageId: "",
    category: "quiz",
    description: "Проверь, насколько хорошо ты знаешь любимое аниме, и узнай свой результат.",
    icon: "assets/img/apps/anime-quiz.svg"
  },
  {
    name: "ДМБ Таймер: Счетчик дней",
    packageId: "",
    category: "tools",
    description: "Счётчик времени до важной даты — следи за днями, которые остались.",
    icon: "assets/img/apps/dmb.svg"
  },
  {
    name: "Очень Странные Дела Тест",
    packageId: "space.apppie.aab.strangerthingswhoareyou",
    category: "quiz",
    description: "Ответь на вопросы и узнай, какой персонаж тебе ближе.",
    icon: "assets/img/apps/stranger-things.svg"
  },
  {
    name: "Гарри Поттер: квиз для фанатов",
    packageId: "",
    category: "quiz",
    description: "Проверь свои знания волшебного мира и узнай, настоящий ли ты фанат.",
    icon: "assets/img/apps/harry-potter.svg"
  },
  {
    name: "Новогодние обои",
    packageId: "space.apppie.aab.christmaswallpapers",
    category: "seasonal",
    description: "Добавь праздничное настроение с зимними и новогодними обоями.",
    icon: "assets/img/apps/wallpapers.svg"
  },
  {
    name: "Уборщик листьев",
    packageId: "",
    category: "pet",
    description: "Небольшая игра с простым действием и расслабляющим игровым процессом.",
    icon: "assets/img/apps/leaf-cleaner.svg"
  },
  {
    name: "Бомбордиро Крокодило",
    packageId: "",
    category: "pet",
    description: "Развлекательный проект с мемным настроением.",
    icon: "assets/img/apps/bombardiro.svg"
  },
  {
    name: "Christmas Countdown 2026",
    packageId: "space.clevercake.holidayplannercountdowntochristmas",
    category: "seasonal",
    description: "Обратный отсчёт до Рождества — следи, как приближается праздник.",
    icon: "assets/img/apps/christmas-countdown.svg"
  },
  {
    name: "Карта разломов Алматы",
    packageId: "space.clevercake.almatyseismicfaultmap",
    category: "tools",
    description: "Карта сейсмических разломов Алматы на основе официальных данных.",
    icon: "assets/img/apps/almaty-map.svg",
    details: "Приложение помогает посмотреть расположение сейсмических разломов на карте Алматы и ознакомиться с доступными данными. Карта — справочный инструмент, а не индивидуальная оценка безопасности здания.",
    features: ["Карта Алматы", "Просмотр линий разломов", "Доступ к справочной информации"],
    tech: ["Kotlin", "Google Maps", "Firebase"]
  },
  {
    name: "VOZDUKH Дыхательные Упражнения",
    packageId: "space.clevercake.myapplication",
    category: "tools",
    description: "Дыхательные практики для расслабления и формирования спокойного ритма дыхания.",
    icon: "assets/img/apps/vozdukh.svg",
    details: "Приложение с дыхательными упражнениями. Оно не заменяет консультацию врача или назначенное лечение.",
    features: ["Дыхательные упражнения", "Спокойный визуальный ритм", "Поддержка регулярной практики"],
    tech: ["Kotlin", "Firebase", "Compose"]
  },
  {
    name: "Тест на Любовь",
    packageId: "",
    category: "quiz",
    description: "Развлекательный тест для друзей и пар — сравните результаты ради веселья.",
    icon: "assets/img/apps/love-test.svg"
  },
  {
    name: "Слово пацана: Кто ты на улицах",
    packageId: "",
    category: "quiz",
    description: "Ответь на вопросы развлекательного теста и узнай свой типаж.",
    icon: "assets/img/apps/word-boy.svg"
  },
  {
    name: "Новогодний счетчик дней 2027",
    packageId: "space.clevercake.daysuntilnewyear",
    category: "seasonal",
    description: "Считай дни и часы до Нового года и планируй праздничное настроение.",
    icon: "assets/img/apps/new-year-2027.svg"
  },
  {
    name: "Quiz: Сложный выбор",
    packageId: "",
    category: "quiz",
    description: "Необычные вопросы и трудный выбор — проверь, что решишь в разных ситуациях.",
    icon: "assets/img/apps/hard-choice.svg"
  },
  {
    name: "BlowAway",
    packageId: "space.apppie.aab.blowaway",
    category: "pet",
    description: "Небольшой интерактивный проект для Android.",
    icon: "assets/img/apps/blowaway.svg",
    tech: ["Kotlin"]
  }
];

const CATEGORY_NAMES = {
  pet: "Питомцы и игры",
  quiz: "Квизы и тесты",
  seasonal: "Сезонные",
  tools: "Полезные"
};

function playUrl(app) {
  return app.packageId
    ? `https://play.google.com/store/apps/details?id=${encodeURIComponent(app.packageId)}`
    : `https://play.google.com/store/apps/developer?id=yu.lexa`;
}

function appIconMarkup(app) {
  return `<img src="${escapeHtml(app.icon || "")}" alt="" loading="lazy"
    onerror="this.onerror=null;this.src='assets/img/app-placeholder.svg'">`;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function renderApps() {
  const grid = document.getElementById("appGrid");
  if (!grid) return;

  const search = (document.getElementById("appSearch")?.value || "").trim().toLocaleLowerCase("ru");
  const activeFilter = document.querySelector("#appFilters .filter-chip.active")?.dataset.filter || "all";
  const filtered = APPS.filter(app => {
    const matchesCategory = activeFilter === "all" || app.category === activeFilter;
    const haystack = `${app.name} ${app.description} ${CATEGORY_NAMES[app.category] || ""}`.toLocaleLowerCase("ru");
    return matchesCategory && haystack.includes(search);
  });

  grid.innerHTML = filtered.map((app, index) => `
    <article class="app-card" style="--card-index:${index}">
      <a class="app-card-visual" href="app.html?id=${encodeURIComponent(app.packageId || app.name)}" aria-label="Подробнее: ${escapeHtml(app.name)}">
        ${appIconMarkup(app)}
        ${app.label ? `<span class="app-label">${escapeHtml(app.label)}</span>` : ""}
        <span class="card-arrow">↗</span>
      </a>
      <div class="app-card-body">
        <span class="app-category">${escapeHtml(CATEGORY_NAMES[app.category] || "Приложение")}</span>
        <h3><a href="app.html?id=${encodeURIComponent(app.packageId || app.name)}">${escapeHtml(app.name)}</a></h3>
        <p>${escapeHtml(app.description)}</p>
        <div class="app-card-links">
          <a href="${playUrl(app)}" target="_blank" rel="noopener noreferrer">Google Play <span>↗</span></a>
          <a class="details-link" href="app.html?id=${encodeURIComponent(app.packageId || app.name)}" aria-label="Подробнее">Подробнее →</a>
        </div>
      </div>
    </article>
  `).join("");

  const count = document.getElementById("appsCount");
  if (count) count.textContent = filtered.length;
  const empty = document.getElementById("emptyState");
  if (empty) empty.hidden = filtered.length !== 0;
}

document.addEventListener("DOMContentLoaded", () => {
  renderApps();
  document.getElementById("appSearch")?.addEventListener("input", renderApps);
  document.querySelectorAll("#appFilters .filter-chip").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll("#appFilters .filter-chip").forEach(chip => chip.classList.remove("active"));
      button.classList.add("active");
      renderApps();
    });
  });
});
