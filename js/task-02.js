const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainer = document.querySelector("#ingredients");

const ingredientsList = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const addIngredientsToList = document.createElement("li");
  addIngredientsToList.textContent = ingredients[i];
  addIngredientsToList.classList.add("item");
  console.log(addIngredientsToList);

  ingredientsList.push(addIngredientsToList);
}

ingredientsContainer.append(...ingredientsList);
