$(document).ready(function(){
	var money = 25.00;
	$('.slider').slider({
		min: 0,
		max: 100,
		value: 10,
		slide: function(event, ui) {
			$('.amount').val( ui.value );
			updateSlider( ui.value );
		}
			});
	$('.amount').val( $('.slider').slider('value') );
	
	
	function updateSlider(value) {
		$('.test').html( (value/100) * money );
	}
});
