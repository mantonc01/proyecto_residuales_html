const iframe = document.getElementById("iframe_somos");
const fallback = document.getElementById("alternativo_somos");

iframe.onerror = function () {
    iframe.style.display = "none";
    fallback.style.display = "block";
};

// También opcionalmente puedes usar un timeout por si queda en carga infinita
// setTimeout(() => {
//     if (!iframe.contentDocument || iframe.contentDocument.body.innerHTML.trim() === "") {
//         iframe.style.display = "none";
//         fallback.style.display = "block";
//     }
// }, 20000); // Espera 20 segundos antes de mostrar el mensaje

// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Activa los tooltips en toda la página

//   document.addEventListener('DOMContentLoaded', function () {
//     const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
//     tooltipTriggerList.forEach(function (tooltipTriggerEl) {
//       new bootstrap.Tooltip(tooltipTriggerEl);
//     });
//   });
