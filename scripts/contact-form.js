const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const button = document.querySelector("button");
const thankYouMessage = document.querySelector("#thank-you-message");

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
};

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};

function checkIfButtonIsDisabled() {
    if (checkLength(name.value, 5) && checkLength(subject.value, 15) && checkLength(message.value, 25) && validateEmail(email.value)) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
};

name.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);
message.addEventListener("keyup", checkIfButtonIsDisabled);

function submitForm(event) {
    event.preventDefault();
    thankYouMessage.style.display = "block";
    form.reset();
    form.style.display = "none";
};

form.addEventListener("submit", submitForm);
