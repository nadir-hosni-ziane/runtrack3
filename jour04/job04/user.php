<?php
if($_POST['sel']){
$dbconnect = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');

$st = $dbconnect->prepare("SELECT * FROM utilisateurs");
$st->execute();

echo json_encode($st->fetchAll());
}

?>