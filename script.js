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

function createMarker(iconUrl) {
    return L.divIcon({
        className: 'custom-marker',
        html: `<img src="${iconUrl}" class="marker-inner" />`,
        iconSize: [25, 45],
        iconAnchor: [15, 45],
        popupAnchor: [1, -34]
    });
}

var social_welfare = createMarker('static/social_icon.png');
var church = createMarker('static/church_icon.png');
var food_bank = createMarker('static/food_bank_icon.png');
var youth_focused = createMarker('static/youth_icon.png');
var career_workforce = createMarker('static/career_icon.png');

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


let allMarkers = [];
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
    let ward = data[i]["ward"];
    let popupContent = parts.filter(Boolean).join('<br>');
    let marker  = L.marker([lat, lng], {icon: iconType})
        .addTo(map)
        .bindPopup(popupContent, {
            maxWidth: 300,
            autoPan: true,
            autoPanPaddingTopLeft: [50, 150],
            autoPanPaddingBottomRight: [50, 50],    
            maxHeight: 300
        });
    allMarkers.push({marker, type:data[i]["org_type"]});
}

var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Organization Types<br></h4>";
  div.innerHTML += '<i style="background: #5573BB"></i><span>Church</span><br>';
  div.innerHTML += '<br><i style="background: #39A448"></i><span>Food Bank</span><br>';
  div.innerHTML += '<br><i style="background: #FF3B3C"></i><span>Career Workforce</span><br>';
  div.innerHTML += '<br><i style="background: #000000"></i><span>Youth Focused</span><br>';
  div.innerHTML += '<br><i style="background: #facb0f"></i><span>Social Welfare</span><br>';
  return div;
};

legend.addTo(map);

$(document).ready(function() {
            $("#submitButton").on("click", function() {
                submitSelection();
            });
        });

function submitSelection() {
    console.log("submitSelection running");
    let checkedTypes = Array.from(document.querySelectorAll('.type_filter:checked'))
    .map(cb=> cb.value);

    allMarkers.forEach(m => {
        let show = checkedTypes.length === 0 || checkedTypes.includes(m.type);
        if (show) {
            if (!map.hasLayer(m.marker)) m.marker.addTo(map);
        } else {
            map.removeLayer(m.marker);
        }
    });
}