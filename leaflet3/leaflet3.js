let foodTruckZones = L.map('foodTruckZones').setView([30.036033, -89.876431], 11)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(foodTruckZones)
let foodTruckZonesUrl = 'https://opendata.arcgis.com/datasets/33f825353da04a5fbb2c204a6c6128c7_0.geojson'
jQuery.getJSON(foodTruckZonesUrl, function (data) {
  let truckStyle = function (feature) {
    let foodTruckType = feature.properties.Zone_Code // get the current state's Median Age attribute
    let truckColor = 'gold' // let the initial color be a darker green
    if ( foodTruckType == 'P' ) { truckColor = 'purple' } // if the state's median age is less than the average, color it a lighter green
    return {
      color: truckColor, //use the color variable above for the value
      weight: 2,
      fillOpacity: 0.35
    }
  }
  let onEachFeature = function (feature, layer) {
    let name = feature.properties.STATE_NAME
    let age = feature.properties.MED_AGE
    layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
  }
  let geojsonOptions = {
    style: truckStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, geojsonOptions).addTo(foodTruckZones)
})
