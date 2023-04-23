import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListRef = document.querySelector('.gallery');

galleryListRef.innerHTML = createGalleryListMarkUp(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

function createGalleryListMarkUp(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
    })
    .join('');
}

// Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery
var lightbox = new SimpleLightbox('.gallery a', {
  // Додаванная відображення підписів до зображень з атрибута alt.
  // Налаштування щоб підпис був знизу і з'являвся через 250 мілісекунд після відкриття зображення.
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
