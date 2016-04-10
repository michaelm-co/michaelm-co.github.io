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
 swipeToSlide: true,
 fade: true,
 asNavFor: '.slider-pane'
});
$('.slider-pane').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 swipeToSlide: true,
 swipe: true,
 speed: 200,
 asNavFor: '.slider-caption',
 focusOnSelect: true
});
