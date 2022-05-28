
const form = document.querySelector("form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const thankYouMessage = document.querySelector(".thank-you-message");

function validateForm() {
    event.preventDefault();

    if(name.value.trim().length >= 5) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display = "block";
    }

    if(subject.value.trim().length >= 15) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }

    if(message.value.trim().length >= 25) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }

    function validateEmail(email) {
        const regEx = /\S+@\S+\.\S+/;
        const patternMatches = regEx.test(email);
        return patternMatches;
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

form.onsubmit = function formSubmitted() {
    event.preventDefault();    
    form.reset();
    //console.log("Form submitted");
}