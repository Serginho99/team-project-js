const API_KEY = 'api_key=d7be37f171d8123214539749ff0838e8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      showMovies(data.results);
    })
    .catch(error => console.log(error));
}

function showMovies(data) {
    main.innerHTML = '';
  data.forEach(movie => {
    const { title, poster_path, release_date, overview, genre_ids, popular, vote_average, vote_count, original_title, id } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
    <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="orange">${release_date}</span>
        </div>

        <div class="overview">
        <h3>overview</div>
        ${overview}
        </div>
    `

    main.appendChild(movieEl)
  });
}
