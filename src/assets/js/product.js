(function() {
  'use strict';

  var selectedSize = '';

  activate();

  function activate() {
    var buttonAddToCart = document.getElementById('addToCart'),
      productSizeSelect = document.getElementById('productSizeSelect');

    buttonAddToCart.addEventListener('click', onClickButtonAddToCart);
    productSizeSelect.addEventListener('change', onChangeProductSizeSelect)
  }

  function onChangeProductSizeSelect() {
    var elm =  this;
    selectedSize = elm.value;
    if (elm.classList.contains('custom-error'))
      elm.classList.remove('custom-error')
  }

  function onClickButtonAddToCart() {
    var elm =  this,
      promise,
      addingClass = 'product__addToCartBtn--adding',
      finishClass = 'product__addToCartBtn--finishing';

    if (selectedSize === '')
      return document.getElementById('productSizeSelect').classList.add('custom-error');

    if (!elm.classList.contains(addingClass) && !elm.classList.contains(finishClass)) {
      promise = new Promise(function(resolve, reject) {
        elm.classList.add(addingClass);
        setTimeout(function() {
          resolve('Done.')
        }, 1500);
      }).then(function() {
        elm.classList.remove(addingClass);
        elm.classList.add(finishClass);
        setTimeout(function() {
          elm.classList.remove(finishClass);
        }, 1500);
      })
    }
  }
})();
