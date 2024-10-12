/* Object Challenges
Create an Object: 
Create an object person with properties 
name, age, and city. Log each property to the console.

Add a Method to an Object: Add a method greet to the person 
object that returns a greeting message using the name property.

Use Object.entries(): Create an object book with properties 
title, author, and year. Use Object.entries() to log each property 
and value to the console.

Use Object.keys(): Create an object car with properties brand, 
model, and year. Use Object.keys() to log all property names to the console.

Modify Object Properties: Create an object device with properties 
type, brand, and model. Change the model property and log the updated object. */


// Creating an Object
const person ={
    personName : "John",
    personAge : 50,
    personCity : "Abuja",
    // adding an object Method
    greeting : function(){
        return "Hello!" + " " + this.personName
    }
}

// ==========================================



// create an object using Object.entries()

const book = {
    title : "Great Minds",
    author : "John Tosin",
    year : 1995  
}
// using object.entries() to log in the properties

let newBook = Object.entries(book)

// =================================================

// create an object using Object.keys()

const car ={
    brand : "Volvo",
    model : "SK20",
    year : 2024
}
// using object.keys() to log in the properties

let newCar = Object.keys(car)

// ===============================================
// modify object properties

const phone = {
    type : "phone",
    brand : "Techno",
    model : "camon 10"
}

// change model properties
phone.brand = "Iphone"
phone.model = "Iphne 16 pro max"
phone.type = "Gadgets"

// ======================================================================

// log into the console

// console.log(person.personName)
// console.log(person.personAge)
// console.log(person.personCity)
// console.log(person.greeting())
// console.log(newBook)
// console.log(newCar)
console.log(phone)