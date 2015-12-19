$(document).ready(function() {

	// Back to top scroll effect
	$("#back-to-top a[href^='#']").on('click', function(e) {
	   e.preventDefault();
	   var hash = this.hash;

	   $('html, body').animate({
	       scrollTop: $(this.hash).offset().top -50
	     }, 700, function(){

	       window.location.hash = hash;
	     });
	});

	// Images Gallery
  	$('.image-link').magnificPopup({
  		type:'image',
  		mainClass: 'mfp-with-zoom',
  		gallery:{
		    enabled:true
		},
		zoom: {
			enabled:true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
  	});
});