
const refs = {
    closeModalBtns: document.querySelector("[data-modal-close]"),
    backdrops: document.querySelector(".modal__backdrop")
};

refs.closeModalBtns.addEventListener('click', onCloseModal);

function onCloseModal() {
     refs.backdrops.classList.add('is-hidden');
}

