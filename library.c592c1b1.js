!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a.register("94zNs",(function(e,t){e.exports=a("aNJCr").getBundleURL("dxfJX")+a("iE7OH").resolve("7u6Ym")})),a("iE7OH").register(JSON.parse('{"dxfJX":"library.c592c1b1.js","7u6Ym":"default-poster-webp.86f2548c.webp"}'));var d=a("bpxeT"),c=a("2TvXO"),r=a("dIxxU"),i="d7be37f171d8123214539749ff0838e8",l="https://api.themoviedb.org/3",s=document.querySelector(".modal__backdrop"),u=document.querySelector(".modal__render"),m=document.querySelector("#main-library");document.querySelector(".movie");function g(e){return p.apply(this,arguments)}function p(){return(p=e(d)(e(c).mark((function t(n){var o;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(r).get("".concat(l,"/movie/").concat(n,"?api_key=").concat(i));case 2:return o=t.sent,t.abrupt("return",o.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){return(_=e(d)(e(c).mark((function t(n){var o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(n);case 2:o=e.sent,u.innerHTML="",u.insertAdjacentHTML("beforeend",L(o)),w(n),h(n),S(n);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}document.addEventListener("keydown",q),s.addEventListener("click",(function(e){var t=document.querySelector(".modal__btn-queue"),n=document.querySelector(".modal__btn-watched");e.currentTarget===e.target&&(s.classList.add("is-hidden"),window.removeEventListener("keydown",q),n.remove(),t.remove(),document.body.classList.toggle("modal-open"))})),m.addEventListener("click",(function(e){console.log("sdgasfagfaerf"),e.target.classList.contains("movie")&&(s.classList.remove("is-hidden"),function(e){_.apply(this,arguments)}(e.target.dataset.id),document.body.classList.toggle("modal-open"))}));var f="watched",v="queue",b=localStorage.getItem(f)?JSON.parse(localStorage.getItem(f)):{},y=localStorage.getItem(v)?JSON.parse(localStorage.getItem(v)):{};function h(e){var t=document.querySelector(".modal__btn-watched");t.addEventListener("click",(function(){b[e]=e,localStorage.setItem(f,JSON.stringify(b)),delete y[e],localStorage.setItem(v,JSON.stringify(y)),s.classList.add("is-hidden"),document.body.classList.toggle("modal-open"),location.reload()})),console.log(t)}function w(e){document.querySelector(".modal__btn-queue").addEventListener("click",(function(){y[e]=e,localStorage.setItem(v,JSON.stringify(y)),delete b[e],localStorage.setItem(f,JSON.stringify(b)),s.classList.add("is-hidden"),document.body.classList.toggle("modal-open"),location.reload()}))}function S(e){document.querySelector(".modal__btn-deleted").addEventListener("click",(function(){delete y[e],localStorage.setItem(v,JSON.stringify(y)),delete b[e],localStorage.setItem(f,JSON.stringify(b)),s.classList.add("is-hidden"),document.body.classList.toggle("modal-open"),location.reload()}))}function L(e){return'\n          <div class="modal__wrapper">\n          <div class="modal__image">\n          '.concat(e.poster_path?"<img\n            id=".concat(e.id,'\n              src="').concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path,'"\n              alt="').concat(e.title,'"\n              width="240"\n              height="357"\n              class="img"\n            />'):"<img\n            id=".concat(e.id,'\n              src="').concat(a("94zNs"),'"\n              alt="').concat(e.title||e.original_title||e.name,'"\n              width="240"\n              height="357"\n              class="img"\n            />'),'\n            \n          </div>\n          <div class="modal__content">\n            <h3 class="movie__title">').concat(e.title||e.original_title||e.name,'</h3>\n            <dl class="modal__meta">\n              <dt>Vote / Votes</dt>\n              <dd>\n                <span data-attr="avg-rating">').concat(e.vote_average.toFixed(),'</span> <i>/</i>\n                <span data-attr="vote-count">').concat(e.vote_count,'</span>\n              </dd>\n\n              <dt>Popularity</dt>\n              <dd data-attr="popularity">').concat(e.popularity,'</dd>\n\n              <dt>Original Title</dt>\n              <dd data-attr="orig-title">').concat(e.title||e.original_title||e.name,"</dd>\n\n              <dt>Genre</dt>\n              ").concat(e.genres[0]?'<dd data-attr="genre">'.concat(e.genres[0].name,"</dd>"):'<dd data-attr="genre">'.concat(e.genres[0],"</dd>"),'\n              \n            </dl>\n\n            <h4 class="movie__descr-title">About</h4>\n            <p class="modal__overview" data-attr="overview">').concat(e.overview,'</p>\n            <div class="button__row">\n              <button type="button" data-id="').concat(e.id,'" class="modal__btn modal__btn-watched">\n                add to watched\n              </button>\n              <button type="button" data-id="').concat(e.id,'" class="modal__btn modal__btn-queue">\n                add to queue\n              </button>\n              <button type="button" data-id="').concat(e.id,'" class="modal__btn modal__btn-deleted">\n                DELETED\n              </button>\n            </div>\n          </div>\n        </div>')}function q(e){var t=document.querySelector(".modal__btn-queue"),n=document.querySelector(".modal__btn-watched");"Escape"===e.code&&(s.classList.add("is-hidden"),window.removeEventListener("keydown",q),n.remove(),t.remove(),document.body.classList.toggle("modal-open"))}}();
//# sourceMappingURL=library.c592c1b1.js.map
