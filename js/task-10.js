function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const takeCountCreateBoxes = document.querySelector("input");
// takeCountCreateBoxes.addEventListener("input", takeCountBox);

// function takeCountBox(takeCountCreateBoxes) {
//   return event.currentTarget.value;
// }

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement("div");
//     box.setAttribute("width", "30px");
//     box.setAttribute("height", "30px");
//   }
// }

// const boxContainer = document.querySelector("#boxes");

const inputAmountControl = document.querySelector("input");
console.log(inputAmountControl);
inputAmountControl.addEventListener("input", getAmount);

const addBoxesButton = document.querySelector("[data-create]");
addBoxesButton.addEventListener("click", createBoxes);

const destroyBoxesButton = document.querySelector("[data-destroy]");
destroyBoxesButton.addEventListener("click", destroyBoxes);

const boxContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = "30px";
    box.style.height = "30px";
    box.style.backgroundColor = getRandomHexColor();

    boxContainer.appendChild(box);
  }
}

function getAmount(element) {
  const amount = element.currentTarget.value;
  console.log(amount);
  return amount;
}

getAmount(inputAmountControl);

function destroyBoxes() {}

// function getAmount(event) {
//   const amount = event.currentTarget.value;
//   console.log(amount);
//   return amount;
// }

// *** kak to rabotaet
// const inputAmountControl = document.querySelector("input");
// console.log(inputAmountControl);
// inputAmountControl.addEventListener("input", createBoxes);

// const addBoxesButton = document.querySelector("[data-create]");
// addBoxesButton.addEventListener("click", createBoxes);

// const destroyBoxesButton = document.querySelector("[data-destroy]");
// destroyBoxesButton.addEventListener("click", destroyBoxes);

// const boxContainer = document.querySelector("#boxes");

// function createBoxes(amount) {
//   const amountBoxes = amount.currentTarget.value;
//   console.log(amountBoxes);

//   for (let i = 0; i < amountBoxes; i += 1) {
//     const box = document.createElement("div");
//     box.style.width = "30px";
//     box.style.height = "30px";
//     box.style.backgroundColor = getRandomHexColor();

//     boxContainer.appendChild(box);
//   }
// }

// function destroyBoxes() {}
