import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = 'api_key=d7be37f171d8123214539749ff0838e8';
const BASE_URL = 'https://api.themoviedb.org/3';

const ADD_TO_WATCHED = 'add to watched';
const RM_FROM_WATCHED = 'remove from watched';

const ADD_TO_QUEUE = 'add to queue';
const RM_FROM_QUEUE = 'remove from queue';

let film = {};

// modal film template
const modalTemplate = document.querySelector('#modalFilmTemplate');

const lightboxInstance = basicLightbox.create(modalTemplate, {
  onShow: instance => {
    const container = instance.element();
    const closeBtn = container.querySelector('.modal__close-btn');
    const btnWatched = container.querySelector('.modal__btn-watched');
    const btnQueue = container.querySelector('.modal__btn-queue');

    body.classList.add('xxx');
    btnWatched.addEventListener('click', ev.xxx);
  },
});
