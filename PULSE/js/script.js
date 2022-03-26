$(document).ready(function(){
    /* script for carousel */
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevronLeft.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevronRight.png"></button>',
        
    });

    /* script for tabs */
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    

    function toggleSlide(item) {
      $(item).each(function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });

    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    /* modal windows */

    $('[data-modal=consultation]').on('click', function(){
      $('.overlay, #consultation').fadeIn('slow');


    });

    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');

    });


    $('.button_mini').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });

    /* VALIDATION OF FORMS */

    function validateForms(form){// функция валидации

      $(form).validate({
        rules: {
          name:"required",
          phone:"required",
          email: {
            required: true,
            email: true
          }
  
        }
      });

    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    /* MaskedInput */

    $('input[name=phone]').mask("+38 (999) 999-9999");

    /* Работа с отправкой формы с сервера на почту */

    $('form').submit(function(e){
      e.preventDefault();//предотвратить стандартное поведение браузера в данному случае обновление после нажатия сабмита

      if(!$(this).valid()){//если поля в инпутах пустые то они не отправятся 
        return;
      }

      $.ajax({// реализация отправки данных
        type: "POST",
        url: "../mailer/smart.php",
        data: $(this).serialize()

      }).done(function() {
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset');
      });
      return false;
    });

    /* Плавный скролл и кнопка вверх */

    $(window).scroll(function(){
      if($(this).scrollTop() > 1600){

        $('.pageup').fadeIn();

      } else{
        $('.pageup').fadeOut();
      }

    });

    /* Скрипт плавной прокрутки сайта */

    $("a[href=#up]").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    /* подключение библиотеки для анимаций. Работает в связке с animate.css */

    new WOW().init();



    



});