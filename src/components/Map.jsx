import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

import markerIcon from "../assets/icon-location.svg";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const Map = ({ coordinates }) => {
  //   useEffect(() => {
  //     const map = L.map("map").setView([51.505, -0.09], 13);

  //     // ... Other map initialization code ...

  //     L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //       maxZoom: 19,
  //       attribution:
  //         '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //     }).addTo(map);

  //     var circle = L.circle([51.508, -0.11], {
  //       color: "red",
  //       fillColor: "#f03",
  //       fillOpacity: 0.5,
  //       radius: 500,
  //     }).addTo(map);

  //     return () => {
  //       map.remove();
  //     };
  //   }, []);
  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default Map;
