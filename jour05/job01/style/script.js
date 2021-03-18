$("#button").click(function() {
        var nom = document.getElementById("nom").value;
        var prenom = document.getElementById("prenom").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        if (nom != "" && prenom != "" && email != "") {
            if (IsEmail(email) != false) {
                if (password.length >= 8 && password.match(/[!,@,#,$,%,^,&,*,?,_,~,-,(,),+,=]/) && password.match(/[0-9]/)) {
                    $.ajax({
                        url: '../pages/signup.php',
                        type: "POST",
                        data: "signUpVerify=1&email=" + email,
                        success: function(data) {
                            if (data == "non") {
                                $.ajax({
                                    url: '../pages/signup.php',
                                    type: "POST",
                                    data: { 'signUpSuccess': 1, 'nom': nom, 'prenom': prenom, 'email': email, 'password': password },
                                    success: function() {

                                        $('#error').css("display", "block");
                                        document.getElementById('error').innerHTML = "<li>Vous etes inscrit</li>";
                                    }
                                })
                            } else {
                                $('#error').css("display", "block");
                                document.getElementById('error').innerHTML = "<li>Desolé l'Email que vous avez saissir existe deja</li>";
                            }
                        }
                    });
                } else {
                    $('#error').css("display", "block");
                    document.getElementById('error').innerHTML = "<li>8 caractere minmum</li><li>un chiffre minimun</li><li>un caractere special (!,@,#,$,%,^,&,*,?,_,~,-,(,),+,=)</li>";
                }
            } else {
                $('#error').css("display", "block");
                document.getElementById('error').innerHTML = "<li>Votre email n'est pas un  valide email</li>";
            }
        } else {
            $('#error').css("display", "block");
            document.getElementById('error').innerHTML = "<li>Remplissez tous le formulaire svp</li>";
        }
    })
    /// PARTIE CONNEXION ///
$("#button2").click(function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (IsEmail(email) != false) {
        if (password != "") {
            $.ajax({
                url: '../pages/signin.php',
                type: "POST",
                data: { 'signinVerify': 1, 'email': email, 'password': password },
                success: function(data) {
                    if (data == "oui") {
                        location.replace("../")
                    } else {
                        $('#error').css("display", "block");
                        document.getElementById('error').innerHTML = "<li>Votre email ou password n'est pas correct</li>";
                    }
                }
            })
        } else {
            $('#error').css("display", "block");
            document.getElementById('error').innerHTML = "<li>Veuillez entrer votre mot de passe</li>";
        }
    } else {
        $('#error').css("display", "block");
        document.getElementById('error').innerHTML = "<li>Votre email n'est pas un  valide email</li>";
    }

})



function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}