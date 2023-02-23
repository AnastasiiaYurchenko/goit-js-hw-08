import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".email"),
    textarea: document.querySelector(".feedback-form textarea"),
};

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

// populateTextarea();

const formData = {};

refs.form.addEventListener("submit", onFormSubmit);
// refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));

refs.form.addEventListener("input", onFormInput);

function onFormInput(evt) {
    console.log(evt.target.name);
    console.log(evt.target.value);
    formData[evt.target.name] = evt.target.value;
    console.log(formData);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    const savedMessage = localStorage.getItem(STORAGE_KEY, formData);
    console.log(savedMessage);
    const parcedMessage = JSON.parse(savedMessage);
    console.log(parcedMessage);
    if (savedMessage) {
        refs.textarea.value = parcedMessage.message;
        console.log(refs.textarea.value);
        refs.email.textContent = parcedMessage.email;
        console.log(refs.email.textContent);
    }
    

}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log("Отправка формы");
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};


// function onTextareaInput(evt) { 
//     const message = evt.target.value;
//     // console.log(message);
//     localStorage.setItem(STORAGE_KEY, message)
// };

// function populateTextarea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY, JSON.parse(formData));
//     console.log(savedMessage);
//     // if (savedMessage) {
//     //     // console.log(savedMessage);
//     //     refs.textarea.value = savedMessage;
//     // }
// }
