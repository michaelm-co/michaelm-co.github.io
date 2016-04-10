/*
$(document).ready(function(){
  $('.slider').slick();
});
*/

$('.slider-caption').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slider-pane'
});
$('.slider-pane').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 speed: 200,
 asNavFor: '.slider-caption',
 focusOnSelect: false
});
