var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return i[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,i){n[e]=i},e.parcelRequired7c6=t),t.register("e738t",(function(e,i){e.exports=new URL(t("kyEFX").resolve("2G1uI"),import.meta.url).toString()})),t("kyEFX").register(JSON.parse('{"b5LSx":"index.277583a3.js","2G1uI":"default-poster-webp.86f2548c.webp"}'));const a="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d7be37f171d8123214539749ff0838e8",o=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],d=document.getElementById("main"),r=(document.getElementById(".form"),document.getElementById(".search"),document.querySelector("#prev")),s=document.querySelector("#current"),l=document.querySelector("#next");let c=1,m=2,p=3,u="",g=100;function f(e){u=e,fetch(e).then((e=>e.json())).then((e=>{!function(e){d.innerHTML="",e.forEach((e=>{const{title:i,poster_path:n,release_date:a,overview:r,genre_ids:s,popular:l,vote_average:c,vote_count:m,original_title:p,id:u}=e,g=document.createElement("div");g.classList.add("movie"),g.setAttribute("data-id",`${u}`);const f=o.filter((function(e){return-1!==s.indexOf(e.id)})).map((e=>e.name));g.innerHTML=`\n    <div class="wrapper-img">\n    ${n?`<img src='${"https://image.tmdb.org/t/p/w500"+n}' alt='${i}' data-id="${u}">`:`<img src="${t("e738t")}" alt="${i}" data-id="${u}">`}\n    </div>\n        <div class="movie-info">\n          <h3 class="title__info">${i}</h3>\n            <div class="overview">\n            ${f.slice(0,2).join(", ")?`<p class="info__genres-and-year">${f.slice(0,2).join(", ")} ${f.length>2?" ":", Other"}\n             | ${a.slice(0,4)} </p>`:`<p class="info__genres-and-year"> N/A\n             | ${a.slice(0,4)} </p>`}\n            </div>\n        </div>\n    `,d.appendChild(g)}))}(e.results),c=e.page,console.log(c),m=e.page+1,p=e.page-1,g=e.total_pages,s.innerText=c,c<=1?(r.classList.add("disabled"),l.classList.remove("disabled")):c>=g?(r.classList.remove("disabled"),l.classList.add("disabled")):(r.classList.remove("disabled"),l.classList.remove("disabled")),0===e.results.length&&(console.log("ERROR IN SEARCH"),f(a))}))}function v(e){d.scrollIntoView({behavior:"smooth"});let i=u.split("?"),n=i[1].split("?"),t=n[n.length-1].split("=");if("page"!==t[0]){f(u+"&page="+e)}else{t[1]=e.toString();let a=t.join("=");n[n.length-1]=a;let o=n.join("&");f(i[0]+"?"+o)}}f(a),l.addEventListener("click",(()=>{m>0&&v(m)})),r.addEventListener("click",(()=>{console.log(c),p<=g&&c-1>0&&v(p)}));
//# sourceMappingURL=index.277583a3.js.map