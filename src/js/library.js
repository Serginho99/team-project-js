const refs = {
   watchedBtn: document.querySelector('.watched-btn'),
   queueBtn: document.querySelector('.queue-btn')
}


refs.watchedBtn.addEventListener('click', onWatchedBtn);
refs.queueBtn.addEventListener('click', onQueueBtn);

function onWatchedBtn() {
   if (!refs.watchedBtn.classList.contains('button-active')) {
      refs.watchedBtn.classList.add('button-active');
      refs.queueBtn.classList.remove('button-active');
   }
   return;
}

function onQueueBtn() {
   if (!refs.queueBtn.classList.contains('button-active')) {
      refs.queueBtn.classList.add('button-active');
      refs.watchedBtn.classList.remove('button-active');
   }
   return;   
}