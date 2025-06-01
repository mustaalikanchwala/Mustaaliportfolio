document.addEventListener("DOMContentLoaded", () => {
  // Animate skill bars
  const bars = document.querySelectorAll(".skill-level");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const bar = entry.target;
      if (entry.isIntersecting) {
        const targetWidth = bar.getAttribute("data-width");
        bar.style.width = targetWidth;
      } else {
        bar.style.width = "0%";
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));

  // === DARK MODE TOGGLE ===
  const darkToggles = document.querySelectorAll(".darkToggle");

  // Load theme preference from localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkToggles.forEach(btn => btn.textContent = "☀️");
  } else {
    darkToggles.forEach(btn => btn.textContent = "🌙");
  }

  // Add click event to each toggle button
  darkToggles.forEach(btn => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");

      // Update icon text
      darkToggles.forEach(b => b.textContent = isDark ? "☀️" : "🌙");

      // Save preference
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });

  // === SIDEBAR TOGGLE ===
  window.showSidebar = function () {
    document.querySelector(".sidebar").style.display = "flex";
  };

  window.closeSidebar = function () {
    document.querySelector(".sidebar").style.display = "none";
  };
  // Close sidebar when clicking outside of it
document.addEventListener("click", (event) => {
  const sidebar = document.querySelector(".sidebar");
  const sidebarToggle = document.querySelector(".menu-button"); // Change selector if needed

  if (
    sidebar.style.display === "flex" &&
    !sidebar.contains(event.target) &&
    !sidebarToggle.contains(event.target)
  ) {
    closeSidebar();
  }
});

// Close sidebar when clicking any anchor inside it
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    closeSidebar();
  });
});


  // === CONTACT FORM ===
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;
    alert(`Thank you, ${name}! We'll reach out at ${email} or ${phone}.\nMessage: ${message}`);
    e.target.reset();
  });
});



