import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onActionFormData, 500));
form.addEventListener('submit', onSubmitFormData);

const formData = {};

function onActionFormData(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitFormData(event) {
    event.preventDefault();
    if (message.value === '' || email.value === "") {
        alert(' Please fill all fields');
    } else {
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
        console.log(formData);
    }

    function onUpdateDataFormLocalStorage() {
        let data = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (data) {
            Object.entries(data).forEach(({ key, value }) => {
                formData[key] = value;
                form.elements[key].value = value;
        })}
    }
}
