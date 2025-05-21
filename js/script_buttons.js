// Obtención de referencias a los botones y secciones
/**
 * Obtención de referencias al botón "QUE HACEMOS".
 */
let btnQueHacemos = document.getElementById("que_Hacemos");

/**
 * Obtención de referencias al botón "QUIENES SOMOS".
 */
let btnQuienesSomos = document.getElementById("quienes_somos");

/**
 * Obtención de referencias al botón "COMPROMISO SOCIAL".
 */
let btnCompromiso = document.getElementById("compromiso");

/**
 * Obtención de referencias al botón "ACTUALIDAD".
 */
let btnActualidad = document.getElementById("actualidad");

/**
 * Obtención de referencias al botón "CONTACTO".
 */
let btnContacto = document.getElementById("contacto");




/**
 * Obtención de referencia a la sección inicial.
 * @type {HTMLElement}
 */
let seccionInicial = document.getElementById("seccion_inicial");

/**
 * Obtención de referencia a la sección "QUE HACEMOS".
 * @type {HTMLElement}
 */
let seccionHacemos = document.getElementById("seccion_hacemos");

/**
 * Obtención de referencia a la sección "QUIENES SOMOS".
 * @type {HTMLElement}
 */
let seccionSomos = document.getElementById("seccion_somos");

/**
 * Obtención de referencia a la sección "COMPROMISO SOCIAL".
 * @type {HTMLElement}
 */
let seccionCompromiso = document.getElementById("seccion_compromiso");

/**
 * Obtención de referencia a la sección "ACTUALIDAD".
 * @type {HTMLElement}
 */
let seccionActualidad = document.getElementById("seccion_actualidad");

/**
 * Obtención de referencia a la sección "CONTACTO".
 * @type {HTMLElement}
 */
let seccionContacto = document.getElementById("seccion_contacto");
// let seccionRegistrarse = document.getElementById("seccion_registrarse");


/**
 * Función genérica para mostrar una sección y ocultar las demás.
 * @param {*} seccionAMostrar entidad de la sección a mostrar.
 */
function mostrarSeccion(seccionAMostrar) {
    // Lista de todas las secciones
    let secciones = [
        seccionInicial,
        seccionHacemos,
        seccionSomos,
        seccionCompromiso,
        seccionActualidad,
        seccionContacto,
    ];
    // Oculta todas las secciones
    secciones.forEach(seccion => seccion.style.display = "none");

    // Muestra la sección específica
    seccionAMostrar.style.display = "block";
}


/**
 * Funcionalidad para el botón "QUE HACEMOS"
 */
btnQueHacemos.addEventListener("click", () => {
    mostrarSeccion(seccionHacemos);
});


/**
 * Funcionalidad para el botón "QUIENES SOMOS"
 */
btnQuienesSomos.addEventListener("click", () => {
    mostrarSeccion(seccionSomos);
});


/**
 * Funcionalidad para el botón "COMPROMISO SOCIAL"
 */
btnCompromiso.addEventListener("click", () => {
    mostrarSeccion(seccionCompromiso);
});


/**
 * Funcionalidad para el botón "ACTUALIDAD"
 */
btnActualidad.addEventListener("click", () => {
    mostrarSeccion(seccionActualidad);
});


/**
 * Funcionalidad para el botón "CONTACTO"
 */
btnContacto.addEventListener("click", () => {
    mostrarSeccion(seccionContacto);
});



/**
 * Funcionalidad para el botón "ATRÁS" (en cada sección)
 */
document.querySelectorAll("[id^='atras_']").forEach(boton => {
    boton.addEventListener("click", () => mostrarSeccion(seccionInicial));
});


