Overview: This research project visualizes the earthquake data which is a massive amount of data from all over the world each day so that the government and public are well educated and aware regarding the health of our ecosystems. UNITED STATES GEOLOGICAL SURVEY is providing scientific data about natural hazards, the health of our ecosystems and environment, and the impact of climate and land-use change. 
Scope: This report focuses on visualizing the earthquake data from all over the world including its magnitude, depth and tectonic plates.
Methodology: 
1.	Getting the dataset from past seven data - earthquake https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
2.	Importing the dataset – D3 module 
3.	Creating a base map based on their longitude and latitude. 
i.	Marker reflecting the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with the higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in colour.
ii.	Popups included that will provide the additional information about the earthquake when the circle is clicked.
iii.	Adding legend which will provide context for map.

4.	Adding overlays on map - second dataset to illustrate the relationship between tectonic plates and seismic activity
https://github.com/fraxen/tectonicplates
i.	Tectonic plates dataset on the map
ii.	Adding base maps to choose from
iii.	Separate overlays that can be turned on and off independently. 
iv.	Adding layer controls to map.

Conclusion: This map will help general public and government to visualize the earthquake information from all over world – past seven days.

