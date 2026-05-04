let attempts = 0;
const MAX_ATTEMPTS = 3;

function login() {
    const userInput = document.getElementById("username");
    const passInput = document.getElementById("password");
    const loginBtn = document.querySelector(".btn-primary");

    const username = userInput.value;
    const password = passInput.value;

    if (username === "Student6" && password === "06072026") {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        attempts++;
        let remaining = MAX_ATTEMPTS - attempts;

        if (remaining > 0) {
            alert("Invalid login! You have " + remaining + " attempts left.");
        } else {
            alert("This was your last try. You are now locked out!");
            userInput.disabled = true;
            passInput.disabled = true;
            loginBtn.disabled = true;
            loginBtn.innerText = "Locked";
        }
    }
}

function clearFields() {
    if (attempts < MAX_ATTEMPTS) {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}

function togglePassword() {
    const passInput = document.getElementById("password");
    const eyeIcon = document.querySelector(".toggle-eye");

    if (passInput.type === "password") {
        passInput.type = "text";
        eyeIcon.classList.remove("bi-eye-slash");
        eyeIcon.classList.add("bi-eye");
    } else {
        passInput.type = "password";
        eyeIcon.classList.remove("bi-eye");
        eyeIcon.classList.add("bi-eye-slash");
    }
}

function logout() {
    alert("You have logged out.");
    window.location.href = "index.html";
}


function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('profileAvatar');
        output.src = reader.result;
    }
    if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}