const multipy = require('./multiplier.js');

class ViewManager {

	connectEventHandlers() {
		document.getElementById('form-numbers')
			.addEventListener(
				'submit', 
				this.onSubmit.bind(this));
	}
	
	newFactorClick() {
		document.getElementById('newFactor')
			.addEventListener(
				'submit',
				function() {
					createNewFactorInput();
				});
	}
	

	onSubmit(event) {
		event.preventDefault();

		let num1 = document.getElementById('input-num1').value;
		let num2 = document.getElementById('input-num2').value;

		num1 = parseInt(num1, 10);
		num2 = parseInt(num2, 10);

		const product = multipy(num1, num2);

		this.renderProduct(product);
	}

	renderProduct(product) {
		document.querySelector('.mult').textContent = product;
	}

	
	createNewFactorInput () {
		document.getElementById("newFactors").innerHTML = "<div> <input id='input-num3' type='text' autocomplete='off' /> </div>"
	}
		
	/*
	//https://www.sanwebe.com/2013/03/addremove-input-fields-dynamically-with-jquery
	$(document).ready(function() {
		var wrapper = $("#newFactors"); //Fields wrapper
		var add_button = $("#newFactor"); //Add button ID
		$(add_button).click(function(e){ //on add input button click
			e.preventDefault();
			$(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
		});
	});
	*/
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
viewManager.newFactorClick();