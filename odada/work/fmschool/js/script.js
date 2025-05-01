  $(document).ready(function() {
//검색
$('.search_btn').click(function(){
  $('.search_layer').show();
  $('.m_search_bg').fadeIn();

});
$('.search_con .close_btn').click(function(){
  $('.search_layer').hide();


})
$('.search_layer .m_search_btn, .m_search_bg').click(function(){
  $('.search_layer').hide();
$('.m_search_bg').fadeOut();

})

//메인 서브메뉴
$('.menu_btn').click(function(event){

var width = $(window).width();
if(width>800){
  if($('.side_menu').is(':visible')){
    $('.side_menu').hide();
    $('.min_side').show();

  }else{
    $('.side_menu').show();
    $('.min_side').hide();
  }


}else{
    $('.side_menu').animate({'left':'0'});
    $('.m_side_bg').fadeIn();
    $('body').addClass('no_scroll');


        $('.m_side_bg').on('scroll touchmove mousewheel', function(event){
           event.preventDefault();
           event.stopPropagation();
           return false;
         });

}


});




$('.m_side_btn,.m_side_bg').click(function(){
  $('.side_menu').animate({'left':'-300px'});
  $('.m_side_bg').fadeOut();
  $('body').removeClass('no_scroll');


})

$('.drop_btn').click(function(){
  if($('.drop_menu').is(':visible')){
    $('.drop_menu').slideUp();
  }else{
    $('.drop_menu').slideDown();
  }
});






var side_li = $('.side_menu>ul>li');
var li_btn = $('.drop_menu1>li');
side_li.click(function(){
side_li.removeClass('on2');
  $(this).addClass('on2');
});


li_btn.click(function(){
if($(this).find('.drop_menu2').is(':visible')){
  $(this).removeClass('on');
  $(this).find('.drop_menu2').slideUp();
}else{
  $(this).addClass('on');

  $(this).find('.drop_menu2').slideDown();
  }
});

//유효성검사
var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일/
var regex =/^(?=.{10})(?:[0-9a-zA-Z]*[!$#%]){2}[a-z\d!$#%]*$/i;//비밀번호
var regeO = RegExp(/^[A-Z]{8}$/);



//팝업 닫기
$('.pop_layer .close, .pop_btn').click(function(){
  $('.pop_layer').hide();
  $("body").removeClass('active');

});

$('.pop_terms_btn').click(function(){
  $("body").addClass('active');
  $('.ft_pop_chd01').show();
});

//푸터 팝업
$('.pop_privacy_btn').click(function(){
  $("body").addClass('active');
  $('.ft_pop_chd02').show();
});

//검색창

$('.tag_btn').click(function(){
  $('.main_search_in').val($(this).val());

});




//탑 버튼 10/8 추가

$(window).scroll(function(){
  if($(this).scrollTop()>100){
    $('#up_btn').fadeIn();
  }else{
    $('#up_btn').fadeOut();
  }
});

$('#up_btn').click(function(){
  $('html, body').animate({scrollTop: 0}, 400);
  return false;

});

//모바일 어플 다운 팝업 10/14 추가

$(window).scroll(function(){
  if($(window).width()<=800){
        var scrollTop = $(window).scrollTop();
        var innerHeight = $(window).height();
        var scrollHeight  = $(document).height();
        if (scrollTop + innerHeight >= scrollHeight) {
            $('.m_app_bg').fadeIn();
            $('.m_app').show();
        }
      }
});

$('.pop_app_close ').click(function(){
  $('.m_app_bg').fadeOut();
  $('.m_app').hide();

});

//아로 11/18 추가 

$(window).scroll(function(){

  if($(this).scrollTop()>0){
    $('#hd').addClass('fix_hd');
    $('.side_menu_wrap').addClass('fix_menu');


  }else{
    if($(this).scrollTop()<0){
      $('.event_wrap').hide();
    }

    $('.event_wrap').show();

    $('#hd').removeClass('fix_hd');
    $('.side_menu_wrap').removeClass('fix_menu');


  }

});
$('.event_btn_clsoe').click(function(){
  $('.event_wrap').hide();
});

//아로 11/18 추가 끝

});
