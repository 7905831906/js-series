const a=undefined;
const b=null;

console.log(a==b);//true//When comparing null and undefined, JavaScript treats them as loosely equal. This means that if one operand is null and the other is undefined, they will be considered equal.

console.log(a===b)//false//This will return false because === checks both the value and the type, and null and undefined are of different types.