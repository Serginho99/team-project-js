const refs = {
  openModalBtn: document.querySelector('[data-modal-students-open]'),
  closeModalBtn: document.querySelector('[data-modal-students-close]'),
  backdrop: document.querySelector('[data-modal-students]'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal(e) {
  e.preventDefault();
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.remove('is-hidden-students');
  document.body.classList.add('modal-open');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.add('is-hidden-students');
  document.body.classList.remove('modal-open');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscKeyPress(e) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = e.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
