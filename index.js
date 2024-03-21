// console.log('Hello World');

// let name = 'Vivica';
// console.log(name);

// Variables can not be a reserved keyword 
// Variables should be meaningful
// Variables can not start with a number ie. (1name)
// Cannot contain a space or hyphen must use camelcase
// to declare multiple variables separate them with a , modern best practice is to separate into diff lets

// let firstName = 'Anthony '
// let lastName = 'Ghilardi'
// console.log(firstName + lastName)

// -----------------------------------------------------------------------------------------------------------

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);
// This will create an error as your cannot change a constant variable

// ----------------------------------------------------------------------------------------------------------

// let name = 'Anthony'; // String literal
// let age = 23; // Number literal
// let isApproved = true; // Boolean literal can be true or false
// let firstName = undefined;
// let selectedColor = null; // Null is used when you want to make future changes to clear the value of a variable


// ------------------------------------------------------------------------------------------------------------

// Dynamic typing in JavaScript

// let name = 'Anthony'; 
// let age = 23; 
// let isApproved = true;
// let firstName = undefined;
// let selectedColor = null;

// console.log(typeof name); // string
// console.log(typeof age); // number 
// console.log(typeof firstName); // undefined = undefined
// console.log(typeof selectedColor); // Object

// -------------------------------------------------------------------------------------------------------------

// Objects

// let name = 'Anthony';
// let age = '23';

// let person = {
//     name: 'Anthony',
//     age: '23'
// };


// Dot notation Should be used by default

// person.name = 'John';

// Bracket notation has its own specific uses
// let selection = 'name';
// person['selection'] = 'Mary';


// console.log(person.name)

// ------------------------------------------------------------------------------------------------------------------

// Arrays
// arrays are objects

//let selectedColors = ['red', 'blue']; // [] is used a literal array
// selectedColors[2] = 'green';
// console.log(selectedColors); 
// adding the brackets [1] [2] to the end of selectedColors allows you to specify a single item from the array
// adding .length to the variable selectedColors will log how many items are in the array


// -------------------------------------------------------------------------------------------------------------

// Functions
// function syntax function variable declaraction (){}

// Basic function example
// function greet(){
//     console.log('Hello World');
// }

// greet();


// function p.2
// Parameter is add between the function ()
// argument is supplied at the bottom of the function


// Performing a task
// function greet(name, lastName){
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greet('Vivica', 'Leaskas');
// greet('Anthony', 'Ghilardi');

// // Calculating a value
// function square(number){
//     return number * number;
// }

// let number = square(2);
// console.log(number);

// // or 

// console.log(square(2));