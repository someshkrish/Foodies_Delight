const hamburger = document.querySelector(".hamburger");
const header_icons = document.querySelector(".header-icons");
const icons = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  header_icons.classList.toggle("open");
  icons.forEach((icon) => {
    icon.classList.toggle("fade");
  });
});
