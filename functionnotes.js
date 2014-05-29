// Functions - Basic Structure

var width = 5;

function outptMsg() {
	console.log("Hello World");
	
}
function calcArea(){
	var width = 20
	var height = 30;
	var area = width * height;
	console.log(area);
}
//invoking function 
calcArea();


//Parameters & Argument Notes

funcName (argument1, argument2);
function funcName (parameter1, parameter2) {
	//code the function runs 
}
////////////////////////////////////////////////////

//Ex1
calcArea(30, 20);
function calcArea(w, h) { //w = 30, h = 20
	var area = w*h;
	console.log(area);
}

////////////////////////////////////////////////////

//Ex2 - Returning values
calcArea(30, 20);
function calcArea(w, h) { //w = 30, h = 20
	var area = w*h;
	return area; //function is spitting the info out
}
console.log(area);

////////////////////////////////////////////////////

function dogYears (age){
	var age = 4;
	var dogYears = age * 7;
	console.log("Sparky is" +dogYears+ "years old.")
		
}
//passing
dogYears(4);
dogYears(5);