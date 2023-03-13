

import { galleryItems } from './gallery-items.js';


const galleryMarker = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
</a>`;
  galleryMarker.insertAdjacentHTML("beforeend", galleryItem);
});

const handleClick = (e) => {
  e.preventDefault();
  new window.SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
  });
};

galleryMarker.addEventListener("click", handleClick);
