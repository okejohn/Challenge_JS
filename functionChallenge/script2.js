/*Function Creation and Manipulation Challenges
Basic Function: Write a function sum that takes two parameters 
and returns their sum. Test the function with different arguments.

Function Declaration: Create a function multiply that 
takes two parameters and returns their product. Log the result of calling this function.

Function Declaration: Write a function divide that takes 
two parameters and returns their quotient. Test the function with different arguments.

Default Parameters: Write a function greet that takes a 
parameter name and has a default value of "Guest". Return a greeting message using the name.

Basic Function: Write a function subtract that takes two parameters and 
returns their difference. Test the function with different arguments.
============================================================================
====================================================*/

// function that takes 2 argument

function sum(a, b){
    return a + b

}

const sum1 = sum(4, 5)
const sum2 = sum(20, 5)

// function multiply

function newMultiply(p1, p2){
    return p1 * p2
}

// function divide

function divide(p1, p2){
    return p1 / p2
}
const division = divide(30, 10)

// function default parameter

function greet(name = "guest"){     
    return "Hello" + " " + `${name}`
}

console.log(sum2)
console.log(newMultiply(4,10))
console.log(division)
console.log(greet())
console.log(greet("tosin"))
