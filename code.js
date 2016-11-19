$(function(){
	console.log("Ready!");

	$.fn.focus = function() {
		$('.naamVerplicht').addClass('hidden');
	}

	$.fn.blur = function() {
		$('.naamVerplicht').removeClass('hidden');
	}
});

function OnSubmit(event) {
  var animal = {
  	'species':  $('input[name=TypeDier]:checked').val(),
  	'name':     $('#Naam').val(),
  	'age':      $('#Leeftijd').val(),
  	'regnr':    $('#RegNr').val(),
  	'reserved': $('#Gereserveerd').is(':checked')
  };

  console.log(animal);
  event.preventDefault();
}
$('#submit').click(OnSubmit());