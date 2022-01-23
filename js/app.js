"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var lg = 992;
  $('.js-menu-btn').on('click', function () {
    $(this).toggleClass('open');
    $('.hd, body').toggleClass('open');
  });
  var flag = 0;
  $('.js-dd-parent').hover(function () {
    if (pageWidth() > lg && flag == 0) {
      $(this).find('.js-dd-dn').stop();
      $(this).find('.js-dd-dn').slideDown(250);
      setTimeout(function () {
        flag = 0;
      }, 251);
    }
  }, function () {
    if (pageWidth() > lg) {
      $(this).find('.js-dd-dn').stop().slideUp(250);
    }
  });
  $('.js-dd-parent').on('click', function () {
    if (pageWidth() <= lg) {
      $(this).toggleClass('open');
      var target = $(this).find('.js-dd-dn');
      $(target).slideToggle();
    }
  });
  $(document).on('click', function (event) {
    if (pageWidth() <= lg) {
      var trigger = $('.js-dd-parent');

      if (trigger !== event.target && !trigger.has(event.target).length) {
        trigger.removeClass('open');
        $('.js-dd-dn').slideUp(250);
      }
    }

    ;
  });
  $('.js-cookie-btn').on('click', function () {
    $('.cookie').hide();
  });
  $('.tabs-nav li').on('click', function () {
    var tabItem = $(this).closest('.tabs').find('.tabs-list').first().children('.tab-item');
    $(this).closest('.tabs').find('.tabs-nav').first().find('li').removeClass('is-active');
    $(this).addClass('is-active');
    $(this).closest('.tabs').find('.tabs-list').first().children('.tab-item.is-active').removeClass('is-active');
    tabItem.eq($(this).index()).addClass('is-active');
  });
  $('.js-services-select').on('change', function () {
    var tabItem = $('.tab-item');
    tabItem.removeClass('is-active');
    tabItem.eq(this.value).addClass('is-active');
  });

  if ($('.js-personal-text-slider').length) {
    $('.js-personal-text-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $('.js-personal-num-current').text(i);
      $('.js-personal-num-total').text(slick.slideCount);
    });
    $('.js-personal-text-slider').slick({
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      rows: 0,
      appendArrows: '.personal-arrows',
      prevArrow: '.js-personal-arrow__prev',
      nextArrow: '.js-personal-arrow__next',
      asNavFor: '.js-personal-gallery-slider',
      dots: true,
      appendDots: '.personal-dots'
    });
    $('.js-personal-gallery-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.js-personal-text-slider',
      arrows: false,
      fade: true,
      rows: 0
    });
  }

  ;
  $('[data-modal]').on('click', function (evt) {
    evt.preventDefault();
    $('#' + $(this).data('modal')).modal({
      showClose: false,
      fadeDuration: 250
    });
  });
  imagesLoaded(document.documentElement, {
    background: true
  }, function () {
    document.querySelector('body').classList.remove('loading');
  });
});

function pageWidth() {
  return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth, window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth);
}

;