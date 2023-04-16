function encriptar(mensaje){
    encriptado = mensaje.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    return (encriptado);
}

function validar() {
    let mensajeinicial = document.getElementById("mensaje").value;
    let mensaje = mensajeinicial.toLowerCase();
    let mensajeEncriptado = encriptar(mensaje);
    let imagen = document.getElementById("antes-respuesta");
    imagen.style.display= "none";
    let respuestaencriptado = document.getElementById("mih1");
    respuestaencriptado.style.display = "block";
    console.log('Mensaje encriptado:', mensajeEncriptado);
    document.getElementById("mih1").innerHTML = mensajeEncriptado;
    let botonCopia = document.getElementById("boton-copia");
    botonCopia.style.display = "block";
}

function desencriptar(mensaje) {
    desencriptado = mensaje.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    return desencriptado;
}

function validarDesencriptado() {
    let mensajeinicial = document.getElementById("mensaje").value;
    let mensaje = mensajeinicial.toLowerCase();
    let mensajeDesencriptado = desencriptar(mensaje);
    console.log('Mensaje encriptado:', mensajeDesencriptado);
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


let botonEncriptar = document.getElementById('boton-encriptar');
botonEncriptar.addEventListener('click', validar);

let botonDesencriptar = document.getElementById("boton-desencriptar");
botonDesencriptar.addEventListener("click", validarDesencriptado);




  
  
  
  






/*
    function encriptar(mensaje) {


        arreglo = mensaje.split("");

            for (let i = 0; i < arreglo.length; i++) {
                
                if (arreglo[i] == "o") {
                    arreglo[i] = "ober";
                    console.log(arreglo)
                }

                if (arreglo[i] == "a") {
                    arreglo[i] = "ai";
                    console.log(arreglo)
                }

                if (arreglo[i] == "e") {
                    arreglo[i] = "enter";
                    console.log(arreglo)
                }

                if (arreglo[i] == "i") {
                    arreglo[i] = "imes";
                    console.log(arreglo)
                }

                if (arreglo[i] == "u") {
                    arreglo[i] = "ufat";
                    console.log(arreglo)
                }
                

                
                
            }


        encriptado = arreglo.join("");

        return encriptado

    }

*/





