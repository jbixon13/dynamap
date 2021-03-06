var map = L.map('map').setView([39.29, -76.61], 11);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(map);

const boundaryStyle = {
    'color': 'black',
    'weight': 2,
    'fillOpacity': 0, 
    'opacity': 0.7
}

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://opendata.arcgis.com/datasets/369b982f1da842aebc04c685776d26c1_0.geojson');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.responseType = 'json';
xhr.onload = function() {
    if (xhr.status !== 200) return
    L.geoJSON(xhr.response, {
        style: boundaryStyle
    }).addTo(map);
};
xhr.send();

// L.marker( data_filter[0].location).addTo(map);