$(function(){
	console.log("Ready!");

	$.fn.focus = function() {
		$('.naamVerplicht').addClass('hidden');
	}

	$.fn.blur = function() {
		$('.naamVerplicht').removeClass('hidden');
	}
});

$(function() {
	console.log('Pagina geladen, DOM klaar voor gebruik.');
	$('#submit').click(OnSubmit);
});

function OnSubmit(event) {
  event.preventDefault();

  var animal = {
  	'species':  $('input[name=TypeDier]:checked').val(),
  	'name':     $('#Naam').val(),
  	'age':      $('#Leeftijd').val(),
  	'regnr':    $('#RegNr').val(),
  	'reserved': $('#Gereserveerd').is(':checked')
  };

  console.log($('#Naam').val());
  console.log(animal.name);
  console.log(animal); 
  

  console.log(document.getElementById('Naam').value+"!!");
}

