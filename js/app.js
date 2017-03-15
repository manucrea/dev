$(document).foundation();

var elementPosition = $('#navigation').offset();

$(window).scroll(function(){
  if($(window).scrollTop() > elementPosition.top){
    $('#navigation').addClass('fixed');
  } else {
    $('#navigation').removeClass('fixed');
  }    
});

var wow = new WOW({
  boxClass: 'wow',
  animateClass: 'is-animating'
}).init();