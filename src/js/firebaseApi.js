// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC982yOcIN4pKN0yu7jsdmHwz2qdMtkHYE',
  authDomain: 'filmoteka-goit-49-2022.firebaseapp.com',
  projectId: 'filmoteka-goit-49-2022',
  storageBucket: 'filmoteka-goit-49-2022.appspot.com',
  messagingSenderId: '719559817308',
  appId: '1:719559817308:web:5479628f88d1fed31d0e99',
  measurementId: 'G-WW18CEBPS0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// --------------------------------------------------------------

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// -----------------------------------------
const refs = {
  gallery: document.querySelector('.movies__list'),

  libraryBtn: document.querySelector('#library-button'),

  watchedBtn: document.querySelector('.modal__btn-watched'),
  queueBtn: document.querySelector('.modal__btn-queue'),
};
// -----------------------------------------------------------

export default class FireStorage {
  constructor(user) {
    this._watched = [];
    this._queue = [];
    this.user = user;
  }
  get watched() {
    return this._watched;
  }
  get queue() {
    return this._queue;
  }
  addToWatchedList(item) {
    this._watched.push(item);
    console.log(item);
    this.saveWatchedFilms();
    if (refs.libraryBtn.disabled && refs.watchedBtn.disabled)
      this.showWatched(this._watched);
  }
  removeFromWathedList(index) {
    this._watched.splice(index, 1);
    this.saveWatchedFilms();
    if (refs.libraryBtn.disabled && refs.watchedBtn.disabled)
      this.showWatched(this._watched);
  }

  saveWatchedFilms() {
    db.collection('users')
      .doc(this.user.uid)
      .collection('Watched')
      .doc('Markup')
      .set({ list: JSON.stringify(this._watched) });
  }
  async getWatchedFromStorage() {
    const data = await db
      .collection('users')
      .doc(this.user.uid)
      .collection('Watched')
      .doc('Markup')
      .get();
    if (data.data()) {
      const savedFilms = data.data().list;
      if (!savedFilms) {
        Notify.info({
          text: 'Your watchedlist is empty.',
          delay: 1000,
        });
        refs.gallery.innerHTML = null;
        return;
      }
      JSON.parse(savedFilms).forEach(object => {
        this._watched.push(object);
      });
      return JSON.parse(savedFilms);
    }
  }
  showWatched(films) {
    refs.watchedBtn.disabled = true;
    refs.queueBtn.disabled = false;
    let watchedFilmsMarkup = '';
    films.forEach(object => {
      watchedFilmsMarkup +=
        '<li class="movies__list-item">' + object.element + '</li>';
    });
    refs.gallery.innerHTML = watchedFilmsMarkup;
  }
  addToQueueList(item) {
    this._queue.push(item);
    this.saveQueueFilms();
    if (refs.libraryBtn.disabled && refs.queueBtn.disabled)
      this.showQueue(this._queue);
  }
  removeFromQueueList(index) {
    this._queue.splice(index, 1);
    this.saveQueueFilms();
    if (refs.libraryBtn.disabled && refs.queueBtn.disabled)
      this.showQueue(this._queue);
  }

  saveQueueFilms() {
    db.collection('users')
      .doc(this.user.uid)
      .collection('Queue')
      .doc('Markup')
      .set({ list: JSON.stringify(this._queue) });
  }
  async getQueueFromStorage() {
    const data = await db
      .collection('users')
      .doc(this.user.uid)
      .collection('Queue')
      .doc('Markup')
      .get();
    if (data.data()) {
      const savedFilms = data.data().list;
      if (!savedFilms) {
        Notify.info({
          text: 'Your watchedlist is empty.',
          delay: 1000,
        });
        refs.gallery.innerHTML = null;
        return;
      }
      JSON.parse(savedFilms).forEach(object => {
        this._queue.push(object);
      });
      return JSON.parse(savedFilms);
    }
  }
  showQueue(films) {
    refs.queueBtn.disabled = true;
    refs.watchedBtn.disabled = false;
    let queueFilmsMarkup = '';
    films.forEach(object => {
      queueFilmsMarkup +=
        '<li class="movies__list-item">' + object.element + '</li>';
    });
    refs.gallery.innerHTML = queueFilmsMarkup;
  }
}
