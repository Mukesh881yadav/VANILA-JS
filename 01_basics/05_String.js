// behind the seen this work also same invok object
 // const name="Mukesh Yadav";
// const repoCount=50;

// console.log(name + repoCount + "value");

// back ticks (string interpoletion)
// console.log(`my name is ${name}  and my repocount is ${repoCount}`);


// her we define string as using new key word for use object of javascript 
// const gameName=new String("Mukku Bhai")

// console.log(name[0])
// console.log(name.length)
// upper lower both are same
// console.log(gameName.__proto__);
// console.log(gameName.length);
// but he did't change original value due to he copy to value in  another stack memory 
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('M'));



// let  Name="Mukesh yadav";
// console.log(Name.charAt(2))

//  depend on UNIcode
// let a="A";
// let b="b"
// console.log(a<b)

//The split() method splits a string into an array of substrings. The split() method returns the new array. The split() method does not change the original string ...
// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, ..
// let data1="Mukesg Yada, Mukesh Yadav";
// let newdata=data1.split(',')

// if data end with given value then then get true or false
// let newdata=data1.endsWith('y');
// console.log(newdata);

// The includes() method returns true if a string contains a specified string. Otherwise it returns false . The includes() method is case sensitive. Syntax. string ...
// console.log(Name.includes("Yadav"));



// String Methods

// let data=" there are two ways to access an individual";
// console.log(data.charAt(1))
// it is not a casesensitive
// console.log(data.includes("there"))
// console.log(data.trim())
// console.log(data.lastIndexOf("individual"))
// if data is not available then output will be -1
// console.log(data.toLowerCase())
// type of is object
// const strObj = new String(strPrim);
// console.log(strObj)

// String primitives and String objects also give different results when using eval(). Primitives passed to eval are treated as source code; String objects are treated as all other objects are, by returning the object. For example:

// const s1 = "2 + 2"; // creates a string primitive
// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2)); // returns the string "2 + 2"
// let s3=10
 
// console.log(s3.toString())

// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

let sl="The quick brown fox jumps over the lazy dog.";
console.log(sl.slice(-9,-5))