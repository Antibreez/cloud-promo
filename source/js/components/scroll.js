(function() {
  $("a.header__nav-link").click(function() {
    var elementClick = $(this).attr('href');
    var destination = $(elementClick).offset().top - 80;
    $('html, body').animate({scrollTop: destination}, 400);

    $(this).parents('.header__bar').removeClass('js-opened');
    return false;
  });

  $(window).scrollTop() > 800
      ? $('.to-top').addClass('show')
      : $('.to-top').removeClass('show');

  $(window).scroll(function() {
    $(this).scrollTop() > 800
      ? $('.to-top').addClass('show')
      : $('.to-top').removeClass('show');
  });

  $('.to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 400);
  });
})();
