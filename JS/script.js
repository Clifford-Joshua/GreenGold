const BTNS = document.querySelectorAll(".click");
const section_boby = document.querySelector(".section-body");
BTNS.forEach((eachbtn) => {
  eachbtn.addEventListener("click", (e) => {
    const click_btn = e.currentTarget.classList;
    let userlogin = localStorage.getItem("username");
    // show nav
    if (click_btn.contains("menu")) {
      let menu_text = document.querySelector(".menu_text");
      e.preventDefault();
      section_boby.classList.toggle("show");
      if (section_boby.classList.contains("show")) {
        menu_text.textContent = "Home";
      } else {
        menu_text.textContent = "Menu";
      }
    }
    // academic aka course
    if (click_btn.contains("academics") || click_btn.contains("admission")) {
      if (userlogin === null) {
        alert("please sign up you don't have an account with us");
      } else {
        window.location.pathname = "/Html/course.html";
      }

      e.preventDefault();
    }
    // // my profile
    if (click_btn.contains("profile")) {
      if (userlogin === null) {
        alert("please sign up you don't have an account with us");
      } else {
        window.location.pathname = "/Html/profile.html";
      }
    }
    // enroll
    if (click_btn.contains("Enroll-now")) {
      if (userlogin === null) {
        alert("please sign up you don't have an account with us");
      } else {
        window.location.pathname = "/Html/signup.html";
      }
    }
  });
});
