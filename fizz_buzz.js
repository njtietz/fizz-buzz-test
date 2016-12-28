/*
Fizz Buzz:
Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”. This can be done in either PHP or Javascript.
*/


var fizzBuzz = function(){

}

fizzBuzz.prototype.printOneToOneHundred = function(){
	for (var i = 0; i <= 100; i++) {
		response = this.getFizzBuzzValue(i);
		console.log(response);
	}
}

fizzBuzz.prototype.getFizzBuzzValue = function(input){
	if(input % 3 == 0 && input % 5 == 0){
		return "FizzBuzz";
	} else if (input % 3 == 0){
		return "Fizz";
	} else if (input % 5 == 0){
		return "Buzz";
	} else {
		return input;
	}
}

fizzBuzzOne = new fizzBuzz();
fizzBuzzOne.printOneToOneHundred();
