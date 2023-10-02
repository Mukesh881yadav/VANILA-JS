//this refer to the cuurent cotnext of object
// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }

// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// const chai = (num1,num2) => {
//     return num1+num2
// }
// console.log(chai(2,2))
//    we can write like this
// const chai = (num1,num2) => num1+num2
// console.log(chai(2,2))


const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))

