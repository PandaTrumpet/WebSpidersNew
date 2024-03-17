import 'swiper/css'
import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// const sliderNex = document.querySelector('.swiper-button-next')
//  sliderNex.addEventListener('click',()=>{ 
//     console.log('Hello');
//      swiper.slideNext(500)}
    
    
//  )
//  const sliderprev = document.querySelector('.swiper-button-prev')
// sliderprev.addEventListener('click', () => {
//     swiper.slidePrev(500)
//  })
//  const swiper = new Swiper('.swiper', {
//      speed: 400,
//      spaceBetween: 100,
//      direction: 'horizontal',
//  });

//    const swipers = document.querySelector('.swiper').swiper;
// swiper.slidePrev()
 
  const swiperProject = new Swiper('.main-swiper-container', {
  direction: 'horizontal',
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    enabled: true,
    sensitivity: 1,
    eventsTarget: '.swiper',
  },
  navigation: {
      nextEl: '.btn-n', 
      prevEl: '.btn-p',
      clickable: true,
    },
  effect: 'slide',
  slideToClickedSlide: true,
  touchRatio: 3,
  allowTouchMove: true,
});

const sliderNext = document.querySelector(".btn-n");
const sliderPrev = document.querySelector(".btn-p");
  
//   function updateNavButtons() {
//     if (swiper.isBeginning) {
//         sliderPrev.disabled = true;
//     } else {
//         sliderPrev.disabled = false;
//     }

//     if (swiper.isEnd) {
//         sliderNext.disabled = true;
//     } else {
//         sliderNext.disabled = false;
//     }
// }

function updateNavButtons() {
    if (swiperProject.isBeginning) {
        sliderPrev.classList.add('swiper-button-disabled'); 
        sliderPrev.disabled = true;
    } else {
        sliderPrev.classList.remove('swiper-button-disabled');
        sliderPrev.disabled = false;
    }

    if (swiperProject.isEnd) {
        sliderNext.classList.add('swiper-button-disabled'); 
        sliderNext.disabled = true;
    } else {
        sliderNext.classList.remove('swiper-button-disabled'); 
        sliderNext.disabled = false;
    }
}

swiperProject.on('slideChange', updateNavButtons);

  sliderNext.addEventListener('click', () => {
    swiperProject.slideNext(500);
  });

  sliderPrev.addEventListener('click', () => {
    swiperProject.slidePrev(500);
  });
updateNavButtons();

