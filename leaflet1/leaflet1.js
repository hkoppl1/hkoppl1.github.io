let myLeaf = L.map('leaflet1').setView([32.18, -99.14], 4)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(myLeaf)
let nolaPoint = L.marker([30, -90]).addTo(myLeaf)
let myTriangle = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(myLeaf);

nolaPoint.bindPopup('A marker')
myTriangle.bindPopup('A polygon')
