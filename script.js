document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("settingsForm");
  if (!form) return;

  const email = document.getElementById("email");
  const address = document.getElementById("address");
  const password = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if (!email.value.match(emailPattern)) {
      showError(email, "Enter a valid email address");
      isValid = false;
    }

    // Address validation (letters and spaces only)
    const addressPattern = /^[A-Za-z\s]+$/;
    if (!address.value.match(addressPattern)) {
      showError(address, "Address must contain letters only");
      isValid = false;
    }

    // Password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!password.value.match(passwordPattern)) {
      showError(
        password,
        "Password must be 8+ chars, include uppercase, lowercase, number, and symbol",
      );
      isValid = false;
    }

    if (isValid) {
      alert("Settings updated successfully!");
    }
  });

  function showError(input, message) {
    const error = input.parentElement.querySelector(".error");
    error.textContent = message;
    error.style.color = "red";
  }
});
