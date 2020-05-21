
$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.toggle('modal--visible');
    }
  };
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  })

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left',prev.width() + 10)

  new WOW().init();

  // Валидация формы
  $('.modal__form').validate({
    rules: {
      // simple rule, converted to {required:true}
      userName: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    }
  })

});
