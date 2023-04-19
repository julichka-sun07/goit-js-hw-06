
const inputFontSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

spanText.style.fontSize = `${inputFontSize.value}px`;

inputFontSize.addEventListener("input", onInputFontSize);
function onInputFontSize(event) {
    spanText.style.fontSize = `${event.target.value}px`;
    console.log(spanText.textContent)
}