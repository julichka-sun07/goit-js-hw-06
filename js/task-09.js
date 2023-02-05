const nameColor = document.querySelector('.color');
const btnColor = document.querySelector('.change-color');
const body = document.body.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnColor.addEventListener = ('click', () =>{
body.style.backgroundColor = getRandomHexColor();
nameColor.textContent = body.style.backgroundColor}
);








