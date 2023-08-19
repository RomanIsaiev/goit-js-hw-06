const input = document.querySelector("#validation-input");
const countNumber = document.querySelector('input[data-length="6"]');

input.addEventListener("blur", checkInputLength);

function checkInputLength() {
  if (input.value.length < countNumber.dataset.length) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
