<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>Document</title>
</head>
<body>
<header>
    <nav>
        <div class="nav-wrapper">
        <ul class="right">
            <li><a href="">Accueil</a></li>
            <li><a href="">Connexion</a></li>
            <li><a href="">Inscription</a></li>
            <li><input type="search" placeholder="Rechercher"></li>
        </ul>
        </div>
    </nav>
</header>
<main>
    <form action="" method="post" >
        <input type="radio" name="homme" id="homme">
        <input type="radio" name="femme" id="femme">

        <label for="login">Login</label>
        <input type="text" name="login" id="login">

        <label for="Nom">Nom</label>
        <input type="text" name="nom" id="nom">

        <label for="Prénom">prénom</label>
        <input type="text" name="prénom" id="prénom" >

        <label for="adresse">Adresse</label>
        <input type="text" name="adresse" id="adresse">

        <label for="e-mail">Adresse e-mail</label>
        <input type="email" name="email" id="email">

        <label for="paswword">Confirmez</label>
        <input type="password" name="password" id="password" >
    
        <label for="confirm_paswword">Confirmez</label>
        <input type="password" name="confirm_password" id="confirm_password" >
        <br>
        <input type="submit" name="submit" value="S'inscrire !" class = "inscrire">
    </form>
</main>
<footer>
        <ul>
            <li><a href="">Accueil</a></li>
            <li><a href="">Connexion</a></li>
            <li><a href="">Inscription</a></li>
            <li><input type="search" placeholder="Rechercher"></li>
        </ul>
</footer>
</body>
</html>