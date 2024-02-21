// login.js
const usuario = "Laura Isabella";
const contrasena = "Te_amo";

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formularioLogin");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    login();
  });
});

function login() {
  const nombreUsuario = document.getElementById("usuario").value;
  const contrasenaUsuario = document.getElementById("contrasena").value;

  if (nombreUsuario === usuario && contrasenaUsuario === contrasena) {
    // Redirigir a la página siguiente después del inicio de sesión exitoso
    window.location.href = "pagina_siguiente.html";
  } else {
    // Mostrar mensaje de error
    alert("Usuario o contraseña incorrectos.");
  }
}

