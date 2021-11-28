<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Jeu Harry Potter</title>
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
        <div id='message_pour_poudlard'>
        <h4><p> Bonjour jeune sorcier ! J'ai l'honneur de t'annoncer que tu as été admis à l'école Poudlard. Mais avant de faire tes baggages et d'embarquer à bord du Poudlard Express, tu devras remplir une mission. Tu dois trouver les 4 emblèmes des 4 maisons de Poudlard. A chaque fois que tu trouveras un des animaux, tu devras répondre à une question. Attention, tu ne pourras pas accéder au Poudlard Express sans avoir répondu à TOUTES les questions . Je te souhaite bon courage et retrouve moi sur le quai 9/3!
        </p>
        <p id='info_lion'>Gryffondor : Il aime bien traîner du côté où son ancêtre s'est fait battre par Héraclès.</p>
        <p id='info_aigle'>Serdaigle : L'aigle aprrécie particulièrement un parc à thème français.</p>
        <p id='info_serpent'>Serpentard : Pour trouver le serpent, va voir du coté du grand Téton. </p>
        <p id='info_blaireau'>Poufsouffle : Le blaireau se balade en plein milieu d'un volcan souvent actif d'Europe.</p>
        </h4>
      </div>
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
<label>L'ours<input id="bonne_reponse_lion" type="radio" name="news" value="1"></label>
<label>La jument<input type="radio" name="news" value="0"></label>
<button id="valider_lion" type="button">
  Valider la réponse
</button>
</div>


<div id="message_boutton_vert_gallois">
<h1>Que mange Pattenrond au début de "Harry Potter et l ordre du Phénix" ?</h1>
<label>Une souris<input type="radio" name="news" value="0"></label>
<label>Une oreille à rallonge<input id="bonne_reponse_vert_gallois" type="radio" name="news" value="1"></label>
<label>Croûtard<input  type="radio" name="news" value="0"></label>
<label>Le devoir de Ron<input type="radio" name="news" value="0"></label>
<button id="valider_vert_gallois" type="button">
  Valider la réponse
</button>
</div>


<div id="message_boutton_suedois">
<h1>Comment se nomme le chat de Rusard ?</h1>
<label>Miss Teigne<input id="bonne_reponse_suedois" type="radio" name="news" value="1"></label>
<label>Arold<input type="radio" name="news" value="0"></label>
<label>Hedwige<input type="radio" name="news" value="0"></label>
<label>Trevor<input type="radio" name="news" value="0"></label>
<button id="valider_suedois" type="button">
  Valider la réponse
</button>
</div>

<div id="message_boutton_magyar">
<h1>Comment se nomment les parents de Ron ?</h1>
<label>Molly et George<input type="radio" name="news" value="0"></label>
<label>Molly et Arthur<input id="bonne_reponse_magyar" type="radio" name="news" value="1"></label>
<label>Lily et Arthur<input type="radio" name="news" value="0"></label>
<label>Lily et James<input type="radio" name="news" value="0"></label>
<button id="valider_magyar" type="button">
  Valider la réponse
</button>
</div>

<div id="message_boutton_boutefeu">
      <h1>Quelle est la seconde personne qui aide Harry Potter à résoudre l'énigme de l'oeuf dans "La coupe de feu" après Cédric Diggory ?</h1>
      <label>Dumbledore<input type="radio" name="news" value="0"></label>
      <label>Hermione Granger<input type="radio" name="news" value="0"></label>
      <label>Mimi Geignarde<input id="bonne_reponse_boutefeu" type="radio" name="news" value="1"></label>
      <label>Neville Londubat<input type="radio" name="news" value="0"></label>
      <button id="valider_boutefeu" type="button">
        Valider la réponse
      </button>
    </div>

    <div id="message_boutton_aragog">
    <h1>Un épouvantard surgit devant toi ! Comment te protèges-tu ?</h1>
    <label>Accio<input type="radio" name="news" value="0"></label>
    <label>Expelliarmus<input type="radio" name="news" value="0"></label>
    <label>Stupefix<input type="radio" name="news" value="0"></label>
    <label>Riddikulus<input id="bonne_reponse_aragog" type="radio" name="news" value="1"></label>
    <button id="valider_aragog" type="button">
      Valider la réponse
    </button>
  </div>


  <div id="message_boutton_Durmstrang">
    <h1>Bonjour petit sorcier. Désolé de t'être déplacé pour rien, mais Igor Karkaroff, le directeur, n'est pas présent. Il séjourne quelques temps à Azkaban. Tu le trouveras là-bas si tu oses y aller. Mais avant de partir répond à ma question</h1>
    <h1>Un hippogryffe mange 140 insectes en 5 jours. Chaque jour, il en mange 3 de plus. Combien en mange-t-il le 5ème jour ?</h1>
    <label>22<input type="radio" name="news" value="0"></label>
    <label>140<input type="radio" name="news" value="0"></label>
    <label>20<input type="radio" name="news" value="0"></label>
    <label>24<input id="bonne_reponse_Durmstrang" type="radio" name="news" value="1"></label>
    <button id="valider_Durmstrang" type="button">
      Valider la réponse
    </button>
  </div>  


    

  <div id="message_boutton_BB">
    <h1>Quel est le nombre qui est tel que si on le multiplie par deux, on lui ajoute sa moitié puis son quart et enfin 1, donnera 100 ?</h1>
    <label>Flemme de calculer<input type="radio" name="news" value="0"></label>
    <label>35<input type="radio" name="news" value="0"></label>
    <label>8<input type="radio" name="news" value="0"></label>
    <label>36<input id="bonne_reponse_BB" type="radio" name="news" value="1"></label>
    <button id="valider_BB" type="button">
      Valider la réponse
    </button>
  </div>


  <div id="message_boutton_aragog">
<h1>Un épouvantard surgit devant toi ! Comment te protèges-tu ?</h1>
<label>Accio<input type="radio" name="news" value="0"></label>
<label>Expelliarmus<input type="radio" name="news" value="0"></label>
<label>Stupefix<input type="radio" name="news" value="0"></label>
<label>Riddikulus<input id="bonne_reponse_aragog" type="radio" name="news" value="1"></label>
<button id="valider_aragog" type="button">
  Valider la réponse
</button>
</div>



<div id="message_boutton_prison">
    <h1>Complète cette suite logique : U ; D ; T ; Q ; C ; S ; S ; ? ; ?</h1>
    <label>K ; L<input type="radio" name="news" value="0"></label>
    <label>R ; S<input type="radio" name="news" value="0"></label>
    <label>U ; Q<input type="radio" name="news" value="0"></label>
    <label>H ; N<input id="bonne_reponse_prison" type="radio" name="news" value="1"></label>
    <button id="valider_prison" type="button">
      Valider la réponse
    </button>
  </div>


  
  <div id="message_hagrid">
  <h1>Bravo mon gars </h1>
  <p>En remettant dans l'ordre les lettres données par les animaux, peut tu retrouver le pire ennemi du monde magique? 
  <label>C'est :<input id='proposition_reponse' type=text name='machin'></label> 
  <p><input id='hagrid_valider' type='submit' name='valider' value='Valider'></p>
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



$id=rand(0,100000);
$sqljoueur = "INSERT INTO joueurs (id, nom, temps) 
VALUES ($id ,'ok','01:00:00')";
if ($link->query($sqljoueur) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sqljoueur . "<br>" . $link->error;
}

 ?>
    <script src="carto.js"></script>
    <script src="popup.js"></script>


  </body>
  </html>