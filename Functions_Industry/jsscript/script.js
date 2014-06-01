//JavaScript
// Delia Akbari - May 28, 2014 - Functions Industry
//how long they need to work to make the money they need

var total = prompt ("How much money do you need?"); //money needed from user
var pay = prompt("How much do you make per hour?"); // users pay

var getresponse = function (total, pay) { //
	var result = total / pay; 
	var hours = prompt("How many hours can you work?")  //hours user can work
	
	if (result > hours ) {
		var possible = false;
	}
	else if(result == hours){
		var possible = true;
	}
	else {
		var possible = true;
	}
	
	var response = (possible) ? 'You will make it in time with the amount you need ' : 'Sorry, you will not make it in time, get another job. '; //answers if true or false
	return response; //return
	
}

var answer = getresponse(total,pay); //response for user
console.log(answer); //print with answer user will get