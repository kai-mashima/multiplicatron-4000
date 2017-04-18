const multipy = require('./multiplier.js');

class ViewManager {

	connectEventHandlers() {
		document.getElementById('form-numbers')
			.addEventListener(
				'submit', 
				this.onSubmit.bind(this));
	}
	
	newFactorClick() {
		document.getElementById('newFactor').onclick = function () {
			var target = document.getElementById("newFactors");
			var newDiv = document.createElement('div');
			var newInput = document.createElement('input');
			newInput.class = "input-num";
			newInput.type = "text";
			newInput.autocomplete = "off";
			target.appendChild(newDiv);
			newDiv.appendChild(newInput);
		}
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

	
	createNewFactorInput() {
		var inputCount = 3;
		document.getElementById("newFactors").innerHTML = "<div> <input id='input-num" + inputCount + "' type='text' autocomplete='off' /> </div>";
		inputCount += 1;
	}

	getInputElements() {
    	console.log(document.querySelectorAll("input.input-num"));
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
viewManager.getInputElements();