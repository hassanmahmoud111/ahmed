// Field Training I (FT-WEB-101) - Task 1
// Script for Ahmed Mohamed El-Baz Mohamed Arafa's Profile Page

// ----------------------------------------------------
// 1. Dark Mode Toggle
// ----------------------------------------------------
// Find the button by its ID and listen for 'click'
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // Toggle the 'dark' class on document.body
  // Notice: JavaScript does NOT set any colors; CSS overrides the :root variables
  document.body.classList.toggle("dark");
});

// ----------------------------------------------------
// 2. Dynamic Greeting Line
// ----------------------------------------------------
// Updates the greeting live as the visitor types their name
const visitorNameInput = document.getElementById("visitor-name");
const visitorGreeting = document.getElementById("visitor-greeting");

visitorNameInput.addEventListener("input", function () {
  const enteredName = visitorNameInput.value.trim();
  if (enteredName.length > 0) {
    visitorGreeting.textContent = "Hello, " + enteredName + "! Welcome to my profile.";
  } else {
    visitorGreeting.textContent = "Hello, visitor! Welcome to my profile.";
  }
});

// ----------------------------------------------------
// 3. Form Validation (Stay on page + Email check)
// ----------------------------------------------------
const contactForm = document.getElementById("contact-form");
const visitorEmailInput = document.getElementById("visitor-email");
const emailErrorMsg = document.getElementById("email-error-msg");
const formSuccessMsg = document.getElementById("form-success-msg");

contactForm.addEventListener("submit", function (event) {
  // Keep the form on the page without reloading
  event.preventDefault();

  const emailValue = visitorEmailInput.value.trim();

  // Reset any existing status messages
  emailErrorMsg.textContent = "";
  formSuccessMsg.textContent = "";

  // Reject empty email with a visible error message
  if (emailValue === "") {
    emailErrorMsg.textContent = "Please enter an email address.";
    visitorEmailInput.focus();
    return;
  }

  // Validate proper email syntax format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    emailErrorMsg.textContent = "Please enter a valid email address (e.g. name@example.com).";
    visitorEmailInput.focus();
    return;
  }

  // Display success message and reset form fields
  formSuccessMsg.textContent = "Thank you! Your message has been sent successfully.";
  contactForm.reset();
  visitorGreeting.textContent = "Hello, visitor! Welcome to my profile.";
});

// ----------------------------------------------------
// 4. Back-to-Top Button Functionality
// ----------------------------------------------------
const backToTopBtn = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", function () {
  // Show button when scrolled past 250px from top
  if (window.scrollY > 250) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
