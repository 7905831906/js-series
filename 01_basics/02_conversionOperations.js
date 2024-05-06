//let score = "33abc"
//let score = null
//let score = undefined
//let score = true
let score = 'Nikhar'

//console.log(typeof score)
//console.log(typeof (score))//another way as method

let valueInNumber = Number(score)//string to number 

//console.log(typeof valueInNumber)
//console.log( valueInNumber)//NaN for "33abc"
                           // for null -value 0
                           // for boolean-true- 1 & false-0 
                           //for string in "Like"- NaN

//"33"=>33
//"33abc"=> NaN

//let isLoggedIn =1
//let isLoggedIn =''
let isLoggedIn ="Nikhar"

let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn);

//1 => true
//0 => false
//"Nikhar" => true
//" " => false

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ********************* OPERATIONS *********************

let value = 3

let negValue = -value
 //console.log(negValue)

 /*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) -for power
console.log(2/3)
console.log(2%3)
 */


let str1 = "Nikhar "
let str2 = "WARIS"

let str3 = str1 + str2

//console.log(str3);

//console.log("1"+2)//resullt-12
//console.log(1+"2")//resullt-12
//console.log("1"+2+2)//resullt-122||once the operands is a string, it perform concatenation 
//console.log(1+2+"2")//resullt-32 ||instead of addition"3" + "2" (3 is converted to a string)
//console.log((3+4) * 5 % 3)//resullt-2
//Example-"1" + 2 + 2
//= "1" + "2" + 2
//= "12" + "2"
//= "122"
//
//Example-1 + 2 + "2"
//= 3 + "2"
//= "3" + "2" (3 is converted to a string)
//= "32"

//console.log(+true)// it is allowed but not appropriate
//console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 4

let gameCounter = 100
gameCounter++
//console.log(gameCounter)

//let x = 2
//let y = x++

//console.table([x,y])//3,2//increment operator increments and returns the value before incrementing.
let x = 2
let y = ++x
console.table([x,y])//3,3//increment operator increments and returns the value after incrementing.





