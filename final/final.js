let restaurants = L.map('restaurants').setView([29.983565, -90.047463], 12)
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png').addTo(restaurants)
let restaurantsUrl = 'https://opendata.arcgis.com/datasets/62501c695c614d1c99aaf2b113fca257_0.geojson'
jQuery.getJSON(restaurantsUrl, function (data) {
  let restaurantStyle = function (feature) {
    let businessType = feature.properties.BusinessType
    let restaurantColor = 'purple'
    if (businessType == '1105 - FULL SVC RESTAURANTS (TABLE SERVICE) (934)' ) {restaurantColor = 'gold' }
    return {
      color: restaurantColor,
    }
  }
  let onEachFeature = function (feature, layer) {
    let name = feature.properties.BusinessName
    let type = feature.properties.BusinessType
    layer.bindPopup('Restaurant Name' + ': ' + name + '<br>Restaurant Type' + ': ' + type)
  }
  let geojsonOptions = {
    style: restaurantStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, geojsonOptions).addTo(restaurants)
})
