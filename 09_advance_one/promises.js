// let promiseDone=new Promise(function(resolve,reject){
//  setTimeout(function(){
//    console.log("hi");
//    resolve()
//  },1000)
// })

const { error } = require("console");

// promiseDone.then(function(){
//     console.log("promise consumed"); //call back function  return the value
// })

// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("gigiggi");
//     resolve()
//       },1000)
// }).then(function(){
//     console.log("asynt resolved");
// })

const userdata={
    nameone:"mukesh",
    surname:"yadav"
}
    

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("my third promise");
//       resolve(userdata)
//     },1000)
// })
// promiseThree.then((user)=>{
//     console.log(user);
// })



// const promisefour= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let error=false;
//     if(!error){
//         resolve(userdata)
//     }
//     else{
//         reject('Erorr some thing went wrong')
//     }
//       resolve(userdata)
//     },1000)
// }).then((user)=>{
//     console.log(user);
//     return user.surname
// }).then((kata)=>{
//     console.log(kata);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("the promise is either resolve or rejected");
// })



// const promisefour= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let error=false;
//     if(!error){
//         resolve()
//     }
//     else{
//         reject('Erorr some thing went wrong')
//     }
//       resolve(userdata)
//     },1000)
// })

// async function consumepromisefour(){
//   try{
//     const response= await promisefour;
//     console.log(response +"response gotit");
//   }catch(error)
// {
// console.log(error);
// }}
// consumepromisefour();

// const fetch = require('node-fetch');
// async function getalluser(){

//     try{
//         const userresponse= await fetch('https://jsonplaceholder.typicode.com/todos')
//         // console.log(userresponse);
//         const data= await userresponse.json()
//         console.log(data);
//     }
//     catch(error){
//      console.log(error);
//     }
    
// }
// getalluser()


const fetch = require('node-fetch');
fetch('https://jsonplaceholder.typicode.com/todos')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
