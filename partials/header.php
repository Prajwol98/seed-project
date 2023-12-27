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
    <title>Sweepstakes</title>
    <!-- Owl Carousel -->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
</head>




<body>
    <div class="pre-loader">
        <img src="assets/img/loader3.gif" alt="">
    </div>

    <header id="topheader" data-aos="fade-down">
        <div class="container">
            <nav class="row">
                <a href="index.php" class="col-2 logo-wrapper">
                    <img src="assets/img/favicon.png" alt="">
                    <span>Sweepstakes</span>
                </a>
                <div class="col-10 nav-items-wrapper d-flex align-items-center justify-content-end">
                    <ul>
                        <li>
                            <a href="index.php#games">GAMES</a>
                        </li>
                        <li class="rounded">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#contactModal">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <!-- Modal -->
    <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content position-relative">
                <img src="assets/img/yellow-box.png" alt="" class="box">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">

                    <div class="header mb-4"><img src="assets/img/write-to-us.png" alt="">
                        <p class="font-32 font-primary">We'd love to hear from you</p>
                    </div>
                    <form action="">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="">First Name</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="">Last Name</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="">Email Id</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="">Phone Number</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-1 G2 form-group">
                                    <label for="">Leave us a message</label>
                                    <div class="input-group">
                                        <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="col-12 btn-wrapper">
                                    <input type="submit" class="btn custom-btn primary full-width font-20 fw-bold" value="Send message">
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="container mt-40">
                        <div class="row">
                            <div class="info col-12">
                                <p class="mb-0">
                                    <a href="#" class="font-36 font-primary text-primary">info@sweepstakes.com</a>
                                </p>
                                <p>
                                    <a href="#" class="font-36 font-primary text-secondary">+977 9818445068</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>