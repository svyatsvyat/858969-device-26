//Pop-up
var button = document.querySelector(".contact-btn");
var contactPopup = document.querySelector("#contact-form");
var close = document.querySelector("#form-close");
var contactForm = contactPopup.querySelector("form");
var user = contactForm.querySelector("[name=name]");
var email = contactForm.querySelector("[name=email]");

var mapButton = document.querySelector(".preview-map");
var mapPopup = document.querySelector("#map-form");
var mapClose = document.querySelector("#map-close");

var isStorageSupport = true;
var storageUser = "";
var storageEmail = "";

try {
  storageUser = localStorage.getItem("user");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

//Show modal

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");

  if (!storageUser && !storageEmail) {
    user.focus();
  }
  if (storageUser && !storageEmail) {
    user.value = storageUser;
    email.focus();
  }
  if (!storageUser && storageEmail) {
    email.value = storageEmail;
    user.focus();
  }
  if (storageUser && storageEmail) {
    user.value = storageUser;
    email.value = storageEmail;
  }
});

//Validation

contactForm.addEventListener("submit", function (evt) {

  if (!user.value || !email.value) {
    evt.preventDefault();
    if (!user.value) {
      user.classList.add("error");
    }
    if (!email.value) {
      email.classList.add("error");
    }
    contactPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("user", user.value);
      localStorage.setItem("email", email.value);
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
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
      mapPopup.classList.remove("modal-error");
    }
  }
});
