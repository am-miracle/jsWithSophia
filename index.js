// Task:
// write a program that collects the age of your user, then:
// 1. Determines if the qualifies for a discount based on the age
// 2. send in another prompt to collect the price 
// 3. add the discount value to the price of the item and store it in the total price
// 4. Ensure you convert the price value to number before getting total
// 5. Brief note on booleans, BigInt, Symbols, array and objects

// solution

let discount = 50;
let age = prompt("how old are you?");

if (age >= 18){
    console.log("You're not qualified for the discount");
}else{
    console.log("You're qualified for the discount");
}

let price = prompt("Enter amount");
console.log(Number(price));

let totalPrice = discount + Number(price);
console.log(typeof(totalPrice));
console.log(totalPrice);


