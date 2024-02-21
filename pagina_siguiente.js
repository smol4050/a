// pagina_siguiente.js
function mostrarMensaje(mensaje) {
    alert(mensaje);
  }
  
  function moverBotonNo() {
    const botonNo = document.getElementById("noButton");
    const anchoPantalla = document.body.clientWidth;
    const altoPantalla = document.body.clientHeight;
    const posicionX = Math.floor(Math.random() * (anchoPantalla - 200));
    const posicionY = Math.floor(Math.random() * (altoPantalla - 100));
    botonNo.style.left = `${posicionX}px`;
    botonNo.style.top = `${posicionY}px`;
  }
  