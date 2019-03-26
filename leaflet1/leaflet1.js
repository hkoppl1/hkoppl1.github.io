let myLeaf = L.map('leaflet1').setView([32.18, -99.14], 4)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(myLeaf)
let franceLine = L.line ([
  [45.745805, 4.848651],
  [44.816069, -0.560720]
 ]).addTo(myLeaf)
let parisPoint = L.marker([48.85, 2.35]).addTo(myLeaf)
let myTriangle = L.polygon([
  [49.4432, 1.1000],
  [48.099895, -1.670517],
  [47.408520, .0691696]
]).addTo(myLeaf);

franceLine.bindPopup('Lyon to Bordeaux')
parisPoint.bindPopup('Paris, France')
myTriangle.bindPopup('Rouen, Rennes, and Tours')
