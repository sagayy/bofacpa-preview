// JavaScript Document

// JavaScript Document


function goTop(){
	$('html,body').animate({'scrollTop':0},600); //婊氬洖椤堕儴鐨勬椂闂达紝瓒婂皬婊氱殑閫熷害瓒婂揩~
}




$(function(){
	
// 电脑端导航
      $('.header .nav li').hover(function () {
        $(this).find('.menu-pub').stop().slideDown();
    }, function () {
        $(this).find('.menu-pub').stop().slideUp();
    });
	
	 $(".wap_nav_sw li").click(function(){
	$(this).toggleClass('active');
	$(this).siblings().removeClass('active'); 
  });
  
  // 手机端导航
 $(".wap_nav").click(function(){
 	 $("body").toggleClass("fix");
 	$(".wap_nav span:nth-child(1)").toggleClass("first-rotate");
 	$(".wap_nav span:nth-child(2)").toggleClass("mid-width");
 	$(".wap_nav span:nth-child(3)").toggleClass("last-rotate");
 	$(".wap_nav_sw").toggleClass("header-show");
 });

  $(".pub_pub #pub_lt li a.href").click(function(){
    $(this).parent().toggleClass('cur');
    $(this).parent().siblings().removeClass('cur');
  });
  // $(".pub_pub #pub_lt li").click(function(){
  // 	$(this).toggleClass('cur');
  // 	$(this).siblings().removeClass('cur');
  // });
   
  // 联络我们
  
    $(".cont_lt .list .one h2").click(function(){
	$(this).parent().toggleClass('cur');
	$(this).parent().siblings().removeClass('cur'); 
  });
  
 
  
  // 招聘滑动门
  
 $(".work .ck_ck_work em").click(function(){
 	$(this).toggleClass('cur');
 	$(this).siblings().removeClass('cur'); 
 	var index=$(this).index()
 	$(".work .ck_ck_sw .list").removeClass('cur'); 
 	$(".work .ck_ck_sw .list").eq(index).addClass('cur'); 
 });
 
 
 // 招聘显示隐藏
  
 $(".work .ck_ck_sw .one .name").click(function(){
 	$(this).parent().toggleClass('cur');
 	$(this).parent().siblings().removeClass('cur'); 
 });
  
   $(".header .top .ck_lan .ck_ck").click(function(){
    $(".header .top .ck_lan ul ").slideToggle("slow");
	$(this).toggleClass('cur');
  });
  
  

$(function(){

var nav=$(".header"); //寰楀埌瀵艰埅瀵硅薄
var cc=$(".header").height(); //寰楀埌瀵艰埅瀵硅薄
var win=$(window); //寰楀埌绐楀彛瀵硅薄

var sc=$(document);//寰楀埌document鏂囨。瀵硅薄銆�

win.scroll(function(){

if(sc.scrollTop()>=cc){

nav.addClass("fix");
}else{

nav.removeClass("fix");
}

});
});

});


  var documentElement = document.documentElement;
    function callback() {
        var clientWidth = documentElement.clientWidth;
        // 屏幕宽度大于780，不在放大
        clientWidth = clientWidth < 640 ? 640 : clientWidth;
        documentElement.style.fontSize = clientWidth / 10 + 'px';
    }
  
    document.addEventListener('DOMContentLoaded', callback);


  