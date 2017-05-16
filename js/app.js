$(document).foundation();

var elementPosition = $('#navigation').offset();

// $(window).scroll(function(){
//   if($(window).scrollTop() > elementPosition.top){
//     $('#navigation').addClass('fixed');
//   } else {
//     $('#navigation').removeClass('fixed');
//   }    
// });

var wow = new WOW({
  boxClass: 'wow',
  animateClass: 'is-animating'
}).init();

$(window).load(function() {
	$('.blueberry').blueberry({
		hoverpause : true,
		duration   : 1000
	});
});

// $("#ventaBTN").click(function(){
//   $("#venta").toggleClass("active");
// });

// $(function() {
//   $('#va-accordion').vaccordion();
// });