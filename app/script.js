alert("JavaScript Loaded!");

const deployButton = document.getElementById("deployButton");
const message = document.getElementById("message");

deployButton.addEventListener("click", function () {
    message.textContent = "✅ Deployment simulation started successfully!";
});
