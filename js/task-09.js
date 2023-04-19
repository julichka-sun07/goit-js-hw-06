// const nameColor = document.querySelector('.color');
// const btnColor = document.querySelector('.change-color');
// const body = document.body.querySelector('body');

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// btnColor.addEventListener('click', () => {
// body.style.backgroundColor = getRandomHexColor();
// nameColor.textContent = body.style.backgroundColor;
// });


const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

button.addEventListener('click', function() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}








