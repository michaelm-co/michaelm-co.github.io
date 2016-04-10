/*
$(document).ready(function(){
  $('.slider').slick();
});
*/

$('.slider-caption').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 swipe: true,
 fade: true,
 touchThreshold: 1,
 asNavFor: '.slider-pane'
});
$('.slider-pane').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 swipe: true,
 speed: 200,
 touchThreshold: 1,
 asNavFor: '.slider-caption',
 focusOnSelect: true
});
