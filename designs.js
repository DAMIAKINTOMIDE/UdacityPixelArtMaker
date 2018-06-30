// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
			
	$('#button').click(function(){
	
		var input_height =	$('#inputHeight').val();
		var input_Weight =	$('#inputWeight').val();

		$('table').remove();
		//alert(input_Weight);
		for (var i = 0; i<input_height; i++) {
			
				$('<table id="pixelCanvas'+(i+1)+'"><tr id="pixelcanvas_row"></tr></table>').insertAfter('#here');

			for (var j = 0; j<input_Weight; j++) {

				$('#pixelcanvas_row').append('<td id="box'+(j+1)+'"></td>');
				

			$('#box'+(j+1)).click(function(){

				var colorPicker =  $('#colorPicker').val();
				//alert(colorPicker);
				//$(this).css('background-color',colorPicker);
			if ($(this).attr('style')) {
				$(this).removeAttr('style');

			}else{

				$(this).css('background-color',colorPicker);
			}

		});
	
			}
		}


	});

}

// this makegrid_def function is for the default grid 
function makeGrid_def(input_height, input_Weight) {
			
		$('table').remove();
		//alert(input_Weight);
		for (var i = 0; i<input_height; i++) {
			
				$('<table id="pixelCanvas'+(i+1)+'"><tr id="pixelcanvas_row"></tr></table>').insertAfter('#here');

			for (var j = 0; j<input_Weight; j++) {

				$('#pixelcanvas_row').append('<td id="box'+(j+1)+'"></td>');
				

			$('#box'+(j+1)).click(function(){

				var colorPicker =  $('#colorPicker').val();
				//alert(colorPicker);
				//$(this).css('background-color',colorPicker);
			if ($(this).attr('style')) {
				$(this).removeAttr('style');

			}else{

				$(this).css('background-color',colorPicker);
			}

		});
	
			}
		}
	

}

// the if else statement is to check if the radio button is checked by default or not
if ($('input:radio').attr('checked')) {
 	$('input[name=color]:nth(0)').attr('checked', true);
			$('input[name=color]:nth(1)').attr('checked', false);
			makeGrid();
}else{
	$('#pixelCanvas_btn').click(function(){
			$('input[name=color]:nth(0)').attr('checked', true);
			$('input[name=color]:nth(1)').attr('checked', false);
			makeGrid();
		});
}

// for when the default radio button is clicked on.
 $('#pixelCanvas_btnbx').click(function(){
			$('input[name=color]:nth(1)').attr('checked', true);
			$('input[name=color]:nth(0)').attr('checked', false);
			$('table').remove();
			makeGrid_def(10,10);
		});

	