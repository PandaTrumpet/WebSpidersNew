document.addEventListener('scroll', function () {
  const coversSection = document.getElementById('covers');
  const coversSectionRect = coversSection.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const coversTopIsVisible =
    coversSectionRect.top >= 0 && coversSectionRect.top < viewportHeight;
  const coversBottomIsVisible =
    coversSectionRect.bottom > 0 && coversSectionRect.bottom < viewportHeight;

  if (coversTopIsVisible || coversBottomIsVisible) {
    const marqueeLines = document.querySelectorAll('.marquee__line');
    marqueeLines.forEach(function (line, index) {
      if (index % 1 === 0) {
        line.style.animationName = 'marqueeLineLeft';
        line.style.animationName = 'marqueeLineRight';
      }
    });
  } else {
    const marqueeLines = document.querySelectorAll('.marquee__line');
    marqueeLines.forEach(function (line) {
      line.style.animationName = 'none';
    });
  }
});

// кнопка скрола вгору
const buttonToTop = document.querySelector('.btn-top');

window.addEventListener('scroll', onScroll);
buttonToTop.addEventListener('click', onButtonToTop);

function onScroll() {
  const scrolled = window.scrollY;
  const size = document.documentElement.clientHeight;

  if (scrolled > size) {
    buttonToTop.classList.add('btn-top--visible');
  }
  if (scrolled < size) {
    buttonToTop.classList.remove('btn-top--visible');
  }
}

function onButtonToTop() {
  if (window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
