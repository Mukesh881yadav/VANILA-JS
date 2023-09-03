//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// im symbol we pass same data nut there uniqueness is diffrent 

console.log(id === anotherId);
console.table([id,anotherId])

const bigNumber = 3456543576654356754n
console.log(typeof(bigNumber))



// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }
  
//  function calld function object 
// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3