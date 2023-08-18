const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});

incrementBtn.addEventListener("click", () => {
  counter.increment();
  counterValue.textContent = counter.value;
});

// Я сначала пробовал сделать так без объекта, просто обращался к textContent-у value
// const value = counterValue.textContent // = 0

// incrementBtn.addEventListener("click", () => {
// counterValue.textContent -= 1;    // минус работал
// });

// decrementBtn.addEventListener("click", () => {
// counterValue.textContent += 1;  // а тут было вот так 011111
// });

// Но у меня работало только отнимание, а прибавление считало вот так 01111
