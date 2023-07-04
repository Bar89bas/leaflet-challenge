// intializing the url for data collection

let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// intializing the map object 
let map = L.map('map', {
  center: [47, 7],
  zoom: 12,
  });   // center position + zoom

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// fetching the geojson data

d3.json(queryUrl).then(function(response) {

  console.log(response);
  features = response.features;

  let magnitudes = [];

  for (let i = 0; i < features.length; i++) {
    let location = features[i].geometry;
    if (location) {
      //console.log(location);
      magnitudes.push([location.coordinates[0], location.coordinates[1]]);
    }

  }

  let layer = L.marker(magnitudes).addTo(map);

});







