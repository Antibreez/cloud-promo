(function() {
  $('.questions__item-top').click(function() {
    $(this).toggleClass('opened');
    $(this).next().slideToggle();
  });
})();
