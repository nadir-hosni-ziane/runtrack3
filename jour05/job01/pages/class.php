<?php
class utilisateurs{

    private $pdo;


    public function __construct()
    {
        //$this->pdo = require '../Config/db_conn.php';
        try {
            $pdo = new PDO('mysql:host=localhost;dbname=utilisateurs', "root", "");
        } catch (\Throwable $th) {
            echo $th->getMessage();
        }
        $this->pdo = $pdo;
       
    }


    public function signUpVerify($email){

        $users = $this->pdo->prepare("SELECT * FROM utilisateurs WHERE email='$email'");
        $users -> execute();
        $row = $users->rowCount();
        
        if ($row > 0) {
            return "oui";
        }else return "non";
        
    }

    public function signUpSuccess($nom, $prenom, $email, $password){

        $users = $this->pdo->prepare("INSERT INTO utilisateurs (nom, prenom, email, password) VALUES ('$nom', '$prenom', '$email', '$password')");
        $users -> execute();

    }

    public function signInVerify($email,$password){

        $users = $this->pdo->prepare("SELECT * FROM utilisateurs WHERE email='$email' AND password='$password'");
        $users -> execute();
        $row = $users->rowCount();
        $fetch = $users->fetch(PDO::FETCH_OBJ);
        
        if ($row > 0) {
            $_SESSION['login']=$fetch->nom;
            return "oui";
        }else return "non";
        
    }

}

?>