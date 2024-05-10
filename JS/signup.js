const form = document.querySelector("form");
const username = document.querySelector(".user");
const pass_word = document.querySelector("#password");
const all_input = document.querySelectorAll(".input");
const errormessage = document.querySelector(".error");
const policy = document.querySelector(".policy-terms");
const password = document.querySelectorAll(".password");
const clickable_item = document.querySelectorAll(".click");
const confirm_password = document.querySelector("#confirm-password");
const password_checker = document.querySelector(".password-checkers");
// all clickable item function
clickable_item.forEach((allclick) => {
  allclick.addEventListener("click", (e) => {
    // clickable items
    let button = e.currentTarget.classList;
    // getting all password
    // password functionality start
    password.forEach((passwordshow) => {
      let form = document.querySelector("form");
      if (button.contains("closed-eye")) {
        // show password
        if (passwordshow.type == "password") {
          passwordshow.type = "text";
          form.classList.add("show");
        }
      }
      if (button.contains("opened-eye")) {
        if (passwordshow.type == "text") {
          passwordshow.type = "password";
          form.classList.remove("show");
        }
      }
    });
    // check policy
    if (button.contains("yes")) {
      policy.classList.toggle("true");
    }
    if (button.contains("agree")) {
      policy.classList.toggle("yes");
    }
    // create account
    if (button.contains("Create-account")) {
      let checkedinput =
        form.classList.contains("showed") &&
        form.classList.contains("checks") &&
        form.classList.contains("check") &&
        form.classList.contains("shows");
      let checkpassword =
        password_checker.classList.contains("display") &&
        password_checker.classList.contains("dis") &&
        password_checker.classList.contains("displ") &&
        password_checker.classList.contains("disp") &&
        password_checker.classList.contains("displa");
      let signcomplete =
        policy.classList.contains("true") && policy.classList.contains("yes");
      if (checkedinput) {
        if (checkpassword) {
          if (pass_word.value == confirm_password.value) {
            if (signcomplete) {
              e.preventDefault();
              window.location.pathname = "/Html/signin.html";
            } else {
              errormessage.textContent =
                "**please read and check our policy and terms";
              e.preventDefault();
            }
          } else {
            errormessage.textContent =
              "**your passwords don't match with confirm password";
            e.preventDefault();
          }
          console.log("form contain all class");
        } else {
          e.preventDefault();
          errormessage.textContent =
            "**your password doesn't not complete our instruction make sure your password got checked all 5 instructuons";
        }
      } else {
        errormessage.textContent = "**Make sure you filled all the form";
        e.preventDefault();
      }
      // save username and password in localstorage
      localStorage.setItem("password", pass_word.value);
      localStorage.setItem("username", username.value);
    }
  });
});

// passweord characters checkers function
function checkerpassword() {
  // lowercase character
  let lowercase = /[a-z]/;
  // Uppercase character
  let Uppercase = /[A-Z]/;
  // number character
  let numbers = /[0-9]/;
  // special character
  let special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  pass_word.addEventListener("keyup", (e) => {
    // STATEMENT THAT CHECK IF PASSWORD CONTAINS LOWER CHARACTERS
    let check_lower = lowercase.test(pass_word.value);
    if (check_lower) {
      password_checker.classList.add("display");
    } else {
      password_checker.classList.remove("display");
    }
    // STATEMENT THAT CHECK IS PASSWORD CONTAINS UPPER CHARACTERS
    let check_upper = Uppercase.test(pass_word.value);
    if (check_upper) {
      password_checker.classList.add("dis");
    } else {
      password_checker.classList.remove("dis");
    }
    // STATEMENT THAT CHECK IS PASSWORD CONTAINS NUMBER CHARACTERS
    let check_num = numbers.test(pass_word.value);
    if (check_num) {
      password_checker.classList.add("displ");
    } else {
      password_checker.classList.remove("displ");
    }
    // STATEMENT THAT CHECK IS PASSWORD CONTAINS SPECIAL
    let check_special = special.test(pass_word.value);
    if (check_special) {
      password_checker.classList.add("disp");
    } else {
      password_checker.classList.remove("disp");
    }
    // STATEMENT THAT CHECK IS PASSWORD LENGTH IS BIGGER THAN 8
    if (pass_word.value.length > 8) {
      password_checker.classList.add("displa");
    } else {
      password_checker.classList.remove("displa");
    }
  });
}
checkerpassword();
// function for all input apart from password and confirm password
function inputs() {
  all_input.forEach((eachinput) => {
    eachinput.addEventListener("keyup", (e) => {
      // current input value
      let values = e.target.value;
      // current input id
      let current_input = e.currentTarget.id;
      // firstname
      if (current_input == "firstname") {
        if (values.length > 3) {
          form.classList.add("showed");
        } else {
          form.classList.remove("showed");
        }
      }
      // surname
      if (current_input == "surname") {
        if (values.length > 3) {
          form.classList.add("shows");
        } else {
          form.classList.remove("shows");
        }
      }
      // email
      if (current_input == "email") {
        if (values.length > 7) {
          if (values.includes("@")) {
            form.classList.add("check");
          } else {
            alert("sorry you seem to have inputed an incorrect mail @ missing");
            form.classList.remove("check");
          }
        }
      }
      // phone number
      if (current_input == "phone-number") {
        if (values.length == 11) {
          form.classList.add("checks");
        } else {
          form.classList.remove("checks");
        }
      }
    });
  });
}
inputs();
