(function ($) {
  setTimeout(() => {
    $(".pre-loader").hide();
  }, 1000);
  $('.pop-up').magnificPopup({
    type: 'iframe'
  });
  $(".welcome-banner-carousel").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    navText: ['<svg width="53" height="69" viewBox="0 0 53 69" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_260_80)"><path d="M42 54.5V14.5L14 34.5001L42 54.5Z" stroke="white" stroke-width="6" shape-rendering="crispEdges"/></g><defs><filter id="filter0_d_260_80" x="0.838623" y="0.670898" width="52.1614" height="67.6582" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_260_80"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_260_80" result="shape"/></filter></defs></svg>',
      '<svg width="53" height="69" viewBox="0 0 53 69" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_260_79)"><path d="M11 54.5V14.5L39 34.5001L11 54.5Z" stroke="white" stroke-width="6" shape-rendering="crispEdges"/></g><defs><filter id="filter0_d_260_79" x="0" y="0.670898" width="52.1616" height="67.6582" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_260_79"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_260_79" result="shape"/></filter></defs></svg>']
  });

  // mobile-burger-menu
  $(".mobile-burger-menu").click(function () {
    $(this).parents("header").find(".nav-items").addClass("show");
    $("body").addClass("sidebar-open");
    $(".home-banner-wrapper").css('z-index', -1);
    $(".top-listing-banner").css('z-index', -1);
    $(".detail-banner-wrapper").css('z-index', -1);
    $(".about-top-section").css('z-index', -1);
  });

  // close-mobile-nav
  $(".close-side-bar").click(function () {
    $(this).parent(".nav-items").removeClass("show");
    $("body").removeClass("sidebar-open");
    $(".home-banner-wrapper").css('z-index', -1);
    $(".top-listing-banner").css('z-index', -1);
    $(".detail-banner-wrapper").css('z-index', -1);
    $(".about-top-section").css('z-index', -1);
  });

  //initialize tooltip
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // returntotop
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      $("#return-to-top").show(200);
    } else {
      $("#return-to-top").hide(200);
    }
  });
  $("#return-to-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 1000);
  });

  // sticking the navbar
  $(function () {
    var header = $(".navbar-wrapper");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 20) {
        header.addClass("fixed-top");
      } else {
        header.removeClass("fixed-top");
      }
    });
  });
  //responsive navbar
  $("#custom-navbar-toggler").click(function () {
    $("header .menu").addClass("show");
  });
  $("#menuClose").click(function () {
    $("header .menu").removeClass("show");
  });
  $(".menu-toggler .search").on("click", function () {
    $(this).find("form").slideToggle(200);
  });
  $("#home-search").click(function () {
    $("header .menu").addClass("search-on");
    $("header .menu .search").addClass("extended");
    $(".search input").focus();
  });
  $("#search-close").click(function () {
    $("header .menu .search").removeClass("extended");
    $("header .menu").removeClass("search-on");
  });
  //expandable text
  $(".see-more-btn").click(function () {
    $(".expandable-text").toggleClass("expanded");
    if ($(".expandable-text").hasClass("expanded")) {
      $(".see-more-btn").text("Show less");
    } else {
      $(".see-more-btn").text("See more");
    }
    $("html, body").animate(
      {
        scrollTop: $(".expandable-text").offset().top - 200,
      },
      1000
    );
  });
  //pagination
  var $children = $("#pagination").children(".game-card-wrapper");
  display = 11;
  redraw();
  function redraw() {
    $.each($children, function (k, v) {
      if (k > display) {
        $(this).addClass("hidden");
      } else {
        $(this).removeClass("hidden");
      }
    });
  }
  $("#pagination #view-more").click(function () {
    display += display;
    if (display > $children.length) {
      $("#pagination #view-more").hide();
    }
    redraw();
  });

  $(".game-screenshot-carousel").owlCarousel({
    items: 4,
    margin: 10,
    dots: false,
    nav: false,
    loop: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 4,
      },
      600: {
        items: 6,
      },
      1000: {
        items: 8,
      },
    },
  });
  $(".pop-up").magnificPopup({
    type: "iframe",
  });
})(jQuery);
