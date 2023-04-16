

const userNameImput = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');

const btnName = (event) => {
    event.currentTarget.value.trim() === "" ?
    userNameOutput.textContent = 'Anonymous':
    userNameOutput.textContent = event.currentTarget.value.trim();
    }
userNameImput.addEventListener('input', btnName)



