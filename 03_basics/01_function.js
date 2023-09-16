function myfun(a,b){
 return a+b
}
let data=myfun(2,3)
console.log(data);


function loginUser(useName="sam"){
    if(!useName){
        console.log("pls enter username");
        return
    }
    return `${useName} just logged in`; 
}

 console.log( loginUser("mujek"));



//  function calculateCartPrice(val1, val2, ...num1){  (... this calld spread operator also restoperator its dpennd on which perpos for we use )
//     return num1,val1
// }

console.log(calculateCartPrice(200, 400, 500, 2000))const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));