const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const navItemEl = document.getElementById ('ingredients');
// console.log(navItemEl);

const arrayIngredients = ingredients.map((ingredient) => {
const elementLi = document.createElement('li');
  elementLi.classList.add('item');
  elementLi.textContent = ingredient;
  console.log(elementLi);
  return elementLi;
  });
  
const listEngidElements = document.querySelector("#ingredients");
console.log(listEngidElements);
listEngidElements.append(...arrayIngredients);







