//<!-- script para imágenes y botones de imágenes -->

/**
 * Script para el carrusel de imágenes
 */
let imageList = [
    'images/edar1.jpg',
    'images/edar2.jpg',
    'images/edar3.jpg',
    'images/edar4.jpg',
    'images/edar5.jpg',
    'images/edar6.jpg',
    'images/edar7.jpg',
    'images/edar8.jpg',
    'images/edar9.jpg',
    'images/edar10.jpg',
    // 'https://drive.google.com/uc?export=view&id=edar15.jpg',
];


/**
 * Índice actual de la imagen que se está mostrando en el carrusel.
 * @type {number}
 */
let currentIndex = 0; 

// Eventos de botones
/**
 * Referencia al contenedor del carrusel.
 */
let carouselContainer = document.querySelector('.carousel-images');     

/**
 * Referencia a los botones de navegación anterior.
 */
let prevButton = document.querySelector('.carousel-button.left');

/**
 * Referencia al botón de navegación siguiente.
 */
let nextButton = document.querySelector('.carousel-button.right');

// Cargar imágenes dinámicamente
/**
 * Función para cargar las imágenes en el carrusel.
 */
function loadImages() {
    imageList.forEach((src, index) => {
        let img = document.createElement('img');
        img.src = src;
        if (index === 0) img.classList.add('active'); // La primera imagen está activa
        carouselContainer.appendChild(img);
    });
}


/**
 * Función para actualizar la imagen activa en el carrusel.
 */
function updateImage() {
    let images = document.querySelectorAll('.carousel-images img');
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });
}


/**
 * Función para pasar a la siguiente imagen en el carrusel.
 * Actualiza el índice de la imagen actual y llama a la función para actualizar la imagen mostrada.
 * @returns {void}
 */
function nextImage() {
    currentIndex = (currentIndex + 1) % imageList.length;
    updateImage();
}


/**
 * Actualiza el índice de la imagen actual y llama a la función para actualizar la imagen mostrada.
 * @returns {void}
 */
function prevImage() {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    updateImage();
}

// Evento para botones
/**
 * Evento para el botón de siguiente imagen.
 * Llama a la función para pasar a la siguiente imagen.
 */
nextButton.addEventListener('click', nextImage);

/**
 * Evento para el botón de imagen anterior.
 * Llama a la función para pasar a la imagen anterior.
 */
prevButton.addEventListener('click', prevImage);

// Cambio automático cada 10 segundos
/**
 * Llama a la función para pasar a la siguiente imagen cada 10 segundos.
 * @returns {void}
 * @param {number} 10000 - Tiempo en milisegundos para el cambio automático de imagen.
 */
setInterval(nextImage, 10000);

// Cargar imágenes al inicio
/** 
 * Llama a la función para cargar las imágenes en el carrusel al cargar la página.
 * @returns {void}
 */
loadImages();