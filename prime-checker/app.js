// // Prime Checker: SOLUTION
// // =======================
//     var wins = 0;
//     var losses = 0;
// // Declare our primeCheck function
// // function primeCheck(number) {

// //   // Loop to check to see if a number has divisors other than one and itself.
// //   // Note: Loops from two to one less than the number we're checking.

// // var number = rNum;
//  // // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
//  //        function html() {
//  //          $("<p>You chose: " + number + "</p>");
//  //          // "<p>The computer chose: " + computerGuess + "</p>" +
//  //          $("<p>wins: " + wins + "</p>");
//  //          $("<p>losses: " + losses + "</p>");
    
//  //        }

//  //          html();
//           // "<p>ties: " + ties + "</p>";
//         // Set the inner HTML contents of the #game div to our html string
        
// function flipThatCoin(result) {

//   // STEP ONE:
//   // Declare and initialize a variable named randomNumber to either 0 or 1. Make it random.
//   var randomNumber = Math.floor(Math.random() * 2);

//     for (var i = 2; i < randomNumber; i++) {

//     // If the number is evenly divisible
//     // by a number between two and one less than itself,
//     // then it is not prime.
//     if (randomNumber % i === 0) {

//       // So return false.
//       return false;
//     }
//   }

//   // A prime number has to be greater than one,
//   // even if it has a divisor other than one and itself.
//   return randomNumber > 1;
// }
// for (var ctr = 0; ctr < 6; ctr++) {
//   var rNum = Math.ceil(Math.random() * 100);
//   console.log("Number: " + rNum + ", is prime? " + flipThatCoin(rNum));
// }


//   //  STEP TWO:
//   //  If randomNumber is equal to zero then:
//     //  Find the div with an id of coin-image.
//     //  Replace it's html with an img tag containing this image:
//     //  http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg

//   if (randomNumber === 0) {
//     $("#coin-image").html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg' />");
//   }

//   // Else
//     //  Find the div with an id of coin-image.
//     //  Replace it's html with an img tag containing this image:
//     //  http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg

//   else {
//     $("#coin-image").html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg' />");
//   }

//   //  STEP THREE:
//   //  If result is equal to randomNumber, do the following:
//     //  Increment wins by one.
//     //  Find the div with an id of win-lose. Update it with an h2 of "Winner!"
//     //  Find the div with an id of wins. Update it with the value of the wins variable.

//   if (result === randomNumber) {
//     wins++;
//     $("#win-lose").html("<h2>Winner!</h2>");
//     $("#wins").html("<h3>" + wins + "</h3>");
//   }

//   //  Else:
//     //  Increment losses by one.
//     //  Find the div with an id of win-lose. Update it with an h2 of "Loser!"
//     //  Find the div with an id of losses. Update it with the value of the losses variable.

//   else {
//     losses++;
//     $("#win-lose").html("<h2>Loser!</h2>");
//     $("#losses").html("<h3>" + losses + "</h3>");
//   }

// $("#heads").on("click", function() {
//   headsCount++;
//   $("#heads-chosen").html(headsCount);
//   $("#guess").html("<b>Heads</b>");
//   flipThatCoin(0);
// });

// //  STEP FOUR:
// //  Increment tailsCount by one.
// //  Find the span with an id of tails-chosen. Replace the html inside of the span with the tailsCount.
// //  Find the div with an id of guess. Update it with the word "Tails" bolded.
// //  Call the flipThatCoin function and pass value 1 into it.

// $("#tails").on("click", function() {
//   tailsCount++;
//   $("#tails-chosen").html(tailsCount);
//   $("#guess").html("<b>Tails</b>");
//   flipThatCoin(1);
// });

var headsCount = 0;
var tailsCount = 0;
var wins = 0;
var losses = 0;

function flipThatCoin(result) {

  // STEP ONE:
  // Declare and initialize a variable named randomNumber to either 0 or 1. Make it random.
  var randomNumber = Math.floor(Math.random() * 2);

  //  STEP TWO:
  //  If randomNumber is equal to zero then:
    //  Find the div with an id of coin-image.
    //  Replace it's html with an img tag containing this image:
    //  http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg

  if (randomNumber === 0) {
    $("#coin-image").html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg' />");
  }

  // Else
    //  Find the div with an id of coin-image.
    //  Replace it's html with an img tag containing this image:
    //  http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg

  else {
    $("#coin-image").html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg' />");
  }

  //  STEP THREE:
  //  If result is equal to randomNumber, do the following:
    //  Increment wins by one.
    //  Find the div with an id of win-lose. Update it with an h2 of "Winner!"
    //  Find the div with an id of wins. Update it with the value of the wins variable.

  if (result === randomNumber) {
    wins++;
    $("#win-lose").html("<h2>Winner!</h2>");
    $("#wins").html("<h3>" + wins + "</h3>");
  }

  //  Else:
    //  Increment losses by one.
    //  Find the div with an id of win-lose. Update it with an h2 of "Loser!"
    //  Find the div with an id of losses. Update it with the value of the losses variable.

  else {
    losses++;
    $("#win-lose").html("<h2>Loser!</h2>");
    $("#losses").html("<h3>" + losses + "</h3>");
  }
}

$("#heads").on("click", function() {
  headsCount++;
  $("#heads-chosen").html(headsCount);
  $("#guess").html("<b>Heads</b>");
  flipThatCoin(0);
});

//  STEP FOUR:
//  Increment tailsCount by one.
//  Find the span with an id of tails-chosen. Replace the html inside of the span with the tailsCount.
//  Find the div with an id of guess. Update it with the word "Tails" bolded.
//  Call the flipThatCoin function and pass value 1 into it.

$("#tails").on("click", function() {
  tailsCount++;
  $("#tails-chosen").html(tailsCount);
  $("#guess").html("<b>Tails</b>");
  flipThatCoin(1);
});