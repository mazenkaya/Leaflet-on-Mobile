var map = L.map("map").setView([30, 15], 9);
var tileLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "Open Street Map"
}).addTo(map);


