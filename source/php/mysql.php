<?php

$mysqli = new mysqli ("localhost", "root", "root", "pineapple");
$mysqli->query ("SET NAMES 'utf8'");

  
if ($mysqli->connect_error) {                             
    die("Connection failed: " . $mysqli->connect_error);
  }
?>