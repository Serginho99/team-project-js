function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},d=n.parcelRequired7c6;null==d&&((d=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){a[e]=t},n.parcelRequired7c6=d),d.register("kyEFX",(function(t,n){var o,a;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var d={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)d[t[n]]=e[t[n]]},a=function(e){var t=d[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),d.register("e738t",(function(e,t){e.exports=new URL(d("kyEFX").resolve("2G1uI"),import.meta.url).toString()})),d("kyEFX").register(JSON.parse('{"4qmyt":"index.a26a7fcb.js","2G1uI":"default-poster-webp.86f2548c.webp","6tBy4":"library.3b7dab4b.js"}'));var r=d("2shzp");const i=document.querySelector(".modal__backdrop"),l=document.querySelector(".modal__render"),c=document.querySelector("#main");document.querySelector(".movie");document.addEventListener("keydown",m),i.addEventListener("click",(function(e){const t=document.querySelector(".modal__btn-queue"),n=document.querySelector(".modal__btn-watched");e.currentTarget===e.target&&(i.classList.add("is-hidden"),window.removeEventListener("keydown",m),n.remove(),t.remove(),document.body.classList.toggle("modal-open"))})),c.addEventListener("click",(e=>{e.target.classList.contains("movie")&&(i.classList.remove("is-hidden"),async function(e){const n=await async function(e){return(await t(r).get(`https://api.themoviedb.org/3/movie/${e}?api_key=d7be37f171d8123214539749ff0838e8`)).data}(e);l.innerHTML="",l.insertAdjacentHTML("beforeend",function(e){return`\n          <div class="modal__wrapper">\n          <div class="modal__image">\n          ${e.poster_path?`<img\n            id=${e.id}\n              src="https://image.tmdb.org/t/p/w500${e.poster_path}"\n              alt="${e.title}"\n              width="240"\n              height="357"\n              class="img"\n            />`:`<img\n            id=${e.id}\n              src="${d("e738t")}"\n              alt="${e.title||e.original_title||e.name}"\n              width="240"\n              height="357"\n              class="img"\n            />`}\n            \n          </div>\n          <div class="modal__content">\n            <h3 class="movie__title">${e.title||e.original_title||e.name}</h3>\n            <dl class="modal__meta">\n              <dt>Vote / Votes</dt>\n              <dd>\n                <span data-attr="avg-rating">${e.vote_average.toFixed()}</span> <i>/</i>\n                <span data-attr="vote-count">${e.vote_count}</span>\n              </dd>\n\n              <dt>Popularity</dt>\n              <dd data-attr="popularity">${e.popularity}</dd>\n\n              <dt>Original Title</dt>\n              <dd data-attr="orig-title">${e.title||e.original_title||e.name}</dd>\n\n              <dt>Genre</dt>\n              ${e.genres[0]?`<dd data-attr="genre">${e.genres[0].name}</dd>`:`<dd data-attr="genre">${e.genres[0]}</dd>`}\n              \n            </dl>\n\n            <h4 class="movie__descr-title">About</h4>\n            <p class="modal__overview" data-attr="overview">${e.overview}</p>\n            <div class="button__row">\n              <button type="button" data-id="${e.id}" class="modal__btn modal__btn-watched">\n                add to watched\n              </button>\n              <button type="button" data-id="${e.id}" class="modal__btn modal__btn-queue">\n                add to queue\n              </button>\n            </div>\n          </div>\n        </div>`}(n)),function(e){function t(){u[e]=e,localStorage.setItem("queue",JSON.stringify(u)),delete s[e],localStorage.setItem("watched",JSON.stringify(s))}document.querySelector(".modal__btn-queue").addEventListener("click",t)}(e),function(e){const t=document.querySelector(".modal__btn-watched");function n(){s[e]=e,localStorage.setItem("watched",JSON.stringify(s)),delete u[e],localStorage.setItem("queue",JSON.stringify(u))}t.addEventListener("click",n),console.log(t)}(e)}(e.target.dataset.id),document.body.classList.toggle("modal-open"))}));const s=localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):{},u=localStorage.getItem("queue")?JSON.parse(localStorage.getItem("queue")):{};function m(e){const t=document.querySelector(".modal__btn-queue"),n=document.querySelector(".modal__btn-watched");"Escape"===e.code&&(i.classList.add("is-hidden"),window.removeEventListener("keydown",m),n.remove(),t.remove(),document.body.classList.toggle("modal-open"))}
//# sourceMappingURL=index.a26a7fcb.js.map