function setup() {
  createCanvas(400, 400);

}

function primeFactors(number) {
  var factors = []

//if the number is more than 1,
//check if it divides on 2, if not, 
//check the next number after 2
// if the number can be divided on the next number
// take it to the array 
  
  while (number > 1) {
    for (var i = 2; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i)
        number = number / i;
        break;

      }
    }
  }
  return factors;
}


function drawFactors(factors) {

  let x;
  let y;

  for (var i = 0; i < factors.length; i++) {

    let factor = factors[i];


    stroke(255);
    circle(width / 2, height / 2, factor);
  }


}

function draw() {
  background(0);

  for (var i = 1; i <= 100; i++) {
    var result = primeFactors(i);
    drawFactors(result);
    console.log(result);
  }

}