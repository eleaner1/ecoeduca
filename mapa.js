// mapa.js (para Mapbox GL JS)

document.addEventListener('DOMContentLoaded', function() {
    try {
        console.log("DOM cargado. Intentando inicializar el mapa con Mapbox GL JS...");

        // TU API KEY DE MAPBOX AQUI
        mapboxgl.accessToken = 'pk.eyJ1IjoiZWxlYW5lciIsImEiOiJjbWJncnoxeWwwMjFxMmpvbHY4MmlhODhqIn0.X0w5167XVX4-N--7mVayjg';

        // Coordenadas del centro del mapa (Managua, Nicaragua)
        const latitudCentro = 12.1364;
        const longitudCentro = -86.2514;
        const zoomInicial = 13;

        const map = new mapboxgl.Map({
            container: 'mapa', // ID del div del mapa
            style: 'mapbox://styles/mapbox/streets-v12', // Estilo de mapa 
            center: [longitudCentro, latitudCentro], // [longitud, latitud] en Mapbox
            zoom: zoomInicial // Zoom inicial
        });
        console.log("Mapa instanciado con Mapbox GL JS.");

        map.on('load', function() {
            console.log("Mapa Mapbox GL JS cargado completamente.");

            new mapboxgl.Marker()
                .setLngLat([longitudCentro, latitudCentro])
                .setPopup(new mapboxgl.Popup().setHTML('<b>¡El mapa funciona!</b><br>Ubicación de prueba.')) // add popup
                .addTo(map);
            console.log("Marcador de prueba añadido.");

            // Definición de los puntos de recolección (basureros)
            const basureros = [
                {
                    nombre: "Punto de Recolección Principal UCA",
                    lat: 12.1328,
                    lng: -86.2721,
                    info: "Punto principal de reciclaje en la Universidad Centroamericana."
                },
                {
                    nombre: "reciclaje de plasticos UNI",
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

            // Iterar sobre el array de basureros y añadir un marcador para cada uno
            basureros.forEach(basurero => {
                new mapboxgl.Marker()
                    .setLngLat([basurero.lng, basurero.lat]) // [longitud, latitud] en Mapbox
                    .setPopup(new mapboxgl.Popup().setHTML(`<b>${basurero.nombre}</b><br>${basurero.info}`))
                    .addTo(map);
            });
            console.log("Marcadores de basureros añadidos.");
        });

    } catch (error) {
        console.error("Error al inicializar el mapa Mapbox GL JS:", error);
    }
});
