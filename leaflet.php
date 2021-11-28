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
      <h1> Quelle est la hauteur de l Etna et combien d eruptions a-t-il connu au 20 ème siècle?</h1>
      <label>3360m 80 <input id="bonne_reponse_blaireau" type="radio" name="news" value="1"></label>
      <label>2140m 20<input  type="radio" name="news" value="0"></label>
      <label>1290m 130<input type="radio" name="news" value="0"></label>
      <label>2540m  50<input type="radio" name="news" value="0"></label>
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