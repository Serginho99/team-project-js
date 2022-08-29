import FilmsStorage from './localStorage';
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
import FireStorage from './firebaseApi';

const filmsStorage = new FilmsStorage();

const refs = {
  libraryBtn: document.querySelector('#library-button'),
  libraryBtnsContainer: document.querySelector('.btn-list'),

  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
};

refs.homeBtn.addEventListener('click', e => hendlerHomeBtn(e));
refs.libraryBtn.addEventListener('click', e => hendlerLibraryBtn(e));

export default function hendlerHomeBtn(e) {
  refs.libraryBtn.disabled = false;
  refs.homeBtn.disabled = true;
  refs.watchedBtn.disabled = false;
  refs.queueBtn.disabled = false;

  refs.libraryBtnsContainer.classList.add('visually-hidden');
}

function hendlerLibraryBtn(e) {
  refs.libraryBtn.disabled = true;
  refs.homeBtn.disabled = false;
  refs.disabled = true;
  refs.queueBtn.disabled = false;

  refs.homeBtn.classList.remove('current');
  refs.libraryBtn.classList.add('current');
  refs.watchedBtn.classList.add('activeBtn');
  refs.libraryBtnsContainer.classList.remove('visually-hidden');

  const user = firebase.auth().currentUser;
  const firestorage = new FireStorage(user);
  const watchedClickBtn = () => {
    firestorage.getWatchedFromStorage().then(res => {
      firestorage.showWatched(res);
    });
  };
  const queueClickBtn = () => {
    firestorage.getQueueFromStorage().then(res => {
      firestorage.showQueue(res);
    });
  };
  if (user) {
    firestorage.getWatchedFromStorage().then(res => {
      firestorage.showWatched(res);
    });
    refs.watchedBtn.removeEventListener('click', filmsStorage.showWatchedFilms);
    refs.queueBtn.removeEventListener('click', filmsStorage.showFilmsQueue);

    refs.watchedBtn.addEventListener('click', watchedClickBtn);
    refs.queueBtn.addEventListener('click', queueClickBtn);
  } else {
    filmsStorage.showWatchedFilms();
    refs.watchedBtn.removeEventListener('click', watchedClickBtn);
    refs.queueBtn.removeEventListener('click', queueClickBtn);
    refs.watchedBtn.addEventListener('click', filmsStorage.showWatchedFilms);
    refs.queueBtn.addEventListener('click', filmsStorage.showFilmsQueue);
  }
}

const btns = refs?.libraryBtnsContainer?.getElementsByClassName('btn-list');

for (let i = 0; i < btns?.length; i++) {
  btns[i]?.addEventListener('click', function () {
    const current =
      refs.libraryBtnsContainer.getElementsByClassName('button-active');

    if (current.length > 0) {
      current[0].className = current[0].className.replace('.button-active', '');
    }

    this.className += '.button-active';
  });
}
