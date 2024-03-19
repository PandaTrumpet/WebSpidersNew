import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// ******* SWIPER *******

const mySwiper = new Swiper('.about-skills', {
  navigation: {
    nextEl: '.about-skills-arrow',
  },
  effect: 'slide',
  slideToClickedSlide: true,
  touchRatio: 3,
  allowTouchMove: true,
  slidesPerView: 'auto',
  direction: 'horizontal',
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    enabled: true,
    sensitivity: 1,
    eventsTarget: '.about-skills',
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

const slides = document.querySelectorAll('.about-skills-list-item');

mySwiper.on('slideChange', () => {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  const activeSlideIndex = mySwiper.realIndex;
  slides[activeSlideIndex].classList.add('active');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Tab') {
    e.preventDefault();
    sliderBtn.focus();
  }
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    mySwiper.slideNext();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    mySwiper.slidePrev();
  }
});

// ******* ACCORDION *******

const accordion = new Accordion('.about-info-list', {
  duration: 600,
  showMultiple: true,
  openOnInit: [0],
});

const accordionItems = document.querySelectorAll('.about-info-list-item');

accordionItems.forEach((item, index) => {
  const accordionBtn = item.querySelector('.about-info-list-item-btn');
  const accordionArrow = item.querySelector(
    '.about-info-list-item-btn-down-icon'
  );

  if (index === 0) {
    accordionArrow.classList.add('active');
  }

  accordionBtn.addEventListener('click', () => {
    accordionArrow.classList.toggle('active');
  });
});

