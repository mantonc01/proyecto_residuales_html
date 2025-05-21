/**
 * Script para mostrar un mensaje alternativo si el iframe no carga correctamente.
 */
const iframe = document.getElementById("iframe_somos");

/**
 * Función para mostrar un mensaje alternativo si el iframe no carga correctamente.
 */
const fallback = document.getElementById("alternativo_somos");

/**
 * Función para mostrar el iframe y ocultar el mensaje alternativo.
 * Se ejecuta cuando el iframe se carga correctamente.
 */
iframe.onerror = function () {
    iframe.style.display = "none";
    fallback.style.display = "block";
};

// Descomentar si se quiere usar un timeout por si queda en carga infinita
// setTimeout(() => {
//     if (!iframe.contentDocument || iframe.contentDocument.body.innerHTML.trim() === "") {
//         iframe.style.display = "none";
//         fallback.style.display = "block";
//     }
// }, 20000); // Espera 20 segundos antes de mostrar el mensaje
