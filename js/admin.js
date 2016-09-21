$(document).ready(function(){
  $('#sidebar a').click(function(){
    $('#sidebar a').removeClass('active');
    $(this).addClass('active');
  });
  ('.tooltipped').tooltip({delay: 10, position: top});
  $(function() {

  $("#bars li .bar").each( function( key, bar ) {
    var number = $(this).data('number');

    $(this).animate({
      'height' : number*10 + 'px'
    }, 1000);
  });
});
})
