// Find the button, listen for a click, then add/remove the class "dark" on body.
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
