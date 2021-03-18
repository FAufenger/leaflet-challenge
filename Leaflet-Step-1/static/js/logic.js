// url for past 7 Days of earthquakes
earthquake7url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';
// url for past 30 days of Earthquakes
earthquake30url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson';


function createMap(earthquakes) {

    // Create the tile layer that will be the background of our map
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "light-v10",
        accessToken: API_KEY
    });

    // Create a baseMaps object to hold the lightmap layer
    var baseMaps = {
        "Light Map": lightmap
    };

      // Create an overlayMaps object to hold the bikeStations layer
    var overlayMaps = {
        "Earthquakes": earthquakes
    };

    // Create the map object with options
    var map = L.map("map-id", {
        center: [15.62, -12.42],
        zoom: 2.4,
        layers: [lightmap, earthquakes]
    });

    // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(map);
}

function createMarkers(response) {

  // Pull the "Quakes" property off of response.data(features)
   var quakeFeatures = response.features;

  // Initialize an array to hold earthquake markers
  var earthquakeMarkers = [];

  // Loop through the stations array
  for (var index = 0; index < quakeFeatures.length; index++) {
    var features = quakeFeatures[index];
    // To pull list of coordinates from coord list
    var coordList = features.geometry.coordinates;
    // For each latitude and longitude, create a marker and bind a popup with the data
    var earthquakeMark = L.marker(coordList.slice(0, 2).reverse())
        .bindPopup("<h3>" + features.properties.place + "<h3><h3>Magnitude: " + features.properties.mag + "</h3>");

    //console.log(features.geometry.coordinates);
    //console.log(features.geometry.coordinates[1]);
    //console.log(features)
    //console.log(coordList.slice(0, 2));
    // Add the marker to the bikeMarkers array
    earthquakeMarkers.push(earthquakeMark);
  };

  console.log(earthquakeMarkers);
  // Create a layer group made from the bike markers array, pass it into the createMap function
  createMap(L.layerGroup(earthquakeMarkers));
}


// Perform an API call to the EarthQuake API to get information. Call createMarkers when complete
d3.json(earthquake7url, createMarkers);

/*
    // GeoJSON layer
    L.geoJson(data, {
        // Maken cricles
        pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng);
        },
        // cirecle style
        style: styleInfo,
        // popup for each marker
        onEachFeature: function(feature, layer) {
          layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
        }
      }).addTo(myMap);
*/