import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
};
let formData = {};

// Запускаємо слухачів подій
refs.form.addEventListener("input", throttle(onFormInput, 500));
refs.form.addEventListener("submit", onFormSubmit);

populateForm();

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Команди при відправки форми Submit
// Зупиняємо відправку форми за замовченням
// Виводимо у консоль данні відправки
// Очищюємо поля форми reset
// Видаляємо дані зі сховища removeItem
function onFormSubmit(evt) {
    evt.preventDefault();
    console.log("Отправка формы, вывод объекта", JSON.parse(localStorage.getItem(STORAGE_KEY)));
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

// Перевірка стану сховища.
// Якщо  в сховищі є збережені дані - заповнити ними поля форми.
function populateForm() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage.message || '';
        refs.email.value = savedMessage.email || '';
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