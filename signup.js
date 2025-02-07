document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".auth-form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Get user input
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Save user credentials to localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        window.location.href = "index.html";
    });
});
