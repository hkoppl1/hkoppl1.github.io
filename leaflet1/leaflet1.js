let myMap = L.map('map1').setView([32.18, -99.14], 4)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(myMap)
let nolaPoint = L.marker([30, -90]).addTo(myMap)
let myTriangle = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(myMap);

nolaPoint.bindPopup('A marker')
myTriangle.bindPopup('A polygon')
