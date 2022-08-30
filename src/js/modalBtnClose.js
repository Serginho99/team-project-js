
const refs = {
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector(".modal__backdrop"),

};

refs.closeModalBtn.addEventListener('click', onCloseModal);
function onCloseModal() {
    refs.backdrop.classList.add('.is-hidden');
    
}
