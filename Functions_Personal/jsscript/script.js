//JavaScript
// Delia Akbari - May 28, 2014 - Functions Worksheet - Personal
//normal function with 3 parameters & expression with two arithmetic operators

var gas = prompt("What is the current price of gas");
var distance = prompt  ("How far is the area you want to go to? (in miles) ");
var mpg = prompt (" What is your vehicles mpg rate?");


function calcMiles ( gas, distance, mpg) {

	var result = (distance / mpg) * gas;
	return result;
}


	var answer = calcMiles (gas, distance, mpg);
	
	console.log ("Your total cost will be $" +answer+ ".00");
	
	
	