# Gimme Me My Money!

Having cash in your wallet is an important thing these days. You never know when you'll need to buy a snack from a convenience store, get a snack from a vending machine, or loan money to a friend. And while having cash is important, it can be a hassle to manage taking money out of the ATM, and finding an ATM near you when you need it, and making sure you have enough money in your bank account

So because you're a developer and you have super powers, instead of dealing with those struggles, you're going to build your own ATM machine.

## Get To Work

You'll be coding your solution in `js/money.js`. You'll want to have `index.html` open in the browser in order to text your work. 

We've given you a variable that's already been declared and defined, storing the bank account total: `var bank_total = 200;`

Using the `prompt` function, first ask the user if they want to make a deposit or a withdraw. From there, based on their decision, ask them how much money they are depositing or withdrawing.

Your code should then add or detract from the total, and use the `alert` function to display the new total to the user.

You will need to use if-statements to control the flow of your program. Remember, you want different actions to take place if they're depositing or withdrawing money.

Make sure you set up a default state if a user enters anything other than "deposit" or "withdraw".

**BONUS:**

+ What happens if a user enters "DEPOSIT" or "wItHdRaW". Is there a way to normalize the data on the backend so that any capitalization variation will work?

+ What if a user wanted to make a deposit and then immediately a withdraw? Is there a way to keep the user in the loop until they say they're done with the ATM?