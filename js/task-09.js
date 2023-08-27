function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElement = document.querySelector("body");
const buttonElement = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

buttonElement.addEventListener("click", chageBackgroundColor);

function chageBackgroundColor() {
  bodyElement.style.backgroundColor = getRandomHexColor();
  currentColor.textContent = bodyElement.style.backgroundColor;
}
