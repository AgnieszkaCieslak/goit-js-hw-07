import { galleryItems } from './gallery-items.js';

const galleryMarker = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"/></a></div>`;
  galleryMarker.insertAdjacentHTML("beforeend", galleryItem);
});

const handleClick = (e) => {
  e.preventDefault();
  const anchor = e.target.closest(".gallery__link");
  const pics = anchor.querySelector(".gallery__image");

  if (e.target !== (anchor && pics)) {
    return;
  }
  const instance = window.basicLightbox.create(
    `<img src="${e.target.dataset.source}" alt="${e.target.alt}" width="1280"/>`
        );
        instance.show();
  galleryMarker.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        instance.close();
    }
  });
};

galleryMarker.addEventListener("click", handleClick);
