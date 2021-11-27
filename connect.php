    <?php
        $link = mysqli_connect('localhost', 'username', 'motdepasse', 'harry_potter');

        if (!$link) {
            die('Erreur de connexion');
      } else {
            echo 'Succès... ';
      }
    ?>