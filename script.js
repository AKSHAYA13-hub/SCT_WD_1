// Dynamic Greeting
const greetingElement = document.getElementById("greeting");
const hour = new Date().getHours();
let greetingText = "";

if (hour < 12) {
  greetingText = "Good Morning,☀️";
} else if (hour < 18) {
  greetingText = "Good Afternoon,!🌤️";
} else {
  greetingText = "Good Evening,!🌙";
}
greetingElement.textContent = greetingText;

// Form Submission
document.getElementById("joinForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
    alert(`Thank you, ${name}! Welcome to BlueRhythm 🎧`);
    this.reset();
  } else {
    alert("Please fill in both fields.");
  }
  const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

});
