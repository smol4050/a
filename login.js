// login.js
const usuario = "Laura Isabella";
const contrasena = "Te_amo";

function login() {
  const nombreUsuario = document.getElementById("usuario").value;
  const contrasenaUsuario = document.getElementById("contrasena").value;

  if (nombreUsuario === usuario && contrasenaUsuario === contrasena) {
    // Iniciar sesión y redirigir a la página principal
    alert("¡Bienvenido!");
    window.location.href = "index.html"; // Puedes cambiar "index.html" por la página que deseas redirigir después del inicio de sesión
  } else {
    // Mostrar mensaje de error
    alert("Usuario o contraseña incorrectos.");
  }
}

function mostrarVideo() {
  // Iniciar sesión y mostrar el video
  alert("¡Bienvenido!");
  document.body.style.backgroundColor = "black";
  const video = document.createElement("video");
  video.src = "https://www.youtube.com/shorts/cr3WyZYSfWk?feature=share";
  video.controls = true;
  video.style.width = "500px";
  video.style.height = "300px";
  video.style.position = "absolute";
  video.style.top = "50%";
  video.style.left = "50%";
  video.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(video);
}

function mostrarMensajeYBotones() {
  // Iniciar sesión y mostrar el mensaje y los botones
  alert("¡Bienvenido!");
  document.body.style.backgroundColor = "black";

  // Crear el mensaje
  const mensaje = document.createElement("p");
  mensaje.textContent = "¿Tú me amas más?";
  mensaje.style.color = "white";
  mensaje.style.fontSize = "24px";
  mensaje.style.position = "absolute";
  mensaje.style.top = "50%";
  mensaje.style.left = "50%";
  mensaje.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(mensaje);

  // Crear los botones
  const botonSi = crearBoton("Si", "green");
  const botonNo = crearBoton("No", "red");

  // Agregar evento click al botón "No"
  botonNo.addEventListener("click", moverBotonNo);
}

function crearBoton(texto, color) {
  const boton = document.createElement("button");
  boton.textContent = texto;
  boton.style.backgroundColor = color;
  boton.style.color = "white";
  boton.style.width = "100px";
  boton.style.height = "50px";
  boton.style.position = "absolute";
  boton.style.top = "50%";
  boton.style.left = "50%";
  boton.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(boton);
  return boton;
}

function moverBotonNo() {
  const anchoPantalla = document.body.clientWidth;
  const altoPantalla = document.body.clientHeight;
  const posicionX = Math.floor(Math.random() * (anchoPantalla - 200));
  const posicionY = Math.floor(Math.random() * (altoPantalla - 100));
  botonNo.style.left = `${posicionX}px`;
  botonNo.style.top = `${posicionY}px`;
}
