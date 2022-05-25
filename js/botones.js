const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const btnHablar = document.querySelector("#escuchar");


const tarjeta1 = document.querySelector(".tarjetan1");

function encriptar() {
    if (!validarMensaje()) return;
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");

    document.getElementById("muñecoo").style.display = "none";
    document.getElementById("sintexto").style.display = "none";
    
    inputResultado.value = mensajeEncriptado;
}

function desencriptar() {
    if (!validarMensaje()) return;
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");
   
    document.getElementById("muñecoo").style.display ="none";
    document.getElementById("sintexto").style.display = "none";
    
    inputResultado.value = mensaje;
}

function copiar() {
  var mensajeEncriptado = inputResultado.value;
  navigator.clipboard.writeText(mensajeEncriptado);
  inputMensaje.value= "";
  inputMensaje.focus();
  alert("El mensaje ha sido copiado");

}

function escuchar() {
  var mensajeEncriptado = inputResultado.value;
  let msg = new SpeechSynthesisUtterance();
  msg.text = mensajeEncriptado;
  msg.lang = "es-Es";
  window.speechSynthesis.speak(msg);
}

btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;

btnHablar.onclick = escuchar;