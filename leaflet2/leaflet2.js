let weatherMap = L.map('weatherMap').setView([39.0119, -98.4842], 4)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(weatherMap)
// L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
//   layers: 'nexrad-n0r-900913',
//   format: 'image/png',
//   transparent: true,
//   attribution: 'NOAA, Iowa State University'
// }).addTo(myLeaf)
L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer?', {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA'
}).addTo(weatherMap)
// L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_watches_time/MapServer/WMSServer?', {
//   layers: '1',
//   format: 'image/png',
//   transparent: true,
//   attribution: 'NOAA'
// }).addTo(myLeaf)
L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_ocean_sfc_sst_time/MapServer/WMSServer?', {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(weatherMap)
