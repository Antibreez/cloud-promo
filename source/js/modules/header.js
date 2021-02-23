(function() {
  const headerBar = document.querySelector('.header__bar-mobile');

  let isScrolled = window.pageYOffset > 100;

  const showHeader = function() {
    !headerBar.classList.contains('opened')
    && headerBar.classList.add('opened');
  }

  const hideHeader = function() {
    headerBar.classList.contains('opened')
    && headerBar.classList.remove('opened');
  }

  const onScroll = function() {
    if (!isScrolled && window.pageYOffset > 100) {
      showHeader();
      isScrolled = true;
    }

    if (isScrolled && window.pageYOffset < 100) {
      hideHeader();
      isScrolled = false;
    }
  }

  if (isScrolled) {
    showHeader();
  }

  document.addEventListener('scroll', onScroll);
})();
