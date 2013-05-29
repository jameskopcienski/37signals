$(document).ready(function() {
  
  $('#badgeleft').on('mouseenter', function() {
    event.preventDefault();
    $('#holdheadlines').html($('#headlines').html());
    $('#headlines').html($('#leftheadlines').html());
    $('#headlines h1').addClass('h1small');
    $('#headlines h2').addClass('h2small');
    $('#headlines img').addClass('arrowleft');
  }).on('mouseleave', function(){
    event.preventDefault();
    $('#headlines').html($('#holdheadlines').html());
    $('#holdheadlines').html($('#leftheadlines').html());
});

  $('#badgeright').on('mouseenter', function() {
    event.preventDefault();
    $('#holdheadlines').html($('#headlines').html());
    $('#headlines').html($('#rightheadlines').html());
    $('#headlines h1').addClass('h1small');
    $('#headlines h2').addClass('h2small');
    $('#headlines img').addClass('arrowright');
 }).on('mouseleave', function(){
    event.preventDefault();
    $('#headlines').html($('#holdheadlines').html());
    $('#holdheadlines').html($('#rightheadlines').html());
 });

  $('#badgecenter').on('mouseenter', function() {
    event.preventDefault();
    $('#holdheadlines').html($('#headlines').html());
    $('#headlines').html($('#centerheadlines').html());
    $('#headlines h1').addClass('h1small');
    $('#headlines h2').addClass('h2small');
    $('#headlines img').addClass('arrowcenter');
  }).on('mouseleave', function(){
    event.preventDefault();
    $('#headlines').html($('#holdheadlines').html());
    $('#holdheadlines').html($('#centerheadlines').html());
 });

});