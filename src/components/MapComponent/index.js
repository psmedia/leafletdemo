"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = ({ data, initialZoom }) => {
  // console.log(data);
  const lats = data.map((d) => d.lat);
  const longs = data.map((d) => d.long);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLong = Math.min(...longs);
  const maxLong = Math.max(...longs);
  // console.log(minLat, maxLat, minLong, maxLong);
  return (
    <div style={{ width: 800, height: 600 }}>
      <MapContainer
        center={[(minLat + maxLat) / 2, (minLong + maxLong) / 2]}
        zoom={initialZoom}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((d, index) => (
          <Marker position={[d.lat, d.long]} key={index}>
            <Popup>
              <strong>{d.name}</strong>
              <br />
              <em>{d.type}</em>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
