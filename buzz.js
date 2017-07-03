//variable that will hold the total number of fizz, buzz, and fizzbuzz
var fizz = 0;

function buzz() {
 //takes the number that the user puts in the input field and binds it to x
 var x = document.getElementById('fizzNumber').value;

 for(i=1; i < x; i++) {
  
  if(i % 15 === 0) {
   //document.getElementById('fuzzy').innerHTML += "FizzBuzz";
   fizz++;
  }

  else if(i % 5 === 0) {
   //document.getElementById('fuzzy').innerHTML += "Buzz";
   fizz++; 
  }
  else if(i % 3 === 0) {
   //document.getElementById('fuzzy').innerHTML += "Fizz";
   fizz++;
  }
   
  else {
   //document.getElementById('fuzzy').innerHTML += i;
  }
 }
 document.getElementById('tally').innerHTML = '<h1>You have ' + fizz + ' Fizz power in your number</h1>';

}
