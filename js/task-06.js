const input = document.querySelector("#validation-input");
const countNumber = document.querySelector('input[data-length="6"]');

input.addEventListener("blur", checkInputLength);

function checkInputLength() {
  if (countNumber.dataset.length == input.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

// думаю можно сделать лучше и короче, но пока не готов :)
