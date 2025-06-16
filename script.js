document.addEventListener("DOMContentLoaded", () => {


  // Navbar link click handling
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll to section
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

  // Close sidebar when clicking outside
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

  // Close sidebar when clicking any anchor inside it
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
});