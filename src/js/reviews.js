import 'swiper/css'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



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

const swiperWrapper = document.querySelector(".swiper-wrapper");

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
  if (reviewsData.length === 0) {
    alert("Not Found")
  } else {
    const slidesHTML = reviewsData.map(review => createSlide(review)).join("");
    swiperWrapper.insertAdjacentHTML('beforeend', slidesHTML);
  }
}

 document.addEventListener("DOMContentLoaded", async function renderEvent() {
  try {
    const reviewsData = await fetchData();
    renderSlides(reviewsData);
    swiper.update();
  } catch (error) {
    console.error('Error rendering reviews:', error);
  }
});

const swiper = new Swiper(".swiper", {
    spaceBetween: 100,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: true,
      disableOnInteraction: false
      },
    breakpoints:{
        375: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1440:{
            slidesPerView: 4
        }
    },
    speed: 700,
    navigation: {
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev',
      clickable: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    on: {
        reachEnd: function() {
            document.querySelector('.swiper-button-next').disabled = true;
            document.querySelector('.swiper-button-prev').disabled = true;
        },
        reachBeginning: function() {

            document.querySelector('.swiper-button-next').disabled = false;
            document.querySelector('.swiper-button-prev').disabled = false;
        }
    }
  });
  
  const sliderNext = document.querySelector(".swiper-button-next");
  const sliderPrev = document.querySelector(".swiper-button-prev");

  sliderNext.addEventListener('click', () => {
    swiper.slideNext(500);
  });

  sliderPrev.addEventListener('click', () => {
    swiper.slidePrev(500);
  });




// function initSwiper() {
//   let slidesPerView = 1;
//   if (window.innerWidth >= 768 && window.innerWidth < 1440) {
//     slidesPerView = 2;
//   } else if (window.innerWidth >= 1440) {
//     slidesPerView = 4;
//   }
//   const swiper = new Swiper(".swiper", {
//     loop: true,
//     spaceBetween: 100,
//     slidesPerView: slidesPerView,
//     autoplay: {
//       delay: 2000,
//       stopOnLastSlide: true,
//       disableOnInteraction: false
//       },
//     breakpoints:{
//         375: {
//             slidesPerView: 1
//         },
//         768: {
//             slidesPerView: 2
//         },
//         1440:{
//             slidesPerView: 4
//         }
//     },
//     speed: 700,
//     navigation: {
//       nextEl: '.swiper-button-next', 
//       prevEl: '.swiper-button-prev',
//       clickable: true,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     keyboard: {
//         enabled: true,
//         onlyInViewport: true,
//         pageUpDown: true,
//     },
//     on: {
//         reachEnd: function() {
//             document.querySelector('.swiper-button-next').disabled = true;
//             document.querySelector('.swiper-button-prev').disabled = true;
//         },
//         reachBeginning: function() {

//             document.querySelector('.swiper-button-next').disabled = false;
//             document.querySelector('.swiper-button-prev').disabled = false;
//         }
//     }
//   });
  
//   const sliderNext = document.querySelector(".swiper-button-next");
//   const sliderPrev = document.querySelector(".swiper-button-prev");

//   sliderNext.addEventListener('click', () => {
//     swiper.slideNext(500);
//   });

//   sliderPrev.addEventListener('click', () => {
//     swiper.slidePrev(500);
//   });
// }