const refs = {
  form: document.querySelector('.contact-form'),
  input: document.querySelector('.email-input'),
  submitBtn: document.querySelector('.contact-form__button'),
  notifyCont: document.querySelector('.notify-cont'),
};

const checkInput = () => {
  if (!refs.input.value) {
    const warningMessage = '<p class="warning-message">This is a required field</p>';
    refs.notifyCont.innerHTML = warningMessage;
  }
};

refs.submitBtn.addEventListener('click', checkInput);
refs.input.addEventListener('input', e => {
  if (refs.input.value.length > 5 && refs.notifyCont.textContent) {
    refs.notifyCont.innerHTML = '';
  }
});
