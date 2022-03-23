$(document).ready(function(){

    //捲動到好吃的秘訣
    $('.go-feature').click(function(){
        $("html,body").animate({scrollTop: $("#feature").offset().top}, 1000);
     });
    
    //捲動到主廚
    $('.go-main-chef').click(function(){
        $("html,body").animate({scrollTop: $("#main-chef").offset().top}, 1000);
     });

    //捲動到地圖
    $('.go-contact').click(function(){
        $("html,body").animate({scrollTop: $("#contact").offset().top}, 1000);
     });

    //菜單頁愛心 / 空心實心切換
    $('.fa-heart').click(function(){
        $(this).toggleClass('fa-solid');
    });

    //手機漢堡按鈕
    $('.menu-btn').click(function(event){
        event.preventDefault();
        $('.mobile-menu').slideToggle();
        $('.header').toggleClass('close');
    });


    //至頂按鈕向上捲
    $('.gotop').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:0},800);
    });
    //至頂按鈕淡入淡出
    function showBtnCondition() {
        if ($(this).scrollTop() > 400) {
          $('#gotop').fadeIn();
            } else {
             $('#gotop').fadeOut();
           }
         }
     $(window).scroll(showBtnCondition);
});
