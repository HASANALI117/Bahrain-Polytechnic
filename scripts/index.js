const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const mobileNoInput = document.getElementById("mobile");
const button = document.getElementById("submit-button");
const firstName = document.getElementById("first-name");

const formData = {
  firstName: firstNameInput.value,
  lastName: lastNameInput.value,
  email: emailInput.value,
  mobileNo: mobileNoInput.value,
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(formData);

  firstName.innerHTML = formData.firstName;
});
