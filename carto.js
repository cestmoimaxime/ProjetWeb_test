const $coords = document.getElementById("coords");
const $displayCoords = document.getElementById("displayCoords");
const $formRecherche = document.getElementById("formRecherche");

let map = L.map('mapid').setView([46.836, 4.5870], 7);


L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 12
}).addTo(map);



var message_vert_gallois=document.getElementById('message_boutton_vert_gallois');
var message_suedois=document.getElementById('message_boutton_suedois');
var message_magyar=document.getElementById('message_boutton_magyar');
var message_boutefeu=document.getElementById('message_boutton_boutefeu');
var message_aragog=document.getElementById('message_boutton_aragog');
var message_Durmstrang=document.getElementById('message_button_Durmstrang');
var message_prison=document.getElementById('message_boutton_prison');
var message_BB=document.getElementById('message_button_BB');


var sol_vert_gallois=document.getElementById('bonne_reponse_vert_gallois');
var sol_suedois=document.getElementById('bonne_reponse_suedois');
var sol_magyar=document.getElementById('bonne_reponse_magyar');
var sol_boutefeu=document.getElementById('bonne_reponse_boutefeu');
var sol_aragog=document.getElementById('bonne_reponse_aragog');


var $mdp=document.getElementById('mot_de_passe');



let info_blaireau=document.getElementById('info_blaireau');
let info_aigle=document.getElementById('info_aigle');
let info_serpent=document.getElementById('info_serpent');
let info_lion=document.getElementById('info_lion');


var sol_blaireau=document.getElementById('bonne_reponse_blaireau');
var valid_blaireau=document.getElementById('valider_blaireau');
let message_blaireau=document.getElementById('message_boutton_blaireau');

var nb_reponses_bonnes=0;

var image1 = L.icon({
  iconUrl:'poufsouffle_blaireau.jpg',
  iconSize:[32,37],
  iconAnchor:[16,37],
  popupAnchor:[-3,-76]
});
var blaireau = L.marker([37.7508,14.9944], { icon: image1, draggable: true });
blaireau.bindPopup(message_blaireau);
var première_couche = new L.FeatureGroup();
première_couche.addLayer(blaireau);
valid_blaireau.addEventListener("click", fonction_blaireau);
var compteurs=0;
var compteurb = 0;
function fonction_blaireau(){

  if (sol_blaireau.checked && compteurb==0){
    $mdp.innerHTML+='em';
    compteurb+=1;
    info_blaireau.innerHTML= 'Poufsouffle: Tu as réussi la question du baireau';
    nb_reponses_bonnes+=1;
    console.log(nb_reponses_bonnes);
  }
}





let message_serpent=document.getElementById('message_boutton_serpent');
var sol_serpent=document.getElementById('bonne_reponse_serpent');
var valid_serpent=document.getElementById('valider_serpent');

var image2 = L.icon({
  iconUrl:'serpentard_serpent.jpg',
  iconSize:[32,37],
  iconAnchor:[16,37],
  popupAnchor:[-3,-76]
});
var serpent = L.marker([43.8853,-110.5777], {icon: image2})
serpent.bindPopup(message_serpent);
première_couche.addLayer(serpent);
valid_serpent.addEventListener("click", fonction_serpent);

function fonction_serpent(){
 
  if (sol_serpent.checked && compteurs==0){
    $mdp.innerHTML+='ort';
    compteurs+=1;
    nb_reponses_bonnes+=1;
    info_serpent.innerHTML= 'Serpentard: Tu as réussi la question du serpent'
    console.log(nb_reponses_bonnes);

  }
}


let message_lion=document.getElementById('message_boutton_lion');
var valid_lion=document.getElementById('valider_lion');
var sol_lion=document.getElementById('bonne_reponse_lion');

var image4 = L.icon({
  iconUrl:'gryffondor_lion.jpg',
  iconSize:[32,37],
  iconAnchor:[16,37],
  popupAnchor:[-3,-76]
});
var compteurl=0;
var lion = L.marker([37.8070,22.7066], {icon: image4})
lion.bindPopup(message_lion);
première_couche.addLayer(lion);
valid_lion.addEventListener("click", fonction_lion);
function fonction_lion(){
  if (sol_lion.checked && compteurl==0){
    $mdp.innerHTML+='ld';
    compteurl+=1;
    nb_reponses_bonnes+=1;
    info_lion.innerHTML= 'Gryffondor: Tu as réussi la question du lion'
    console.log(nb_reponses_bonnes);
  }
}

var compteura = 0;
let message_aigle=document.getElementById('message_boutton_aigle');
var valid_aigle=document.getElementById('valider_aigle');
var sol_aigle=document.getElementById('bonne_reponse_aigle');
var image3 = L.icon({
  iconUrl:'serdaigle_aigle.jpg',
  iconSize:[32,37],
  iconAnchor:[16,37],
  popupAnchor:[-3,-76]
});
var aigle = L.marker([46.8906,-0.9289], {icon: image3})
aigle.bindPopup(message_aigle);
première_couche.addLayer(aigle);
valid_aigle.addEventListener("click", fonction_aigle);
function fonction_aigle(){
    if (sol_aigle.checked && compteura==0){
      $mdp.innerHTML+='vo';
      compteura+=1;
      nb_reponses_bonnes+=1;
      info_aigle.innerHTML= "Serdaigle: Tu as réussi la question de l'aigle";
      console.log(nb_reponses_bonnes);
    }
}



