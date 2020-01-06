console.log(id);

const api_url = 'https://data.baltimorecity.gov/resource/qqcv-ihn5.json'

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json(); 
    console.log(data);

    // remove spaces from referenceid to match with id
    data.forEach(function (item) {
        item.referenceid = item.referenceid.replace(/\s/g, "");
    });

    // filter array to match on referenceid
    data_filter = data.filter( item => item.referenceid == id);

    console.log(data_filter);
    var list = document.createElement('ul');

    // define elements to be created by function
    var header = document.createElement('h2');
    var neighborhoodHeader = document.createElement('h3');
    var neighborhood = document.createElement('p');
    var dateHeader = document.createElement('h3');
    var date = document.createElement('p');
    
    // define data that will be assigned to elements
    header.textContent = data_filter[0].buildingaddress;
    neighborhoodHeader.textContent = 'Neighborhood';
    neighborhood.textContent = data_filter[0].neighborhood;
    dateHeader.textContent = 'Date Recorded';
    date.textContent = data_filter[0].noticedate;

    // append elements to list
    list.appendChild(header);
    list.appendChild(neighborhoodHeader);
    list.appendChild(neighborhood);
    list.appendChild(dateHeader);
    list.appendChild(date);

    // append list within document structure
    var doc = document.querySelector('#location-metadata');
    doc.appendChild(list);

    return data_filter;

}

getData().then(val => {
    // get lat/lon, define as numeric array, add marker to map 
    var coordinates = [val[0].location.latitude, val[0].location.longitude];
    coordinates[0] = parseFloat(coordinates[0]);
    coordinates[1] = parseFloat(coordinates[1]);
    L.marker(coordinates).addTo(map);
})
.catch(err => console.error(err));

