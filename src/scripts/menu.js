const btnHamburger = document.getElementById("btn-hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const btnNavbarClose = document.getElementById("navbar-close");
const navItems = document.querySelectorAll("#mobile-menu a"); // Select all nav items
const servicesBtn = document.getElementById("servicesBtn");
const servicesDropDown = document.getElementById("servicesDropDown");
const mobileServicesBtn = document.getElementById("mobileServicesBtn");
const mobileservicesDropDown = document.getElementById(
  "mobileservicesDropDown"
);

btnNavbarClose.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

btnHamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when a nav item is clicked
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.add("hidden"); // Ensure the menu closes
  });
});

servicesBtn.addEventListener("click", () => {
  servicesDropDown.classList.toggle("hidden");
});

mobileServicesBtn.addEventListener("click", () => {
  mobileservicesDropDown.classList.toggle("hidden");
});

// close banner
document.getElementById("close-banner").addEventListener("click", function () {
  document.getElementById("banner").style.display = "none";
});
