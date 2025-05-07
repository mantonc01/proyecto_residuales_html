// Obtención de referencias a los botones y secciones
let btnQueHacemos = document.getElementById("que_Hacemos");
// let btnAtras = document.getElementById("atras");
let btnQuienesSomos = document.getElementById("quienes_somos");
let btnCompromiso = document.getElementById("compromiso");
let btnActualidad = document.getElementById("actualidad");
let btnContacto = document.getElementById("contacto");
// let btnRegistrarse = document.getElementById("registrarse");

let seccionInicial = document.getElementById("seccion_inicial");
let seccionHacemos = document.getElementById("seccion_hacemos");
let seccionSomos = document.getElementById("seccion_somos");
let seccionCompromiso = document.getElementById("seccion_compromiso");
let seccionActualidad = document.getElementById("seccion_actualidad");
let seccionContacto = document.getElementById("seccion_contacto");
// let seccionRegistrarse = document.getElementById("seccion_registrarse");

// Función genérica para mostrar una sección y ocultar las demás
function mostrarSeccion(seccionAMostrar) {
    // Lista de todas las secciones
    let secciones = [
        seccionInicial,
        seccionHacemos,
        seccionSomos,
        seccionCompromiso,
        seccionActualidad,
        seccionContacto,
        // seccionRegistrarse
    ];
    // Oculta todas las secciones
    secciones.forEach(seccion => seccion.style.display = "none");

    // Muestra la sección específica
    seccionAMostrar.style.display = "block";
}

// Funcionalidad para el botón "QUE HACEMOS"
btnQueHacemos.addEventListener("click", () => {
    mostrarSeccion(seccionHacemos);
});

// Funcionalidad para el botón "QUIENES SOMOS"
btnQuienesSomos.addEventListener("click", () => {
    mostrarSeccion(seccionSomos);
});

// Funcionalidad para el botón "COMPROMISO SOCIAL"
btnCompromiso.addEventListener("click", () => {
    mostrarSeccion(seccionCompromiso);
});

// Funcionalidad para el botón "ACTUALIDAD"
btnActualidad.addEventListener("click", () => {
    mostrarSeccion(seccionActualidad);
});

// Funcionalidad para el botón "CONTACTO"
btnContacto.addEventListener("click", () => {
    mostrarSeccion(seccionContacto);
});

// Funcionalidad para el botón "REGISTRARSE"
// btnRegistrarse.addEventListener("click", () => {
//     mostrarSeccion(seccionRegistrarse);
// });

// // Funcionalidad para el botón "ATRÁS" (en cada sección)
// btnAtras.addEventListener("click", () => {
//     mostrarSeccion(seccionInicial);
// });

// Botón Atrás universal (opción más eficiente)
document.querySelectorAll("[id^='atras_']").forEach(boton => {
    boton.addEventListener("click", () => mostrarSeccion(seccionInicial));
});

// Botón ATRÁS de "Qué Hacemos"
// let btnAtrasHacemos = document.getElementById("atras_hacemos");
// btnAtrasHacemos.addEventListener("click", () => {
//     seccionHacemos.style.display = "none";
//     seccionInicial.style.display = "block";
// });

// Botón ATRÁS de "Quiénes Somos"
// let btnAtrasSomos = document.getElementById("atras_somos");
// btnAtrasSomos.addEventListener("click", () => {
//     seccionSomos.style.display = "none";
//     seccionInicial.style.display = "block";
// });

// Botón ATRÁS de "Compromiso Social"
// let btnAtrasCompromiso = document.getElementById("atras_compromiso");
// btnAtrasCompromiso.addEventListener("click", () => {
//     seccionCompromiso.style.display = "none";
//     seccionInicial.style.display = "block";
// });

// Botón ATRÁS de "Actualidad"
// let btnAtrasActualidad = document.getElementById("atras_actualidad");
// btnAtrasActualidad.addEventListener("click", () => {
//     seccionActualidad.style.display = "none";
//     seccionInicial.style.display = "block";
// });

// Botón ATRÁS de "Contacto"
// let btnAtrasContacto = document.getElementById("atras_contacto");
// btnAtrasContacto.addEventListener("click", () => {
//     seccionContacto.style.display = "none";
//     seccionInicial.style.display = "block";
// });

// Verifica que los botones Atrás existen
// const botonesAtras = document.querySelectorAll("[id^='atras_']");
// console.log(`Se encontraron ${botonesAtras.length} botones Atrás`);

// Verifica que las secciones existen
// console.log("Secciones:", secciones);

// Botón ATRÁS de "Registrarse"
// let btnAtrasRegistrarse = document.getElementById("atras_registrarse");
// btnAtrasRegistrarse.addEventListener("click", () => {
//     seccionRegistrarse.style.display = "none";
//     seccionInicial.style.display = "block";
// });

//<!-- Inicializa el mapa -->
