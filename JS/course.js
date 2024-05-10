window.addEventListener("DOMContentLoaded", function () {
  // Get date, day month and clickable btn
  const DayElement = document.querySelector(".days-date");
  const MonthElement = document.querySelector(".month");
  const username = document.getElementById("username");
  const BTNS = document.querySelectorAll(".btn");
  const date = document.querySelector(".time");

  //   DATE
  const DATE = new Date();

  let Months = [
    "Jnauary",
    "Febuaray",
    "March",
    "Apirl",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Noverber",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const MONTH = DATE.getMonth();
  const DAYS = DATE.getDay();
  const YEAR = DATE.getFullYear();

  date.textContent = `${days[DAYS]}, ${DATE.getDate()} ${
    Months[MONTH]
  } ${YEAR}`;

  function calender(date) {
    // currentmonth
    const CURRENT_MONTH = date.getMonth();

    // currentyear
    const CURRENT_YEAR = date.getFullYear();

    MonthElement.textContent = `${Months[CURRENT_MONTH]} ,  ${CURRENT_YEAR}`;

    // Current day that day date(TODAY'S DATE)
    const Day_In_Month = new Date(CURRENT_YEAR, CURRENT_MONTH + 1, 0).getDate();

    console.log(Day_In_Month);

    // FIRST DAY OF THE MONTH DATE
    const First_Day_Of_Month = new Date(
      CURRENT_YEAR,
      CURRENT_MONTH,
      1
    ).getDay();

    console.log(First_Day_Of_Month);

    let DayCounter = 1;

    DayElement.innerHTML = "";

    for (let i = 0; i < 42; i++) {
      const Days_Element = document.createElement("h4");
      if (i < First_Day_Of_Month || DayCounter > Day_In_Month) {
        Days_Element.textContent = "";
      } else {
        Days_Element.textContent = DayCounter;
        DayCounter++;
        if (
          date.getDate() === DayCounter - 1 &&
          date.getMonth() === CURRENT_MONTH &&
          date.getFullYear() === CURRENT_YEAR
        ) {
          Days_Element.classList.add("current-day");
        }
      }
      DayElement.append(Days_Element);
    }
  }
  calender(DATE);

  //   button
  BTNS.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let pre_nex = e.currentTarget.classList;
      if (pre_nex.contains("pre")) {
        DATE.setMonth(DATE.getMonth() - 1);
        calender(DATE);
      }
      if (pre_nex.contains("nex")) {
        DATE.setMonth(DATE.getMonth() + 1);
        calender(DATE);
      }
      if (pre_nex.contains("menu")) {
        e.preventDefault();
        const section_body = document.querySelector(".section-body");
        const menu_text = document.querySelector(".menu-text");
        section_body.classList.toggle("show");
        if (section_body.classList.contains("show")) {
          menu_text.textContent = "Cancel";
          window.addEventListener("scroll", function () {
            section_body.classList.remove("show");
            menu_text.textContent = "Menu";
          });
        } else {
          menu_text.textContent = "Menu";
        }
      }
    });
  });
  username.textContent = localStorage.getItem("username");
});
