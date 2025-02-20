document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        this.reset();
    }
});
