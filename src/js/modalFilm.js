import FilmsStorage from './localStorage';
import 'firebase/auth';
import firebase from 'firebase/app';
import FireStorage from './firebaseApi';


const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');
const filmsStorage = new FilmsStorage();
let firestorage = null;

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    const firestorage = new FireStorage(user);
    firestorage.getWatchedFromStorage().then(result => {
      if (result && result.some(element => element.id === curElement.id)) {
        watchedBtn.classList.add('ableToRemove');
        watchedBtn.textContent = 'remove from viewed';
      } else {
        watchedBtn.classList.add('ableToAdd');
        watchedBtn.textContent = 'add to watched';
      }
    });
    watchedBtn.addEventListener('click', watchedBtnHandler);
    function watchedBtnHandler() {
      if (watchedBtn.classList.contains('ableToAdd')) {
        firestorage.addToWatchedList(curElement);
        watchedBtn.classList.replace('ableToAdd', 'ableToRemove');
        watchedBtn.textContent = 'remove from viewed';
      } else {
        const index = firestorage.watched.findIndex(
          film => film.id === curElement.id
        );
        firestorage.removeFromWathedList(index);
        watchedBtn.classList.replace('ableToRemove', 'ableToAdd');
        watchedBtn.textContent = 'add to watched';
      }
    }
    firestorage.getQueueFromStorage().then(result => {
      if (result && result.some(element => element.id === curElement.id)) {
        queueBtn.classList.add('ableToRemove');
        queueBtn.textContent = 'remove from queue';
      } else {
        queueBtn.classList.add('ableToAdd');
        queueBtn.textContent = 'add to queue';
      }
    });
    queueBtn.addEventListener('click', queueBtnHandler);
    function queueBtnHandler() {
      if (queueBtn.classList.contains('ableToAdd')) {
        firestorage.addToQueueList(curElement);
        queueBtn.classList.replace('ableToAdd', 'ableToRemove');
        queueBtn.textContent = 'remove from queue';
        console.log(firestorage);
      } else {
        const index = firestorage.queue.findIndex(
          film => film.id === curElement.id
        );
        firestorage.removeFromQueueList(index);
        queueBtn.classList.replace('ableToRemove', 'ableToAdd');
        queueBtn.textContent = 'add to queue';
      }
    }
  } else {
    if (
      filmsStorage.watchedFilms.length &&
      filmsStorage.watchedFilms.some(element => element.id === curElement.id)
    ) {
      watchedBtn.classList.add('ableToRemove');
      watchedBtn.textContent = 'remove from viewed';
    } else {
      watchedBtn.classList.add('ableToAdd');
      watchedBtn.textContent = 'add to watched';
    }
    const watchedBtnHandler = () => {
      if (watchedBtn.classList.contains('ableToAdd')) {
        filmsStorage.addToWatchedFilm(curElement);
        watchedBtn.classList.replace('ableToAdd', 'ableToRemove');
        watchedBtn.textContent = 'remove from viewed';
      } else {
        const index = filmsStorage.watchedFilms.findIndex(
          film => film.id === curElement.id
        );
        filmsStorage.removeWathedFilm(index);

        watchedBtn.classList.replace('ableToRemove', 'ableToAdd');
        watchedBtn.textContent = 'add to watched';
      }
    };
    watchedBtn.addEventListener('click', watchedBtnHandler);
    if (
      filmsStorage.filmsQueue.length &&
      filmsStorage.filmsQueue.some(element => element.id === curElement.id)
    ) {
      queueBtn.classList.add('ableToRemove');
      queueBtn.textContent = 'remove from queue';
    } else {
      queueBtn.classList.add('ableToAdd');
      queueBtn.textContent = 'add to queue';
    }
    const queueBtnHandler = () => {
      if (queueBtn.classList.contains('ableToAdd')) {
        filmsStorage.addToQueue(curElement);
        queueBtn.classList.replace('ableToAdd', 'ableToRemove');
        queueBtn.textContent = 'remove from queue';
      } else {
        const index = filmsStorage.filmsQueue.findIndex(
          film => film.id === curElement.id
        );
        filmsStorage.removeFromQueue(index);
        queueBtn.classList.replace('ableToRemove', 'ableToAdd');
        queueBtn.textContent = 'add to queue';
      }
    };
    queueBtn.addEventListener('click', queueBtnHandler);
  }
});

export default firestorage;
