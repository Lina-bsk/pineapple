<?php
  require ('php/form.php');
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pineapple</title>
    <link rel="stylesheet" href="css/style.min.css" />
  </head>
  <body class="body-background">
    <header class="header">
      <a href="#" class="logo ic-logo">
        <span class="visually-hidden">pineapple logo</span>
      </a>
      <nav class="menu">
        <a href="#" class="menu__link">About</a>
        <a href="#" class="menu__link">How it works</a>
        <a href="#" class="menu__link">Contact</a>
      </nav>
    </header>
    <main class="main">
      <section class="content"> 
        <h1 class="title content__container">Subscribe to newsletter</h1>
        <p class="subtitle content__container">
          Subscribe to our newsletter and get 10% discount on pineapple glasses.
        </p>
        <form method="post" class="form">
          <div class="form__feedback">
            <div class="form__input-wrap">
              <label class="form__label"><span class="visually-hidden">type you email address</span>
                <input type="email" name="mail" placeholder="Type your email address here…"
                  class="form__input" data-required="email" value="<?=$value_email?>" />
              </label>
              <button class="ic-arrow form__submit" type="submit" name="submit">
                <span class="visually-hidden">submit</span>
              </button>
            </div>
            <div class="form__invalid-feedback"><?=$error_email?></div>
          </div>
          <div class="form__feedback">
            <input name="agreement" id="agre" type="checkbox"
              class="form__checkbox visually-hidden" data-required="checkbox" />
            <label for="agre" class="form__agreement content__container">
              I agree to
              <a href="#" class="form__agreement-link">terms of service</a>
            </label>
            <div class="form__invalid-feedback"><?=$error_checkbox?></div>
          </div>
        </form>
        <section class="socials content__container">
          <a href="#" target="_blank" class="socials__link ic-facebook">
            <span class="visually-hidden">facebook</span></a>
          <a href="#" target="_blank" class="socials__link ic-instagram">
            <span class="visually-hidden">instagram</span>
          </a>
          <a href="#" target="_blank" class="socials__link ic-twitter">
            <span class="visually-hidden">twitter</span>
          </a>
          <a href="#" target="_blank" class="socials__link ic-youtube">
            <span class="visually-hidden">youtube</span>
          </a>
        </section>
      </section>
    </main>
    <script type="text/javascript" src="js/main.js"></script>
  </body>
</html>
