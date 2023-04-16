// const form = document.querySelector ('.login-form');
// form.addEventListener('submit', handleSubmit);
// function handleSubmit(e) {
//   e.preventDefault();
//   const {
//     elements: { email, password },
//   } = e.currentTarget;
//   if (email.value === "" || password.value === "") {
//     return alert(`All forms must be fill in!`);
//   }
//   console.log(`Email: ${email.value}
// Password: ${password.value}`);
//   e.currentTarget.reset();
// }
// console.log()

const form = document.querySelector(".login-form");
const useremail = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = {
    email: useremail.value,
    pass: password.value
  }
  if (useremail.value === '' || password.value === '') {
    return alert('All forms must be fill in!')
  }
  console.log(elements);
  form.reset();
});