<?php

/*
Fizz Buzz:
Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”. This can be done in either PHP or Javascript.
*/

class fizz_buzz{

	public function print_1_to_100(){
		for ($i=0; $i <= 100; $i++) { 
			$value = $this->get_fizz_buzz_value($i);
			echo $value.PHP_EOL;
		}
	}

	private function get_fizz_buzz_value($input){
		if($input % 3 == 0 && $input % 5 == 0){
			return "FizzBuzz";
		} else if ($input % 3 == 0){
			return "Fizz";
		} else if ($input % 5 == 0){
			return "Buzz";
		} else {
			return $input;
		}
	}

}

$fizz_buzz = new fizz_buzz();
$fizz_buzz->print_1_to_100();
