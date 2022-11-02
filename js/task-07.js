// Задание 7

// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) 
//            и изменяет инлайн - стиль span#text обновляя свойство font - size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

const inputControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = inputControlEl.value + 'px';

const textResizing = () => {
    textEl.style.fontSize = `${inputControlEl.value}px`;
}

inputControlEl.addEventListener('input', textResizing);