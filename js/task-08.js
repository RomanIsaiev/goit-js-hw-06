const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const user = {};
  const userMail = event.currentTarget.elements.email.value;
  const userPassword = event.currentTarget.elements.password.value;

  if (userMail === "" || userPassword === "") {
    alert("Все поля должны быть заполнены.");
    return;
  }

  user.mail = userMail;
  user.password = userPassword;

  if (userMail === userMail || userPassword === userPassword) {
    form.reset();
  }

  console.log(user);
}
