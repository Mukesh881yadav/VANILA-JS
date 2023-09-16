let array1=["mukesh","yadav","jay","sohel"];
let array2=[1,2,3,4,true]
// array1.push(array2)
// console.log(array1[4][2]) 

// let data =array1.concat(array2)
// console.log(data) 

// spread operator
let data =[...array1,array2]
console.log(data.flat(Infinity)) 


console.log(Array.isArray("Hitesh"))  // array yes or not
console.log(Array.from("Hitesh"))  // convert into array
console.log(Array.from({name: "hitesh"})) // interesting  // defind we have to convert array into key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



