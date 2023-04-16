/*
    FUNCION ENCRIPTAR: recibe un mensaje del usuario y cambia las vocales para encriptar el mensaje
    haciendo uso de replace() 

    a = ai
    e = enter
    i = imes
    o = ober
    u = ufat

*/

function encriptar(mensaje) {
  encriptado = mensaje
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return encriptado;
}

/*
    FUNCION DESENCRIPTAR: recibe un mensaje del usuario y cambia las palabras ai | enter |
    mes | ober | ufat  para desencriptar el mensaje haciendo uso de replace() 

    ai = a
    enter = e 
    mes = i
    ober = o
    ufat = u
    
*/

function desencriptar(mensaje) {
    desencriptado = mensaje
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    return desencriptado;
  }

function validar() {
  let mensajeinicial = document.getElementById("mensaje").value;
  let mensaje = mensajeinicial.toLowerCase();
  let mensajeEncriptado = encriptar(mensaje);
  let imagen = document.getElementById("antes-respuesta");
  let respuestaencriptado = document.getElementById("mih1");
  let botonCopia = document.getElementById("boton-copia");
  imagen.style.display = "none";

  respuestaencriptado.style.display = "block";
  console.log("Mensaje encriptado:", mensajeEncriptado);
  document.getElementById("mih1").innerHTML = mensajeEncriptado;

  botonCopia.style.display = "block";
}

function validarDesencriptado() {
  let mensajeinicial = document.getElementById("mensaje").value;
  let mensaje = mensajeinicial.toLowerCase();
  let mensajeDesencriptado = desencriptar(mensaje);
  console.log("Mensaje encriptado:", mensajeDesencriptado);
  document.getElementById("mih1").innerHTML = mensajeDesencriptado;
}

function copiarAlPortapapeles() {
  let mih1 = document.getElementById("mih1");
  let texto = mih1.textContent;
  let textarea = document.createElement("textarea");
  textarea.value = texto;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  console.log("Texto copiado al portapapeles: " + texto);
}

let botonEncriptar = document.getElementById("boton-encriptar");
botonEncriptar.addEventListener("click", validar);

let botonDesencriptar = document.getElementById("boton-desencriptar");
botonDesencriptar.addEventListener("click", validarDesencriptado);
