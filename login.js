document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".auth-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Get user input
        const emailInput = document.getElementById("email").value.trim();
        const passwordInput = document.getElementById("password").value.trim();

        // Get stored credentials from localStorage
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (emailInput === storedEmail && passwordInput === storedPassword) {
            window.location.href = "index.html"; // Redirect to main page
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
