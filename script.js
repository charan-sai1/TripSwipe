const toggleForm = document.querySelectorAll(".toggleForm");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

toggleForm.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    loginForm.classList.toggle("active");
    signupForm.classList.toggle("active");
  });
});
