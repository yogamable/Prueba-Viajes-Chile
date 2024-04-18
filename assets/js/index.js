const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


$("#boton-enviar").click(function(){
    alert("Tu mail se ha enviado. ¡Gracias por ponerte en contacto con nosotros!");
  });