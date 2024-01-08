//The for...in statement iterates over the enumerable string properties of an object, while the for...of statement iterates over values that the iterable object defines to be iterated over.24-Aug-2023

//----for of loop for arry---//
let arr = [ 1, 2, 3 , 4, 5]
for (const num of arr) {
    console.log(num);
    
}

let greetings = "Good Morning"
for (const greet of greetings) {
    console.log( `each charachter is ${greet}`);
}

let myName = "Rahila"
for (const char of myName) {
    console.log("my characters " + char);
    
}

//----for-In loop---//

let object = {a:1 , b:2 , c:3};
for (const key in object) {
   console.log(`the keys are  ${key}`);
}