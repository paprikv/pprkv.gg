const products = [
  { category: "Карты пополнения", title: "PSN Turkey 250 TRY", description: "Карта пополнения для турецкого аккаунта PlayStation Network.", price: "от 799 ₽", badge: "PSN Turkey", url: "https://ggsel.net/sellers/101880049" },
  { category: "Карты пополнения", title: "PSN Turkey 500 TRY", description: "Цифровой код для пополнения баланса PSN региона Турция.", price: "от 1 499 ₽", badge: "Популярно", url: "https://ggsel.net/sellers/101880049" },
  { category: "Карты пополнения", title: "PSN Turkey 1000 TRY", description: "Большая карта пополнения для аккаунта PSN региона Турция.", price: "от 2 799 ₽", badge: "Digital code", url: "https://ggsel.net/sellers/101880049" },
  { category: "Telegram Stars", title: "100 Telegram Stars", description: "Прямое пополнение аккаунта Telegram по @username. Не подарок.", price: "от 199 ₽", badge: "Быстро", url: "https://ggsel.net/sellers/101880049" },
  { category: "Telegram Stars", title: "500 Telegram Stars", description: "Зачисление звёзд напрямую на аккаунт Telegram.", price: "от 899 ₽", badge: "Stars", url: "https://ggsel.net/sellers/101880049" },
  { category: "Telegram Stars", title: "1000 Telegram Stars", description: "Для подарков, контента и поддержки авторов внутри Telegram.", price: "от 1 699 ₽", badge: "Telegram", url: "https://ggsel.net/sellers/101880049" },
  { category: "Игры", title: "Steam ключи", description: "Ключи активации игр для Steam. Ассортимент обновляется.", price: "от 99 ₽", badge: "Steam", url: "https://ggsel.net/sellers/101880049" },
  { category: "Игры", title: "Игровые товары", description: "Цифровые товары, подписки и игровые предложения под разные площадки.", price: "по запросу", badge: "Digital", url: "https://ggsel.net/sellers/101880049" },
  { category: "Игры", title: "Подбор игры", description: "Поможем найти нужный товар или альтернативу под вашу платформу.", price: "по запросу", badge: "Support", url: "https://t.me/your_username" }
];

const productContainer = document.querySelector("#products");
const filterButtons = document.querySelectorAll(".filter");
const linkFilters = document.querySelectorAll("[data-filter-link]");

defaultFilter = "Все";

function renderProducts(filter = "Все") {
  const list = filter === "Все" ? products : products.filter((item) => item.category === filter);
  productContainer.innerHTML = list.map((item) => `
    <article class="product reveal visible" data-category="${item.category}">
      <div class="product-top">
        <span class="badge">${item.badge}</span>
        <span class="cat">${item.category}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="product-bottom">
        <div><span class="price-label">Цена</span><span class="price">${item.price}</span></div>
        <a class="buy" href="${item.url}" target="_blank" rel="noreferrer">Купить</a>
      </div>
    </article>
  `).join("");
}

function setFilter(filter) {
  filterButtons.forEach((button) => button.classList.toggle("active", button.dataset.filter === filter));
  renderProducts(filter);
}

filterButtons.forEach((button) => button.addEventListener("click", () => setFilter(button.dataset.filter)));
linkFilters.forEach((link) => link.addEventListener("click", () => setTimeout(() => setFilter(link.dataset.filterLink), 120)));

document.querySelector("#year").textContent = new Date().getFullYear();
renderProducts(defaultFilter);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
