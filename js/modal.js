//Pop-up
var button = document.querySelector(".contact-btn");
var contactPopup = document.querySelector("#contact-form");
var close = document.querySelector("#form-close")
var user = contactPopup.querySelector("[name=name]");
var email = contactPopup.querySelector("[name=email]");

var mapButton = document.querySelector(".preview-map");
var mapPopup = document.querySelector("#map-form");
var mapClose = document.querySelector("#map-close");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

//Show modal

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");

  if (storage) {
    user.value = storage;
    email.focus();
  } else {
    user.focus();
  }
});

//Validation

contactPopup.addEventListener("submit", function (evt) {

  if (!user.value || !email.value) {
    evt.preventDefault();
    contactPopup.classList.add("modal-error");
    console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("user", user.value);
    }
  }
});

//Esc

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (contactPopup.classList.contains("modal-show")) {
      contactPopup.classList.remove("modal-show");
    }
  }
});


close.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-error")
});


//Map-modal

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});


//Esc for map

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (contactPopup.classList.contains("modal-show")) {
      contactPopup.classList.remove("modal-show");
      contactPopup.classList.remove("modal-error");
    }
  }
});
