(function() {
  const filters = document.querySelector('.catalog__filters-list');

  // const allRadio = document.querySelector('.catalog__filters-radio[value="all"]');
  // const daichiRadio = document.querySelector('.catalog__filters-radio[value="daichi"]');
  // const daikinRadio = document.querySelector('.catalog__filters-radio[value="daikin"]');
  // const boschRadio = document.querySelector('.catalog__filters-radio[value="bosch"]');
  // const mideaRadio = document.querySelector('.catalog__filters-radio[value="midea"]');

  const cards = document.querySelectorAll('.catalog__item');

  const radios = document.querySelectorAll('.catalog__filters-radio');

  // const findCheckedBrand = function() {
  //   let brand = '';
  //   radios.forEach(function(radio) {
  //     if (radio.checked) {
  //       brand = radio.getAttribute('value');
  //     }
  //   });

  //   return brand;
  // };

  const showCard = function(card) {
    if (card.classList.contains('hidden')) {
      card.classList.remove('hidden');
    }
  };

  const hideCard = function(card) {
    if (!card.classList.contains('hidden')) {
      card.classList.add('hidden');
    }
  };

  const showAllCards = function() {
    cards.forEach(function(card) {
      showCard(card);
    })
  };

  // const hideAllCards = function() {
  //   cards.forEach(function(card) {
  //    hideCard(card);
  //   })
  // };

  const renderCards = function(brand) {
    if (brand === 'all') {
      showAllCards();
    } else {
      showAllCards();
      cards.forEach(function(card) {
        if (card.getAttribute('data-brand') !== brand) {
          hideCard(card);
        }
      })
    }
  };

  const onRadioChange = function(e) {
    const brand = e.currentTarget.getAttribute('value');
    renderCards(brand);
  };

  radios.forEach(function(radio) {
    radio.addEventListener('change', onRadioChange);
  });


  $('.catalog__select-block select').change(function() {
    const text = $(this).children('option:selected').text();
    const value = $(this).val();
    $(this).parent().prev().text(text);

    $('.catalog__item').addClass('hidden')
    $('.catalog__item[data-brand=' + value + ']').removeClass('hidden');

  })

})();
