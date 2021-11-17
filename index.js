// - Use these items and their respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// - Store this information using the most appropriate data structures we've studied so far
let itemNames = ["Milk", "Cocoa", "Salad", "Carrots", "Tomatoes", "Ready meals"];
let itemPrices = [1.2, 2, 2, 2, 2.5, 5];

let wantToAddItems = window.confirm("Do you want to add an item to your shopping list?\nPress OK for Yes, Cancel for No.");
while (wantToAddItems) {
	let newItemName = prompt("What is the name of the item you want to add?");
	itemNames.push(newItemName);
	let newItemPrice = Number(prompt("What does the item cost?"));
	itemPrices.push(newItemPrice);
	wantToAddItems = window.confirm("Do you want to add another item to your shopping list?\nPress ok for yes, cancel for no");
}

let message = "This is your shopping list:";
let sum = 0;
for (let i = 0; i < itemNames.length; i++) {
	message = message + `\n${itemNames[i]} which costs £${itemPrices[i].toFixed(2)}`;
	sum = sum + itemPrices[i];
}
message = message + `\nThe total of your shopping list is £${sum}`;
alert(message);
