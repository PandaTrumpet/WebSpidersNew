import{A as E,i as _}from"./assets/vendor-3a3a8362.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const b=new Swiper(".about-skills",{navigation:{nextEl:".about-skills-arrow"},effect:"slide",slideToClickedSlide:!0,touchRatio:3,allowTouchMove:!0,slidesPerView:"auto",direction:"horizontal",grabCursor:!0,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0,sensitivity:1,eventsTarget:".about-skills"},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}}),y=document.querySelectorAll(".about-skills-list-item"),T=document.querySelector(".about-skills-arrow");b.on("slideChange",()=>{y.forEach(t=>{t.classList.remove("active")});const e=b.realIndex;y[e].classList.add("active")});document.addEventListener("keydown",e=>{e.key==="Tab"&&(e.preventDefault(),T.focus())});new E(".about-info-list",{duration:600,showMultiple:!0,openOnInit:[0]});const B=document.querySelectorAll(".about-info-list-item");B.forEach((e,t)=>{const n=e.querySelector(".about-info-list-item-btn"),r=e.querySelector(".about-info-list-item-btn-down-icon");t===0&&r.classList.add("active"),n.addEventListener("click",()=>{r.classList.toggle("active")})});document.addEventListener("scroll",function(){const t=document.getElementById("covers").getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,r=t.top>=0&&t.top<n,o=t.bottom>0&&t.bottom<n;r||o?document.querySelectorAll(".marquee__line").forEach(function(c,k){k%1===0&&(c.style.animationName="marqueeLineLeft",c.style.animationName="marqueeLineRight")}):document.querySelectorAll(".marquee__line").forEach(function(c){c.style.animationName="none"})});const f=document.querySelector(".btn-top");window.addEventListener("scroll",I);f.addEventListener("click",M);function I(){const e=window.scrollY,t=document.documentElement.clientHeight;e>t&&f.classList.add("btn-top--visible"),e<t&&f.classList.remove("btn-top--visible")}function M(){window.scrollY>0&&window.scrollTo({top:0,behavior:"smooth"})}new E(".faq-container .faq-menu",{duration:400,showMultiple:!0});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".faq-menu");e&&e.querySelectorAll(".faq-list").forEach(n=>{const r=n.querySelector(".faq-button"),o=n.querySelector(".faq-icon");r.addEventListener("click",function(){n.classList.contains("is-active")?o.classList.add("rotate"):o.classList.remove("rotate")})})});const p=document.querySelector(".footer_form"),w=document.querySelector(".footer_form_btn"),s=document.querySelector(".footer_form_input_email");document.querySelector(".footer_form_comment");const h=document.querySelector(".invalid"),L=document.querySelector(".succes"),u=document.querySelector(".footer_modal_container"),O=document.querySelector(".footer_modal_btn_icon");s.addEventListener("input",function(){s.validity.valid?w.disabled=!1:w.disabled=!0});s.addEventListener("blur",function(){s.value.trim()!==""&&(s.validity.valid?s.validity.valid&&(L.classList.remove("hidden"),s.classList.add("green_border"),setTimeout(function(){L.classList.add("hidden"),s.classList.remove("green_border")},1e3)):(h.classList.remove("hidden"),s.classList.add("red_border"),setTimeout(function(){h.classList.add("hidden"),s.classList.remove("red_border")},1e3)))});p.addEventListener("submit",e=>{const t=new FormData(p),n={email:t.get("email"),comment:t.get("comments")};e.preventDefault(),P(n).then(r=>r).catch(r=>{console.error(r),_.error({message:"Please enter your email address correctly and fill out all fields.",position:"topRight"})})});function P(e){return fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(t=>{if(t.ok)t.ok&&(p.reset(),u.classList.add("is-open"));else throw new Error(t.status);return t.json()})}O.addEventListener("click",()=>{v()});u.addEventListener("click",e=>{e.target===u&&v()});document.addEventListener("keydown",e=>{e.key==="Escape"&&v()});function v(){u.classList.remove("is-open")}const A=document.querySelector(".menu-button"),d=document.querySelector(".menu-list"),V=document.querySelector(".burger-btn"),x=document.querySelector(".mobile-close-btn"),m=document.querySelector(".mobile-menu"),g=document.querySelector(".mobile-order-btn");document.getElementById("footer-work-together");const C=document.querySelector(".order-btn"),q=document.querySelector(".mobile-menu-list");V.addEventListener("click",()=>{m.classList.toggle("visually-hidden")});x.addEventListener("click",()=>{m.classList.add("visually-hidden")});g.addEventListener("click",()=>{window.location.href="#footer-work-together",g&&m.classList.add("visually-hidden")});q.addEventListener("click",()=>{q&&m.classList.add("visually-hidden")});C.addEventListener("click",()=>{window.location.href="#footer-work-together"});A.addEventListener("click",()=>{d.style.display==="flex"?d.style.display="none":d.style.display="flex"});const N=document.querySelectorAll(".close-link");N.forEach(e=>{e.addEventListener("click",()=>{d.style.display="none"})});const S=new Swiper(".main-swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,sensitivity:1,eventsTarget:".main-swiper-container"},navigation:{nextEl:".btn-n",prevEl:".btn-p",clickable:!0},effect:"slide",slideToClickedSlide:!0,touchRatio:3,allowTouchMove:!0}),l=document.querySelector(".btn-n"),a=document.querySelector(".btn-p");function D(){S.isBeginning?(a.classList.add("swiper-button-disabled"),a.disabled=!0):(a.classList.remove("swiper-button-disabled"),a.disabled=!1),S.isEnd?(l.classList.add("swiper-button-disabled"),l.disabled=!0):(l.classList.remove("swiper-button-disabled"),l.disabled=!1)}D();async function j(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Network response was not OK!");return await e.json()}catch(e){throw console.error("Error fetching data:",e),e}}const R=document.querySelector(".swiper-list-container");function H(e){return`<li class="swiper-slide swiper-review-slide">
    <div class="review">
      <img src="${e.avatar_url}" alt="Avatar" class="review-avatar">
      <p class="review-author">${e.author}</p>
      <p class="review-text">${e.review}</p>
    </div>
  </li>`}function z(e){if(e.length===0)alert("Not Found");else{const t=e.map(n=>H(n)).join("");R.insertAdjacentHTML("beforeend",t)}}document.addEventListener("DOMContentLoaded",async function(){try{const t=await j();z(t)}catch(t){console.error("Error rendering reviews:",t)}});new Swiper(".swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,sensitivity:1,onlyInViewport:!0,eventsTarget:".swiper-container"},navigation:{nextEl:"#next_btn",prevEl:"#before_btn",clickable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},effect:"slide",slideToClickedSlide:!0,touchRatio:3,allowTouchMove:!0});document.getElementById("next_btn");document.getElementById("before_btn");
//# sourceMappingURL=commonHelpers.js.map
