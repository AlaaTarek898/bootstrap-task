const map1=document.getElementById('btn-map');
console.log(map1)

map1.addEventListener("click", function() {
    


if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(
 function (position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;

    console.log(latitude,longitude)
    console.log(`https://www.google.pt/maps/@${31.2985351},${30.0575345}`)


    const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
 }


 ,function()
  {alert('Please allow your devices to get postion')}
    )}
})