import axios from 'axios';

const apiKey = 'd7be37f171d8123214539749ff0838e8';
const baseUrl = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/w500';
const select = document.querySelector('.js-select');
const mainEl = document.querySelector('#main');
const pag = document.querySelector('.pagination');
const buttonLoadMore = document.querySelector('.load-more');
const selectBtn = document.querySelector('.select-btn');

// const divFilter = document.querySelector('.filter');
// const formEl = document.querySelector('.form-filter');
// console.log(formEl);

// console.log(select);

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
let value;

select.addEventListener('change', onSelectChange);

function onSelectChange(event) {
  event.preventDefault();
  selectBtn.classList.remove('is-hidden');
  pag.classList.add('is-hidden');
  value = event.target.value;
  page = 1;
  renderContainer(value, page);
  buttonLoadMore.classList.add('is-hidden');
}

selectBtn.addEventListener('click', onSelectMore);
function onSelectMore() {
  page += 1;
  mainEl.scrollIntoView({ behavior: 'smooth' });
  renderContainer(value, page);
}

async function fetchMovieById(id, page) {
  const response = await axios.get(`
  ${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${id}&page=${page}`);
  console.log(response.data);
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

async function renderContainer(id, page) {
  const { results } = await fetchMovieById(id, page);
  mainEl.innerHTML = '';
  mainEl.insertAdjacentHTML('beforeend', generateContentList(results));
}
