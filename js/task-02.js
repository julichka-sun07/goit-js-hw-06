const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navItemEl = document.getElementById ('ingredients');
console.log(navItemEl);

for ( const ingredient of ingredients){
  const elementLi = document.createElement('li');
  elementLi.classList.add('item');
  elementLi.textContent = ingredient;
  navItemEl.appendChild(elementLi);
}