$(document).ready(function () {
  $("#loginForm").submit(function (event) {
    event.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();

    if (username === "mimolas" && password === "123momiaes") {
      window.location.href = "menu.html";
    } else {
      alert("Usuario o contraseña inválido. Inténtalo de nuevo.");
    }
  });
});