import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.querySelector('input');
const messageEl = formEl.querySelector('textarea');

formEl.addEventListener('input', throttle(onActionFormData, 500));
formEl.addEventListener('submit', onSubmitFormData);

onPageReload();

function onActionFormData() {
    const email = emailEl.value;
    const message = messageEl.value;
    const formData = {
        email,
        message,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitFormData (event) {
    event.preventDefault();

    const formData = {
        email: event.currentTarget.elements.email.value,
        message: event.currentTarget.elements.message.value,
    };
    console.log('onSubmitFormData : formData', formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onPageReload() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);

    if (parsedData) {
        emailEl.value = parsedData.email;
        messageEl.value = parsedData.message;
    };
}