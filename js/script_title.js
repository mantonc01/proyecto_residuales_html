//Obtención de referencia al título
/**
 * Función para mostrar una sección y ocultar las demás.
 */
const titulo = document.getElementById("titulo");


/**
 * Funcionalidad para el título "EDARS VALLE DEL ALAGÓN"
 * Función para mostrar una sección y ocultar las demás.
 * @param {HTMLElement} seccion - La sección a mostrar.
 * @returns {void}
 */
titulo.addEventListener("click", () => {
    mostrarSeccion(seccionInicial);
});