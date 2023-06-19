/* function myDisplayer(some) {
    console.log(some);
  } */
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);

  }
  
  myCalculator(5, 4, function myDisplayer(some) {
    console.log(some);
  });