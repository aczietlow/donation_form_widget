$(document).ready(function(){
	var money = 25.00;
	$('.slider').slider({
		min: 0,
		max: 100,
		value: 50,
		slide: function(event, ui) {
			var idName = $(this).attr('id');
			$('.' + idName).val( ui.value );
			updateSlider( ui.value, idName );
		}
			});
	$('.alug').val( $('.slider').slider('value') );
	$('.hack-augusta').val( $('.slider').slider('value') );
	
	
	function updateSlider(value, idName) {
		$('.test').html( (value/100) * money );
		var averageValue = 100 - value;
		if (idName == 'alug') {
			var value = $('#hack-augusta').slider('value');
			$('#hack-augusta').slider('value', averageValue);
		}
		
	}
});
