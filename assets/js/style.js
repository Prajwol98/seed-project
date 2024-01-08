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
  //responsive navbar
  $("#ham-menu").click(function () {
    $(".sidebar").toggleClass("show");
    $("#ham-menu").toggleClass("show");
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
  $("#lightgallery").lightGallery({
    selector: ".item"
  });
  $(".certification-carousel").owlCarousel({
    loop: false,
    items: 1,
    margin: 20,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 4
      }
    },
    navText: [
      '<svg viewBox="0 0 24 24" width="24" height="24" stroke="#0d5ba4" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="15 18 9 12 15 6"></polyline></svg>',
      '<svg viewBox="0 0 24 24" width="24" height="24" stroke="#0d5ba4" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="9 18 15 12 9 6"></polyline></svg>',
    ]
  });
})(jQuery);
