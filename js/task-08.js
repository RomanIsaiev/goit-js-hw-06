const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const user = {};

  const userMail = event.currentTarget.elements.email.value;
  console.log(userMail);

  const userPassword = event.currentTarget.elements.password.value;
  console.log(userPassword);

  if (userMail === "" || userPassword === "") {
    alert("Все поля должны быть заполнены.");
  }

  user.mail = userMail;
  user.password = userPassword;

  console.log(user);

  if (userMail === userMail || userPassword === userPassword) {
    form.reset();
  }
}
