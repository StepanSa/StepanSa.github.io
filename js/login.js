document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorDiv = document.getElementById("error");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        fetch("http://127.0.0.1:5000/login", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa(username + ":" + password),
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                localStorage.setItem("token", data.token);
                window.location.href = "../pages/index.html";
            })
            .catch((error) => {
                errorDiv.textContent = error.message;
            });
    });
});

