(function() {
  $('.mobile-control-mobile__item-top').click(function() {
    const $openedItem = $('.mobile-control-mobile__item-top.opened');
    if ($openedItem[0] !== $(this)[0]) {
      $openedItem.removeClass('opened');
      $openedItem.next().hide();
    }

    $(this).toggleClass('opened');
    $(this).next().slideToggle();
  });
})();
