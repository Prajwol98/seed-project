(function ($) {
  $(".pop-up").magnificPopup({
    type: "iframe",
  });

  // returntotop
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      $("#return-to-top").show(200);
    } else {
      $("#return-to-top").hide(200);
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

  //responsive navbar
  $(".close-btn").click(function () {
    $(".nav-items .wrapper").removeClass("show");
  });
  $(".ham-menu").click(function () {
    $(".nav-items .wrapper").addClass("show");
  });

  $("#return-to-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 1000);
  });

  //responsive navbar
  $("#ham-menu").click(function () {
    $(".sidebar").toggleClass("show");
    $("#ham-menu").toggleClass("show");
  });
})(jQuery);
