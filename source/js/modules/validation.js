const form = document.querySelector('.feedback__form');
const inputs = form.querySelectorAll('.form__input');

const messages = {
  required: 'Это обязательное поле',
  error: 'Некорректные данные',
};

const showMessage = (isValueMissing, element) => {
  let message = messages.error;
  if (isValueMissing) {
    message = messages.required;
  }
  element.nextElementSibling.textContent = message;
};

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.validity.valid) {
      input.classList.remove('form__input--error');
    }
  });
});

form.addEventListener('submit', (event) => {
  inputs.forEach((input) => {
    if (!input.validity.valid) {
      input.classList.add('form__input--error');
      showMessage(input.validity.valueMissing, input);
      event.preventDefault();
      console.log('dgh');
    }
  });
});
