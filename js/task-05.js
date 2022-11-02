// Задание 5

// 1.Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// 2.Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const inputHandle = () => {
    if (inputEl.value.length > 0) {
        outputEl.textContent = inputEl.value;
        // return;
    } else {
        outputEl.textContent = 'Anonymous';
    }
 }

inputEl.addEventListener('input', inputHandle);