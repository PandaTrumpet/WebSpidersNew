import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
new Accordion('.faq-container .accordion-container', {
  duration: 400,
  showMultiple: true,
});
document.addEventListener('DOMContentLoaded', function () {
  const accordionContainer = document.querySelector('.faq-menu');

  if (accordionContainer) {
    const accordions = accordionContainer.querySelectorAll('.faq-list');

    accordions.forEach(accordion => {
      const triggerButton = accordion.querySelector('.faq-button');

      triggerButton.addEventListener('click', function () {
        const isOpen = accordion.classList.contains('is-active');

        if (isOpen) {
          triggerButton.innerHTML = `
          <svg class="faq-icon" width="20" height="20">
            <use href="../img/icon.svg#icon-accordion_up"></use>
          </svg>
        `;
        } else {
          triggerButton.innerHTML = `
          <svg class="faq-icon" width="20" height="20">
            <use href="../img/icon.svg#icon-accordion_down"></use>
          </svg>
        `;
        }
      });
    });
  }
});
