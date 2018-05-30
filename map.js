mapboxgl.accessToken = ACCESS_TOKEN;
const fujitsu = [-71.306222, 46.830545];
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: fujitsu,
    zoom: 15
});

map.on('load', function () {
    // Add zoom/compass 
    map.addControl(new mapboxgl.NavigationControl());


})