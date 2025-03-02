import{a as P,i as u,S as q}from"./assets/vendor-SnYWMg9o.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const E="45785559-b0577f06fb94f4ced9a4d3280",M="https://pixabay.com/api/";async function g(e,s,i){try{return e=e.replace(/\s+/g,"+"),(await P.get(`${M}`,{params:{key:E,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:i}})).data}catch(r){throw u.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),r}}function L(e){return e.map(({webformatURL:s,largeImageURL:i,tags:r,likes:t,views:o,comments:a,downloads:B})=>`<li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${s}" alt="${r}">
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${t}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${o}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${a}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${B}</p>
        </div>
      </div>
    </li>`).join("")}const c=document.querySelector(".js-form"),h=document.querySelector(".js-gallery"),n=document.querySelector(".loader"),p=document.querySelector(".load-more-btn"),v=document.querySelector(".load-more-btn_text"),b=document.querySelector(".loader-btn");let d="",y;const f=40;let l,w;n.style.display="none";c.addEventListener("submit",k);async function k(e){if(e.preventDefault(),h.innerHTML="",n.style.display="block",d=e.target.elements.query.value.trim(),l=1,d==="")return u.warning({title:"Hello",message:"Please enter search text!"}),n.style.display="none",m(),c.reset();try{const s=await g(d,l,f);if(h.insertAdjacentHTML("beforeend",L(s.hits)),w=s.totalHits,!s.hits.length){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.style.display="none",m(),c.reset();return}n.style.display="none",y=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),y.refresh(),S()}catch{n.style.display="none"}c.reset()}p.addEventListener("click",$);async function $(){l+=1,S(),H();const e=await g(d,l,f);h.insertAdjacentHTML("beforeend",L(e.hits)),O(),T()}function C(){p.classList.remove("hidden")}function m(){p.classList.add("hidden")}function S(){const e=Math.ceil(w/f);l>=e?(m(),u.info({title:"Hello",message:"You have viewed all the images.",position:"topRight"})):C()}function H(){b.classList.remove("hidden"),v.classList.add("hidden")}function O(){b.classList.add("hidden"),v.classList.remove("hidden")}function x(){document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".up-btn");e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?e.classList.add("show"):e.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}x();function T(){const s=h.firstElementChild.getBoundingClientRect().height*2;scrollBy({behavior:"smooth",top:s})}
//# sourceMappingURL=index.js.map
