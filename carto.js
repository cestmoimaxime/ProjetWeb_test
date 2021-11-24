

const $coords = document.getElementById("coords");
const $displayCoords = document.getElementById("displayCoords");
const $formRecherche = document.getElementById("formRecherche");

let map = L.map('mapid').setView([46.836, 4.5870], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



navigator.geolocation.getCurrentPosition(function (position) {
    let markerCurrentPos = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
    markerCurrentPos.bindPopup("Vous êtes ici.");
    map.setView([position.coords.latitude, position.coords.longitude], 7);
});

map.on('mousemove', leafletEvent => {
    $coords.innerHTML = `${leafletEvent.latlng.lat.toFixed(5)} ${leafletEvent.latlng.lng.toFixed(5)}`;
    $coords.style.top = `${leafletEvent.originalEvent.clientY}px`;
    $coords.style.left = `${leafletEvent.originalEvent.clientX}px`;
});


/*var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);*/

//document.getElementById('message_button').style.display = 'block';
let message_lion=document.getElementById('message_boutton_lion');
let message_aigle=document.getElementById('message_boutton_aigle');
let message_blaireau=document.getElementById('message_boutton_blaireau');
let message_serpent=document.getElementById('message_boutton_serpent');
var valid_blaireau=document.getElementById('valider_blaireau');
var valid_lion=document.getElementById('valider_lion');
var valid_aigle=document.getElementById('valider_aigle');
var valid_serpent=document.getElementById('valider_serpent');
var sol_blaireau=document.getElementById('bonne_reponse_blaireau');
var sol_lion=document.getElementById('bonne_reponse_lion');
var sol_aigle=document.getElementById('bonne_reponse_aigle');
var sol_serpent=document.getElementById('bonne_reponse_serpent');
var $mdp=document.getElementById('mot_de_passe');


var message_vert_gallois=document.getElementById('message_boutton_vert_gallois');
var message_suedois=document.getElementById('message_boutton_suedois');
var message_magyar=document.getElementById('message_boutton_magyar');
var message_boutefeu=document.getElementById('message_boutton_boutefeu');
var message_aragog=document.getElementById('message_boutton_aragog');

var valid_vert_gallois=document.getElementById('valider_vert_gallois');
var valid_suedois=document.getElementById('valider_suedois');
var valid_magyar=document.getElementById('valider_magyar');
var valid_boutefeu=document.getElementById('valider_boutefeu');
var valid_aragog=document.getElementById('valider_aragog');

var sol_vert_gallois=document.getElementById('bonne_reponse_vert_gallois');
var sol_suedois=document.getElementById('bonne_reponse_suedois');
var sol_magyar=document.getElementById('bonne_reponse_magyar');
var sol_boutefeu=document.getElementById('bonne_reponse_boutefeu');
var sol_aragog=document.getElementById('bonne_reponse_aragog');


valid_aigle.addEventListener("click", fonction_aigle);
valid_lion.addEventListener("click", fonction_lion);
valid_blaireau.addEventListener("click", fonction_blaireau);
valid_serpent.addEventListener("click", fonction_serpent);

//message_lion.style.display = 'block';


function fonction_aigle(){
    if (sol_aigle.checked){
      console.log('Bravo')
      $mdp.innerHTML='vo';
    }
}
function fonction_lion(){
    if (sol_lion.checked){
      $mdp.innerHTML+='ld';
    }
}
function fonction_blaireau(){
    if (sol_blaireau.checked){
      $mdp.innerHTML+='em';
    }
}
function fonction_serpent(){
    if (sol_serpent.checked){
      $mdp.innerHTML+='ort';
    }
}


valid_vert_gallois.addEventListener("click", fonction_vert_gallois);
valid_suedois.addEventListener("click", fonction_suedois);
valid_magyar.addEventListener("click", fonction_magyar);
valid_boutefeu.addEventListener("click", fonction_boutefeu);
valid_aragog.addEventListener("click", fonction_aragog);

function fonction_vert_gallois(){
    if (sol_vert_gallois.checked){
        console.log('Bravo')
    }
}
function fonction_suedois(){
    if (sol_suedois.checked){
        console.log('Bravo')
    }
}function fonction_magyar(){
    if (sol_magyar.checked){
        console.log('Bravo')
    }
}function fonction_boutefeu(){
    if (sol_boutefeu.checked){
        console.log('Bravo')
    }
}
function fonction_aragog(){
  if (sol_aragog.checked){
      console.log('Bravo')
  }
}




//$(".messagebutton").hide();
var image1 = L.icon({
    iconUrl:'poufsouffle_blaireau.jpg',
    iconSize:[32,37],
    iconAnchor:[16,37],
    popupAnchor:[-3,-76]
  });
var blaireau = L.marker([37.7508,14.9944], { icon: image1, draggable: true });
blaireau.bindPopup(message_blaireau);
var shelterMarkers = new L.FeatureGroup();
shelterMarkers.addLayer(blaireau);

var image2 = L.icon({
  iconUrl:'serpentard_serpent.jpg',
  iconSize:[32,37],
  iconAnchor:[16,37],
  popupAnchor:[-3,-76]
});
var serpent = L.marker([43.8853,-110.5777], {icon: image2})
serpent.bindPopup(message_serpent);
shelterMarkers.addLayer(serpent);

var image3 = L.icon({
  iconUrl:'serdaigle_aigle.jpg',
  iconSize:[32,37],
  iconAnchor:[16,37],
  popupAnchor:[-3,-76]
});
var aigle = L.marker([46.8906,-0.9289], {icon: image3})
aigle.bindPopup(message_aigle);
shelterMarkers.addLayer(aigle);


var image4 = L.icon({
  iconUrl:'gryffondor_lion.jpg',
  iconSize:[32,37],
  iconAnchor:[16,37],
  popupAnchor:[-3,-76]
});
var lion = L.marker([37.8070,22.7066], {icon: image4})
lion.bindPopup(message_lion);
shelterMarkers.addLayer(lion);


var image5 = L.icon({
  iconUrl:'hagrid.jpg',
  iconSize:[32,37],
  iconAnchor:[16,37],
  popupAnchor:[-3,-76]
});

var image6 = L.icon({
    iconUrl:'boutefeu_chinois.jpg',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var dragon_chinois=L.marker([23.990,121.013], {icon:image6})
shelterMarkers.addLayer(dragon_chinois)

var image7 = L.icon({
    iconUrl:'durmstrang.jpg',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var ecole_russe=L.marker([59.008,59.139], {icon:image7})
shelterMarkers.addLayer(ecole_russe)

var image8 = L.icon({
    iconUrl:'azkaban.jpg',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var prison=L.marker([59.745,1.600], {icon:image8})
shelterMarkers.addLayer(prison)

var image9 = L.icon({
    iconUrl:'aragog.jpg',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var aragog=L.marker([-25.231,134.235], {icon:image9})
shelterMarkers.addLayer(aragog)

var image10 = L.icon({
    iconUrl:'beauxbatons.jpg',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var beauxbatons=L.marker([47.0134,3.3393], {icon:image10})
shelterMarkers.addLayer(beauxbatons)

var image11 = L.icon({
    iconUrl:'magyar_a_pointe.jpg',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var dragon_hongrie=L.marker([47.0068,18.1659], {icon:image11})
shelterMarkers.addLayer(dragon_hongrie)

var image12 = L.icon({
    iconUrl:'vert_gallois.jpg',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var dragon_galles=L.marker([52.3852,-3.6966], {icon:image12})
shelterMarkers.addLayer(dragon_galles)

var image13 = L.icon({
    iconUrl:'suedois_a_museau_court.jpg',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var dragon_suede=L.marker([59.872,17.631], {icon:image13})
shelterMarkers.addLayer(dragon_suede)

var image14 = L.icon({
    iconUrl:'chaumiere_aux_coquillages.jpg',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var maison=L.marker([50.1027, -5.3892], {icon:image14})
shelterMarkers.addLayer(maison)

var image15 = L.icon({
    iconUrl:'poudlard.jpg',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var poudlard=L.marker([56.9745, -4.4125], {icon:image15})
shelterMarkers.addLayer(poudlard)


var hagrid = L.marker([51.53319,-0.12418], {icon: image5}).bindPopup('Question de Hagrid');
shelterMarkers.addLayer(hagrid);

map.on('zoomend', function() {
    if (map.getZoom() <4){
            map.removeLayer(shelterMarkers);
    }
    else {
            map.addLayer(shelterMarkers);
        }
});






const markerGroup = L.featureGroup().addTo(map);
/*
$displayCoords.addEventListener('change', () => {
    if ($displayCoords.checked) {
        $coords.style.display = 'unset';
    } else {
        $coords.style.display = 'none';
    }
})


marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
$formRecherche.addEventListener('submit', (event) => {
    event.preventDefault();
    let textValue = document.getElementById('txtRecherche').value;
    fetch("http://api-adresse.data.gouv.fr/search/?q=" + textValue)
    .then(response => response.json())
    .then(response => {
        markerGroup.clearLayers();
        response.features.forEach( feature => {
            let coords = feature.geometry.coordinates;
            let marker = L.marker([coords[1], coords[0]]).addTo(markerGroup);
            marker.bindPopup(feature.properties.label);
        });
        map.fitBounds(markerGroup.getBounds())
    });
});
*/
