$(document).ready(function(){

  $('.close').click(function(){
    $(this).parent().parent().parent().slideUp();
  });

  //설문조사
  $('.btn').click(function(){
    $(this).parent().parent().parent().slideUp();
    $('#survey').delay(700).slideDown();
  });

  //설문조사 완료
  $('#survey .btn-large').click(function(){
    $(this).parent().parent().parent().slideUp();
    $('#thank').delay(1000).slideDown();
  });
});
