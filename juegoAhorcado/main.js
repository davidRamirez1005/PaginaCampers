
let palabraAleatoria
let palabraSeparada 
let letrasIngresadas = []
function juego() {
    letrasIngresadas = []
    let palabras = ["manzana", "perro", "gato", "bicicleta", "computadora", "celular", "libro", "jardin", "comida", "teclado", "guitarra", "pintura", "montaña", "avión", "pelicula", "universidad", "gafas", "camiseta", "maleta", "amistad"]

    const posicionAleatoria = Math.floor(Math.random() * palabras.length);
    palabraAleatoria = palabras[posicionAleatoria];
    palabraSeparada = palabraAleatoria.toLowerCase().split("")
    console.log(palabraAleatoria);

    // document.getElementById("letra").addEventListener('input',(e) => {
    //     document.getElementById("letra").value = e.data
    // })
    haGanado()

    document.getElementById('validar')?.addEventListener('click', haGanado)
}
let unidoverificar
let unidoPalabraSeparada 
const haGanado = () => {
    const imagen = document.getElementById("cambioImagen")
    const verificar = intentar()
    console.log(verificar);
    unidoverificar = verificar.join("")
    unidoPalabraSeparada = palabraSeparada.join("")
    unidoverificar == unidoPalabraSeparada ? imagen.src = "/juegoAhorcado/img/persona.png"  : console.log("no adivinaste :(")

}
// const cambiarImagen = () => {
//     const imagen = document.getElementById("cambioImagen");
//     if (unidoverificar == unidoPalabraSeparada) {
//       imagen.src = "/juegoAhorcado/img/persona.png";
//       alert("gano")
//     } else {
//       imagen.src = "/juegoAhorcado/img/juego-del-ahorcado.png";
//     }
//   }
  

const intentar = () =>{
    
    let letra = document.getElementById("letra")?.value;
    letrasIngresadas.push(letra);
    document.getElementById("letra").value = "";
    let verificar = palabraSeparada.map(letra => {
        if (letrasIngresadas.includes(letra)) {
            return letra
        }
    });
    renderizado(verificar)
    return verificar
}
let juegoComenzado = false;

let boton = document.getElementById("empezar");
boton.addEventListener("click", function() {
    if (juegoComenzado) {
        location.reload(); // Recargar la página
    } else {
        juego(); // Iniciar un nuevo juego
        juegoComenzado = true; // Establecer juegoComenzado en true
    }
});


function renderizado(letrasIngresadas) {
    const letras = document.querySelector(".letras")
    letras.innerHTML=""  
    letrasIngresadas.forEach(el => {
        const contenedor = document.createElement('div')
        contenedor.classList.add('contenedor-letra')
        const letra = document.createElement('span')
        letra.innerText = el ?? ' '
        const casilla = document.createElement('span')
        casilla.innerText = '_'
        contenedor.appendChild(letra)
        contenedor.appendChild(casilla)
        letras.appendChild(contenedor)
    });
}
  

