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

if (button) {
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
}

// Retrieve form data from localStorage
const storedData = JSON.parse(localStorage.getItem("formData"));

if (storedData) {
  // Display firstname in the navbar
  username.innerHTML =
    `<i class="fa-solid fa-user"></i>` +
    storedData.firstName +
    " " +
    storedData.lastName;

  // Fill in the form fields
  if (contactFName) contactFName.value = storedData.firstName;
  if (contactLName) contactLName.value = storedData.lastName;
  if (contactEmail) contactEmail.value = storedData.email;
  if (contactMobile) contactMobile.value = storedData.mobileNo;

  // Disable the filled fields if they exist
  if (contactFName) contactFName.disabled = true;
  if (contactLName) contactLName.disabled = true;
  if (contactEmail) contactEmail.disabled = true;
  if (contactMobile) contactMobile.disabled = true;
}

// Image References
document.addEventListener("DOMContentLoaded", function () {
  const imageReferences = [
    {
      src: "../images/home/img-1.jpg",
      link: "https://www.polytechnic.bh/",
      title: "Banner",
    },
    {
      src: "../images/home/education.jpg",
      link: "https://www.freepik.com/",
      title: "Education",
    },
    {
      src: "../images/home/class-3.jpg",
      link: "https://www.polytechnic.bh/",
      title: "Class",
    },
    {
      src: "../images/home/group.jpg",
      link: "https://www.freepik.com/",
      title: "Group",
    },
    {
      src: "../images/home/acadmic-advising.jpg",
      link: "https://www.polytechnic.bh/",
      title: "Acadmic-Advising",
    },
    {
      src: "../images/home/student-info-centre.jpg",
      link: "https://www.polytechnic.bh/",
      title: "Student Info Centre",
    },
    {
      src: "../images/home/career-and-employment-centre.png",
      link: "https://www.polytechnic.bh/",
      title: "Career & Employment Centre",
    },
    {
      src: "../images/home/Library Learning Centre.jpg",
      link: "https://www.polytechnic.bh/",
      title: "Library Learning Centre",
    },
    {
      src: "../images/home/teacher-1.jpg",
      link: "https://www.polytechnic.bh/",
      title: "Teacher-1",
    },
    {
      src: "../images/home/teacher-2.jpg",
      link: "https://www.polytechnic.bh/",
      title: "Teacher-2",
    },
    {
      src: "../images/home/teacher-3.jpg",
      link: "https://www.polytechnic.bh/",
      title: "Teacher-3",
    },
    {
      src: "../images/home/teacher-4.jpg",
      link: "https://www.polytechnic.bh/",
      title: "Teacher-4",
    },
    {
      src: "../images/home/teacher-5.jpg",
      link: "https://www.polytechnic.bh/",
      title: "Teacher-5",
    },
    {
      src: "../images/home/teacher-6.jpg",
      link: "https://www.polytechnic.bh/",
      title: "Teacher-6",
    },
    {
      src: "../images/home/student-1.JPG",
      link: "https://www.polytechnic.bh/",
      title: "Student-1",
    },
    {
      src: "../images/home/student-2.JPG",
      link: "https://www.polytechnic.bh/",
      title: "Student-2",
    },
    {
      src: "../images/img-4.jpg",
      link: "https://www.polytechnic.bh/",
      title: "Campus-1",
    },
    {
      src: "../images/img-3.jpg",
      link: "https://www.polytechnic.bh/",
      title: "Campus-2",
    },
    {
      src: "../images/academics/masters-1.jpg",
      link: "https://www.freepik.com/",
      title: "Masters-1",
    },
    {
      src: "../images/academics/masters-2.jpg",
      link: "https://www.freepik.com/",
      title: "Masters-2",
    },
    {
      src: "../images/academics/masters-3.jpeg",
      link: "https://www.freepik.com/",
      title: "Masters-3",
    },
    {
      src: "../images/academics/masters-4.jpg",
      link: "https://www.freepik.com/",
      title: "Masters-4",
    },
    {
      src: "../images/academics/masters-5.jpg",
      link: "https://www.freepik.com/",
      title: "Masters-5",
    },
    {
      src: "../images/academics/bachelor-1.jpg",
      link: "https://www.freepik.com/",
      title: "Bachelor-1",
    },
    {
      src: "../images/academics/bachelor-2.jpEg",
      link: "https://www.freepik.com/",
      title: "Bachelor-2",
    },
    {
      src: "../images/academics/bachelor-3.jpg",
      link: "https://www.freepik.com/",
      title: "Bachelor-3",
    },
    {
      src: "../images/academics/bachelor-4.jpg",
      link: "https://www.freepik.com/",
      title: "Bachelor-4",
    },
    {
      src: "../images/academics/bachelor-5.jpg",
      link: "https://www.polytechnic.bh/",
      title: "Bachelor-5",
    },
    {
      src: "../images/academics/topup-1.jpg",
      link: "https://www.freepik.com/",
      title: "Topup-1",
    },
    {
      src: "../images/academics/topup-2.jpg",
      link: "https://www.freepik.com/",
      title: "Topup-2",
    },
    {
      src: "../images/academics/topup-3.jpg",
      link: "https://www.freepik.com/",
      title: "Topup-3",
    },
    {
      src: "../images/academics/topup-4.jpg",
      link: "https://www.freepik.com/",
      title: "Topup-4",
    },
    {
      src: "../images/academics/topup-5.jpg",
      link: "https://www.freepik.com/",
      title: "Topup-5",
    },
  ];

  const referencesSection = document.getElementById("references-row");

  imageReferences.forEach((image) => {
    const linkElement = document.createElement("a");
    linkElement.href = image.link;

    const imgRefDiv = document.createElement("div");

    imgRefDiv.classList.add("img-ref");

    const imgElement = document.createElement("img");
    imgElement.src = image.src;

    const titleParagraph = document.createElement("p");
    titleParagraph.textContent = image.title;

    imgRefDiv.appendChild(imgElement);
    imgRefDiv.appendChild(titleParagraph);

    linkElement.appendChild(imgRefDiv);

    referencesSection.appendChild(linkElement);
  });
});
