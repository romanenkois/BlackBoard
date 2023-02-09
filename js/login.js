document.querySelector("#login-btn").addEventListener("click", function() {
    login = document.querySelector("#login").value;
    password = document.querySelector("#password").value;
    console.log("Login: " + login + " Password: " + password);
    if (login == "admin" && password == "admin") {
        console.log("Login successful");
    } else if ((login != null) && (password != null)) {
        localStorage.setItem("userData", JSON.stringify({login: login, password: password}));
        location.href = "account.html";
    }
});