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
			newInput.className = "input-num";
			newInput.type = "text";
			newInput.autocomplete = "off";
			target.appendChild(newDiv);
			newDiv.appendChild(newInput);
		}
	}
	
	onSubmit(event) {
		//fix linked button functionality 
		event.preventDefault();
		var numbers = []; //array that holds input values
		var inputFields = document.querySelectorAll('input.input-num'); //grab all the input fields

		for (var i = 0; i < inputFields.length; i++) {
			var num = inputFields[i].value;
			if (num != "") { //if input value is empty do not add it to numbers array
				numbers.push(num); //add valid form input values to array
			}
		}

		//console.log(numbers);

		if (numbers.length == 0 || numbers.length == 1) { //if there are none or only one input field filled out return NaN 
			document.querySelector('.mult').textContent = "NaN"; //change product div to NaN
		} else {
			var total = numbers.reduce(function(a,b){return a*b;}); //add all the values in the input values array
			this.renderProduct(total);	//call render function to show total
		}
	}

	renderProduct(product) {
		document.querySelector('.mult').textContent = product; 
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
viewManager.newFactorClick();