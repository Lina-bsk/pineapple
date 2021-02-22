<?php

require ('mysql.php');

$email = "";
$checkbox = "";
$error_email = "";
$error_checkbox = "";
$value_email = "";
$reg_ex = "/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/";
$reg_ex_co = "/.co$/i";

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

if (($_SERVER["REQUEST_METHOD"] == "POST") || (isset($_POST["submit"]))) {
  $email = test_input($_POST["mail"]);
  $checkbox = $_POST["agreement"];

  $valid_checkbox = false;
  $valid_email = false;

  if ($email == "") {
    $error_email = "Email address is required";
    $valid_email = true;
  } elseif (!(preg_match($reg_ex, $email))) {
    $error_email = "проыерка regex";
    $valid_email = true;
  } elseif ((preg_match($reg_ex_co, $email))) {
    $error_email = "проыерка на co";
    $valid_email = true;
  } 
  else {
    $value_email = $email;
  }

  if (!$checkbox) {
    $error_checkbox = "не установлено";
    $valid_checkbox = true;
  } else {
    $checkbox = 1;
  }
 
  if (!$valid_email && !$valid_checkbox) {
    $value_email = "";

  $success = $mysqli->query ("INSERT INTO `users` (`email`, `agreement`) VALUES ('$email', '$checkbox')");
  
  }
}

$mysqli->close();
?>