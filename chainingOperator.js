// const nestedProp = obj.first && obj.first.second;
// const nes = obj.first?.second;

//  console.log(nestedProp);tedProp

// arry is null or undefined first. It is represented by the ?. operator and can be used to concisely access deeply nested properties without having to write a long chain of if statments to check for null or undefined values


const student = {
    name : "Rahila",
    age : 21,
    university:{
        uni: "Karachi",
        dept:"Zoology",
        spectiolization: "parasitology",
        teacher :"Maam Samreen"

    }
}
console.log(student.university.location?.areaNo);

let students =[
    {name: "Rahila" , age : 21},
    {name: "Toobaa" , age : 20},
    {name: "Janaa" , age : 23},
];
console.log(students[3]?.age);