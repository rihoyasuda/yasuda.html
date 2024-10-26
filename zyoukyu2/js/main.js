$(function(){

$('.hamburger').on('click', function(){
  hamburger();
});
$('#navi a').on('click', function(){
  hamburger();
});

/*----------------------
　　　スムーススクロール
-----------------------*/

$('a[href^="#"]').click(function(){
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top;
  $("html,body").animate({scrollTop:position}, 600, "swing");
  return false;
});

/*---------------------
　　　フェード表示
----------------------*/

$('.inview').on("inview", function (event, isInView){
  if (isInView) {
    $(this).stop().addClass("show");
  }
});

/*--------------------
　スクロール時のイベント
---------------------*/

$(window).scroll(function(){
  let scroll = $(window).scrollTop();
  mv_scale(scroll);
  if (scroll > 520) {
    $('.logo').fadeIn(500);
    $('.hamburger').fadeIn(500);
  } else {
    $('.logo').fadeOut(500);
    $('.hamburger').fadeOut(500);
  }

  /*------------------
  　　　サイドボタン
  -------------------*/

  let gallery_position = $('#gallery').offset().top - $(window).height();
  let access_position = $('#access').offset().top - $(window).height();
  if (window.innerWidth > 900) {
    if (scroll > gallery_position) {
      if (scroll < access_position) {
        $('#side-btn').css({
          'transform': 'rotate(-90deg) translateY(0)'
        });
      } else {
        $('#side-btn').css({
          'transform': 'rotate(-90deg) translateY(60px)'
        });
      }
    } else {
      $('#side-btn').css({
        'transform': 'rotate(-90deg) translateY(60px)'
      });
    }
  }

  /*--------------------
  　　アクセス背景画像
  --------------------*/

  let contact_position = $('#contact').offset().top - $(window).height();
  if (scroll > access_position) {
    if (scroll < contact_position) {
      $('.bg').fadeIn(500);
    } else {
      $('.bg').fadeOut(500);
    }
  } else {
    $('.bg').fadeOut(500);
  }
});

$(window).on('load resize', function() {
  let scroll = $(window).scrollTop();
  mv_scale(scroll);
});
});

function hamburger() {
  $('.hamburger').toggleClass('active');
  if($('.hamburger'),hasClass('active')) {
    $('#navi').addClass('active');
  } else {
    $('#navi').removeClass('active');
  }
}

function mv_scale(scroll) {
  if (window.innerWidth > 900) {
    $('#mainvisual img').css({
      'width': 100/3 + scroll/10 + '%'
    });
  } else {
    $('#mainvisual img').css({
      'width': 100 - scroll/10 + '%'
    });
  }
}