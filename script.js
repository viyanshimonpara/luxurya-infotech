/* ── Shared Navigation & Utility Functions ── */

function getActivePage() {
  const path =
    window.location.pathname.split("/").pop().replace(".html", "") || "index";
  const map = {
    index: "home",
    home: "home",
    about: "about",
    services: "services",
    portfolio: "portfolio",
    team: "team",
    contact: "contact",
  };
  return map[path] || "home";
}

document.addEventListener("DOMContentLoaded", function () {
  // Mark active nav link
  const active = getActivePage();
  document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
    if (link.getAttribute("data-page") === active) link.classList.add("active");
  });

  // Sticky nav shadow
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    });
  }

  // Mobile menu toggle
  const ham = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (ham && mobileMenu) {
    ham.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      ham.classList.toggle("open");
    });
  }

  // Fade-in observer
  initFadeIn();
});

function initFadeIn() {
  const els = document.querySelectorAll(".fade-in:not(.visible)");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }, i * 80);
        }
      });
    },
    { threshold: 0.1 },
  );
  els.forEach((el) => io.observe(el));
}
const swiper = new Swiper(".testimonial-swiper", {
            slidesPerView: "auto",
            spaceBetween: 25,
            loop: true,              // ❗ infinite loop
            loopedSlides: 4,         // ❗ total slides count (important)
            speed: 1000,
            grabCursor: true,

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

