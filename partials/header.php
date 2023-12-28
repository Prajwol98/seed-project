<?php
$link = $_SERVER['PHP_SELF'];
$link_array = explode('/', $link);
$page = end($link_array);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bungee&family=IBM+Plex+Sans:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="assets/img/favicon.png">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Game website</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- Caprasimo Font -->
    <link href="https://fonts.googleapis.com/css2?family=Caprasimo&display=swap" rel="stylesheet">
    <!-- Onset Font -->
    <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;700&display=swap" rel="stylesheet">



    <!-- Owl Carousel -->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
</head>




<body>
    <!-- <div class="pre-loader">
        <img src="assets/img/loader3.gif" alt="">
    </div> -->
    <header class="main-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 logo-wrapper">
                    <a href="#">
                        <img src="assets/img/logo.png" alt="">
                    </a>
                </div>
                <div class="col-md-7 nav-items">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="detail.php">Games</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-2 btn-wrapper">
                    <a href="#" class="btn btn-v1 dark-bg">Download<span></span></a>
                </div>
            </div>
        </div>
    </header>