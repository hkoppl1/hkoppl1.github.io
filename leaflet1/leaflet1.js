let myLeaf = L.map('leaflet1').setView([47.252931, 2.461270], 5)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(myLeaf)
let parisPoint = L.marker([48.85, 2.35]).addTo(myLeaf)
let myTriangle = L.polygon([
  [49.4432, 1.1000],
  [48.1173, -1.6778],
  [47.399706, .0772171]
]).addTo(myLeaf);
var latlngs = [
    [45.745805, 4.848651],
    [44.816069, -0.560720]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(myLeaf);

parisPoint.bindPopup('Paris, France')
myTriangle.bindPopup('Rouen, Rennes, and Tours')
polyline.bindPopup('Lyon to Bordeaux')
