let leaflet1 = L.map('leaflet1').setView([32.18, -99.14], 4)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(leaflet1)
let nolaPoint = L.marker([30, -90]).addTo(leaflet1)
let myTriangle = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(leaflet1);

nolaPoint.bindPopup('A marker')
myTriangle.bindPopup('A polygon')
