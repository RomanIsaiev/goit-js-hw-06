const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesToContainer = document.querySelector(".gallery");

const imagesList = [];

images.forEach((image) => {
  const galleryItem = document.createElement("li");
  galleryItem.insertAdjacentHTML("afterbegin", "<img>");

  const addedImagesToGallery = galleryItem.querySelector("img");
  addedImagesToGallery.src = image.url;
  addedImagesToGallery.alt = image.alt;
  imagesList.push(galleryItem);
});

imagesToContainer.append(...imagesList);

// ** alt **
// galleryImage.setAttribute("src", image.url);
// galleryImage.setAttribute("alt", image.alt);
