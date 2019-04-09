let restaurants = L.map('restaurants').setView([30.036033, -89.876431], 12)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(restaurants)
let restaurantsUrl = 'https://opendata.arcgis.com/datasets/62501c695c614d1c99aaf2b113fca257_0.geojson'
jQuery.getJSON(restaurantsUrl, function (data) {
  let restaurantStyle = function (feature) {
    let businessType = feature.properties.BusinessType
    let restaurantColor = 'purple'
    if (businessType == '1105 - FULL SVC RESTAURANTS (TABLE SERVICE)' ) {restaurantColor = 'gold' }
    return {
      color: restaurantColor,
      weight: 1.5,
      stroke: true,
      lineJoin: 'round',
      fillOpacity: 0.3
    }
  }
  let onEachFeature = function (feature, layer) {
    let name = feature.properties.BusinessName
    let type = feature.properties.BusinessType
    layer.bindPopup('Restaurant Name is' + ': ' + name + '<br>Restaurant Type is' + ': ' + type)
  }
  let geojsonOptions = {
    style: restaurantStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, geojsonOptions).addTo(restaurants)
})
