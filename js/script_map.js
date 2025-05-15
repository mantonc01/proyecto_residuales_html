//<!-- Inicializa el mapa -->
/**
 * Función para inicializar el mapa y agregar marcadores.
 * @returns {void}
 */
let map = L.map('map').setView([40.083, -6.42], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
}).addTo(map);

// Añadir título "Mapa de ubicaciones" en la esquina superior izquierda
// 1. Crear el control personalizado
const titleControl = L.control({ position: 'topright' });

// 2. Definir su contenido con .onAdd()
titleControl.onAdd = function() {
    const div = L.DomUtil.create('div', 'map-title');
    div.innerHTML = 'Ubicaciones de las EDAR,s Valle del Alagón';
    div.style.cssText = `
        padding: 5px 10px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 4px;
        font-weight: bold;
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
    `;
    return div;
};

// 3. Añadir el control al mapa
titleControl.addTo(map);

/**
 * Función para agregar marcadores al mapa.
 * @returns {void}
 */
L.marker([40.144, -6.32]).addTo(map)
    .bindPopup('<b>E.D.A.R. Aceituna</b><br><a href="https://www.google.com/maps?q=40.145011, -6.326737" target="_blank">Ver en Google Maps</a>');
//.openPopup();

/**
 * Función para agregar marcadores al mapa.
 * @returns {void}
 */
L.marker([40.083, -6.42]).addTo(map)
    .bindPopup('<b>E.D.A.R. Guijo de Galisteo</b><br><a href="https://www.google.com/maps?q=40.083892, -6.421987" target="_blank">Ver en Google Maps</a>');

/**
 * Función para agregar marcadores al mapa.
 * @returns {void}
 */
L.marker([40.005, -6.39]).addTo(map)
    .bindPopup('<b>E.D.A.R. Morcillo</b><br><a href="https://www.google.com/maps?q=40.005826, -6.398077" target="_blank">Ver en Google Maps</a>');

/**
 * Función para agregar marcadores al mapa.
 * @returns {void}
 */
L.marker([39.950, -6.38]).addTo(map)
    .bindPopup('<b>E.D.A.R. El Batán</b><br><a href="https://www.google.com/maps?q=39.950077, -6.386069" target="_blank">Ver en Google Maps</a>');

/**
 * Función para agregar marcadores al mapa.
 * @returns {void}
 */
L.marker([39.975, -6.27]).addTo(map)
    .bindPopup('<b>E.D.A.R. Galisteo</b><br><a href="https://www.google.com/maps?q=39.975588,-6.276577" target="_blank">Ver en Google Maps</a>');