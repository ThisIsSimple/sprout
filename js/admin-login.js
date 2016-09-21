$(document).ready(function(){
  $('#admin-page').hide();
  $('#admin-page').css("top", "164px");
  $('#admin-page').css("left", "100%");
  $('#toall').click(function(){
    $('#admin-page').show();
    $('#admin-page').animate({ "left" : "15%"}, 1000);
    $('#manager-page').animate({ "right" : "100%" }, 1000);
  });
  $('#toind').click(function(){
    $('#manager-page').show();
    $('#manager-page').animate({ "right" : "15%"}, 1000);
    $('#admin-page').animate({ "left" : "100%" }, 1000);
    $('#admin-page').hide();
  });
});
