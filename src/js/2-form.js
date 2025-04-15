const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const savedData = localStorage.getItem(localStorageKey);
const email = form.elements.email;
const message = form.elements.message;

if (savedData !== null) {
  email.value = JSON.parse(savedData).email;
  message.value = JSON.parse(savedData).message;
  formData.email = JSON.parse(savedData).email;
  formData.message = JSON.parse(savedData).message;
}

form.addEventListener('input', storeData);

form.addEventListener('submit', submitForm);

function storeData(event) {
  formData.email = event.currentTarget.elements.email.value.trim();
  formData.message = event.currentTarget.elements.message.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function submitForm(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData.email = '';
  formData.message = '';
  form.reset();
}