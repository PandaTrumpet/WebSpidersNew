const menuBtn = document.querySelector(".menu-button");
const list = document.querySelector(".menu-list")
const mobileBtn = document.querySelector(".burger-btn");
const closeBtn = document.querySelector(".mobile-close-btn");
const mobileMenu = document.querySelector(".mobile-menu")
const mobileOrderBtn = document.querySelector(".mobile-order-btn")
const workSection = document.getElementById('footer-work-together')
const orderBtn = document.querySelector('.order-btn')

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('visually-hidden');
});
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('visually-hidden');
});
mobileOrderBtn.addEventListener('click', () => {
    workSection.scrollIntoView({ behavior: "smooth" });
});
orderBtn.addEventListener('click', () => {
    window.location.href = "#footer-work-together"
})
menuBtn.addEventListener('click', () => {
    list.classList.toggle('active');
});

