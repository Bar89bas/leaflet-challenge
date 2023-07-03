// intializing the url for data collection

let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// fetching the geojson data

d3.json(queryUrl).then(function(data) {
  console.log(data);
  createFeature(data.features);
});

// Add a tile to the map = a background. Comes from OpenStreetmap
let  earthquakeMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 6,
    });


// intializing the map object 
let map = L.map('map', {
  center: [47, 2],
  zoom: 12,
  layers: [earthquakeMap]
  });   // center position + zoom

// create a layer control, and pass it baseMaps and overlayMap. Adding the layers to the map

L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(map);


// create a baseMaps objects to hold the streetmap layer

let baseMaps = {
  "EartheQuake": earthquakeMap

};


// create an overlaysMaps object to hold the magnitude marker layers
let overlayMaps = {};

function createMarkers(features){

  // pulling the cordinates from the features
  let magnitude = features.geometry.coordinates;

  // Initialize an array to hold magnitude markers
  let magMarkers =[];

  // looping through the array.
  for(let i=0; i < features.length; i++){
    let magnitudes = features[i].geometry.coordinates;
     
    let magMarker = L.markers([features[i].geometry.coordinates, features[i].geometry.coordinates])
                     .bindPopup("<h3> Magnitude: " + magnitude + "</h3>");

    magMarkers.push(magMarker);
}

// Add the magMarkers layer to overlayMaps
overlayMaps.Magnitude = L.layerGroup(magMarkers);

// Add the overlayMaps to the layer control
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(map);
}
