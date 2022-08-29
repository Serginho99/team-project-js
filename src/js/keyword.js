import axios from 'axios';

const apiKey = 'd7be37f171d8123214539749ff0838e8';
const baseUrl = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/w500';
const form = document.querySelector('.form');
const main = document.querySelector('#main');

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

let searchQueryValue;
let page;
form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  main.innerHTML = '';
  searchQueryValue = e.currentTarget.elements.searchQuery.value.trim();
  // searchFormApi(searchQueryValue);
  renderContainer(searchQueryValue);
}

async function searchFormApi(text) {
  const response = await axios.get(
    `${baseUrl}/search/movie?api_key=${apiKey}&query=${text}`
  );
  return response.data;
}

function createList(acc, cardFilm) {
  let genreArrayOfObj = genres.filter(function (g) {
    return cardFilm.genre_ids.indexOf(g.id) !== -1;
  });

  const genreNames = genreArrayOfObj.map(a => a.name);
  return (
    acc +
    `<div class="movie">
    <div class="wrapper-img">
    ${
      cardFilm.poster_path
        ? `<img src='${imgUrl + cardFilm.poster_path}' alt='${
            cardFilm.title
          }' data-id="${cardFilm.id}">`
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
                    .join(', ')}, Other | ${cardFilm.release_date.slice(
                    0,
                    4
                  )} </p>`
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
  return array.reduce(createList, '');
}

async function renderContainer(value) {
  const { results } = await searchFormApi(value);
  main.insertAdjacentHTML('beforeend', generateContentList(results));
}
