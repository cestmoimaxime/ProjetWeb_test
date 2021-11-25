

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


var message_vert_gallois=document.getElementById('message_boutton_vert_gallois');
var message_suedois=document.getElementById('message_boutton_suedois');
var message_magyar=document.getElementById('message_boutton_magyar');
var message_boutefeu=document.getElementById('message_boutton_boutefeu');
var message_aragog=document.getElementById('message_boutton_aragog');

var sol_vert_gallois=document.getElementById('bonne_reponse_vert_gallois');
var sol_suedois=document.getElementById('bonne_reponse_suedois');
var sol_magyar=document.getElementById('bonne_reponse_magyar');
var sol_boutefeu=document.getElementById('bonne_reponse_boutefeu');
var sol_aragog=document.getElementById('bonne_reponse_aragog');



var $mdp=document.getElementById('mot_de_passe');

//console.log('coucou')
/*
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


var valid_vert_gallois=document.getElementById('valider_vert_gallois');
console.log(valid_vert_gallois);
var valid_suedois=document.getElementById('valider_suedois');
var valid_magyar=document.getElementById('valider_magyar');
var valid_boutefeu=document.getElementById('valider_boutefeu');
var valid_aragog=document.getElementById('valider_aragog');

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
*/



//$(".messagebutton").hide();



var messageblaireau= '<div id="message_boutton_blaireau">\
<h1> Quelle est la hauteur de l Etna et combien d eruptions a-t-il connu au 20 ème siècle?</h1>\
<label>3360m 80 <input type="radio" name="news" value="0"></label>\
<label>2140m 20<input id="bonne_reponse_magyar" type="radio" name="news" value="1"></label>\
<label>1290m 130<input type="radio" name="news" value="0"></label>\
<label>2540m  50<input type="radio" name="news" value="0"></label>\
<button id="valider_blaireau" type="button">\
  Valider la réponse\
</button>\
</div>';
var messageserpent= '<div id="message_boutton_serpent">\
<h1>Quel est le parc national américain le plus visité ?</h1>\
<label>Great Smoky Mountains<input id="bonne_reponse_serpent" type="radio" name="news" value="1"></label>\
<label>Everglades<input type="radio" name="news" value="0"></label>\
<label>Grand Canyon<input type="radio" name="news" value="0"></label>\
<label>Yellowstone<input type="radio" name="news" value="0"></label>\
<button id="valider_serpent" type="button">\
  Valider la réponse\
</button>\
</div> ';
var messageaigle= '<div id="message_boutton_aigle">\
<h1>Quel évènement important s’est produit l’année de la création du Puy du Fou ?</h1>\
<label>Le renouvellement des accords bilatéraux Andorre-Moldavie<input type="radio" name="news" value="0"></label>\
<label>Abolition de la peine de mort<input type="radio" name="news" value="0"></label>\
<label>La chute du mur de Berlin<input id = "bonne_reponse_aigle" type="radio" name="news" value="1"></label>\
<label>La création du Puy du Fou<input type="radio" name="news" value="0"></label>\
<button id="valider_aigle" type="button">\
  Valider la réponse\
  </button>\
</div>';
var messagelion= '<div id="message_boutton_lion">\
<h1>Quel animal ne constitue pas une épreuve des 12 travaux d’Héraklès ?</h1>\
<label>Le sanglier<input type="radio" name="news" value="0"></label>\
<label>La biche<input type="radio" name="news" value="0"></label>\
<label>L ours<input id="bonne_reponse_lion" type="radio" name="news" value="1"></label>\
<label>La jument<input type="radio" name="news" value="0"></label>\
<button id="valider_lion" type="button">\
  Valider la réponse\
</button>\
</div>';
var messagevertgallois= '<div id="message_boutton_vert_gallois">\
<h1>Que mange Pattenrond au début de "Harry Potter et l ordre du Phénix" ?</h1>\
<label>Une souris<input type="radio" name="news" value="0"></label>\
<label>Une oreille à rallonge<input id="bonne_reponse_vert_gallois" type="radio" name="news" value="1"></label>\
<label>Croûtard<input  type="radio" name="news" value="0"></label>\
<label>Le devoir de Ron<input type="radio" name="news" value="0"></label>\
<button id="valider_vert_gallois" type="button">\
  Valider la réponse\
</button>\
</div>';
var messagesuedois= '<div id="message_boutton_suedois">\
<h1>Comment se nomme le chat de Rusard ?</h1>\
<label>Miss Teigne<input id="bonne_reponse_suedois" type="radio" name="news" value="1"></label>\
<label>Arold<input type="radio" name="news" value="0"></label>\
<label>Hedwige<input type="radio" name="news" value="0"></label>\
<label>Trevor<input type="radio" name="news" value="0"></label>\
<button id="valider_suedois" type="button">\
  Valider la réponse\
</button>\
</div>';
var messagemagyar= '<div id="message_boutton_magyar">\
<h1>Comment se nomment les parents de Ron ?</h1>\
<label>Molly et George<input type="radio" name="news" value="0"></label>\
<label>Molly et Arthur<input id="bonne_reponse_magyar" type="radio" name="news" value="1"></label>\
<label>Lily et Arthur<input type="radio" name="news" value="0"></label>\
<label>Lily et James<input type="radio" name="news" value="0"></label>\
<button id="valider_magyar" type="button">\
  Valider la réponse\
</button>\
</div>';
var messageboutefeu= '<div id="message_boutton_boutefeu">\
      <h1>Quelle est la seconde personne qui aide Harry Potter à résoudre l énigme de l oeuf dans "La coupe de feu" après Cédric Diggory ?</h1>\
      <label>Dumbledore<input type="radio" name="news" value="0"></label>\
      <label>Hermione Granger<input type="radio" name="news" value="0"></label>\
      <label>Mimi Geignarde<input id="bonne_reponse_boutefeu" type="radio" name="news" value="1"></label>\
      <label>Neville Londubat<input type="radio" name="news" value="0"></label>\
      <button id="valider_boutefeu" type="button">\
        Valider la réponse\
      </button>\
    </div>';
