# leaflet-challenge

Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.
<br><br>
The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.


## Level 1: Basic Visualization

#### Get Data set
The USGS provides earthquake data in a number of different formats, updated every 5 minutes. This project uses the URL of this JSON to pull in the data for our visualization. The data can be found at https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

### Import & Visualize the Data
 * Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
 * Data markers reflect the magnitude of the earthquake by their size and and depth of the earth quake by color. 
      *  Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color.
 * Include popups that provide additional information about the earthquake when a marker is clicked.
 * Has a legend that will provide context for your map data.

## Level 2: Multi-plot level

The USGS wants to plot a second data set on your map to illustrate the relationship between tectonic plates and seismic activity. Thus need to pull in a second data set and visualize it along side your original set of data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplates.

 * Plot a second data set on the map.
 * Add a number of base maps to choose from as well as separate out the two different data sets into overlays that can be turned on and off independently.
* Add layer controls to the map.


