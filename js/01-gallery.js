import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';
// Change code below this line
const galleryListRef = document.querySelector('.gallery');

galleryListRef.innerHTML = createGalleryListMarkUp(galleryItems);
galleryListRef.addEventListener('click', onImageGalleryClick);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

function createGalleryListMarkUp(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

// Реалізація делегування на ul.gallery і отримання url великого зображення.
function onImageGalleryClick(event) {
  // Заборона перенаправлення за замовчуванням
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const originalImage = event.target.dataset.source;

  openModalWindow(originalImage);
}

// Відкриття модального вікна по кліку на елементі галереї.

function openModalWindow(link) {
  const instance = basicLightbox.create(`
    <img src="${link}">
`);
  instance.show();

  window.addEventListener('keydown', closeModalWindow);

  // Pакриття модального вікна після натискання клавіші Escape.
  // Прослуховування клавіатури було тільки доти, доки відкрите модальне вікно.
  function closeModalWindow(event) {
    if (event.code === 'Escape') {
      instance.close(() => window.removeEventListener(event, closeModalWindow));
    }
  }
}
