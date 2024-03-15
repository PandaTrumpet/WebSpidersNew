// ****** ACCORDION *******

const accordionItems = document.querySelectorAll('.about-info-list-item');

  accordionItems.forEach((item, index) => {
    const accordionBtn = item.querySelector('.about-info-list-item-btn');
      const accordionContent = item.querySelector('.about-info-list-item-content');
      const accordionArrow = item.querySelector('.about-info-list-item-btn-down-icon');

    if (index === 0) {
        accordionContent.classList.add('active');
        accordionArrow.classList.add('active');
    }

    accordionBtn.addEventListener('click', () => {
        accordionContent.classList.toggle('active');
        accordionArrow.classList.toggle('active');
    });
  });