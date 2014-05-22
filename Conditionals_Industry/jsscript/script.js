//JavaScript
// Delia Akbari - May 21, 2014 - Conditional Industry
//If we have enough money saved, me and my co-worker can fly to Paris for a conference.

var ticketPriceForTwo = 400;  //Price for two tickets
var poccketmoney = 250; //Amount of Money I have in my wallet
var coworkerPocketMoney = 145; //Amount of money my coworker has

if(ticketPriceForTwo < coworkerPocketMoney && coworkerPocketMoney > 400) { //Used Relational Operator &&
	console.log("We can buy the tickets! Pack your bags!") // if total is 400 or more, you can go
}else{
		console.log("No conference in Paris, sorry."); //If total is less than 400, you can't go
}


