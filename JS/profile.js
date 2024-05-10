const username = document.querySelector("#username");
const menu_btn = document.querySelector(".menu");
username.textContent = localStorage.getItem("username");
const date = document.querySelector(".time");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Number",
  "December",
];

const DATE = new Date();
const MONTH = DATE.getMonth();
const DAYS = DATE.getDay();
const YEAR = DATE.getFullYear();
date.textContent = `${days[DAYS]}, ${DATE.getDate()} ${months[MONTH]} ${YEAR}`;
menu_btn.addEventListener("click", (e) => {
  const section_conatiner = document.querySelector(".section-container");
  const menu_text = document.querySelector(".menu-text");
  section_conatiner.classList.toggle("show");
  if (section_conatiner.classList.contains("show")) {
    menu_text.textContent = "Cancel";
    window.addEventListener("scroll", function () {
      section_conatiner.classList.remove("show");
      menu_text.textContent = "Menu";
    });
  } else {
    menu_text.textContent = "Menu";
  }
  e.preventDefault();
});
