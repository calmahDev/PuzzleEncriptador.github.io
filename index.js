
function encriptarTexto(texto) {
    return texto.replace(/e/g, "enter") 
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function desencriptarTexto(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}


// Función para verificar el texto y alternar la visibilidad de los divs
function verificarTexto(){
    var infoArea = document.getElementById("infoArea");
    var encriptarDiv = document.getElementById("Encriptar");
    var texto = textoTextarea.value.trim();

    if(texto === ""){
        infoArea.style.display = "block";
        encriptarDiv.style.display = "none";
    } else {
        encriptarDiv.style.display = "block";
        infoArea.style.display = "none";
    }
}

// Referencias a los elementos del DOM
var botonEncriptar = document.getElementById("BtnEncriptar");
var botonDesencriptar = document.getElementById("BtnDesencriptar");
var botonCopiar = document.getElementById("BtnCopiar");
var textoTextarea = document.getElementById("textarea");

// Inicialización de la visibilidad de los divs al cargar la página
verificarTexto();

// Evento input para verificar el texto cada vez que cambie
textoTextarea.addEventListener("input", verificarTexto);

// Evento click para el botón de encriptar
botonEncriptar.addEventListener("click", function() {
    var texto = textoTextarea.value;
    var inputResultado = document.getElementById("Resultado");
    inputResultado.value = encriptarTexto(texto);
    verificarTexto(); // Actualizar la visibilidad de los divs
});

// Evento click para el botón de desencriptar
botonDesencriptar.addEventListener("click", function() {
    var texto = textoTextarea.value;
    var inputResultado = document.getElementById("Resultado");
    inputResultado.value = desencriptarTexto(texto);
    verificarTexto(); // Actualizar la visibilidad de los divs
});

// Evento click para el botón de copiar
botonCopiar.addEventListener("click", function() {
    var inputResultado = document.getElementById("Resultado");
    inputResultado.select();
    document.execCommand("copy");
});
// Deshabilitar la edicion del resultado
document.getElementById('Resultado').readOnly = true;
