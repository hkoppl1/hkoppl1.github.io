let myLeaf = L.map('leaflet1').setView([32.18, -99.14], 4)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(myLeaf)
let parisPoint = L.marker([48.85, 2.35]).addTo(myLeaf)
let myTriangle = L.polygon([
  [49.4432, 1.1000],
  [48.1173, -1.6778],
  [47.3941, .06848]
]).addTo(myLeaf);

parisPoint.bindPopup('Paris, France')
myTriangle.bindPopup('Rouen, Rennes, and Tours')
