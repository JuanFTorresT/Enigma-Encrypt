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

/* 
  La funcion validar recibe el valor dado por el usuario y verifica con la exprecion regular regexp que no exitan letras mayusculas
  ni acentos en el string, en caso de ser verdadero no encripta el mensaje y cambia el estilo de las reglas a color rojo 
*/

function validar() {
  let mensajeinicial = document.getElementById("mensaje").value;
  let regexp = /[A-ZáéíóúÁÉÍÓÚñÑüÜ]/;
  if (regexp.exec(mensajeinicial)) {
    let regla = document.getElementById("reglas");
    regla.style.color = "red";
  } else {
    let mensajeEncriptado = encriptar(mensajeinicial);
    let imagen = document.getElementById("antes-respuesta");
    let respuestaencriptado = document.getElementById("mih1");
    let botonCopia = document.getElementById("boton-copia");
    let regla = document.getElementById("reglas");
    regla.style.color = "#868E96";
    imagen.style.display = "none";
    respuestaencriptado.style.display = "block";
    console.log("Mensaje encriptado:", mensajeEncriptado);
    document.getElementById("mih1").innerHTML = mensajeEncriptado;
    botonCopia.style.display = "block";
    document.getElementById("respuesta").scrollIntoView();
  }
}

function validarDesencriptado() {
  let mensajeinicial = document.getElementById("mensaje").value;
  let regexp = /[A-ZáéíóúÁÉÍÓÚñÑüÜ]/;
  if (regexp.exec(mensajeinicial)) {
    let regla = document.getElementById("reglas");
    regla.style.color = "red";
  } else {
    let mensajeDesencriptado = desencriptar(mensajeinicial);
    console.log("Mensaje encriptado:", mensajeDesencriptado);
    document.getElementById("mih1").innerHTML = mensajeDesencriptado;
    /*-------------------------*/
    let regla = document.getElementById("reglas");
    regla.style.color = "#868E96";
    imagen.style.display = "none";
    document.getElementById("respuesta").scrollIntoView();
  }
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
  let textoBotonCopia = document.getElementById("boton-copia");
  textoBotonCopia.innerHTML = "¡Texto copiado!";
  textoBotonCopia.style.color = "#90E800";
  textoBotonCopia.style.borderColor = "#90E800";
  textoBotonCopia.style.fontWeight = "700";
  setTimeout(function () {
    textoBotonCopia.innerHTML = "Copiar";
    textoBotonCopia.style.color = "#C5C5C5";
    textoBotonCopia.style.borderColor = "#C5C5C5";
  }, 1000);

  console.log("Texto copiado al portapapeles: " + texto);
  document.getElementById("logo").scrollIntoView();
}

let botonEncriptar = document.getElementById("boton-encriptar");
botonEncriptar.addEventListener("click", validar);

let botonDesencriptar = document.getElementById("boton-desencriptar");
botonDesencriptar.addEventListener("click", validarDesencriptado);
