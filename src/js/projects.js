import 'swiper/css'
import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sliderNex = document.querySelector('.swiper-button-next')
 sliderNex.addEventListener('click',()=>{ 
    console.log('Hello');
     swiper.slideNext(500)}
    
    
 )
 const sliderprev = document.querySelector('.swiper-button-prev')
 sliderprev.addEventListener('click',()=>{     swiper.slidePrev(500)
 })
 const swiper = new Swiper('.swiper', {
     speed: 400,
     spaceBetween: 100,
 });

   const swipers = document.querySelector('.swiper').swiper;
 swiper.slidePrev()