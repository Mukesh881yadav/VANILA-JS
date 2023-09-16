// construcutor se banega tho singletone bolenge agar  litral se banega to singletone nahi bolenge 


// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Mukesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


JsUser.myfuntion= function(){
    console.log(this.name)
}
console.log(JsUser.myfuntion())
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());// if we did't give this () then funtion not excecute only function return back howa hai 
// console.log(JsUser.greetingTwo());

// note -=some time return undefind  will discussed on future