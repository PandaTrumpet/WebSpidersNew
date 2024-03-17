import{S as p,i as q}from"./assets/vendor-f63efcf3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();const f=new p(".about-skills",{direction:"horizontal",loop:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,sensitivity:1,eventsTarget:".about-skills"},navigation:{nextEl:".about-skills-arrow"},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},effect:"slide",slideToClickedSlide:!0,touchRatio:3,allowTouchMove:!0}),u=document.querySelectorAll(".about-skills-list-item");u.forEach(e=>{e.addEventListener("click",()=>{u.forEach(t=>{t.classList.remove("active")}),e.classList.add("active")})});const k=document.querySelector(".about-skills-arrow");k.addEventListener("click",()=>{f.slideNext(),f.on("slideChange",()=>{u.forEach(t=>{t.classList.remove("active")});const e=f.realIndex;u[e].classList.add("active")})});const _=document.querySelectorAll(".about-info-list-item");_.forEach((e,t)=>{const i=e.querySelector(".about-info-list-item-btn"),n=e.querySelector(".about-info-list-item-content"),o=e.querySelector(".about-info-list-item-btn-down-icon");t===0&&(n.classList.add("active"),o.classList.add("active")),i.addEventListener("click",()=>{n.classList.toggle("active"),o.classList.toggle("active")})});document.addEventListener("scroll",function(){const t=document.getElementById("covers").getBoundingClientRect(),i=window.innerHeight||document.documentElement.clientHeight,n=t.top>=0&&t.top<i,o=t.bottom>0&&t.bottom<i;n||o?document.querySelectorAll(".marquee__line").forEach(function(c,S){S%1===0&&(c.style.animationName="marqueeLineLeft",c.style.animationName="marqueeLineRight")}):document.querySelectorAll(".marquee__line").forEach(function(c){c.style.animationName="none"})});const v=document.querySelector(".btn-top");window.addEventListener("scroll",T);v.addEventListener("click",B);function T(){const e=window.scrollY,t=document.documentElement.clientHeight;e>t&&v.classList.add("btn-top--visible"),e<t&&v.classList.remove("btn-top--visible")}function B(){window.scrollY>0&&window.scrollTo({top:0,behavior:"smooth"})}const b=document.querySelector(".footer_form"),y=document.querySelector(".footer_form_btn"),s=document.querySelector(".footer_form_input_email");document.querySelector(".footer_form_comment");const L=document.querySelector(".invalid"),h=document.querySelector(".succes"),m=document.querySelector(".footer_modal_container"),P=document.querySelector(".footer_modal_btn_icon");s.addEventListener("input",function(){s.validity.valid?y.disabled=!1:y.disabled=!0});s.addEventListener("blur",function(){s.value.trim()!==""&&(s.validity.valid?s.validity.valid&&(h.classList.remove("hidden"),s.classList.add("green_border"),setTimeout(function(){h.classList.add("hidden"),s.classList.remove("green_border")},1e3)):(L.classList.remove("hidden"),s.classList.add("red_border"),setTimeout(function(){L.classList.add("hidden"),s.classList.remove("red_border")},1e3)))});b.addEventListener("submit",e=>{const t=new FormData(b),i={email:t.get("email"),comment:t.get("comments")};e.preventDefault(),N(i).then(n=>(console.log(n),n)).catch(n=>{console.error(n),q.error({message:"Please enter your email address correctly and fill out all fields.",position:"topRight"})})});function N(e){return fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(t=>{if(t.ok)t.ok&&(b.reset(),m.classList.add("is-open"));else throw new Error(t.status);return t.json()})}P.addEventListener("click",()=>{w()});m.addEventListener("click",e=>{e.target===m&&w()});document.addEventListener("keydown",e=>{e.key==="Escape"&&w()});function w(){m.classList.remove("is-open")}const x=document.querySelector(".menu-button"),I=document.querySelector(".menu-list"),V=document.querySelector(".burger-btn"),C=document.querySelector(".mobile-close-btn"),g=document.querySelector(".mobile-menu"),M=document.querySelector(".mobile-order-btn"),O=document.getElementById("footer-work-together"),j=document.querySelector(".order-btn");V.addEventListener("click",()=>{g.classList.toggle("visually-hidden")});C.addEventListener("click",()=>{g.classList.add("visually-hidden")});M.addEventListener("click",()=>{O.scrollIntoView({behavior:"smooth"})});j.addEventListener("click",()=>{window.location.href="#footer-work-together"});x.addEventListener("click",()=>{I.classList.toggle("active")});const a=new p(".main-swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,sensitivity:1,eventsTarget:".swiper"},navigation:{nextEl:".btn-n",prevEl:".btn-p",clickable:!0},effect:"slide",slideToClickedSlide:!0,touchRatio:3,allowTouchMove:!0}),l=document.querySelector(".btn-n"),d=document.querySelector(".btn-p");function E(){a.isBeginning?(d.classList.add("swiper-button-disabled"),d.disabled=!0):(d.classList.remove("swiper-button-disabled"),d.disabled=!1),a.isEnd?(l.classList.add("swiper-button-disabled"),l.disabled=!0):(l.classList.remove("swiper-button-disabled"),l.disabled=!1)}a.on("slideChange",E);l.addEventListener("click",()=>{a.slideNext(500)});d.addEventListener("click",()=>{a.slidePrev(500)});E();async function A(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Network response was not OK!");return await e.json()}catch(e){throw console.error("Error fetching data:",e),e}}const D=document.querySelector(".swiper-list-container");function R(e){return`<li class="swiper-slide swiper-review-slide">
    <div class="review">
      <img src="${e.avatar_url}" alt="Avatar" class="review-avatar">
      <p class="review-author">${e.author}</p>
      <p class="review-text">${e.review}</p>
    </div>
  </li>`}function H(e){if(e.length===0)alert("Not Found");else{const t=e.map(i=>R(i)).join("");D.insertAdjacentHTML("beforeend",t)}}document.addEventListener("DOMContentLoaded",async function(){try{const t=await A();H(t),z()}catch(t){console.error("Error rendering reviews:",t)}});function z(){const e=new p(".swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,sensitivity:1,eventsTarget:".swiper"},navigation:{nextEl:"#next_btn",prevEl:"#before_btn",clickable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},effect:"slide",slideToClickedSlide:!0,touchRatio:3,allowTouchMove:!0}),t=document.querySelector("#next_btn"),i=document.querySelector("#before_btn");function n(){e.isBeginning?(i.classList.add("swiper-button-dis"),i.disabled=!0):(i.classList.remove("swiper-button-dis"),i.disabled=!1),e.isEnd?(t.classList.add("swiper-button-dis"),t.disabled=!0):(t.classList.remove("swiper-button-dis"),t.disabled=!1)}e.on("slideChange",n),t.addEventListener("click",()=>{e.slideNext(500)}),i.addEventListener("click",()=>{e.slidePrev(500)}),n()}
//# sourceMappingURL=commonHelpers.js.map