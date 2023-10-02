// jabh bhi javascript code run karta hai to wo ek gloable excecution context banata hi hai aur oosko as varibable me store kar deta like "this" sab ka globale excecution context alalag hota hai jaise node envirnment ka aalaag ho gaya waise hu window ka window.object hota hai this ka value 


// 1.global excecution context .
// 2.function excecution context.

// Memory creation phase
// execution phase




let val1=10;
let val2=10;

function addNum(num1,num2){
    let total=num1+num2
    return total;
}

// let resut2 =addNum(val1,val2);
// let resutl =addNum(10,10);
// console.log(resutl);

           // Steps

        //    1):Global Excecution alocated to ="this "
        //    2):Memory Phase  =collect all variable in memory Phase

        //    val1-undefind;
        //    val2-undefined;
        //    add-function definition
        //    reusult1-undefind
        //    result2-undefined

        //    3):excecution Phase
        //      val1:10;
        //      val2:5;

        //      total :15 come throuh line num 53


            //  ab addnum ek phir se excecution context bana ta hai phir ye repeat kareg same step like ye comleye hone ke baad ye delete bhi hota hai
            // new envirnment (new excectuion thread)
            // val1 val2 -undefind
            // total-undefind

            // exxectuion

            // num1:10 num2:10

            // total:15 total return to gloable excecution context
            // 


            // CAllstack


            // j


