import axios from 'axios';
import { Notify } from 'notiflix';

const apiKey = 'd7be37f171d8123214539749ff0838e8';
const baseUrl = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/w500';

const topRatingBtn = document.querySelector('.top-rating');
const mainRef = document.querySelector('#main');
const pag = document.querySelector('.pagination');
const loadMoreRatingBtn = document.querySelector('.load-more-rating');
const loadMoreBtnGenreFilms = document.querySelector('.select-btn');
const loadMoreBtn = document.querySelector('.load-more');

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

let page;
let totalPages;

topRatingBtn.addEventListener('click', onClickRatingBtn);
function onClickRatingBtn(e) {
  e.preventDefault();
  page = 1;
  renderContainer(page);
  pag.classList.add('is-hidden');
  loadMoreRatingBtn.classList.remove('is-hidden');
  loadMoreBtnGenreFilms.classList.add('is-hidden');
  loadMoreBtn.classList.add('is-hidden');
}

loadMoreRatingBtn.addEventListener('click', onClickLoadMoreRating);
function onClickLoadMoreRating() {
  page += 1;
  mainRef.scrollIntoView({ behavior: 'smooth' });
  renderContainer(page);
}

async function fetchMovieByRating(page) {
  const response = await axios.get(`
   ${baseUrl}/movie/top_rated?api_key=${apiKey}&page=${page}`);
  return response.data;
}

function renderList(acc, cardFilm) {
  let genreArrayOfObj = genres.filter(function (g) {
    return cardFilm.genre_ids.indexOf(g.id) !== -1;
  });

  const genreNames = genreArrayOfObj.map(a => a.name);
  return (
    acc +
    `<div class="movie" data-id="${cardFilm.id}">
    <div class="wrapper-img">
    ${
      cardFilm.poster_path
        ? `<img src='${imgUrl + cardFilm.poster_path}' alt='${
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

function generateContentList(array) {
  return array.reduce(renderList, '');
}

async function renderContainer(page) {
  const { results, total_results } = await fetchMovieByRating(page);
  totalPage(total_results);
  try {
    mainRef.innerHTML = '';
    mainRef.insertAdjacentHTML('beforeend', generateContentList(results));
    if (page === 1) {
      Notify.success(`Hooray! We found ${total_results} films.`);
    }
    if (page >= totalPages) {
      loadMoreRatingBtn.classList.add('is-hidden');
      Notify.info("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    console.log(error);
  }
}

function totalPage(totalResults) {
  totalPages = Math.ceil(totalResults / 20);
}
