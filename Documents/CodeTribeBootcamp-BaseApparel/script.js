"use strict";

const form = document.querySelector(".form");
const inputEmail = document.querySelector(".input-email");
const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".error-p");

// Validate email
const validateEmail = (email) => {
  let validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return validation.test(email);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userEmail = inputEmail.value;
  if (!validateEmail(userEmail)) {
    errorIcon.classList.add("active-error");
    errorText.classList.add("active-error");
    inputEmail.classList.add("active-error-border");
  } else {
    errorIcon.classList.remove("active-error");
    errorText.classList.remove("active-error");
    inputEmail.classList.remove("active-error-border");
    inputEmail.value = "";
  }
});