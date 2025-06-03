// mapa.js
document.addEventListener('DOMContentLoaded', function() {
    try {
        console.log("DOM cargado. Intentando inicializar el mapa...");

        // Coordenadas del centro del mapa (Managua, Nicaragua)
        const latitudCentro = 12.1364;
        const longitudCentro = -86.2514;
        const zoomInicial = 13;

        // Inicializar el mapa en el div con id="mapa"
        const map = L.map('mapa').setView([latitudCentro, longitudCentro], zoomInicial);
        console.log("Mapa instanciado.");

        // Añadir una capa de tiles (el "fondo" del mapa de OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        console.log("Capa de tiles añadida.");

        // Añadir un marcador de prueba simple (puedes quitarlo si el mapa funciona bien con los basureros)
        L.marker([latitudCentro, longitudCentro]).addTo(map)
            .bindPopup('<b>¡El mapa funciona!</b><br>Ubicación de prueba.')
            .openPopup();
        console.log("Marcador de prueba añadido.");

        // Código para añadir los basureros (descomentado y corregido)
        const basureros = [
            {
                nombre: "Punto de Recolección Principal UCA",
                lat: 12.1328,
                lng: -86.2721,
                info: "Punto principal de reciclaje en la Universidad Centroamericana."
            },
            {
                nombre: "Reciclaje de Plásticos UNI",
                lat: 12.1165,
                lng: -86.2362,
                info: "Centro de acopio de plásticos en la Universidad Nacional de Ingeniería."
            },
            {
                nombre: "Punto Verde UNAN",
                lat: 12.1467,
                lng: -86.2155,
                info: "Punto de recolección en la Universidad Nacional Autónoma de Nicaragua."
            },
            {
                nombre: "Estación de Reciclaje UPOLI",
                lat: 12.1009,
                lng: -86.2625,
                info: "Estación de reciclaje en la Universidad Politécnica de Nicaragua."
            },
            {
                nombre: "Punto de Recolección PUC",
                lat: 12.1299,
                lng: -86.2840,
                info: "Punto de recolección en la Universidad Americana (UAM)."
            },
            {
                nombre: "Reciclaje El Carmen",
                lat: 12.1250,
                lng: -86.2700,
                info: "Centro de reciclaje en el barrio El Carmen."
            },
            {
                nombre: "Punto Ecológico Metrocentro",
                lat: 12.1245,
                lng: -86.2655,
                info: "Punto de recolección cerca de Metrocentro."
            },
            {
                nombre: "Basurero Modelo Linda Vista",
                lat: 12.1500,
                lng: -86.2800,
                info: "Basurero modelo con separación de residuos en Linda Vista."
            }
        ];

        basureros.forEach(basurero => {
            const marker = L.marker([basurero.lat, basurero.lng]).addTo(map);
            marker.bindPopup(`<b>${basurero.nombre}</b><br>${basurero.info}`);
        });
        console.log("Marcadores de basureros añadidos.");
        

    } catch (error) {
        console.error("Error al inicializar el mapa Leaflet:", error);
    }
});