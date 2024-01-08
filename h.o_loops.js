const coding = ["js" , "py" , "java" , "cpp"];
const values = coding.forEach( (Val) => {
    console.log(Val);
})
// console.log(values);

//----for of loop for arry---//
let arr = [ 1, 2, 3 , 4, 5]
for (const num of arr) {
    console.log(num);
    
}

let greetings = "Good Morning"
for (const greet of greetings) {
    console.log( `each charachter is ${greet}`);
}