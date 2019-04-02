let weatherMap = L.map('weatherMap').setView([39.0119, -98.4842], 4)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(weatherMap)
