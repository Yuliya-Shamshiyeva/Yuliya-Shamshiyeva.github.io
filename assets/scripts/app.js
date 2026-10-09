document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "";
  const app = APPS.find(item => item.packageId === id || item.name === id) || APPS[0];

  const categoryNames = {pet:"Питомцы и игры",quiz:"Квизы и тесты",seasonal:"Сезонные приложения",tools:"Полезные приложения"};
  document.title = `${app.name} — Yuliya`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", app.description);
  document.getElementById("detailName").textContent = app.name;
  document.getElementById("detailCategory").textContent = categoryNames[app.category] || "ANDROID APPLICATION";
  document.getElementById("detailDescription").textContent = app.details || app.description;
  document.getElementById("detailArt").innerHTML = `<img src="${app.icon || "assets/img/app-placeholder.svg"}" alt="${escapeHtml(app.name)}" onerror="this.onerror=null;this.src='assets/img/app-placeholder.svg'">`;
  document.getElementById("detailPlay").href = playUrl(app);

  const features = app.features || ["Собственная идея и реализация", "Разработка для Android", "Опубликовано или представлено в каталоге"];
  document.getElementById("detailFeatures").innerHTML = features.map(feature => `<div class="detail-feature"><span>✳</span>${escapeHtml(feature)}</div>`).join("");
  document.getElementById("detailTech").innerHTML = (app.tech || ["Android", "Product design"]).map(tech => `<span>${escapeHtml(tech)}</span>`).join("");
  document.getElementById("detailNote").textContent = app.packageId ? "Кнопка ведёт на страницу приложения в Google Play." : "Ссылка на отдельную страницу Google Play ещё не добавлена. Пока можно посмотреть остальные приложения разработчика.";
  document.getElementById("year").textContent = new Date().getFullYear();
});
