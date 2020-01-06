const api_url = 'https://data.baltimorecity.gov/resource/qqcv-ihn5.json'

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json(); 
    console.log(data);

    // create a list item for each element from JSON data
    data.forEach(function (item) {
        var list = document.createElement('li');
    
        // define elements to be created by function
        var header = document.createElement('h2');
        var neighborhoodHeader = document.createElement('h3');
        var neighborhood = document.createElement('p');
        var dateHeader = document.createElement('h3');
        var date = document.createElement('p');
        var link = document.createElement('a');

        // define data that will be assigned to elements
        header.textContent = item.buildingaddress;
        neighborhoodHeader.textContent = 'Neighborhood';
        neighborhood.textContent = item.neighborhood;
        dateHeader.textContent = 'Date Recorded';
        date.textContent = item.noticedate;
        link.textContent = 'See more detials';
        // create url with dynamic id for routing
        link.setAttribute('href', 'locations/' + item.referenceid.replace(/\s/g, ""));
        
        // append elements to list
        list.appendChild(header);
        list.appendChild(neighborhoodHeader);
        list.appendChild(neighborhood);
        list.appendChild(dateHeader);
        list.appendChild(date);
        list.appendChild(link);
    
        // append list within document structure
        var doc = document.querySelector('#results');
        doc.appendChild(list);
    });


}

getData();