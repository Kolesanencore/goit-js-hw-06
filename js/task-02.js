// Напиши скрипт, который для каждого элемента массива ingredients:
// 1.Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2.Добавит название ингредиента как его текстовое содержимое.
// 3.Добавит элементу класс item.
// 4.После чего вставит все < li > за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const createItemEl = ingredients.map(el => {
  const ingredientsItemsEl = document.createElement('li');

  ingredientsItemsEl.classList.add('item');
  ingredientsItemsEl.textContent = el;
  
  return ingredientsItemsEl;
});

ingredientsEl.append(...createItemEl);


