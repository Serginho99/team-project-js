import axios from 'axios';

const searchId =
  'https://api.themoviedb.org/3/movie/${id}?api_key=d7be37f171d8123214539749ff0838e8';
const API_KEY = 'd7be37f171d8123214539749ff0838e8';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

const modalBackdrop = document.querySelector('.modal__backdrop');
const modalOpen = document.querySelector('#main');
const movieEl = document.querySelector('.movie');

//відкриття модалки
modalOpen.addEventListener('click', event => {
  console.log('before');
  modalBackdrop.classList.remove('is-hidden');

  const isModalOpen = event.target.classList.contains('main');
  // console.log("event.target", event.target);
  // if (!isModalOpen) {
  //   return;
  // }
  //  console.log('event.target.dataset.id', event.target.dataset.id);
  renderModal(event.target.dataset.id);
});
async function fecthCardFilm(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  // console.log(response.data)
  return response.data;
}
async function renderModal(value) {
  const cardFilm = await fecthCardFilm(value);
  // console.log(cardFilm);
  modalBackdrop.insertAdjacentHTML('beforeend', renderCardFilm(cardFilm));
}

function renderCardFilm(cardFilm) {
  return `<div class="modal__container">
        <button class="modal__close-btn">
          <svg class="modal__close-icon" width="30" height="30">
            <use href="./images/svg/close.svg"></use>
          </svg>
        </button>

        <div class="modal__wrapper">
          <div class="modal__image">
            <img
            id=${cardFilm.id}
              src="${IMG_URL}${cardFilm.poster_path}"
              alt="${
                cardFilm.title || cardFilm.original_title || cardFilm.name
              }"
              width="240"
              height="357"
              class="img"
            />
          </div>
          <div class="modal__content">
            <h3 class="movie__title">${
              cardFilm.title || cardFilm.original_title || cardFilm.name
            }</h3>
            <dl class="modal__meta">
              <dt>Vote / Votes</dt>
              <dd>
                <span data-attr="avg-rating">${cardFilm.vote_average.toFixed()}</span> <i>/</i>
                <span data-attr="vote-count">${cardFilm.vote_count}</span>
              </dd>

              <dt>Popularity</dt>
              <dd data-attr="popularity">${cardFilm.popularity}</dd>

              <dt>Original Title</dt>
              <dd data-attr="orig-title">${
                cardFilm.title || cardFilm.original_title || cardFilm.name
              }</dd>

              <dt>Genre</dt>
              <dd data-attr="genre">${cardFilm.genres[0].name}</dd>
            </dl>

            <h4 class="movie__descr-title">About</h4>
            <p class="modal__overview" data-attr="overview">${
              cardFilm.overview
            }</p>
            <div class="button__row">
              <button type="button" class="modal__btn modal__btn-watched">
                add to watched
              </button>
              <button type="button" class="modal__btn modal__btn-queue">
                add to queue
              </button>
            </div>
          </div>
        </div>
      </div>`;
}

// закриття модалки

// function onclick(event) {
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   event.preventDefault();
//   const modal = basicLightbox.create(`
//             <img src="${event.target.dataset.source}" width="800" height="600">
//         `).show()

//   document.addEventListener("keydown", onEscClick);
//   function onEscClick(event) {
//     if (event.code === "Escape") {
//       modal.close();
//       document.removeEventListener("keydown", onEscClick);
//     }
//   }
// };

//  Імпорт харрактеристик опису!
// function renderFilmModalMarkup({
//   poster_path,
//   original_title,
//   title,
//   name,
//   vote_average,
//   vote_count,
//   genres,
//   overview,
//   popularity,
//   id,
// }) {
//   const filmGenres = genres.map(({ name }) => name).join(', ');
//   // posterPath
//   let posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
//   if (poster_path === null) {
//     posterPath = `https://qqcinema.com/wp-content/uploads/no-poster.png`;
//     }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Рендер модалки
//   const descriptionModal = `
// <div class="modal__container">
//   <button class="modal__close-btn">
//     <svg class="modal__close-icon" width="30" height="30">
//       <use href="./images/svg/close.svg"></use>
//     </svg>
//   </button>

//   <div class="modal__wrapper">
//     <div class="modal__image">
//       <img
//       id=${id}
//         src="${posterPath}"
//         alt="${title || original_title || name}"
//         width="240"
//         height="357"
//         class="img"
//       />
//     </div>
//     <div class="modal__content">
//       <h3 class="movie__title">${title || original_title || name}</h3>
//       <dl class="modal__meta">
//         <dt>Vote / Votes</dt>
//         <dd>
//           <span data-attr="avg-rating">${vote_average.toFixed}</span> <i>/</i>
//           <span data-attr="vote-count">${vote_count}</span>
//         </dd>

//         <dt>Popularity</dt>
//         <dd data-attr="popularity">${popularity}</dd>

//         <dt>Original Title</dt>
//         <dd data-attr="orig-title">${
//              title || original_title || name
//            }</dd>

//         <dt>Genre</dt>
//         <dd data-attr="genre">${filmGenres}</dd>
//       </dl>

//       <h4 class="movie__descr-title">About</h4>
//       <p class="modal__overview" data-attr="overview">${overview}</p>
//       <div class="button__row">
//         <button type="button" class="modal__btn modal__btn-watched">
//           add to watched
//         </button>
//         <button type="button" class="modal__btn modal__btn-queue">
//           add to queue
//         </button>
//       </div>
//     </div>
//   </div>
// </div>`;
//   return modalBackdrop.insertAdjacentHTML('beforeend', descriptionModal);
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// допоміжні ф-ції

// export function isOpenModal() {
//   modalWindowEl.classList.add('modal-open');
// }

// export function clearModal() {
//   modalWindowEl.innerHTML = '';
// }

// // ф-ція закриття модалки

// export function setCloseOptionModal() {
//   modalWindowEl.addEventListener('click', clickCloseModal);
//   modalWindowEl.addEventListener('click', e => {
//     if (e.target.nodeName == 'BUTTON') {
//       return;
//     }
//     modalWindowEl.classList.remove('modal-open');
//   });
// }

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape') {
//     modalWindowEl.classList.remove('modal-open');
//   }
// });

// function closeEscModal(event) {
//     if (event.code === "Escape") {
//         onCloseModal()
//     }
//     return
// }

// // Закриття по кліку на бекдроп
// function clickCloseModal(event) {
//     if (event.currentTarget === event.target) {
//         onCloseModal()
//     }
//     return
//   }

//   function onCloseModal() {
//     window.removeEventListener("keydown",closeEscModal)
//     modal.classList.remove("is-open")
//   }
