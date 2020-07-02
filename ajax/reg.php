<?php
include '../Database.php';
include '../Function.php';
$db = new Database;
$name  = strip_tags($_POST['name']);
$name = trim($_POST['name']);
echo $name;
?>