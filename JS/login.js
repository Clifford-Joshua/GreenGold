const username = document.querySelector("#username");
const password = document.querySelector("#password");
const rememberMeholder = document.querySelector(".reemember-holder");
const BTNS = document.querySelectorAll(".btn");
const errormessage = document.querySelector(".error");
BTNS.forEach((button) => {
  button.addEventListener("click", (e) => {
    // all clickable items
    const click = e.currentTarget.classList;

    if (click.contains("checks")) {
      const checkremember = rememberMeholder.classList;
      if (!checkremember.contains("add")) {
        checkremember.add("add");
        username.value = localStorage.getItem("username");
        password.value = localStorage.getItem("password");
      } else {
        checkremember.remove("add");
        username.value = "";
        password.value = "";
      }
    }
    if (click.contains("login")) {
      let user = username.value;
      let userpassword = password.value;
      let savedusename = localStorage.getItem("username");
      let savedpassword = localStorage.getItem("password");
      if (savedusename === user && savedpassword === userpassword) {
        e.preventDefault();
        window.location.pathname = "/GreenGold/Html/profile.html";
      } else {
        e.preventDefault();
        errormessage.textContent = "Incorrect username or Password";
      }
    }
  });
});
