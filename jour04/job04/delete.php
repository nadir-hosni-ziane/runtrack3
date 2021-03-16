<?php
if($_POST['del']){
$db = new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8', 'root', '');

$query = $db->prepare('DELETE FROM utilisateurs WHERE id='.$_POST['id']);
$query->execute();
}
?>