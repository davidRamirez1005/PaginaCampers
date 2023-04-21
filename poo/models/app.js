
// Acordion
const botonesToggle = document.querySelectorAll('.boton-toggle');
    
botonesToggle.forEach(botonToggle => {
  botonToggle.addEventListener('click', function() {
    this.nextElementSibling.classList.toggle('oculto');
  });
});

// ventana modal
function mostrarModal1() {
    let modal = document.querySelector("#myModal");
    modal.style.display = "block";
}
function ocultarModal1() {
    let modal = document.querySelector("#myModal");
    modal.style.display = "none";
}
function mostrarModal2() {
    let modal = document.querySelector("#myModal");
    modal.style.display = "block";
}
function ocultarModal2() {
    let modal = document.querySelector("#myModal");
    modal.style.display = "none";
}
function mostrarModal3() {
    let modal = document.querySelector("#myModal");
    modal.style.display = "block";
}
function ocultarModal3() {
    let modal = document.querySelector("#myModal");
    modal.style.display = "none";
}
function mostrarModal4() {
    let modal = document.querySelector("#myModal");
    modal.style.display = "block";
}
function ocultarModal4() {
    let modal = document.querySelector("#myModal");
    modal.style.display = "none";
}