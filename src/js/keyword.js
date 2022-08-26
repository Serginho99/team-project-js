import axios from 'axios';

const apiKey = 'd7be37f171d8123214539749ff0838e8';
const baseUrl = 'https://api.themoviedb.org/3';
const form = document.querySelector('.form');
const containerFilm = document.querySelector('.movie');
const main = document.getElementById('main');
// console.log(containerFilm);
const api_url = baseUrl + '/discover/movie?sort_by=popularity.desc&' + apiKey;

let searchQueryValue;
let page;
form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  searchQueryValue = e.currentTarget.elements.searchQuery.value.trim();

  //   page = 1;
  //   containerFilm.innerHTML = '';
  const filmData = searchFormApi(searchQueryValue);
  // console.log('233333', filmData);

  renderFilm(filmData);
}

async function searchFormApi(text) {
  const response = await axios.get(
    `${baseUrl}/search/movie?api_key=${apiKey}&query=${text}`
  );
  return response.data.results;
}

function renderFilm(data) {
  main.innerHTML = '';
  // console.log(main);
  data.forEach(data => {
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
    <img src='${data.api_url + data.poster_path}' alt='${data.title}'>
        <div class="movie-info">
          <h3 class="title__info">${data.title}</h3>
            <div class="overview">
            <p class="info__genres-and-year">${data.genreNames.join(', ')} | ${
      data.release_date
    } </p>
            </div>
        </div>
    `;
    main.appendChild(movieEl);
  });
}
