const API_KEY = 'api_key=d7be37f171d8123214539749ff0838e8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;
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

const main = document.getElementById('main');
const form = document.getElementById('.form');
const search = document.getElementById('.search');

// El pagination
const prev = document.querySelector('#prev');
const current = document.querySelector('#current');
const next = document.querySelector('#next');

let currentPage = 1;
let nextPage = 2;
let prevPage = 3;
let lastUrl = '';
let totalPages = 100;

getMovies(API_URL);

export function getMovies(url) {
  lastUrl = url;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      showMovies(data.results);

      currentPage = data.page;
      console.log(currentPage);
      nextPage = data.page + 1;
      prevPage = data.page - 1;
      totalPages = data.total_pages;

      current.innerText = currentPage;

      if (currentPage <= 1) {
        prev.classList.add('disabled');
        next.classList.remove('disabled');
      } else if (currentPage >= totalPages) {
        prev.classList.remove('disabled');
        next.classList.add('disabled');
      } else {
        prev.classList.remove('disabled');
        next.classList.remove('disabled');
      }
      main.scrollIntoView({ behavior: 'smooth' });

      if (data.results.length === 0) {
        console.log('ERROR IN SEARCH');
        getMovies(API_URL);
      }
    });
}

function showMovies(data) {
  main.innerHTML = '';
  data.forEach(movie => {
    const {
      title,
      poster_path,
      release_date,
      overview,
      genre_ids,
      popular,
      vote_average,
      vote_count,
      original_title,
      id,
    } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    let genreArrayOfObj = genres.filter(function (g) {
      return genre_ids.indexOf(g.id) !== -1;
    });

    const genreNames = genreArrayOfObj.map(a => a.name);

    movieEl.innerHTML = `
    ${
      poster_path
        ? `<img src='${IMG_URL + poster_path}' alt='${title}'>`
        : `<img src="${require('/src/images/default-poster-webp.webp')}" alt="${title}">`
    }
        <div class="movie-info">
          <h3 class="title__info">${title}</h3>
            <div class="overview">
            ${
              genreNames.slice(0, 3).join(', ')
                ? `<p class="info__genres-and-year">${genreNames
                    .slice(0, 3)
                    .join(', ')}
             | ${release_date.slice(0, 4)} </p>`
                : `<p class="info__genres-and-year"> N/A
             | ${release_date.slice(0, 4)} </p>`
            }          
            </div>
        </div>
    `;
    main.appendChild(movieEl);
  });
}
// Pagination
next.addEventListener('click', () => {
  if (nextPage > 0) {
    pageCall(nextPage);
  }
});

prev.addEventListener('click', () => {
  console.log(currentPage);
  if (prevPage <= totalPages && currentPage - 1 > 0) {
    pageCall(prevPage);
  }
});

function pageCall(page) {
  let urlSplit = lastUrl.split('?');
  let queryParams = urlSplit[1].split('?');
  let key = queryParams[queryParams.length - 1].split('=');
  if (key[0] !== 'page') {
    let url = lastUrl + '&page=' + page;
    getMovies(url);
  } else {
    key[1] = page.toString();
    let a = key.join('=');
    queryParams[queryParams.length - 1] = a;
    let b = queryParams.join('&');
    let url = urlSplit[0] + '?' + b;
    getMovies(url);
  }
}
