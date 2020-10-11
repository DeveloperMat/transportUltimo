$(document).ready(function(){
  $.fatNav();



$(function(){
    $('.nav-item a').on('click', function(){
       $('.nav-item a.active').removeClass('active');
     //  $('.nav-item a').removeClass('active-border');
       $(this).addClass('active');
       //$(this).addClass('active-border');
    });
});

$('.text1,.text2,.text3,.text4').hide();

$('.title1,#p1').click(function(){
  $('.text1').toggle('5000');
  $('#p1').toggleClass('active-accordion');
  $('.icon1').toggleClass('up');
});

$('.title2,#p2').click(function(){
    $('.text2').toggle('5000');
    $('#p2').toggleClass('active-accordion');
    $('.icon2').toggleClass('up');
  });
  $('.title3,#p3').click(function(){
    $('.text3').toggle('5000');
    $('#p3').toggleClass('active-accordion');
    $('.icon3').toggleClass('up');
  });
  $('.title4,#p4').click(function(){
    $('.text4').toggle('5000');
    $('#p4').toggleClass('active-accordion');
    $('.icon4').toggleClass('up');
  });
  
});