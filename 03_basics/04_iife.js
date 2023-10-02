// Immediately Invoked Function Expressions (IIFE)
//   gloabel scope ke pollution se problem hoti hai kai baar isi liye iife use kiya  global scope ke vairbales

// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')


   function data(){
    console.log(this);
}
console.log(data());

(function chai(){
        // named IIFE
        console.log(`DB CONNECTED`);
    })();


    ((name)=>{
        console.log(`DB CONNECTED ${name}`);
    })("mmuekh");