let myLeaf = L.map('leaflet1').setView([32.18, -99.14], 4)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(myLeaf)
let parisPoint = L.marker([48.85, 2.35]).addTo(myLeaf)
let myTriangle = L.polygon([
  [49.4432, 1.1000],
<<<<<<< HEAD
  [48.1173, -1.6778],
  [47.3941, .06848]
=======
  [48.099895, 1.670517],
  [47.408520, .0691696]
>>>>>>> 962514f4270a1a8f686f6b972a29313c30dbb123
]).addTo(myLeaf);

parisPoint.bindPopup('Paris, France')
myTriangle.bindPopup('Rouen, Rennes, and Tours')
