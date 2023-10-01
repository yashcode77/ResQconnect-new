import React, { useRef, useEffect, useState } from 'react';

const GoogleMap = ({ agencies }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (!map) {
      const googleMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 20, lng: 0 }, // Default center of the map
        zoom: 2, // Default zoom level
      });
      setMap(googleMap);
    }

    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));

    // Create new markers for agencies
    const newMarkers = agencies.map(agency => {
      const marker = new window.google.maps.Marker({
        position: { lat: agency.latitude, lng: agency.longitude }, // Replace latitude and longitude with actual properties of the agency object
        map: map,
        title: agency.name, // Agency name as marker title
      });

      return marker;
    });

    setMarkers(newMarkers);
  }, [agencies, map]);

  return <div ref={mapRef} style={{ height: '500px', width: '100%' }}></div>;
};

export default GoogleMap;
