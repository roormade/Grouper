import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import styled from 'styled-components';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

const MapContainer = styled.div`
  position: relative;
`

// import 'https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css';

const Mapbox = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWlobiIsImEiOiJjbGdoZHNlZjYwMDhkM2VwNmd3bW1wNzd5In0._DT_TeWGHA9dppRpcEFj2Q';
    const map = new mapboxgl.Map({
      container: 'map',
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-80.2102838356967,25.903421350849186],
      zoom: 10,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken
      }),
      'top-right'
    );
  }, []);

  return (
    <MapContainer>
      <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '80vw', height: '80vh' }}></div>
    </MapContainer>
  );
};

export default Mapbox;
