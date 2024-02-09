// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице.

// Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// Для создания элементов интерфейса используйте HTML.
// При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.
let currentIndex = 0;

document
  .querySelector(".prev_btn")
  .addEventListener("click", () => switchImage(-1));
document
  .querySelector(".next_btn")
  .addEventListener("click", () => switchImage(1));
function initSliders() {
  const sliders = document.querySelectorAll(".slider");
  const navDot = document.querySelector(".navigation-dots");
  sliders.forEach((element, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", () => switchImage(index));
    navDot.appendChild(dot);
  });
}
initSliders();

function switchImage(direction) {
  const sliders = document.querySelectorAll(".slider");
  const dots = document.querySelectorAll(".dot");

  sliders[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active");

  currentIndex = (currentIndex + direction + sliders.length) % sliders.length;

  sliders[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}
