<?php
    session_start();
    $nom = $_SESSION['login'];
    if ($nom) {
        $div = "<div>
                    <h1>Bonjour $nom</h1>
                </div>";
    }else {
        $div = '<div>
                    <a href="pages/signin.php"><button id="button2">CONNEXION</button></a>
                    <br>
                    <a href="pages/signup.php"><button id="button2">INSCRIPTION</button></a>
                </div>';
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <title>Document</title>
</head>

<body>
    <main>
        <section>
            <div id="img">
                <img src="img/img-01.webp" alt="">
            </div>
            <?= $div ?>
        </section>
    </main>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="../style/script.js"></script>
</body>

</html>