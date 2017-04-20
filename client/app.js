const multiply = require('./multiplier.js');

class ViewManager {

	connectEventHandlers() {
		document.getElementById('calculateTotal')
			.addEventListener(
				'submit', 
				this.calculate.bind(this));

		document.getElementById('newFactor')
			.addEventListener(
				'submit',
				this.newFactor.bind(this));
	}

	newFactor(event) {
		console.log("new factor running")
		event.preventDefault();
		let target = document.getElementById("newFactors"); //get div that will hold new input fields
		const newDiv = document.createElement('div'); //create new div to put new input field in
		const br = document.createElement('br');
		const newInput = document.createElement('input'); //creat new input field
		newInput.className = "input-num"; //set class of input field
		newInput.type = "text"; //set type of input field
		newInput.autocomplete = "off"; //set autocomplete of input field
		target.appendChild(newDiv); //add new div to new factor div already on the page
		target.appendChild(br);
		newDiv.appendChild(newInput); //add new input to newly added div
	}
	
	calculate(event) {
		console.log("calculate running")
		event.preventDefault();
		let numbers = []; //array that holds input values
		let inputFields = document.querySelectorAll('input.input-num'); //grab all the input fields

		for (let i = 0; i < inputFields.length; i++) { //for all inputfields 
			let num = inputFields[i].value;
			if (num != "") { //if input value is empty do not add it to numbers array
				numbers.push(num); //add valid form input values to array
			}
		}

		if (numbers.length === 0 || numbers.length === 1) { //if there are none or only one input field filled out return NaN 
			document.querySelector('.mult').textContent = "NaN"; //change product div to NaN
		} else {
			let total = multiply(numbers); //multiply all the values in the input values array
			this.renderProduct(total);	//call render function to show total
		}
	}

	renderProduct(product) {
		document.querySelector('.mult').textContent = product; 
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();

	// newFactorClick() {
	// 	document.getElementById('newFactor').onclick = function () {
	// 		let target = document.getElementById("newFactors"); //get div that will hold new input fields
	// 		const newDiv = document.createElement('div'); //create new div to put new input field in
	// 		const br = document.createElement('br');
	// 		const newInput = document.createElement('input'); //creat new input field
	// 		newInput.className = "input-num"; //set class of input field
	// 		newInput.type = "text"; //set type of input field
	// 		newInput.autocomplete = "off"; //set autocomplete of input field
	// 		target.appendChild(newDiv); //add new div to new factor div already on the page
	// 		target.appendChild(br);
	// 		newDiv.appendChild(newInput); //add new input to newly added div
	// 	}
	// }

// viewManager.newFactorClick();