var churchIcon = L.icon({
    iconUrl: 'static/church_icon.png',
    iconSize: [80, 60],
    iconAnchor: [40, 60],
    popupAnchor: [1, -34]
});

var foodBankIcon = L.icon({
    iconUrl: 'static/food_bank_icon.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [1, -34]
});

var youthCenterIcon = L.icon({
    iconUrl: 'static/youth_icon.png',
    iconSize: [90, 50],
    iconAnchor: [45, 50],
    popupAnchor: [1, -34]
});

var map = L.map('map').setView([38.895, -77.036], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([38.920437685917676, -76.99771896104883], {icon: foodBankIcon}).addTo(map)
        .bindPopup('<img class="popup-img" src="https://flccdc.org/wp-content/uploads/2024/12/cofb-mission-vision_orig.png" alt="Crowder-Owens Food Bank"><br>Crowder-Owens Food Bank<br>605 Rhode Island Ave NE, Washington, DC 20002<br>[Insert Paragraph]<br> <a href="https://flccdc.org/crowder-owens-food-bank/">Learn more</a>', {maxWidth: 285})
        L.marker([38.94819839133506, -76.99979673406605], {icon: foodBankIcon}).addTo(map)
        .bindPopup('<img class="popup-img" src="https://www.capitalareafoodbank.org/wp-content/themes/capital-area-food-bank/silc/build/img/CAFB_Logo.svg" alt="Capital Area Food Bank"><br>Capital Area Food Bank<br>4900 Puerto Rico Ave NE, Washington, DC 20017<br>[Insert Paragraph]<br> <a href="https://give.capitalareafoodbank.org/give/324509?msclkid=8e0baec793ee12643052c491f6456238#!/donation/checkout?c_src=2021DVBingAdsTest2">Learn more</a>', {maxWidth: 285})
        L.marker([38.9108140015539, -77.02150197268551], {icon: foodBankIcon}).addTo(map)
        .bindPopup('<img class="popup-img" src="https://breadforthecity.org/wp-content/uploads/2023/01/logo.svg" alt="Bread for the City"><br>Bread for the City<br>1525 7th St NW, Washington, DC 20001<br>[Insert Paragraph]<br> <a href="https://breadforthecity.org/">Learn more</a>', {maxWidth: 285})

        L.marker([38.864610878888385, -76.989634088033], {icon: youthCenterIcon}).addTo(map)
        .bindPopup('<img class="popup-img" src="https://projectcreatedc.org/wp-content/uploads/2022/03/Project-Create-Logo-768x327.png" alt="Project Create Arts Center"><br>Project Create Arts Center<br>2208 Martin Luther King Jr Ave SE, Washington, DC 20020<br>[Insert Paragraph]<br> <a href="https://projectcreatedc.org/">Learn more</a>', {maxWidth: 285})
        L.marker([38.87963358362598, -76.99592594949335], {icon: youthCenterIcon}).addTo(map)
        .bindPopup('<img class="popup-img" src="https://littlelights.org/wp-content/uploads/2021/02/Artboard-2-copy-e1612539882601.png" alt="Little Lights"><br>Little Lights<br>760 7th St SE, Washington, DC 20003<br>[Insert Paragraph]<br> <a href="http://www.littlelights.org/">Learn more</a>', {maxWidth: 285})
        L.marker([38.90454430322531, -77.05872709174078], {icon: youthCenterIcon}).addTo(map)
        .bindPopup('<img class="popup-img" src="https://images.squarespace-cdn.com/content/v1/6581ec14016d3423f4d02863/0fa8ca46-82a0-46e0-9c44-bdfd5ba41f37/access_youth_logo_web.png?format=1500w" alt="Access Youth Inc."><br>Access Youth Inc.<br>1101 30th St NW, Washington, DC 20007<br>[Insert Paragraph]<br> <a href="https://www.accessyouthinc.org/">Learn more</a>', {maxWidth: 285})   
        L.marker([38.867206716532706, -76.9875512457057], {icon: youthCenterIcon}).addTo(map)      
        .bindPopup('<img class="popup-img" src="https://www.bossdc.org/wp-content/uploads/al_opt_content/IMAGE/www.bossdc.org/wp-content/uploads/2025/10/76945462.png.bv.webp?bv_host=www.bossdc.org" alt="BOSSDC Nonprofit for Youth Development"><br>BOSSDC Nonprofit for Youth Development - Beta Omega Social Services<br>1231 Marion Barry Ave SE, Washington, DC 20020<br>[Insert Paragraph]<br> <a href="http://www.bossdc.org/">Learn more</a>', {maxWidth: 285})
        L.marker([38.91441085125684, -77.04514677454003], {icon: youthCenterIcon}).addTo(map)
        .bindPopup('<img class="popup-img" src="https://assets.activeminds.org/wp-content/uploads/2025/03/active_minds-logo-stacked-full_color-NAV.png?strip=all" alt="Active Minds, Inc."><br>Active Minds, Inc.<br>2001 S St NW #700, Washington, DC 20009<br>[Insert Paragraph]<br> <a href="http://www.activeminds.org/">Learn more</a>', {maxWidth: 285})
        L.marker([38.956436547090696, -77.0207382033746], {icon: youthCenterIcon}).addTo(map)
        .bindPopup('<img class="popup-img" src="https://images.squarespace-cdn.com/content/v1/5556a39be4b0741e9be3f1e4/1433007050216-Z0IZD0YGMG6Q7UX5WT2K/cityblossoms_logo2_bgy_just+words.jpg?format=1500w" alt="City Blossoms"><br>City Blossoms<br>516 Kennedy St NW, Washington, DC 20011<br>[Insert Paragraph]<br> <a href="https://cityblossoms.org/">Learn more</a>', {maxWidth: 285})

        L.marker([38.84408757148174, -76.9939754417433], {icon: churchIcon}).addTo(map)
        .bindPopup('<img class="popup-img" src="https://storage1.snappages.site/3VDZR8/assets/images/6128814_2000x2000_500.png" alt="Greater Fellowship Gospel Baptist Church"><br>Greater Fellowship Gospel Baptist Church<br>814 Alabama Ave SE, Washington, DC 20032<br>[Insert Paragraph]<br> <a href="https://greaterfellowshipdc.org/">Learn more</a>', {maxWidth: 285})
        L.marker([38.90367379401674, -76.99940244319819], {icon: churchIcon}).addTo(map)
        .bindPopup('<img class="popup-img" src="./static/church2.png" alt="Calvary Episcopal Church"><br>Calvary Episcopal Church<br>820 6th St NE, Washington, DC 20002<br>[Insert Paragraph]<br> <a href="https://calvarydc.net/">Learn more</a>', {maxWidth: 285})
        L.marker([38.906642491355825, -77.04010684570395], {icon: churchIcon}).addTo(map)
        .bindPopup('<img class="popup-img" src="./static/church.png" alt="Cathedral of St. Matthew the Apostle"><br>Cathedral of St. Matthew the Apostle<br>1725 Rhode Island Ave NW, Washington, DC 20036<br>[Insert Paragraph]<br> <a href="http://www.stmatthewscathedral.org/">Learn more</a>', {maxWidth: 285})
        L.marker([38.89832666710424, -77.04472391872262], {icon: churchIcon}).addTo(map)
        .bindPopup('<img class="popup-img" src="./static/church3.png" alt="The United Church"><br>The United Church<br>1920 G St NW, Washington, DC 20006<br>[Insert Paragraph]<br> <a href="https://www.theunitedchurch.org/">Learn more</a>', {maxWidth: 285})