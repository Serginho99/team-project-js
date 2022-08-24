const API_KEY = 'api_key=d7be37f171d8123214539749ff0838e8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

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
  data.forEach(movie => {
    const { title, poster_path, vote_average, overview, id, popular } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = ``;
  });
}
