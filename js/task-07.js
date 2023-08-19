const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", setTextSize);

function setTextSize() {
  console.log(fontSizeControl.value);
  text.style.fontSize = fontSizeControl.value + "px";
}
