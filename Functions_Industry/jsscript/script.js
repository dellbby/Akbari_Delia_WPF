//JavaScript
// Delia Akbari - May 28, 2014 - Functions Industry
//Anonymous function
//Work requires me to drive to Irwindale from Glendale once a week. The drive is 25 miles, I get .35 cents for every mile. How much do I get every month?

var timesPerWeek = prompt("How many times do you drive outside of your work per week?");
var miles = prompt("How many miles is the drive?");
var moneyBack = prompt("How much money do you get back per mile driven?");

var totalPerWeek = timesPerWeek * miles * moneyBack;

console.log ("You would get $" +totalPerWeek+ " back every month");




var userInput = prompt("Enter your year of birth");
console.log (userInput);

////////////////////////////////////////////////////
var functionName = function(){ //code to run
}
functionName();

var calcArea = function(timesPerWeek, miles ) {
	//code function runs
	var area = timesPerWeek * miles * .35;
	return area;
}
var a = calcArea(4, 25); //invoking happens after defineing function
console.log ("I work");


