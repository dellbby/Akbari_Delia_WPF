//JavaScript
// Delia Akbari - May 28, 2014 - Functions Worksheet - Personal
//normal function with 3 parameters & expression with two arithmetic operators

var gas = prompt("What is the current price of gas"); //current gas price
var distance = prompt  ("How far is the area you want to go to? (in miles) "); //area going in miles
var mpg = prompt (" What is your vehicles mpg rate?"); //mpg rate of car


function calcMiles ( gas, distance, mpg) { //parameters
//distance divided by mpg
	var result = (distance / mpg) * gas;  
	return result;
}


	var answer = calcMiles (gas, distance, mpg); // parameters
	
	console.log ("Your total cost will be $" +answer+ ".00"); //print the cost of how much money user will need
	
	
	