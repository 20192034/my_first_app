function calculateBmi() {
	let weight = $('#weight').val();
	// var weight = document.bmiForm.weight.value
	
	let height = $('#height').val();
	
	
	if(weight > 0 && height > 0){	
		var finalBmi = weight/(height/100*height/100)
		
		//document.bmiForm.bmi.value = finalBmi;
		$('#bmi').val(finalBmi);
		
		switch(true){
			case(finalBmi < 18.5):
				$('#meaning').val("That you are too thin.");
				break;
			case(finalBmi > 18.5 && finalBmi < 25):
				$('#meaning').val("That you are healthy.");
				break;	
			default:	
				$('#meaning').val("That you have overweight.");
		}
	}
	else{
		$("#meaning").html("<strong>please enter valid details")
	}
}