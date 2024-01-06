import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const buttonEl = document.querySelector('.feedback-form textarea button');

const FEEDBACK_KEY = 'feedback-form-state';
const formData = {};

// textareaEl.addEventListener('input', throttle(onTextareaInput, 500));
formEl.addEventListener('submit', onFormSubmit);

reloadPage();

// function reloadPage() {
//   const savedMessage = localStorage.getItem('FEEDBACK_KEY');
//   if (savedMessage) {
//     textareaEl.value = JSON.parse(savedMessage);
//   }
// }
// ============================
function reloadPage() {
  const savedMessage = JSON.parse(localStorage.getItem('FEEDBACK_KEY'));
  if (savedMessage) {
    formEl.elements.email.value = savedMessage.email || '';
    formEl.elements.message.value = savedMessage.message || '';
  }
}

formEl.addEventListener('input', throttle(onFormInput, 400));

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('FEEDBACK_KEY', JSON.stringify(formData));
}

// ============================

// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem('FEEDBACK_KEY', JSON.stringify(message));
// }

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('FEEDBACK_KEY');
}
