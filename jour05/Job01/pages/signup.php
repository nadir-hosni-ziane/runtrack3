<?php
    session_start();
    require '../pages/class.php';
    $user = new utilisateurs();

    
    
    if ($_POST['signUpVerify']) {
        $email = $_POST['email'];
        echo $user->signUpVerify($email);
        exit();
    }

    if ($_POST['signUpSuccess']) {
        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        var_dump($password);
        echo $user->signUpSuccess($nom, $prenom, $email, $password);
        exit();
    }

    if ($_SESSION['login']) {
        header("location:../");
        exit();
    }


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/style.css">
    <title>Document</title>
</head>

<body>
    <main>
        <section>
            <div id="img">
                <img src="../img/img-01.webp" alt="">
            </div>
            <div>
                <ul id="error">
                </ul>
                <h1>Member Sign Up</h1>
                <br>
                <form action="" method="post">
                    <input type="text" name="nom" id="nom" placeholder="Votre nom">
                    <br><br>
                    <input type="text" name="prenom" id="prenom" placeholder="Votre Prénom">
                    <br><br>
                    <input type="text" name="email" id="email" placeholder="Votre email">
                    <br><br>
                    <input type="password" name="password" id="password" placeholder="Votre mot de pass">
                </form>
                <br>
                <button id="button">S'INSCRIRE</button>
            </div>
        </section>
    </main>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="../style/script.js"></script>
</body>

</html>