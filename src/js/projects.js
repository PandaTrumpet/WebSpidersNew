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
    eventsTarget: '.main-swiper-container',
  },
  navigation: {
    nextEl: '.btn-n',
    prevEl: '.btn-p',
    clickable: true,
  },
  effect: 'flip',
  flipEffect: {
    slideShows: true,
    limitRotation: true,
  },
  slideToClickedSlide: true,
  touchRatio: 3,
  allowTouchMove: true,
});

const sliderNext = document.querySelector('.btn-n');
const sliderPrev = document.querySelector('.btn-p');

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

updateNavButtons();
