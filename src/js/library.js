import axios from 'axios';

const API_KEY = 'd7be37f171d8123214539749ff0838e8';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');
const mainLib = document.querySelector('#main-library');

watchedBtn.addEventListener('click', onWatchedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick() {
  mainLib.innerHTML = '';
  renderWatchedFilmsContainer();
}

function onQueueBtnClick() {
  mainLib.innerHTML = '';
  renderQueueFilmsContainer();
}

async function getWatchedFilms() {
   const getWatchedId = localStorage.getItem("watched");
   const parsedWatchedFilms = JSON.parse(getWatchedId);
   const savedFilms = [];
   for (let id in parsedWatchedFilms) {
      const film = await fetchStorageFilm(id);
      savedFilms.push(film);
   }
   return savedFilms;
}

async function getQueueFilms() {
   const getQueuedId = localStorage.getItem("queue");
   const parsedQueueFilms = JSON.parse(getQueuedId);
   const savedFilms = [];
   for (let id in parsedQueueFilms) {
      const film = await fetchStorageFilm(id);
      savedFilms.push(film);
   }
   return savedFilms;
}

async function fetchStorageFilm(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
}

function generateLibraryContentList(array) {
   return array.reduce(createLibraryMarkUp, '');
}

async function renderWatchedFilmsContainer() {
   const watchedFilms = await getWatchedFilms();
   mainLib.insertAdjacentHTML('beforeend', generateLibraryContentList(watchedFilms));
}

async function renderQueueFilmsContainer() {
   const queueFilms = await getQueueFilms();
   mainLib.insertAdjacentHTML('beforeend', generateLibraryContentList(queueFilms));
}

function createLibraryMarkUp(acc, cardFilm) {
  const genreNames = cardFilm.genres.map(a => a.name);
  return (
    acc +
    `<div class="movie" data-id="${cardFilm.id}">
    <div class="wrapper-img">
    ${
      cardFilm.poster_path
        ? `<img src='${IMG_URL + cardFilm.poster_path}' alt='${
            cardFilm.title
          }' data-id="${cardFilm.id}" >`
        : `<img src="${require('/src/images/default-poster-webp.webp')}" alt="${
            cardFilm.title
          }" data-id="${cardFilm.id}">`
    }
    </div>
        <div class="movie-info">
          <h3 class="title__info">${cardFilm.title}</h3>
            <div class="overview">
            ${
              genreNames.slice(0, 2).join(', ')
                ? `<p class="info__genres-and-year">${genreNames
                    .slice(0, 2)
                    .join(', ')} ${
                    genreNames.length > 2 ? ', Other' : ' '
                  } | ${cardFilm.release_date.slice(0, 4)} </p>`
                : `<p class="info__genres-and-year"> N/A | ${cardFilm.release_date.slice(
                    0,
                    4
                  )} </p>`
            }
            <span class="vote_average">${cardFilm.vote_average}</span> 
            </div>
        </div>
        </div>`
  );
}

const refs = {
   watchedBtn: document.querySelector('.watched-btn'),
   queueBtn: document.querySelector('.queue-btn')
}


refs.watchedBtn.addEventListener('click', onWatchedBtn);
refs.queueBtn.addEventListener('click', onQueueBtn);

function onWatchedBtn() {
   if (!refs.watchedBtn.classList.contains('button-active')) {
      refs.watchedBtn.classList.add('button-active');
      refs.queueBtn.classList.remove('button-active');
   }
   return;
}

function onQueueBtn() {
   if (!refs.queueBtn.classList.contains('button-active')) {
      refs.queueBtn.classList.add('button-active');
      refs.watchedBtn.classList.remove('button-active');
   }
   return;
}

