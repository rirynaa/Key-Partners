async function getData() {	
    return new Promise((resolve, reject) => {		
        Papa.parse('./latest_data.csv', {			
            download:true,			
            header:true,			
            complete:(results) => {								
                resolve(results.data);			
            }		
        });	
    }
);}

var church = L.icon({
    iconUrl: 'static/church_icon.png',
    iconSize: [80, 60],
    iconAnchor: [40, 60],
    popupAnchor: [1, -34]
});

var food_bank = L.icon({
    iconUrl: 'static/food_bank_icon.png',
    iconSize: [25, 45],
    iconAnchor: [15, 45],
    popupAnchor: [1, -34]
});

var youth_focused = L.icon({
    iconUrl: 'static/youth_icon.png',
    iconSize: [90, 50],
    iconAnchor: [45, 50],
    popupAnchor: [1, -34]
});

var career_workforce = L.icon({
    iconUrl: 'static/career_icon.png',
    iconSize: [30, 45],
    iconAnchor: [15, 45],
    popupAnchor: [1, -34]
});

var social_welfare = L.icon({
    iconUrl: 'static/social_icon.png',
    iconSize: [25, 45],
    iconAnchor: [15, 45],
    popupAnchor: [1, -34]
});

var icons = {
    "church": church,
    "food_bank": food_bank,
    "youth_focused": youth_focused,
    "career_workforce": career_workforce,
    "social_welfare": social_welfare
};

var map = L.map('map').setView([38.895, -77.036], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let data = await getData();

for (let i = 0; i < data.length; i++) {
    if (!data[i]["lat, long"]) continue;
    let coords = data[i]["lat, long"].split(", ");
    let lat = parseFloat(coords[0]);
    let lng = parseFloat(coords[1]);
    let iconType = icons[data[i]["org_type"]];
    let parts = [
    data[i]["image"] ? `<img class="popup-img" src="${data[i]["image"]}" alt="${data[i]["org_name"]}">` : null,
    data[i]["org_name"],
    data[i]["address"],
    data[i]["phone"],
    data[i]["description"],
    data[i]["website"] ? `<a href="${data[i]["website"]}" target="_blank">Visit Website</a>` : null
    ];
    let popupContent = parts.filter(Boolean).join('<br>');
    L.marker([lat, lng], {icon: iconType}).addTo(map).bindPopup(popupContent, {maxWidth: 300});
}

var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Organization Types</h4>";
  div.innerHTML += '<i style="background: #5573BB"></i><span>Church</span><br>';
  div.innerHTML += '<br><i style="background: #39A448"></i><span>Food Bank</span><br>';
  div.innerHTML += '<br><i style="background: #FF3B3C"></i><span>Career Workforce</span><br>';
  div.innerHTML += '<br><i style="background: #000000"></i><span>Youth Focused</span><br>';
  div.innerHTML += '<br><i style="background: #808080"></i><span>Social Welfare</span><br>';
  return div;
};

legend.addTo(map);