// Hamburger icon
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const menuOptions = document.querySelectorAll(".menu-option");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

menuOptions.forEach((option) => {
  option.addEventListener("click", () => {
    btn.classList.remove("open");
    nav.classList.remove("flex");
    nav.classList.add("hidden");
  });
});

/* Show navbar when page loads */
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.classList.add("show");
  }
});

// Scroll Animation

document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent instant jump
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth", // Smooth scroll effect
      });
    }
  });
});

// Fade-in sections on scroll
function revealSections() {
  document.querySelectorAll(".section").forEach((section) => {
    let sectionTop = section.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.classList.add("show");
    }
  });
}
window.addEventListener("scroll", revealSections);
revealSections(); // Show first section initially

// Scroll to top button functionality
/* let scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});*/
