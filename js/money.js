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