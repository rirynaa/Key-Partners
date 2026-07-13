var map = L.map('map').setView([38.895, -77.036], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([38.93672537001171, -77.10924753558231]).addTo(map)
        .bindPopup('Sibley Memorial Hospital<br>5255 Loughboro Rd NW, Washington, DC 20016')
        L.marker([38.92947101263236, -77.01459972393701]).addTo(map)
        .bindPopup('MedStar Washington Hospital Center<br>110 Irving St NW, Washington,DC 20010')
        L.marker([38.91206924879193, -77.0750995625694]).addTo(map)
        .bindPopup('MedStar Georgetown University Hospital<br>3800 Reservoir Rd NW, Washington, DC 20007')
        L.marker([38.92722597553405, -77.01454638150612]).addTo(map)
        .bindPopup('Children\'s National Hospital<br>111 Michigan Ave NW, Washington, DC 20010')
        L.marker([38.94423198287468, -76.99144478802958]).addTo(map)
        .bindPopup('Providence Health System<br>1150 Varnum St NE, Washington, DC 20017<br>They help us belahaelrjealkraekjralekjwrkalwejrkweljralewrjalewrajw')