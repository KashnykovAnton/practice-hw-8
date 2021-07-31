import { galleryItems } from "./gallery";

const galleryRef = document.querySelector('.js-gallery');
const lightboxContainer = document.querySelector('.lightbox');
const lightboxOverlay = document.querySelector('.lightbox__overlay');
const lightboxImg = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');

const createItemEl = (acc, { preview, original, description }) => acc + `<li class = 'gallery__item'><a class = 'gallery__link' href = ${original}><img class = 'gallery__image' src = ${preview} data-source = ${original} alt = ${description}/></a></li>`;
const createItemsList = galleryItems.reduce(createItemEl, '');
galleryRef.insertAdjacentHTML('beforeend', createItemsList);


galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') { return };
  lightboxContainer.classList.add('is-open');
  lightboxImg.src = e.target.dataset.source;
  // console.log(e.target.dataset.source)
  window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('keydown', onArrowRightPress);
  window.addEventListener('keydown', onArrowLeftPress);

}


closeModalBtn.addEventListener('click', onModalClose);

function onModalClose() {
  // if (e.target.nodeName === 'IMG') { return };
  lightboxContainer.classList.remove('is-open');
  lightboxImg.src = '';
  window.removeEventListener('keydown', onEscKeyPress);
  window.removeEventListener('keydown', onArrowRightPress);
  window.removeEventListener('keydown', onArrowLeftPress);
}


lightboxOverlay.addEventListener('click', onOverlayClick);

function onOverlayClick() {
  onModalClose();
};


// window.addEventListener('keydown', onEscKeyPress);

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onModalClose()
    // console.log('hello')
  };
};

const newArr = [];
galleryItems.map((item) => newArr.push(item.original));


// window.addEventListener('keydown', onArrowRightPress);

function onArrowRightPress(e) {
  const index = newArr.indexOf(lightboxImg.src);
  if (e.code === 'ArrowRight') {
    if (index !== 8) { lightboxImg.src = newArr[index + 1] }
    else { lightboxImg.src = newArr[0] }
    console.log(index)
    console.log(`нажал вправо`);
  }
};

// window.addEventListener('keydown', onArrowLeftPress);

function onArrowLeftPress(e) {
  const index = newArr.indexOf(lightboxImg.src);
  if (e.code === 'ArrowLeft') {
    if (index !== 0) { lightboxImg.src = newArr[index - 1] }
    else { lightboxImg.src = newArr[newArr.length-1] }
    console.log(index)
    console.log('нажал влево');
  }
};




// function keyboardManipulation({ key }) {
//   switch (key) {
//     case gallery.length - 1 > activeIndex && "ArrowRight":
//       activeIndex += 1;
//       refs.modalImg.src = gallery[activeIndex].original;
//       break;
//     case activeIndex > 0 && "ArrowLeft":
//       activeIndex -= 1;
//       refs.modalImg.src = gallery[activeIndex].original;
//       break;
//     case activeIndex === gallery.length - 1 && "ArrowRight":
//       activeIndex = 0;
//       refs.modalImg.src = gallery[activeIndex].original;
//       break;
//     case activeIndex === 0 && "ArrowLeft":
//       activeIndex = gallery.length - 1;
//       refs.modalImg.src = gallery[activeIndex].original;
//       break;
//     case "Escape":
//       closeModal();
//       break;
//     default:
//       alert("что-то пошло не так");
//   }
// }


