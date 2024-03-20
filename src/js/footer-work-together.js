`use strict`;
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const footerForm = document.querySelector(`.footer_form`);
const footerFormBtn = document.querySelector(`.footer_form_btn`);
const footerInputEmail = document.querySelector(`.footer_form_input_email`);
const footerFormComment = document.querySelector(`.footer_form_comment`);
const invalid = document.querySelector('.invalid');
const succes = document.querySelector('.succes');
const footerModalContainer = document.querySelector(`.footer_modal_container`);
const footerModalBtn = document.querySelector(`.footer_modal_btn_icon`);

// BTN disable
footerInputEmail.addEventListener('input', function () {
  if (footerInputEmail.validity.valid) {
    footerFormBtn.disabled = false;
  } else {
    footerFormBtn.disabled = true;
  }
});

// BLUR
footerInputEmail.addEventListener('blur', function () {
  if (footerInputEmail.value.trim() === '') {
    return;
  } else if (!footerInputEmail.validity.valid) {
    invalid.classList.remove('hidden');
    footerInputEmail.classList.add('red_border');
    succes.classList.add('hidden');
    footerInputEmail.classList.remove('green_border');
  } else if (footerInputEmail.validity.valid) {
    footerInputEmail.classList.remove('red_border');
    invalid.classList.add('hidden');
    succes.classList.remove('hidden');
    footerInputEmail.classList.add('green_border');
  }
});

// Submit
footerForm.addEventListener(`submit`, event => {
  const formData = new FormData(footerForm);
  const data = {
    email: formData.get('email'),
    comment: formData.get('comments'),
  };

  event.preventDefault();

  postData(data)
    .then(data => {
      succes.classList.add('hidden');
      footerInputEmail.classList.remove('green_border');
      return data;
    })
    .catch(error => {
      iziToast.error({
        message:
          'Please enter your email address correctly and fill out all fields.',
        position: 'topRight',
      });
    });
});

function postData(data) {
  return fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    } else if (response.ok) {
      footerForm.reset();
      footerModalContainer.classList.add(`is-open`);
    }
    return response.json();
  });
}

// Close Modal

footerModalBtn.addEventListener(`click`, () => {
  closeModal();
});

footerModalContainer.addEventListener(`click`, event => {
  if (event.target === footerModalContainer) {
    closeModal();
  }
});

document.addEventListener(`keydown`, event => {
  if (event.key === `Escape`) {
    closeModal();
  }
});

function closeModal() {
  footerModalContainer.classList.remove(`is-open`);
}
