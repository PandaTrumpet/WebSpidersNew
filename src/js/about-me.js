import Swiper from "swiper";
import 'swiper/css';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// ******* SWIPER *******

const mySwiper = new Swiper('.about-skills', {
  slidesPerView: 'auto',
  direction: 'horizontal',
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    enabled: true,
    sensitivity: 1,
    eventsTarget: '.about-skills',
  },
  navigation: {
    nextEl: '.about-skills-arrow',
  },
  breakpoints: {
     375: {
        slidesPerView: 2
        },
    768: {
        slidesPerView: 3
        },
    1440: {
        slidesPerView: 6
         }
  },
  effect: 'slide',
  slideToClickedSlide: true,
  touchRatio: 3,
  allowTouchMove: true,
});

const slides = document.querySelectorAll('.about-skills-list-item');
slides.forEach(slide => {
  slide.addEventListener('click', () => {
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    slide.classList.add('active');
  })
})

const sliderBtn = document.querySelector('.about-skills-arrow');
sliderBtn.addEventListener('click', () => {
  mySwiper.slideNext();
  mySwiper.on('slideChange', () => {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    const activeSlideIndex = mySwiper.realIndex;
    slides[activeSlideIndex].classList.add('active');
  });
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
 mySwiper.slideNext();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
   mySwiper.slidePrev(); 
  }
});

// ******* ACCORDION *******

const accordionItems = document.querySelectorAll('.about-info-list-item');

  accordionItems.forEach((item, index) => {
    const accordionBtn = item.querySelector('.about-info-list-item-btn');
      // const accordionContent = item.querySelector('.about-info-list-item-content');
      const accordionArrow = item.querySelector('.about-info-list-item-btn-down-icon');

    if (index === 0) {
        // accordionContent.classList.add('active');
        accordionArrow.classList.add('active');
    }
    
    accordionBtn.addEventListener('click', () => {
        // accordionContent.classList.toggle('active');
        accordionArrow.classList.toggle('active');
    });
  });

const accordion = new Accordion('.about-info-list', {
  duration: 600,
  showMultiple: true,
});