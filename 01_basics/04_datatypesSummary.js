// Primitive DataTypes//Call By value

/* 7 types : String, Number, Boolean, null, undefined, Symbol 
   BigInt
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);//false

const bigNumber = 2356589564544456544564564n
 
//ReferenceType//Non Primitive

//Array, Objects, Functions

const heroes = ["Ironman", "Superman", "Spiderman"]
let obj =
{
   name:"Nikhar",
   age:22
}
const myFunction= function (){
       console.log("Hello World")
}
myFunction();
console.log(typeof outsideTemp)

