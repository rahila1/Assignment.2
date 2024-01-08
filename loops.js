for (let i= 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}
for (let j = 25; j < 30; j++) {
    const element = j;
    // console.log(element);
    if (element == 28) {
        // console.log("28 is the best number");
    }
    
}
///---nested loop---///
for (let i = 1; i < 5; i++) {
    // console.log(`Table: ${i}`);
    for (let  j = 1;  j < 5;  j++) {
    //   console.log(`inner loop value: ${j}` , ` inner loop value ${i}`);
        // console.log(i + `*` + j + `= ` + i*j );
    }
    
}
//----loops on Arry---//
let myArry = ["apple" , "mango" , "banana"];
for (let index = 0; index < myArry.length; index++) {
    const element = myArry[index];
    // console.log(element);
}
//---break and continue---//
for (let index = 1; index < 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}