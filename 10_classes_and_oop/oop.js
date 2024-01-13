// object litral means object of property and methods


const use={
    userName:"Mukesh Yadav",
    loginCount:10,
    signIn:true,
    getUserdetail:function(){
        // console.log("Got user detail from data base");
        // console.log(`usename ${this.userName}`);
        // console.log(this)
    }
}
// console.log(use.userName)
// console.log(use.getUserdetail())
// console.log(this)

// agr mujhe user2 banna hai tho main bar bar reapte karoonga object ko jisse chize complex ho jaeygi jiske liye constructor n all use karte hai 


// constrcution function is like new date and newpromise iska matlb ek naya context bana ne ke liye kam aaata hai ek hi object se multiple instances bana sako isse memory me jagah bhi bach ti hai but new date and new promise me  hum new constructior bana ne padte hai q ki ooske curent context ko nahi change kar sakte 


function User(useName,loginCOunt,isLogedin){
    this.useName=useName
    this.loginCOunt=loginCOunt
    this.isLogedin=isLogedin
    this.greetings=function(){
        console.log(`welcome username is ${this.useName}`);
    }
    // return this // optional bydeafault return
}
const user1= new User("mukesh",8,true)
const user2=new User("chai code",9,false)
// console.log( user1.constructor); cconstructor property means khud ke bare me bata na matlb khud ke object ke bare me batana
// console.log( user2);

// constructot har bar naya instance ready kar ke deta hai matlb new object create kar ke  deta hai
//
// The instanceof operator in JavaScript is used to check whether an object is an instance of a particular class or constructor function. It returns a boolean value, 



// javascript ek prototype wroking behavour hai jab tak oosko nul nahi mil jata wo poochte rhaeta hai
// isko hum prtotypel inharitanceal   