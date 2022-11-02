// Задание 4

// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// 1.Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// 2.Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// 3.Обновляй интерфейс новым значением переменной counterValue.

let counterValue = document.querySelector('#value');

const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]',
);

const increment = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};

const decrement = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

decrementBtnEl.addEventListener('click', decrement);
incrementBtnEl.addEventListener('click', increment);