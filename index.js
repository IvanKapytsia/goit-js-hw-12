import{a as b,S as w,i as d}from"./assets/vendor-hwdYKDic.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const l=40;let n=1;function L(t,o=!1){o?++n:n=1;const a={params:{key:"48678129-2163769dcaa82a491114adb07",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,iMAGES_per_page:l,page:n}};return b.get("https://pixabay.com/api/",a)}const u="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3c!--%20Magnifying%20Glass%20--%3e%3ccircle%20cx='10'%20cy='10'%20r='7'%20stroke='%23fff'%20stroke-width='2'%20/%3e%3cline%20x1='15'%20y1='15'%20x2='21'%20y2='21'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c!--%20Cross%20inside%20the%20lens%20--%3e%3cline%20x1='7'%20y1='7'%20x2='13'%20y2='13'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3cline%20x1='13'%20y1='7'%20x2='7'%20y2='13'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c/svg%3e",c=document.querySelector(".gallery"),h=document.querySelector(".loader-box"),m=document.getElementById("load-more");function v(t,o=!1){o||(c.innerHTML="");const a=t.map(({webformatURL:i,largeImageURL:e,tags:s,likes:r,views:g,comments:p,downloads:y})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${e}">
              <figure class="thumb-container">
                <img
                  class="thumb-image"
                  src="${i}"
                  data-source="${e}"
                  alt="${s}"
                />

                <figcaption class="thumb-data">
                  <dl class="thumb-data-list">
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Likes</dt>
                      <dd class="thumb-data-data">${r}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Views</dt>
                      <dd class="thumb-data-data">${g}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Comments</dt>
                      <dd class="thumb-data-data">${p}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Downloads</dt>
                      <dd class="thumb-data-data">${y}</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            </a>
          </li>
        `).join("");c.insertAdjacentHTML("beforeend",a),S.refresh(),o&&t.length&&x()}function x(){const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}const S=new w(".gallery a",{captionsData:"alt",captionDelay:250});function M(t=!1){t||c.classList.add("hidden"),h.classList.remove("hidden")}function k(){c.classList.remove("hidden"),h.classList.add("hidden")}function E(){d.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",iconUrl:u,maxWidth:"432px",backgroundColor:"#EF4040"})}function $(){d.show({position:"topRight",message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",iconUrl:u,maxWidth:"432px",backgroundColor:"#FF6347"})}function q(){m.classList.remove("hidden")}function C(){m.classList.add("hidden")}const B=document.querySelector("form"),H=document.querySelector("#search-text"),P=document.getElementById("load-more");B.addEventListener("submit",t=>{t.preventDefault(),f()});P.addEventListener("click",()=>f(!0));async function f(t=!1){C();const o=H.value.trim();if(o){M(t);try{const a=await L(o,t);R(a.data,t)}catch(a){console.log(a)}}}function R({hits:t,totalHits:o},a){const i=Math.ceil(o/l),e=n===i,s=!!t.length;s||E(),e&&$(),s&&!e&&q(),k(),v(t,a)}
//# sourceMappingURL=index.js.map
