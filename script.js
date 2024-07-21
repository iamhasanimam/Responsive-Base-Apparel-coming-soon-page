"use strict";

// Receive an error message when the form is submitted if:
// The input field is empty
// The email address is not formatted correctly

const inputField = document.querySelector("#email");
const form = document.querySelector("#form");

// functions

function onEmailSubmit(e) {
  e.preventDefault();
  const input = inputField.value.trim();

  if (input === "") {
    alert("Please type in email");
    return;
  } else if (input.indexOf("@") === -1 || input.indexOf(".") === -1) {
    alert("Please type in correct email");
    return;
  } else {
    console.log("success");
  }
}

// Event Listeners
form.addEventListener("submit", onEmailSubmit);
