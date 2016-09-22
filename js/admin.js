$(document).ready(function(){
  $('#sidebar a').click(function(){
    $('#sidebar a').removeClass('active');
    $(this).addClass('active');
  });

  ('.tooltipped').tooltip({});

  $('ul.tabs').tabs();
})
