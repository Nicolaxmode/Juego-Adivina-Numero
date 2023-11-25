//extraer los elementos del html
const numeroCliente = document.getElementById('numeroCliente')
const msg = document.getElementById('mensaje')
const intento = document.getElementById('intento')
let intentos = 0
const random = Math.floor(Math.random()*100) + 1

var input = document.getElementById("numeroCliente");
var boton = document.getElementById("enviarN");

// Escucha enter
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    boton.click();
  }
});

function numeroRandom(){

    let numero = parseInt(numeroCliente.value)

    intentos ++
    intento.textContent = intentos

    if(numero < 1 || numero > 100){
        msg.textContent = 'ingresa un numero valido'
        msg.style.color = '#CC6666'
        return
    }
    if(numero === random){
        msg.textContent = 'Felicitaciones, Ganaste'
        msg.style.color = '#FFD369'
        msg.style.color = '#FFD369'
        numeroIngresado.disabled = true
    }else if(numero < random){
        msg.textContent = 'Casi, debe ser mas alto'
        msg.style.color = '#CC6666'
    }else{
        msg.textContent = 'Casi, debe ser mas bajo'
        msg.style.color = '#CC6666'
    }
}