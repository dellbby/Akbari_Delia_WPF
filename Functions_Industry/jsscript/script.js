//JavaScript
// Delia Akbari - May 28, 2014 - Functions Industry
//how long they need to work to make the money they need

var total = prompt ("How much money do you need?");
var pay = prompt("How much do you make per hour?");

var getresponse = function (total, pay) {
	var result = total / pay; 
	var hours = prompt("How many hours can you work?") 
	
	if (result > hours ) {
		var possible = false;
	}
	else if(result == hours){
		var possible = true;
	}
	else {
		var possible = true;
	}
	
	var response = (possible) ? 'You will make it in time with the amount you need ' : 'Sorry, you will not make it in time, get another job. '; 
	return response;
	
}

var answer = getresponse(total,pay);
console.log(answer);