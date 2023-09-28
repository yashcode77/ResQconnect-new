import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoiZGhydXZjNzciLCJhIjoiY2xtbDEzY3NnMDc1aDJqcGdzZnk5eTQ0ZSJ9._pO069NGf3DrLP5x1Bhz9Q';

const agenciesData = [
  {
    id: 1,
    name: 'Agency A',
    agencyType: 'Fire',
    location: 'Mumbai',
    resources: 5,
    coordinates: [72.877655, 19.075983], // Mumbai coordinates
  },
  {
    id: 2,
    name: 'Agency B',
    agencyType: 'Police',
    location: 'Delhi',
    resources: 8,
    coordinates: [77.2295, 28.6139], // Delhi coordinates
  },
  // Add more agency data as needed
];

const initialFilter = {
  agencyType: 'all',
  location: 'all',
  minResources: 0,
};

function MapComponent() {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [filter, setFilter] = useState(initialFilter);

  useEffect(() => {
    const initializeMap = () => {
      const newMap = new mapboxgl.Map({
        container: 'map-container',
        style: 'mapbox://styles/mapbox/light-v10', // Replace with your desired map style
        center: [78.9629, 20.5937], // Initial map center (India)
        zoom: 5, // Initial zoom level
      });

      newMap.on('load', () => {
        setMap(newMap);
        initializeMarkers(newMap);
      });
    };

    initializeMap();
  }, []);

  const initializeMarkers = (map) => {
    const agencyMarkers = agenciesData.map((agency) => {
      const marker = new mapboxgl.Marker({
        color: agency.agencyType === 'Fire' ? 'red' : 'blue', // Marker color based on agency type
      });

      marker
        .setLngLat(agency.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(agency.name))
        .addTo(map);

      return { marker, agency };
    });

    setMarkers(agencyMarkers);
  };

  useEffect(() => {
    // Filter markers based on the filter criteria
    const filteredMarkers = markers.filter((marker) => {
      const { agencyType, location, resources } = filter;
      const agency = marker.agency;

      if (agencyType !== 'all' && agency.agencyType !== agencyType) {
        return false;
      }

      if (location !== 'all' && agency.location !== location) {
        return false;
      }

      if (resources > 0 && agency.resources < resources) {
        return false;
      }

      return true;
    });

    // Hide all markers
    markers.forEach((marker) => marker.marker.remove());

    // Show filtered markers
    filteredMarkers.forEach((marker) => marker.marker.addTo(map));
  }, [filter, markers, map]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div>
      {/* Filter Panel */}
      <div className="filter-panel">
        {/* Agency Type */}
        <select
          name="agencyType"
          value={filter.agencyType}
          onChange={handleFilterChange}
        >
          <option value="all">All Agency Types</option>
          <option value="Fire">Fire Department</option>
          <option value="Police">Police Department</option>
          {/* Add more agency type options here */}
        </select>

        {/* Location */}
        <select
          name="location"
          value={filter.location}
          onChange={handleFilterChange}
        >
          <option value="all">All Locations</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          {/* Add more location options here */}
        </select>

        {/* Minimum Resources */}
        <input
          type="number"
          name="minResources"
          value={filter.minResources}
          onChange={handleFilterChange}
          placeholder="Minimum Resources"
        />
      </div>

      {/* Map Container */}
      <div id="map-container" style={{ width: '100%', height: '600px' }}></div>
    </div>
  );
}

export default MapComponent;
