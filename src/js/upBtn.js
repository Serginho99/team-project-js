
let goTopBtn = document.querySelector('.up-button');

function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.scrollTopMax;

    if (scrolled > 500 && !Array.from(goTopBtn.classList).includes('up-button-show')) {
        goTopBtn.classList.add('up-button-show');
      }
      if (scrolled < 100) {
        goTopBtn.classList.remove('up-button-show');
      }
    }
    
    function upButton() {
      if (window.pageYOffset > 0) {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
        
      }
    }
    
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', upButton);