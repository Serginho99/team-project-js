let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
    mask.remove()
   }, 600);
})


// const button = {
//     add: document.querySelector("[data-create]"),
//     sub: document.querySelector("[data-destroy]"),
//     inputName: document.querySelector('input'),
// }

// let counter;
// const handleClick = (event) => {
//   counter = parseInt(event.currentTarget.value);
//   console.log(counter);
//   }
// button.inputName.addEventListener("change", handleClick);

// const createDiv = (event) => {
//       let loaderDiv = document.createElement("div");
//       loaderDiv.classList.add('loader');
// }

// button.add.addEventListener("click", createDiv);

// const deleteDiv = (event) => {
//     const divInBoxes = document.querySelector('.loader')
//     divInBoxes.remove();
//   }

// button.sub.addEventListener("click", deleteDiv);


   


//===============================================LOADER
// const main = document.querySelector('main');
// const loader = document.querySelector('.loader');


// const myFunction = setTimeout(showPage, 3000);


// function showPage() {
//   loader.classList.add('.hidden');
//   main.classList.add('.nohidden');
// }




//=============================================================