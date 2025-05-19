/**
 * Chatbot script for Botpress
 * Comentado para evitar abrir el chatbot al cargar la página
 * @returns {void}
 */
window.botpress.on("webchat:ready", () => {
    // window.botpress.open();
});

/**
 * Función para abrir el chatbot al hacer clic en el botón
 * @returns {void}
 */
window.botpress.init({
    "botId": "53cb9aaf-049c-4e84-8d35-ca4c9ef5d304",
    "configuration": {
        "botName": "Chat bot de residuales",
        "botDescription": "Que dudas tienes....?",
        "website": {},
        "email": {},
        "phone": {},
        "termsOfService": {},
        "privacyPolicy": {},
        "color": "#5eb1ef",
        "variant": "soft",
        "themeMode": "light",
        "fontFamily": "inter",
        "radius": 1,
        "allowFileUpload": false
    },
    "clientId": "a21710a5-8a4c-48a4-a18b-472505f89fba",
    "selector": "#webchat"
});