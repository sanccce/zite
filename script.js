`use strict`;

// footer date
const footerYear = document.querySelector(".foot-span");
const year = new Date().getFullYear();
footerYear.textContent = year;

//submit button manipulation
const formEl = document.querySelector(".form");
const submitBtn = document.querySelector(".form-btn");
const responseSection = document.querySelector(".response");
const contactSection = document.querySelector(".contact");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formdata = new FormData(formEl);
  const data = Object.fromEntries(formdata);
  console.log(data);
  formEl.reset();
  responseSection.classList.remove("response");
  contactSection.classList.add("response");
});

function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}
