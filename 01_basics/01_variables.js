const accountId = 11223
let accountEmail ="nikhar@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"//It si possible but not in frequently used 
let accountState;//only decleration not assign the value the result is undefined 

/*
Prefer not to use var 
beacause of issue in block scope and functional scope
*/
//accountId = 3//not allowed

/*
number => 2 to power 53
bigint
string => ""
boolean => true/false
null=> standalone value
undefined=> undefined
symbol => unique
*/

accountEmail = "Vishal@gmail.com"
accountCity = "Bengaluru"
accountPassword = "112233"

console.log(typeof null)//result-object
console.log(typeof undefined)//result-undefined


//console.table([accountEmail, accountId, accountPassword,accountCity,accountState])
