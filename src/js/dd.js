// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const ulElem = document.querySelector('.gallery');

const liContext = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item" >
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
// const ulListImage = document.querySelector('.gallery__image');

ulElem.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    console.log(true);
    return;
  }

  const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'data-alt',
    captionDelay: 250,
  });
}