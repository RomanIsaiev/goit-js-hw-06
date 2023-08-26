function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputAmountControl = document.querySelector("input");
console.log(inputAmountControl);

const addBoxesButton = document.querySelector("[data-create]");
addBoxesButton.addEventListener("click", getAmount);

const destroyBoxesButton = document.querySelector("[data-destroy]");
destroyBoxesButton.addEventListener("click", destroyBoxes);

const boxContainer = document.querySelector("#boxes");

function getAmount() {
  const amount = inputAmountControl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let sizeBox = 30;

  const boxesArray = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    box.style.backgroundColor = getRandomHexColor();

    sizeBox += 10;

    boxesArray.push(box);
  }
  boxContainer.append(...boxesArray);
}

function destroyBoxes() {
  boxContainer.innerHTML = [];
}
