// Navbar
const navLinks = document.getElementById("nav-links");
const menuButton = document.getElementById("menu-btn");
const closeButton = document.getElementById("close-btn");

menuButton.addEventListener("click", () => {
  navLinks.classList.add("show");
});

closeButton.addEventListener("click", () => {
  navLinks.classList.remove("show");
});

// Form
const username = document.getElementById("username");

const contactFName = document.getElementById("c-fname");
const contactLName = document.getElementById("c-lname");
const contactEmail = document.getElementById("c-email");
const contactMobile = document.getElementById("c-mobile");

const button = document.getElementById("submit-button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const mobileNo = document.getElementById("mobile").value;

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Mobile number validation regex (for Bahrain numbers)
  const mobileRegex = /^\d{8}$/;

  if (firstName.length < 3) {
    alert("First Name must have at least 3 characters.");
  } else if (lastName.length < 3) {
    alert("Last Name must have at least 3 characters.");
  } else if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
  } else if (!mobileRegex.test(mobileNo)) {
    alert("Mobile No must contain exactly 8 digits.");
  } else {
    alert("Form submitted successfully!");

    // Store form data in localStorage
    const formData = {
      firstName,
      lastName,
      email,
      mobileNo,
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    // Redirect to contact us page
    window.location.href = "pages/contact.html";
  }
});

// Retrieve form data from localStorage
const storedData = JSON.parse(localStorage.getItem("formData"));

if (storedData) {
  // Display firstname in the navbar
  username.innerHTML =
    `<i class="fa-solid fa-user"></i>` + storedData.firstName;

  // Fill in the form fields
  document.getElementById("c-fname").value = storedData.firstName;
  document.getElementById("c-lname").value = storedData.lastName;
  document.getElementById("c-email").value = storedData.email;
  document.getElementById("c-mobile").value = storedData.mobileNo;

  // Disable the filled fields
  document.getElementById("c-fname").disabled = true;
  document.getElementById("c-lname").disabled = true;
  document.getElementById("c-email").disabled = true;
  document.getElementById("c-mobile").disabled = true;
}
