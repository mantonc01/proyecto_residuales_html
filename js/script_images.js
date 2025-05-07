//<!-- script para imágenes y botones de imágenes -->

// Lista de nombres de archivos
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
    'images/edar10.jpg'

];

// Índice actual
let currentIndex = 0; 

// Eventos de botones
let carouselContainer = document.querySelector('.carousel-images');            
let prevButton = document.querySelector('.carousel-button.left');
let nextButton = document.querySelector('.carousel-button.right');

// Cargar imágenes dinámicamente
function loadImages() {
    imageList.forEach((src, index) => {
        let img = document.createElement('img');
        img.src = src;
        if (index === 0) img.classList.add('active'); // La primera imagen está activa
        carouselContainer.appendChild(img);
    });
}

// Actualizar la imagen activa
function updateImage() {
    let images = document.querySelectorAll('.carousel-images img');
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });
}

// Función para pasar a la siguiente imagen
function nextImage() {
    currentIndex = (currentIndex + 1) % imageList.length;
    updateImage();
}

// Función para volver a la imagen anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    updateImage();
}

// Evento para botones
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Cambio automático cada 10 segundos
setInterval(nextImage, 10000);

// Cargar imágenes al inicio
loadImages();