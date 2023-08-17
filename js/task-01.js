const categoriesCount = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesCount.length);

const categoriesList = document.querySelectorAll(".item");

categoriesList.forEach((element) => {
  const categoriesNameItem = element.querySelector("h2");
  console.log("Category:", categoriesNameItem.textContent);

  const categoriesCountItem = element.querySelectorAll("li");
  console.log("Elements:", categoriesCountItem.length);
});
