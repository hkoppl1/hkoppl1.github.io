let myLeaf = L.map('leaflet1').setView([47.252931, 2.461270], 4)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(myLeaf)
let parisPoint = L.marker([48.85, 2.35]).addTo(myLeaf)
let myTriangle = L.polygon([
  [49.4432, 1.1000],
  [48.1173, -1.6778],
  [47.399706, .0772170]
]).addTo(myLeaf);

parisPoint.bindPopup('Paris, France')
myTriangle.bindPopup('Rouen, Rennes, and Tours')
