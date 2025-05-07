//<!-- Inicializa el mapa -->

let map = L.map('map').setView([40.083, -6.42], 9);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
}).addTo(map);

L.marker([40.144, -6.32]).addTo(map)
    .bindPopup('<b>E.D.A.R. Aceituna</b><br><a href="https://www.google.com/maps?q=40.145011, -6.326737" target="_blank">Ver en Google Maps</a>');
//.openPopup();

L.marker([40.083, -6.42]).addTo(map)
    .bindPopup('<b>E.D.A.R. Guijo de Galisteo</b><br><a href="https://www.google.com/maps?q=40.083892, -6.421987" target="_blank">Ver en Google Maps</a>');

L.marker([40.005, -6.39]).addTo(map)
    .bindPopup('<b>E.D.A.R. Morcillo</b><br><a href="https://www.google.com/maps?q=40.005826, -6.398077" target="_blank">Ver en Google Maps</a>');

L.marker([39.950, -6.38]).addTo(map)
    .bindPopup('<b>E.D.A.R. El Batán</b><br><a href="https://www.google.com/maps?q=39.950077, -6.386069" target="_blank">Ver en Google Maps</a>');

L.marker([39.975, -6.27]).addTo(map)
    .bindPopup('<b>E.D.A.R. Galisteo</b><br><a href="https://www.google.com/maps?q=39.975588,-6.276577" target="_blank">Ver en Google Maps</a>');