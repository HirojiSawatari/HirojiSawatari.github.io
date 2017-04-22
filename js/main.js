$(document).ready(function() {

  $('a.blog-button').click(function() {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    $('.panel-cover').addClass('animated panel-cover--collapsed slideInLeft');
    $('.content-wrapper').addClass('animated slideInLeft');
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (window.location.pathname != "/") {       // if hexo in subdir of site, should change this line
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu').click(function() {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    // $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  if($(".instagram").length) {
    require(['/js/photo.js', '/js/jquery.fancybox.js', '/js/jquery.lazyload.js'], function(obj) {
      obj.init();
    });
  }

  $(function(){
    $(".fancybox").fancybox();
  })

  $(".suspend").mouseover(function() {
	$(this).stop();
    $(this).animate({width: 120}, 400);
  })
	
  $(".suspend").mouseout(function() {
	$(this).stop();
    $(this).animate({width: 40}, 400);
  });
  
  $(function(){
    var THRESHOLD = 50;
    var $top = $('.back-to-top');
    $(window).on('scroll', function () {
      $top.toggleClass('back-to-top-on', window.pageYOffset > THRESHOLD);
    });

    $top.on('click', function () {
      $('body').velocity('scroll');
    });
  })
  
  $(function(){
    var THRESHOLD = 50;
    var $top = $('#rocket-to-top');
    $(window).on('scroll', function () {
      $top.toggleClass('rocket-to-top-on', window.pageYOffset > THRESHOLD);
    });

    $top.on('click', function () {
      var a = $(this),
        c = $(this).find("svg"),
        d = c.offset(),
        e = $(document).scrollTop();
        c.css({
            top: d.top - e -7 + "px",
            left: d.left -7 + "px"
        }),
        a.addClass("flying"),
        c.animate({
            top: -50
        },
        500,
        function() {
            a.removeClass("flying"),
            c.removeAttr("style")
        }),
        $('html,body').animate({
            scrollTop: 0
        },
        500
        )
    });
  })
  
});
