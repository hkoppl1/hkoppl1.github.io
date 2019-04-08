let foodTruckZones = L.map('foodTruckZones').setView([30.036033, -89.876431], 11)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(foodTruckZones)
let foodTruckZonesUrl = 'https://opendata.arcgis.com/datasets/33f825353da04a5fbb2c204a6c6128c7_0.geojson'
jQuery.getJSON(foodTruckZonesUrl, function (data) {
  let truckStyle = function (feature) {
    let foodTruckType = feature.properties.Zone_Code // get the current state's Median Age attribute
    let truckColor = 'purple' // let the initial color be a darker green
    if ( foodTruckType == 'P' ) { truckColor = 'gold' } // if the state's median age is less than the average, color it a lighter green
    return {
      color: truckColor, //use the color variable above for the value
      weight: 1.5,
      stroke: true,
      lineJoin: 'round',
      fillOpacity: 0.3
    }
  }
  let onEachFeature = function (feature, layer) {
    let zone = feature.properties.Zone_Code
    let permitted_or_franchise = feature.properties.Auth
    layer.bindPopup('Zone Code is' + ': ' + zone + '<br>Zone Type is' + ': ' + permitted_or_franchise)
  }
  let geojsonOptions = {
    style: truckStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, geojsonOptions).addTo(foodTruckZones)
})
