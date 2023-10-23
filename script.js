// form validation

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const telephone = document.getElementById("telephone");
const message = document.getElementById("message");
const input = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidTelephone = (telephone) => {
  const re = /^\d*\.?\d*$/;
  return re.test(telephone);
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const telephoneValue = telephone.value.trim();
  const messageValue = message.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (telephoneValue === "") {
    setError(telephone, "Telephone is required");
  } else if (!isValidTelephone(telephoneValue)) {
    setError(telephone, "Number is invalid");
  } else {
    setSuccess(telephone);
  }

  if (messageValue === "") {
    setError(message, "Message is required");
  } else if (messageValue.length <= 50) {
    setError(message, "message must be at least 50 character");
  } else {
    setSuccess(message);
  }

  input.forEach((input) => (input.value = ""));
  textarea.value = "";
};

// function validate(form) {
//   var username = form.txtName.value;
//   var email = form.txtEmail.value;
//   var telepon = form.txtTelepon.value;
//   var message = form.txtMessage.value;

//   if (username.length === 0) {
//     alert("Form harus di isi. Coba lagi");
//   } else if (email.length === 0) {
//     alert("Form harus di isi. Coba lagi");
//   } else if (telepon.length === 0) {
//     alert("Form harus di isi. Coba lagi");
//   } else if (message.length === 0) {
//     alert("Form harus di isi. Coba lagi");
//   }
// }

// skill bar

const skillsSection = document.getElementById("skills-section");

const progressBars = document.querySelectorAll(".progress-bar");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

function hideProgress() {
  progressBars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

window.addEventListener("scroll", () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});

// carousel

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// navbar

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
