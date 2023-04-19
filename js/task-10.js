function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  containerDivEl: document.querySelector('#boxes'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  amountofDiv: document.querySelector('#controls').firstElementChild,
}
refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(refs.amountofDiv.value);
  const min = Number(refs.amountofDiv.getAttribute("min"));
  const max = Number(refs.amountofDiv.getAttribute("max"));
  if ((amount >= min ) & (amount <= max)) {
      }
      const arrayDivs = [];
  for (let index = 0; index < amount; index += 1) {
    const divEl = document.createElement('div');
    const newSize = 30 + index * 10;
    divEl.style.width = newSize + "px";
    divEl.style.height = newSize + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    arrayDivs.push(divEl);
  }
refs.containerDivEl.append(...arrayDivs);
}
function destroyBoxes() {
  refs.containerDivEl.innerHTML = "";
  refs.amountofDiv.value = "";
}