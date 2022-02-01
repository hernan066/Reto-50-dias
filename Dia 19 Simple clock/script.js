const deg = 6;
const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

//clock
const setClock = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();

  let hh = hours * 30;
  let mm = minutes * deg;
  let ss = time.getSeconds() * deg;

  hourEl.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minEl.style.transform = `rotateZ(${mm}deg)`;
  secEl.style.transform = `rotateZ(${ss}deg)`;

  timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} `;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
};

setClock();

setInterval(setClock, 1000);

//dark mode
const switchTheme = (e) => {
  const switchBtn = e.target;
  if (switchBtn.textContent.toLowerCase() === "light") {
    switchBtn.textContent = "dark";
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    switchBtn.textContent = "light";
    document.documentElement.setAttribute("data-theme", "light");
  }
};

const switchModeBtn = document.querySelector(".switch-btn");
switchModeBtn.addEventListener("click", switchTheme, false);

let currentTheme = "light";

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  switchModeBtn.textContent = currentTheme;
}
