(function() {
  $('.questions__item-top').click(function() {
    console.log($(this)[0]);
    $(this).toggleClass('opened');
    $(this).next().slideToggle();
  });
})();
