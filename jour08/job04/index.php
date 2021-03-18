<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
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
        <form>
            <p>
                <label>
                    <input class="with-gap" name="sexe" type="radio" checked />
                    <span>Homme</span>
                </label>
            </p>
            <p>
                <label>
                    <input class="with-gap" name="sexe" type="radio" />
                    <span>Femme</span>
                </label>
            </p>
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="prenom" type="text" class="validate">
                            <label for="prenom">Prénom</label>
                        </div>
                        <div class="input-field col s6">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="nom" type="text" class="validate">
                            <label for="nom">Nom</label>
                        </div>
                        <div class="input-field col s12">
                            <i class="material-icons prefix">location_on</i>
                            <input id="adresse" type="text" class="validate">
                            <label for="adresse">Adresse</label>
                        </div>
                        <div class="input-field col s12">
                            <i class="material-icons prefix">mail</i>
                            <input id="email" type="text" class="validate">
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field col s6">
                            <i class="material-icons prefix">lock</i>
                            <input id="password" type="password" class="validate">
                            <label for="password">Password</label>
                        </div>
                        <div class="input-field col s6">
                            <i class="material-icons prefix">lock</i>
                            <input id="password2" type="text" class="validate">
                            <label for="password2">Confirm Password</label>
                        </div>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>Informatique</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>Voyages</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>Sport</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>Culture</span>
                            </label>
                        </p>
                    </div>
                </form>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
            </button>
        </form>
    </main>
<footer class="page-footer">
    <div class="container">
        <div class="row">
            <div class="col l4 offset-l2 s12">
                <ul>
                    <li><a href="">Accueil</a></li>
                    <li><a href="">Connexion</a></li>
                    <li><a href="">Inscription</a></li>
                    <li><input type="search" placeholder="Rechercher"></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
</body>
</html>