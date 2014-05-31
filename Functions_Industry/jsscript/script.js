//JavaScript
// Delia Akbari - May 28, 2014 - Functions Industry

//Create a variable to hold hours want to work
var hours = prompt("Please type in how many hours you want to work"); //hours want to work

//double check that min was recorded
console.log(hours);

//validate that the user typed in a number and didnt leave it blank
//if text string is a number OR equals to nothing
while(isNaN(hours) || hours === "") {
	
	 //Re-prompting the user for a number
	 hours = prompt("Please type in a NUMBER");
	
	
	}
	//prompt for amount want to get paid
	var amount = prompt("Please type in amount you would want to get paid");
	
	
	//valudate it
	
	while(isNaN(amount) || amount === "") {
	
	 //Re-prompt the user for a number
	 amount  = prompt("Please type in a minimum number");
	}