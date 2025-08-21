// Dark Mode Toggle
const toggleBtn = document.getElementById("dark-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Alert
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll reply soon 🚀");
});
