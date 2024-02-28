// 1. Alert:

var number = prompt("hello World");
alert("Wellcome To Javascript Basic Assignment");

// 2. Variables For Strings

var FavoriteFood = ("Pizza");
console.log("FavoriteFood");

// 3. Variables For Numbers 

var number1 = 10;
var number2 = 5;
console.log("Addition:", number1 + number2);
console.log("Subraction:", number1 - number2);
console.log("Multiplication:", number1 * number2);
console.log("Division:", number1 / number2);

// 4. Variable Names Legal and Illegal:
// Legal variable names: snake_case, camelCase, PascalCase
// Illegal variable names: 1stVariable (starting with a digit), my-variable (containing hyphens), my variable (containing spaces)

// 5. Math Expressions: Familiar Operators:

var result = (number1 + number2) * (number1 - number2) / (number2);
console.log("Result:", result);

// 6. Math Expression: Unfamiliar Operators:

// % (modulus) operator gives the remainder of the division operation 
var remainder = number1 % number2;
console.log("Remainder:", remainder);

// post increment & pre increment
var x = 5;
console.log("Post Increment:", x++); // Prints 5, then increment x to 6 
console.log("Pre Increment:", ++x) // Incremnet x to 7, then prints 7

// 7. Contatenating Text Strings:

var firstName ="Muhammad";
var lastName ="Affan";
var fullName = firstName + " " + lastName;
console.log("fullName:", fullName)

// 8. Prompts

var userAge =prompt("Please Enter Your Age");
console.log("User's Age:", userAge);

// 9. if Statements

var number =prompt("Checking wheather the number is EvenOROdd");
if(number % 2 == 0) {
    console.log(number+ " ", "is even.")
}else{
    console.log(number+ " ", "is odd.")
}

// 10. if Else....And Else if Statements

var grade = prompt("Enter Your Numerical Grade:");
if(grade >= 90) {
    console.log("A Grade")
} else if(grade >= 80) {
    console.log(" B Grade")
}else if(grade >= 70) {
    console.log("C Grade")
}else if(grade >= 60) {
    console.log("D Grade")
}else if(grade >= 50) {
    console.log("Failed!")
}

// ASSINGMENT #  02

// 1. Nested if...else Statements:
let age = prompt("Enter your age:");
let isStudent = prompt("Are you a student? (yes/no)").toLowerCase();

let ticketPrice;

if (age < 12) {
    ticketPrice = 5;
} else if (age >= 12 && age <= 18 && isStudent === "yes") {
    ticketPrice = 8;
} else if (age >= 12 && age <= 18 && isStudent === "no") {
    ticketPrice = 10;
} else {
    ticketPrice = 12;
}

alert("Ticket Price: $" + ticketPrice);

// ASSINGMENT # 03

//1. pop() and push():

// Create an array of fruits
var fruits = ["apple", "banana", "orange", "grape"];

// Display all the fruits available initially
console.log("Available Fruits:", fruits);

// Simulate a customer purchasing a fruit
var purchasedFruit = fruits.pop();
console.log("Purchased Fruit: ", purchasedFruit);

// Display updated list of fruits
console.log("Remaining fruits after purchase:");
console.log(fruits);

// Simulate adding new fruits to the stock
var newFruit = prompt("Enter a new fruit name:");
fruits.push(newFruit);
console.log("New fruit added. Updated Fruits:", fruits);

//2. shift() and unshift():

//? Extend the existing  scenario

console.log("last updated fruits", fruits);

//? New shipment of fruits arrives

var newFruitList = fruits.shift();
console.log("New Fruit list:", newFruitList, fruits);

//? newly arrived fruit

var newFruit = prompt("Name newly arrived fruit");
fruits.unshift(newFruit);
console.log("Newly arrived fruit:", newFruit, fruits);

//3.splice()

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var startIndex = prompt("Enter the starting index");
var endIndex = prompt("Enter the ending index");
numbers.splice(startIndex, endIndex - startIndex + 1);
alert("Updated array after removing the specified range")
alert(numbers)
console.log("Updated array after removing the specified range:", numbers);

//4.slice():

var sliceStart = prompt("Enter the starting index for the slice:")
var sliceEnd = prompt("Enter the ending index for the slice:")

var extractedSlice = numbers.slice(sliceStart, sliceEnd + 1);
alert("Extracted slice of numbers")
alert(extractedSlice)

//5.length

let sum = numbers.reduce((acc, curr) => acc + curr, 0); 
let average = sum / numbers.length;
console.log("Average of numbers:", average);