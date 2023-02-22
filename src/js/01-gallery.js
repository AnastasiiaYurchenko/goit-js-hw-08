import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

const renderGallery = (pictures) => {
    const result = pictures
        .map((picture) => `<a class="gallery__item" href="${picture.original}">
  <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" />
</a>`)
        .join('');
    return result;
}
// console.log(renderGallery(galleryItems));

galleryEl.innerHTML = renderGallery(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', { 
    captionType: 'attr',
    captionsData:  'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    scrollZoom: false,
 });
