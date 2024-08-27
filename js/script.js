// Selección de elementos del DOM
const ingresoTexto = document.getElementById("ingresoTexto");
const encriptarBtn = document.getElementById("encriptarBtn");
const desencriptarBtn = document.getElementById("desencriptarBtn");
const copiarBtn = document.getElementById("copiarBtn");
const mensajeFinal = document.getElementById("mensajeFinal");
const imagenEncriptador = document.getElementById("imagenEncriptador"); // Selecciona la imagen
const textoInfo = document.getElementById("textoInfo"); // Selecciona el texto adicional

// Función para encriptar el texto
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Evento al hacer clic en el botón "Encriptar"
encriptarBtn.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto.trim() === "") {
        alert("Por favor, ingrese algún texto para encriptar.");
        return;
    }
    
    const textoEncriptado = encriptarTexto(texto);
    mensajeFinal.textContent = textoEncriptado;
    copiarBtn.classList.remove("oculto");

    // Oculta la imagen y el texto informativo
    imagenEncriptador.style.display = "none";
    textoInfo.style.display = "none";
});

// Evento al hacer clic en el botón "Desencriptar"
desencriptarBtn.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto.trim() === "") {
        alert("Por favor, ingrese algún texto para desencriptar.");
        return;
    }
    
    const textoDesencriptado = desencriptarTexto(texto);
    mensajeFinal.textContent = textoDesencriptado;
    copiarBtn.classList.remove("oculto");

    // Oculta la imagen y el texto informativo
    imagenEncriptador.style.display = "none";
    textoInfo.style.display = "none";
});

// Evento al hacer clic en el botón "Copiar"
copiarBtn.addEventListener("click", () => {
    const texto = mensajeFinal.textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
});


// Mostrar la imagen y el texto cuando se presiona el botón "Desencriptar"
desencriptarBtn.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto.trim() === "") {
        alert("Por favor, ingrese algún texto para desencriptar.");
        return;
    }
    
    const textoDesencriptado = desencriptarTexto(texto);
    mensajeFinal.textContent = textoDesencriptado;
    copiarBtn.classList.remove("oculto");

    // Mostrar la imagen y el texto nuevamente
    imagenEncriptador.style.display = "block";
    textoInfo.style.display = "block";
});
