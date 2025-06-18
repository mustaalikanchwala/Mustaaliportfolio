document.addEventListener("DOMContentLoaded", () => {
  // Navbar link click handling
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Dark mode toggle
  const darkToggles = document.querySelectorAll(".darkToggle");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkToggles.forEach((btn) => (btn.textContent = "☀️"));
  } else {
    darkToggles.forEach((btn) => (btn.textContent = "🌙"));
  }
  darkToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      darkToggles.forEach((b) => (b.textContent = isDark ? "☀️" : "🌙"));
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });

  // Sidebar toggle
  window.showSidebar = function () {
    document.querySelector(".sidebar").style.display = "flex";
  };
  window.closeSidebar = function () {
    document.querySelector(".sidebar").style.display = "none";
  };
  document.addEventListener("click", (event) => {
    const sidebar = document.querySelector(".sidebar");
    const sidebarToggle = document.querySelector(".menu-button");
    if (
      sidebar.style.display === "flex" &&
      !sidebar.contains(event.target) &&
      !sidebarToggle.contains(event.target)
    ) {
      closeSidebar();
    }
  });
  document.querySelectorAll(".sidebar a").forEach((link) => {
    link.addEventListener("click", () => {
      closeSidebar();
    });
  });

  // Contact form
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;
    alert(
      `Thank you, ${name}! We'll reach out at ${email} or ${phone}.\nMessage: ${message}`
    );
    e.target.reset();
  });

  // Animation handling with IntersectionObserver
  const animateElements = document.querySelectorAll(".animate-section .animate__animated");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          if (element.tagName === "H2") {
            element.classList.add("animate__fadeInDown");
          } else if (element.classList.contains("home-links")) {
            element.classList.add("animate__fadeInUp");
          } else if (element.classList.contains("skill-card")) {
            element.classList.add("animate__fadeInRight");
          } else if (element.classList.contains("education-item") || element.classList.contains("experience-item")) {
            element.classList.add("animate__fadeInLeft");
          } else if (element.classList.contains("project-card")) {
            element.classList.add("animate__fadeInUp");
          } else if (element.tagName === "IMG") {
            element.classList.add("animate__zoomIn");
          } else if (element.tagName === "FORM") {
            element.classList.add("animate__fadeInUp");
          } else if (element.parentElement.classList.contains("footer-container")) {
            element.classList.add("animate__fadeInUp");
          } else {
            element.classList.add("animate__fadeIn");
          }
          observer.unobserve(element); // Stop observing once animated
        }
      });
    },
    { threshold: 0.2 }
  );
  animateElements.forEach((element) => observer.observe(element));
});