const loginForm = document.getElementById("loginForm");
const message = document.querySelector(".message");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;

    if (email === "") {
        message.textContent = "Enter your email";
        message.style.color = "red";
        return;
    }

    if (password.length < 4) {
        message.textContent = "Password too short";
        message.style.color = "red";
        return;
    }

    message.textContent = "Login successful";
    message.style.color = "green";
});