var valid_vert_gallois=document.getElementById('valider_vert_gallois');
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









/* nouvelle couche avec les 4 dragons et Aragog */
var shelterMarkers_dragon = new L.FeatureGroup();

/* nouvelle couche avec BB, Durmonstrong et Azkaban */
var shelterMarkers_ecole = new L.FeatureGroup();


var image5 = L.icon({
  iconUrl:'hagrid.png',
  iconSize:[32,37],
  iconAnchor:[16,37],
  popupAnchor:[-3,-76]
});

var image6 = L.icon({
    iconUrl:'bdf.png',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var dragon_chinois=L.marker([23.990,121.013], {icon:image6})
dragon_chinois.bindPopup(message_boutefeu)
shelterMarkers_dragon.addLayer(dragon_chinois)



var image7 = L.icon({
    iconUrl:'durmstrang.png',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var ecole_russe=L.marker([59.008,59.139], {icon:image7})
ecole_russe.bindPopup(message_Durmstrang)
shelterMarkers_ecole.addLayer(ecole_russe)



var image8 = L.icon({
    iconUrl:'azkaban.jpg',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });

var prison=L.marker([59.745,1.600], {icon:image8})
prison.bindPopup(message_prison)
shelterMarkers_ecole.addLayer(prison)

var image9 = L.icon({
    iconUrl:'aragog.png',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var aragog=L.marker([-25.231,134.235], {icon:image9})
aragog.bindPopup(message_aragog)
shelterMarkers_dragon.addLayer(aragog)


var image10 = L.icon({
    iconUrl:'beauxbatons.png',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var beauxbatons=L.marker([47.0134,3.3393], {icon:image10})
beauxbatons.bindPopup(message_BB);
shelterMarkers_ecole.addLayer(beauxbatons)

var image11 = L.icon({
    iconUrl:'magyar_a_pointe.png',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });

var dragon_hongrie=L.marker([47.0068,18.1659], {icon:image11})
dragon_hongrie.bindPopup(message_magyar);
shelterMarkers_dragon.addLayer(dragon_hongrie);

var image12 = L.icon({
    iconUrl:'vert_gallois.png',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var dragon_galles=L.marker([52.3852,-3.6966], {icon:image12})
dragon_galles.bindPopup(message_vert_gallois)
shelterMarkers_dragon.addLayer(dragon_galles)

var image13 = L.icon({
    iconUrl:'suedois_a_museau_court.png',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var dragon_suede=L.marker([59.872,17.631], {icon:image13})
dragon_suede.bindPopup(message_suedois)
shelterMarkers_dragon.addLayer(dragon_suede)

/* nouvelle couche */
var shelterMarkers_chaumiere = new L.FeatureGroup();


var image14 = L.icon({
    iconUrl:'chaumiere_aux_coquillages.jpg',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var maison=L.marker([50.1027, -5.3892], {icon:image14})
shelterMarkers_chaumiere.addLayer(maison)


var messagePoudlard= ''; 


var image15 = L.icon({
    iconUrl:'poudlard.png',
    iconSize:[128,148],
    iconAnchor:[64,148],
    popupAnchor:[-3,-76]
  });
var poudlard=L.marker([56.9745, -4.4125], {icon:image15})
poudlard.bindPopup(messagePoudlard)
première_couche.addLayer(poudlard)

var mess_hag="Tu n'as pas encore répondu à toutes les questions "
if (nb_reponses_bonnes==4){
  mess_hag="Bravoooooooooooo";
}
var hagrid = L.marker([51.53319,-0.12418], {icon: image5}).bindPopup(mess_hag);
première_couche.addLayer(hagrid);

map.on('zoomend', function() {
    if (map.getZoom() <8){
            map.removeLayer(première_couche);

    }
    else {
            map.addLayer(première_couche);
        }
})
/*
map.removeLayer(shelterMarkers_dragon);
map.removeLayer(shelterMarkers_ecole);
map.removeLayer(shelterMarkers_chaumiere);

map.addLayer(shelterMarkers_dragon);
map.addLayer(shelterMarkers_ecole);
map.addLayer(shelterMarkers_chaumiere);
*/


let heure_debut=new Date();

let minuteur=document.getElementById('time');
setInterval( () => {
  let heure = new Date();
  u=(Math.abs(heure-heure_debut).toString()).slice(0,-3);
  nb_secondes=parseInt(u);
  nombre_minutes=Math.floor(nb_secondes/60);
  vrai_nombre_secondes=nb_secondes%60;

  zero_minutes='';
  zero_secondes='';
  if (nombre_minutes.toString().length==1 && nombre_minutes!=0){
    zero_minutes='0';
  }
  if (nombre_minutes==0){
    zero_minutes='0';
  }
  if (vrai_nombre_secondes.toString().length==1){
    zero_secondes='0';
  }
  if (vrai_nombre_secondes.toString().length==2){
    zero_secondes='';
  }
  nombrefinal='00:'+zero_minutes+nombre_minutes+':'+zero_secondes+vrai_nombre_secondes;
  minuteur.innerHTML = nombrefinal ;
}, 1000);


