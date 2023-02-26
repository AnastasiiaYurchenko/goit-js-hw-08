import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".email"),
    textarea: document.querySelector(".feedback-form textarea"),
};
let formData = {};

refs.form.addEventListener("input", throttle(onFormInput, 500));
refs.form.addEventListener("submit", onFormSubmit);

populateTextarea();

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(evt) {
    evt.preventDefault();
    console.log("Отправка формы, вывод объекта", formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {}
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        const parsedMessage = JSON.parse(savedMessage);
        refs.textarea.value = parsedMessage.message || '';
        refs.email.value = parsedMessage.email || '';
    }
}




// Репета код
// populateTextarea();

// refs.form.addEventListener("submit", onFormSubmit);
// refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));


// function onFormSubmit(evt) {
//     evt.preventDefault();

//     console.log("Отправка формы");
//     evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
// };


// function onTextareaInput(evt) { 
//     const message = evt.target.value;
//     console.log(message);
//     localStorage.setItem(STORAGE_KEY, message)
// };

// function populateTextarea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);
//     if (savedMessage) {
//         console.log(savedMessage);
//         refs.textarea.value = savedMessage;
//     }
// }