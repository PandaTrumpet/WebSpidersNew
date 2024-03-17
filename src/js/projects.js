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
 
  const swiper = new Swiper('.main-swiper-container', {
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
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev',
      clickable: true,
    },
  effect: 'slide',
  slideToClickedSlide: true,
  touchRatio: 3,
  allowTouchMove: true,
});

const sliderNext = document.querySelector(".swiper-button-next");
const sliderPrev = document.querySelector(".swiper-button-prev");
  
  function updateNavButtons() {
    if (swiper.isBeginning) {
        sliderPrev.disabled = true;
    } else {
        sliderPrev.disabled = false;
    }

    if (swiper.isEnd) {
        sliderNext.disabled = true;
    } else {
        sliderNext.disabled = false;
    }
}

swiper.on('slideChange', updateNavButtons);

  sliderNext.addEventListener('click', () => {
    swiper.slideNext(500);
  });

  sliderPrev.addEventListener('click', () => {
    swiper.slidePrev(500);
  });
updateNavButtons();




