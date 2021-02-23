(function() {
  const headerBar = document.querySelector('.header__bar-mobile');

  let isScrolled = window.pageYOffset > 100;

  const onScroll = function() {
    if (!isScrolled && window.pageYOffset > 100) {
      headerBar.classList.add('opened');
      isScrolled = true;
    }

    if (isScrolled && window.pageYOffset < 100) {
      headerBar.classList.remove('opened');
      isScrolled = false;
    }
  }

  document.addEventListener('scroll', onScroll);
})();
