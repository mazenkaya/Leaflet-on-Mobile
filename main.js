var map = L.map("map").setView([51.505, -0.09], 13);
var tileLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "Open Street Map"
}).addTo(map);

map.locate({
  setView: true,
  maxZoom: 19
});

function onLocationFound(e) {
  var radius = e.accuracy;

  L.marker(e.latlng).addTo(map)
   .bindPopup("You are within " + radius + " from this point").openPopup();

  L.circle(e.latlng, radius).addTo(map);
};

map.on("locationfound", onLocationFound);
