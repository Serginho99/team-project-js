function e(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=i.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,i.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,i){t[e]=i},i.parcelRequired7c6=a),a.register("e738t",(function(e,i){e.exports=new URL(a("kyEFX").resolve("2G1uI"),import.meta.url).toString()})),a("kyEFX").register(JSON.parse('{"7DvOR":"index.1b4f4407.js","2G1uI":"default-poster-webp.86f2548c.webp"}'));var r=a("2shzp"),d=a("eWCmQ");const o=document.querySelector(".top-rating"),s=document.querySelector("#main"),c=document.querySelector(".pagination"),l=document.querySelector(".load-more-rating"),u=document.querySelector(".select-btn"),m=document.querySelector(".load-more"),f=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];let p,v;function y(e,i){const n=f.filter((function(e){return-1!==i.genre_ids.indexOf(e.id)})).map((e=>e.name));return e+`<div class="movie" data-id="${i.id}">\n    <div class="wrapper-img">\n    ${i.poster_path?`<img src='${"https://image.tmdb.org/t/p/w500"+i.poster_path}' alt='${i.title}' data-id="${i.id}" >`:`<img src="${a("e738t")}" alt="${i.title}" data-id="${i.id}">`}\n    </div>\n        <div class="movie-info">\n          <h3 class="title__info">${i.title}</h3>\n            <div class="overview">\n            ${n.slice(0,2).join(", ")?`<p class="info__genres-and-year">${n.slice(0,2).join(", ")} ${n.length>2?", Other":" "} | ${i.release_date.slice(0,4)} </p>`:`<p class="info__genres-and-year"> N/A | ${i.release_date.slice(0,4)} </p>`}\n            <span class="vote_average">${i.vote_average}</span> \n            </div>\n        </div>\n        </div>`}async function g(i){const{results:n,total_results:t}=await async function(i){return(await e(r).get(`\n   https://api.themoviedb.org/3/movie/top_rated?api_key=d7be37f171d8123214539749ff0838e8&page=${i}`)).data}(i);var a;a=t,v=Math.ceil(a/20);try{s.innerHTML="",s.insertAdjacentHTML("beforeend",n.reduce(y,"")),1===i&&d.Notify.success(`Hooray! We found ${t} films.`),i>=v&&(l.classList.add("is-hidden"),d.Notify.info("We're sorry, but you've reached the end of search results."))}catch(e){console.log(e)}}o.addEventListener("click",(function(e){e.preventDefault(),p=1,g(p),c.classList.add("is-hidden"),l.classList.remove("is-hidden"),u.classList.add("is-hidden"),m.classList.add("is-hidden")})),l.addEventListener("click",(function(){p+=1,s.scrollIntoView({behavior:"smooth"}),g(p)}));
//# sourceMappingURL=index.1b4f4407.js.map