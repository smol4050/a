const usuario = "Laura Isabella";
const contrasena = "Te_amo";

function login() {
  const nombreUsuario = document.getElementById("usuario").value;
  const contrasenaUsuario = document.getElementById("contrasena").value;

  if (nombreUsuario === usuario && contrasenaUsuario === contrasena) {
    // Iniciar sesión y redirigir a la página principal
    alert("¡Bienvenido!");
    window.location.href = "index.html";
  } else {
    // Mostrar mensaje de error
    alert("Usuario o contraseña incorrectos.");
  }
  
}

if (nombreUsuario === usuario && contrasenaUsuario === contrasena) {
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

if (nombreUsuario === usuario && contrasenaUsuario === contrasena) {
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
    const botonSi = document.createElement("button");
    botonSi.textContent = "Si";
    botonSi.style.backgroundColor = "green";
    botonSi.style.color = "white";
    botonSi.style.width = "100px";
    botonSi.style.height = "50px";
    botonSi.style.position = "absolute";
    botonSi.style.top = "50%";
    botonSi.style.left = "50%";
    botonSi.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(botonSi);
  
    const botonNo = document.createElement("button");
    botonNo.textContent = "No";
    botonNo.style.backgroundColor = "red";
    botonNo.style.color = "white";
    botonNo.style.width = "100px";
    botonNo.style.height = "50px";
    botonNo.style.position = "absolute";
    botonNo.style.top = "50%";
    botonNo.style.left = "50%";
    botonNo.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(botonNo);
  
    // Función para mover el botón "No"
    function moverBotonNo() {
      const anchoPantalla = document.body.clientWidth;
      const altoPantalla = document.body.clientHeight;
      const posicionX = Math.floor(Math.random() * (anchoPantalla - 200));
      const posicionY = Math.floor(Math.random() * (altoPantalla - 100));
      botonNo.style.left = `${posicionX}px`;
      botonNo.style.top = `${posicionY}px`;
    }
  
    // Agregar evento click al botón "No"
    botonNo.addEventListener("click", moverBotonNo);
  }
  
export default login;
