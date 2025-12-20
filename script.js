// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));

// Mobile nav (generic)
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (toggle && navLinks) {
  toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}

// FAQ accordion
document.querySelectorAll(".faq-q").forEach(q => {
  q.addEventListener("click", () => q.closest(".faq-item").classList.toggle("open"));
});

// Mobile dropdown support
document.querySelectorAll(".dd > a").forEach(a => {
  a.addEventListener("click", (e) => {
    const dd = a.closest(".dd");
    if (window.matchMedia("(max-width: 860px)").matches) {
      e.preventDefault();
      dd.classList.toggle("open");
    }
  });
});
