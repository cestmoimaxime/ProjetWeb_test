<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Cartographie</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
   <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="header">
        <h3>Escape Game Harry Potter</h3>
        <div id="topMenu">
        </div>
    </div>
    <div id="content">
        <div id="mapid"></div>
        <div id="coords"></div>
    </div>
    






    
    <button id="btnPopup" class="btnPopup"></button>
    <div id="overlay" class="overlay">
      <div id="popup" class="popup">
        <h2>Hagrid : <span id="btnClose" class="btnClose">&times;</span></h2>
        <h4><p> Bonjour jeune sorcier ! J'ai l'honneur de t'annoncer que tu as été admis à l'école Poudlard. Mais avant de faire tes baggages et d'embarquer à bord du Poudlard Express, tu devras remplir une mission. Tu dois trouver les 4 emblèmes des 4 maisons de Poudlard. A chaque fois que tu trouveras un des animaux, tu devras répondre à une question. Attention, tu ne pourras pas accéder au Poudlard Express sans avoir répondu à TOUTES les questions (des réponses justes, n'est ce pas ?). Je te souhaite bon courage !
        </p>
        <p id='info_lion'>Gryffondor : Il aime bien traîner du côté où son ancêtre s'est fait battre par Héraclès.</p>
        <p id='info_aigle'>Serdaigle : L'aigle aprrécie particulièrement un parc à thème français.</p>
        <p id='info_serpent'>Serpentard : Pour trouver le serpent, va voir du coté du grand Téton. </p>
        <p id='info_blaireau'>Poufsouffle : Le blaireau se balade en plein milieu d'un volcan souvent actif d'Europe.</p>
        </h4>
      </div>
    </div>
    <div id='mot_de_passe'></div>
    <div id="time">00:00:00</div>
    <div id="message_boutton_blaireau">
      <h1> Quelle est la hauteur de l'Etna et combien d'éruptions a-t-il connu au 20 ème siècle?</h1>
      <label>3360 mètres 80 éruptions<input id="bonne_reponse_blaireau" type="radio" name="news" value="1"></label>
      <label>2140 mètres 20 éruptions<input  type="radio" name="news" value="0"></label>
      <label>1290 mètres 130 éruptions<input type="radio" name="news" value="0"></label>
      <label>2540 mètres et 50 éruptions<input type="radio" name="news" value="0"></label>
      <button id="valider_blaireau" type="button">
        Valider la réponse
      </button>
      </div>
      <div id="message_boutton_serpent">
        <h1>Quel est le parc national américain le plus visité ?</h1>
        <label>Great Smoky Mountains<input id="bonne_reponse_serpent" type="radio" name="news" value="1"></label>
        <label>Everglades<input type="radio" name="news" value="0"></label>
        <label>Grand Canyon<input type="radio" name="news" value="0"></label>
        <label>Yellowstone<input type="radio" name="news" value="0"></label>
        <button id="valider_serpent" type="button">
          Valider la réponse
        </button>
        </div> 




        <div id="message_boutton_aigle">
<h1>Quel évènement important s’est produit l’année de la création du Puy du Fou ?</h1>
<label>Le renouvellement des accords bilatéraux Andorre-Moldavie<input type="radio" name="news" value="0"></label>
<label>Abolition de la peine de mort<input type="radio" name="news" value="0"></label>
<label>La chute du mur de Berlin<input id = "bonne_reponse_aigle" type="radio" name="news" value="1"></label>
<label>La création du Puy du Fou<input type="radio" name="news" value="0"></label>
<button id="valider_aigle" type="button">
  Valider la réponse
  </button>
</div>


<div id="message_boutton_lion">
<h1>Quel animal ne constitue pas une épreuve des 12 travaux d’Héraklès ?</h1>
<label>Le sanglier<input type="radio" name="news" value="0"></label>
<label>La biche<input type="radio" name="news" value="0"></label>
<label>L ours<input id="bonne_reponse_lion" type="radio" name="news" value="1"></label>
<label>La jument<input type="radio" name="news" value="0"></label>
<button id="valider_lion" type="button">
  Valider la réponse
</button>
</div>





















<?php 
include('connect.php');

$results = [];

$requete = "SELECT *  FROM icone " ;
$result=mysqli_query($link,$requete);
if ($result = mysqli_query($link,$requete)){
  while ($ligne=mysqli_fetch_assoc($result)){
array_push($results,[
  "id" => intval($ligne['id']),
      "name" => $ligne['nom'],
      "lat" => floatval($ligne['lat']),
      "long" => floatval($ligne['long']),
      "zoom" => intval($ligne['zoom']),
      "taille" => intval($ligne['taille']),
      "path" => $ligne['path'], 
]);
}
}
if (isset($_GET['id'])){
  echo json_encode($results[$_GET['id']-1]);

}
else{
  echo json_encode([$results[0], $results[1]]) ;
}
 ?>
    <script src="carto.js"></script>
    <script src="popup.js"></script>


  </body>
  </html>