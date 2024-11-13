const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const mobileNoInput = document.getElementById("mobile");
const button = document.getElementById("submit-button");
const firstName = document.getElementById("first-name");
const messageContainer = document.getElementById("message-container");

const formData = {
  firstName: firstNameInput.value,
  lastName: lastNameInput.value,
  email: emailInput.value,
  mobileNo: mobileNoInput.value,
};

button.addEventListener("click", (e) => {
  e.preventDefault();

  let errorMessage = "";

  if (formData.firstName.length < 3) {
    errorMessage += "First Name must have at least 3 characters. ";
  }

  if (formData.lastName.length < 3) {
    errorMessage += "Last Name must have at least 3 characters. ";
  }

  if (formData.mobileNo.length != 8) {
    errorMessage += "Mobile No must contain exactly 8 digits. ";
  }

  if (errorMessage) {
    messageContainer.innerHTML = `<p style="color: red;">${errorMessage}</p>`;
  } else {
    messageContainer.innerHTML = `<p style="color: green;">Form submitted successfully!</p>`;
    console.log(formData);

    firstName.innerHTML = formData.firstName;
  }
});
