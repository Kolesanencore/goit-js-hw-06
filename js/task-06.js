// Задание 6

// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// 1.Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// 2.Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// 3.Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const validationInputEl = document.querySelector('#validation-input');

const checkNumbers = () => {
    if (validationInputEl.value.length === Number(validationInputEl.dataset.length)) {
        validationInputEl.classList.remove(`invalid`);
        validationInputEl.classList.add(`valid`);
        return;
    } else {
        validationInputEl.classList.remove(`valid`);
        validationInputEl.classList.add(`invalid`);
    };
}

validationInputEl.addEventListener('blur', checkNumbers);