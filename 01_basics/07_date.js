
// let myDate=new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON() + "json")
// console.log(myDate.toLocaleDateString);
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("2023-01-23")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp =  new Date();
// console.log(myTimeStamp) 
// console.log(myTimeStamp.getTime())
// console.log(Math.floor((myTimeStamp/1000)))



let newDate = new Date()
// console.log(newDate);
console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `


let newdata=newDate.toLocaleString('default', {
    weekday: "long",
    timeZoneName:"short"
})

console.log(newdata)