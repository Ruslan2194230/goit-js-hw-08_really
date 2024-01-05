// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const ulElem = document.querySelector('.gallery');

const liContext = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join('');
ulElem.innerHTML = liContext;


  const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });

////////
///////
/////// vyshnyak
// import SimpleLightbox from 'simplelightbox';
// import "simplelightbox/dist/simple-lightbox.min.css";
// // Add imports above this line
// import { galleryItems } from './gallery-items';

// // Change code below this line

// const galleryContainer = document.querySelector('.gallery');
// const itemsMarkup = createGalleryItemsMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

// // rendered items
// function createGalleryItemsMarkup(items) {
//   return items.map(({ preview, original, description }) => {
//     return `
//   <a class="gallery__item" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       alt="${description}"
//     />
//   </a>
// `
//   }).join('');
// }

// // use library SimpleLightbox
// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
// });