document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skill-level");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const bar = entry.target;
      if (entry.isIntersecting) {
        // Animate bar when in view
        const targetWidth = bar.getAttribute("data-width");
        bar.style.width = targetWidth;
      } else {
        // Reset width when out of view
        bar.style.width = "0%";
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => {
    observer.observe(bar);
  });
});
// Dark mode toggle
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const phone = e.target.phone.value;
  const message = e.target.message.value;
  alert(`Thank you, ${name}! We'll reach out at ${email} or ${phone}.\nMessage: ${message}`);
  e.target.reset();
});

// Mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("navLinks");
mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  // setTimeout(() => {
  //   navLinks.classList.toggle("show");
  // }, 10);
});


