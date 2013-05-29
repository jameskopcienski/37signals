$(document).ready(function() {
  
  $('#badgeleft').on('mouseenter', function() {
    event.preventDefault();
    $('#headlines').html($('#leftheadlines').html());
    $('#headlines h1').addClass('h1small');
    $('#headlines h2').addClass('h2small');
    $('#headlines img').addClass('arrowleft');
  }).on('mouseleave', function(){
    event.preventDefault();
    $('#headlines').html($('#mainheadlines').html());
  });

  $('#badgeright').on('mouseenter', function() {
    event.preventDefault();
    $('#headlines').html($('#rightheadlines').html());
    $('#headlines h1').addClass('h1small');
    $('#headlines h2').addClass('h2small');
    $('#headlines img').addClass('arrowright');
  }).on('mouseleave', function(){
    event.preventDefault();
    $('#headlines').html($('#mainheadlines').html());
  });

  $('#badgecenter').on('mouseenter', function() {
    event.preventDefault();
    $('#headlines').html($('#centerheadlines').html());
    $('#headlines h1').addClass('h1small');
    $('#headlines h2').addClass('h2small');
    $('#headlines img').addClass('arrowcenter');
  }).on('mouseleave', function(){
    event.preventDefault();
    $('#headlines').html($('#mainheadlines').html());
  });

});