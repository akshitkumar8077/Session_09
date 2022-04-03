const dateElement = document.getElementById("date");

dateElement.addEventListener("input", (e) => {
  // console.log(e.target.value);
});

function makeRequest(data) {
  // it makes a post fetch call
  const url = "https://jsonplaceholder.typicode.com/posts";

  const promise = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  promise.then((j) => j.json()).then((r) => console.log("-- response -- ", r));
}

/**
 * 
checks if 
const invalidNames = [
"Winter Soldier", "Iron Man", 
"Black Widow", "Loki"
];

 */
function isInvalidName(name) {
  const invalidNames = ["Winter Soldier", "Iron Man", "Black Widow", "Loki"];

  if (invalidNames.indexOf(name) > -1) {
    return true;
  }

  return false;
}

// get the form element from the dom

const formElement = document.getElementById("booking-form"); // write code to get the form element;

// add event lisner to the form
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Thank You!! Your form is submitted");

  const data = {
    fullName: formElement.elements["fullName"].value,
    email: formElement.elements["email"].value,
    doctor: formElement.elements["doctor"].value,
    location: formElement.elements["location"].value,
    date: formElement.elements["date"].value,
  };

  if (isInvalidName(data.fullName)) {
    // show alert
    window.alert("Something went wrong");
  } else {
    makeRequest(data);
  }
});

// add event listner

const nameElement = document.getElementById("fullName");
const emailElement = document.getElementById("email");

function storeElementInLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

nameElement.addEventListener("blur", (e) => {
  storeElementInLocalStorage("fullName", e.target.value);
});

emailElement.addEventListener("blur", (e) => {
  storeElementInLocalStorage("email", e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  // fill back the values from localstorage
  const fullName = localStorage.getItem("fullName");

  const email = localStorage.getItem("email");

  console.log(fullName, email);
});
