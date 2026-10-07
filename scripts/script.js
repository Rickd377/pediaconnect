document.querySelectorAll(".dropdown").forEach((dropdown) => {
  const toggleBtn = dropdown.querySelector(":scope > .menu-btn");
  const content = dropdown.querySelector(".dropdown-content");
  const closeBtn = dropdown.querySelector(".close-dropdown-btn");

  toggleBtn.addEventListener("click", () => {
    content.classList.toggle("open");
  });

  closeBtn.addEventListener("click", () => {
    content.classList.remove("open");
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      content.classList.remove("open");
    }
  });
});