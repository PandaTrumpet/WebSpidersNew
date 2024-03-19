import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
new Accordion('.faq-container .faq-menu', {
  duration: 400,
  showMultiple: true,
});

document.addEventListener('DOMContentLoaded', function () {
  const accordionContainer = document.querySelector('.faq-menu');

  if (accordionContainer) {
    const accordions = accordionContainer.querySelectorAll('.faq-list');

    accordions.forEach(accordion => {
      const triggerButton = accordion.querySelector('.faq-button');
      const faqIcon = accordion.querySelector('.faq-icon');

      triggerButton.addEventListener('click', function () {
        const isOpen = accordion.classList.contains('is-active');

        if (isOpen) {
          faqIcon.classList.add('rotate');
        } else {
          faqIcon.classList.remove('rotate');
        }
      });
    });
  }
});
