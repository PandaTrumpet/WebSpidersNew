const menuBtn = document.querySelector('.menu-button');
const list = document.querySelector('.menu-list');
const mobileBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.mobile-close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileOrderBtn = document.querySelector('.mobile-order-btn');
const workSection = document.getElementById('footer-work-together');
const orderBtn = document.querySelector('.order-btn');
const mobileList = document.querySelector('.mobile-menu-list');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('visually-hidden');
});
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('visually-hidden');
});
mobileOrderBtn.addEventListener('click', () => {
  window.location.href = '#footer-work-together';
  if (mobileOrderBtn) {
    mobileMenu.classList.add('visually-hidden');
  }
});
mobileList.addEventListener('click', () => {
  if (mobileList) {
    mobileMenu.classList.add('visually-hidden');
  }
});
orderBtn.addEventListener('click', () => {
  window.location.href = '#footer-work-together';
});
menuBtn.addEventListener('click', () => {
  if (list.style.display === 'flex') {
    list.style.display = 'none';
  } else {
    list.style.display = 'flex';
  }
});

const closeMenu = document.querySelectorAll('.close-link');
closeMenu.forEach(link => {
  link.addEventListener('click', () => {
    list.style.display = 'none';
  });
});
