$(function(){

  // console.log($(window).height());

  $(window).scroll(function(){
    //console.log($(this)); // scrollTop을 알아보기위해서 해본것!
    // console.log($(this).scrollTop());
    var winHeight = $(window).height();
    var scTop = $(this).scrollTop();

    var navBar = $('nav');
    // navBar.addClass('fixed')
    // console.log(navBar);

    // console.log(`window-height: ${winHeight}, scroll-top: ${scTop}`);
    if(scTop > winHeight - 30){
      // console.log('메뉴 고정');
      navBar.addClass('fixed');
    }else{
      // console.log('메뉴 고정해제');
      navBar.removeClass('fixed');
    }
  });

});



















//
