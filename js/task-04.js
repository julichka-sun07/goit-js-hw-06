let counterValue =0;
const btnPlus = document.querySelector('[data-action="increment"]');
const btnMinus = document.querySelector('[data-action="decrement"]');
const value = document.getElementById('value');
value.textContent = 0;

const incrementValue = (event) => { value.textContent = counterValue +=1 };
const decrementValue = (event) => { value.textContent = counterValue -=1 };

btnPlus.addEventListener('click', incrementValue);
btnMinus.addEventListener('click', decrementValue);
console.log(counterValue)