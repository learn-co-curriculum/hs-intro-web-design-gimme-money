var bank_total = 200;

var choice = prompt("Would you like to make a deposit or a withdraw?");


if (choice == "deposit"){
  var amount = prompt("How much money would you like to deposit?")
  bank_total = parseInt(amount) + bank_total
  alert ("You now have " + bank_total + " in your account.")
} else if (choice == "withdraw"){
  var amount = prompt("How much money would you like to withdraw?")
  bank_total = parseInt(amount) + bank_total
  alert ("You now have " + bank_total + " in your account.")
}else {
  alert("You didn't enter a valid option.")
}


//****FIRST BONUS*****

// var bank_total = 200;

// .toLowerCase to regulate the data stored in the `choice` variable
// var choice = prompt("Would you like to make a deposit or a withdraw?").toLowerCase();


// if (choice == "deposit"){
//   var amount = prompt("How much money would you like to deposit?")
//   bank_total = parseInt(amount) + bank_total
//   alert ("You now have " + bank_total + " in your account.")
// } else if (choice == "withdraw"){
//   var amount = prompt("How much money would you like to withdraw?")
//   bank_total = parseInt(amount) + bank_total
//   alert ("You now have " + bank_total + " in your account.")
// }else {
//   alert("You didn't enter a valid option.")
// }


//**** SECOND BONUS****
// var bank_total = 200;

// var ending = "yes";
// while (ending == "yes"){
// //.toLowerCase to regulate the data stored in the `choice` variable
// var choice = prompt("Would you like to make a deposit or a withdraw?").toLowerCase();
//   if (choice == "deposit"){
//     var amount = prompt("How much money would you like to deposit?");
//     bank_total = parseInt(amount) + bank_total;
//     var next = prompt("You now have " + bank_total + " in your account. Would you like to take another action?");
//   } else if (choice == "withdraw"){
//     var amount = prompt("How much money would you like to withdraw?");
//     bank_total = parseInt(amount) + bank_total;
//     var next = prompt("You now have " + bank_total + " in your account. Would you like to take another action?");
//   } else {
//     var next = prompt("You didn't enter a valid option. Would you like to take another action? ")
//   }
//   if (next != ending){
//     ending = next;
//   }
// }

