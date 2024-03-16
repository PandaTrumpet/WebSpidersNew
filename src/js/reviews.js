import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperWrapper = document.querySelector(".swiper-wrapper");

async function fetchData() {
  try {
    const response = await fetch("https://portfolio-js.b.goit.study/api/reviews");
    if (!response.ok) {
      throw new Error('Network response was not OK!');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

function createSlide(review) {
  return `<li class="swiper-slide">
    <div class="review">
      <img src="${review.avatar_url}" alt="Avatar" class="review-avatar">
      <p class="review-author">${review.author}</p>
      <p class="review-text">${review.review}</p>
    </div>
  </li>`;
}

function renderSlides(reviewsData) {
  const slidesHTML = reviewsData.map(review => createSlide(review)).join("");
  swiperWrapper.insertAdjacentHTML('beforeend', slidesHTML);
}

document.addEventListener("DOMContentLoaded", async function renderEvent() {
  try {
    const reviewsData = await fetchData();
    renderSlides(reviewsData);
    initSwiper();
  } catch (error) {
    console.error('Error rendering reviews:', error);
  }
});

function initSwiper() {
    let slidesPerView = 1;
    if (window.innerWidth >= 768 && window.innerWidth < 1200) {
        slidesPerView = 2;
    } else if (window.innerWidth >= 1200) {
        slidesPerView = 4;
    }
    new Swiper(".swiper", {
    loop: true,
    spaceBetween: 100,
    slidesPerView: slidesPerView,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: true,
      disableOnInteraction: false
    },
    speed: 700,
    navigation: {
      nextEl: '.swiper .swiper-button-next', 
      prevEl: '.swiper .swiper-button-prev',
      clickable: true,
    },
    pagination: {
      el: '.-pagination',
      clickable: true,
    },
    hashNavigation: {
      watchState: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensitivity: 1,
    }
    });
}