
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector('#boxes');
const controlsRef = document.querySelector('#controls');
const input = controlsRef.querySelector('input');
const createBtnRef = controlsRef.querySelector('[data-create]');
const destroyBtnRef = controlsRef.querySelector('[data-destroy]');

let value = 20;

const createBoxes = amount => {
  const boxes = [];
  while (boxes.length < amount) {
    value += 10;
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = `${value}px`;
    box.style.width = `${value}px`;
    box.classList.add('box');
    boxes.push(box);
  }
  boxesRef.append(...boxes);
};

const destroyBoxes = () => {
  const boxes = boxesRef.querySelectorAll('.box');
  value = 20;
  for (const box of boxes) {
    box.remove();
  }
};

createBtnRef.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyBtnRef.addEventListener('click', () => {
  destroyBoxes();
});