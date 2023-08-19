const nameInput = document.querySelector("input#name-input");
console.log(nameInput);
const nameOutput = document.querySelector("#name-output");
console.log(nameOutput);

nameInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  nameOutput.textContent = event.currentTarget.value;
}
