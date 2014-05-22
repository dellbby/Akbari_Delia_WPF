//JavaScript
// Delia Akbari - May 21, 2014 - Conditional Personal
//Am I going to do my photoshoot on Saturday if the weather is nice?

var photoshootWeather = 73; //photoshoot weather has to be 73 degrees or higher
var anotherday = Sunday;  //if the weather is not hot enough, we will move the shoot to sunday

(photoshootWeather < 72) ? console.log ("You can have the photoshoot on Saturday because the weather is " +photoshootWeather+ " degrees!") : console.log("You can't have the photoshoot because it's going to be less than " +photoshootWeather+ " degrees, you can have it on " +anotherday+ "  ");