var messagearagog= '<div id="message_boutton_aragog">\
    <h1>Un épouvantard surgit devant toi ! Comment te protèges-tu ?</h1>\
    <label>Accio<input type="radio" name="news" value="0"></label>\
    <label>Expelliarmus<input type="radio" name="news" value="0"></label>\
    <label>Stupefix<input type="radio" name="news" value="0"></label>\
    <label>Riddikulus<input id="bonne_reponse_aragog" type="radio" name="news" value="1"></label>\
    <button id="valider_aragog" type="button">\
      Valider la réponse\
    </button>\
  </div>';
  
  var image1 = L.icon({
    iconUrl:'poufsouffle_blaireau.jpg',
    iconSize:[32,37],
    iconAnchor:[16,37],
    popupAnchor:[-3,-76]
  });
var blaireau = L.marker([37.7508,14.9944], { icon: image1, draggable: true });
blaireau.bindPopup(messageblaireau);
var shelterMarkers = new L.FeatureGroup();
shelterMarkers.addLayer(blaireau);


var image2 = L.icon({
  iconUrl:'serpentard_serpent.jpg',
  iconSize:[32,37],
  iconAnchor:[16,37],
  popupAnchor:[-3,-76]
});
var serpent = L.marker([43.8853,-110.5777], {icon: image2})
serpent.bindPopup(messageserpent);
shelterMarkers.addLayer(serpent);


var image3 = L.icon({
  iconUrl:'serdaigle_aigle.jpg',
  iconSize:[32,37],
  iconAnchor:[16,37],
  popupAnchor:[-3,-76]
});
var aigle = L.marker([46.8906,-0.9289], {icon: image3})
aigle.bindPopup(messageaigle);
shelterMarkers.addLayer(aigle);


var image4 = L.icon({
  iconUrl:'gryffondor_lion.jpg',
  iconSize:[32,37],
  iconAnchor:[16,37],
  popupAnchor:[-3,-76]
});
var lion = L.marker([37.8070,22.7066], {icon: image4})
lion.bindPopup(messagelion);
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
dragon_chinois.bindPopup(messageboutefeu)
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
aragog.bindPopup('<div id="message_boutton_aragog">\
<h1>Un épouvantard surgit devant toi ! Comment te protèges-tu ?</h1>\
<label>Accio<input type="radio" name="news" value="0"></label>\
<label>Expelliarmus<input type="radio" name="news" value="0"></label>\
<label>Stupefix<input type="radio" name="news" value="0"></label>\
<label>Riddikulus<input id="bonne_reponse_aragog" type="radio" name="news" value="1"></label>\
<button id="valider_aragog" type="button">\
  Valider la réponse\
</button>\
</div>')
shelterMarkers.addLayer(aragog)


let $time = document.getElementById('time');

setInterval( () => {
    let heure = new Date().toLocaleTimeString('fr');
    $time.innerHTML = heure;
}, 1000);




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
dragon_hongrie.bindPopup(messagemagyar)
shelterMarkers.addLayer(dragon_hongrie)

var image12 = L.icon({
    iconUrl:'vert_gallois.jpg',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var dragon_galles=L.marker([52.3852,-3.6966], {icon:image12})
dragon_galles.bindPopup(messagevertgallois)
shelterMarkers.addLayer(dragon_galles)

var image13 = L.icon({
    iconUrl:'suedois_a_museau_court.jpg',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var dragon_suede=L.marker([59.872,17.631], {icon:image13})
dragon_suede.bindPopup(messagesuedois)
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
