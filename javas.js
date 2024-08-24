// 0:00:00 Introduction
// 0:01:24 Running JavaScript
// 0:04:23 Comment Your Code
// 0:05:56 Declare Variables
// 0:06:15 Storing Values with the Assignment Operator
// 0:11:31 Initializing Variables with the Assignment Operator
// 0:11:58 Uninitialized Variables
// 0:12:40 Case Sensitivity in Variables
// 0:14:05 Basic Math
// 0:15:30 Increment and Decrement
// 0:16:22 Decimal Numbers
// 0:16:48 Multiply Two Decimals
// 0:17:18 Divide Decimals
// 0:17:33 Finding a Remainder
// 0:18:22 Augmented Math Operations
// 0:21:19 Declare String Variables
// 0:22:01 Escaping Literal Quotes
// 0:23:44 Quoting Strings with Single Quotes
// 0:25:18 Escape Sequences
// 0:26:46 Plus Operator
// 0:27:49 Plus Equals Operator
// 0:29:01 Constructing Strings with Variables
// 0:30:14 Appending Variables to Strings
// 0:31:11 Length of a String
// 0:32:01 Bracket Notation
// 0:33:27 Understand String Immutability
// 0:34:23 Find the Nth Character
// 0:36:28 Word Blanks
// 0:40:44 Arrays
// 0:41:43 Nest Arrays
// 0:42:33 Access Array Data
// 0:43:34 Modify Array Data
// 0:44:48 Access Multi-Dimensional Arrays
// 0:46:30 push()
// 0:47:29 pop()
// 0:48:33 shift()
// 0:49:23 unshift()
// 0:50:36 Shopping List
// 0:51:41 Write Reusable with Functions
// 0:53:41 Arguments
// 0:55:43 Global Scope
// 0:59:31 Local Scope
// 1:00:46 Global vs Local Scope in Functions
// 1:02:40 Return a Value from a Function
// 1:03:55 Undefined Value returned
// 1:04:52 Assignment with a Returned Value
// 1:05:52 Stand in Line
// 1:08:41 Boolean Values
// 1:09:24 If Statements
// 1:11:51 Equality Operators
// 1:19:17 And / Or Operators
// 1:21:37 Else Statements
// 1:22:27 Else If Statements
// 1:23:30 Logical Order in If Else Statements
// 1:24:45 Chaining If Else Statements
// 1:27:45 Golf Code
// 1:32:15 Switch Statements
// 1:41:11 Returning Boolean Values from Functions
// 1:42:20 Return Early Pattern for Functions
// 1:43:38 Counting Cards
// 1:49:11 Build Objects
// 1:50:46 Dot Notation
// 1:51:33 Bracket Notation
// 1:52:47 Variables
// 1:53:34 Updating Object Properties
// 1:54:30 Add New Properties to Object
// 1:55:19 Delete Properties from Object
// 1:55:54 Objects for Lookups
// 1:57:43 Testing Objects for Properties
// 1:59:15 Manipulating Complex Objects
// 2:01:00 Nested Objects
// 2:01:53 Nested Arrays
// 2:03:06 Record Collection
// 2:10:15 While Loops
// 2:11:35 For Loops
// 2:13:56 Odd Numbers With a For Loop
// 2:15:28 Count Backwards With a For Loop
// 2:17:08 Iterate Through an Array with a For Loop
// 2:19:43 Nesting For Loops
// 2:22:45 Do...While Loops
// 2:24:12 Profile Lookup
// 2:28:18 Random Fractions and Whole Numbers
// 2:31:46 parseInt Function
// 2:33:29 Ternary Operator
// 2:34:57 Multiple Ternary Operators
// 2:36:57 var vs let
// 2:41:32 const Keyword
// 2:43:40 Mutate an Array Declared with const
// 2:44:52 Prevent Object Mutation
// 2:47:17 Arrow Functions
// 2:53:04 Default Parameters
// 2:54:00 Rest Operator
// 2:55:31 Spread Operator
// 2:57:18 Destructuring Assignment
// 3:06:39 Template Literals
// 3:10:43 Simple Fields
// 3:12:24 Declarative Functions
// 3:12:56 class Syntax
// 3:15:11 getters and setters
// 3:20:25 import and export

//? Datatypes and variable: undefined, null, booleans, string, symbol, number, and objects
var myname = "Prajjawal";

let ourname = "kansara";

const pi = 3.14;

// Variable var:
var a;
var b = 2;
console.log(b)
a = 7;
b = a;
console.log(b)


//Escaping Literal quotes in strings:
var myStr = "I am a\"double quoted\" string inside\"double quotes\"";
console.log(myStr);
var myStrr = '<a href="https://www.cloudskillsboost.google/" target="_blank"> Link</a>';
console.log(myStrr)

//for both single and doublr quotes:
var mystr = `'<a href="https://www.cloudskillsboost.google/" target="_blank"> Link</a>'`;
console.log(mystr);


//Escaping Sequence in Strings:
/*
code     output
\'       single quote
\"       double quote
\\       backslash
\n       newline
\t       tab
\b       backspaceb
\f       form feed
\r       carriage return
*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);


//Length of String:
var namee = "abcdef";
console.log(namee.length);
//Accessing String Characters:
console.log(namee[0]);
//String are immutable


//!Find the nth character:
console.log(namee.length - 1);
console.log(namee[namee.length - 1]);

//!replacing in String:
var word = "Ocygen";
var newword = word.replace('c', 'x');
console.log(newword);


//!Functions:
function wordblanks(mynoun, myadjective, myverb, myadverb) {
    var result = ""
    result += "the " + myadjective + " " + mynoun + " " + myverb + " to the store " + myadverb
    return result;
}
console.log(wordblanks("dog", "big", "run", "quickly"));


//!Array:
var myarr = [50, 60, 70];
console.log(myarr[0]);
//Modify array data
myarr[1] = 65;
console.log(myarr[1]);
//Access Multi-Dimensional Arrays
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
console.log(myArray);
console.log(myArray[2][1]);


//!push()
myarr.push(["dog", 3])
console.log(myarr);

//!pop()
myarr.pop()
console.log(myarr);  //remove the last element

//manipulate arrays with shift()
myarr.shift()
console.log(myarr);  //remove the first element

//manipulate array with unshift()
myarr.unshift(["cat", 4])
console.log(myarr);  //add the first element


//!Write reusable with functions:
function myFunction() {
    console.log("Hello World");
}
myFunction();
myFunction();
myFunction();


//!Arguments:
function myFunctionwithargs(a, b) {
    console.log(a + b);
}
myFunctionwithargs(2, 3);


//!Global Scope:
// var myGlobal = 10;  //this is globalscope, we can use it anywhere in code//

// function fun1(){
//     oopsGlobal = 5;  //it shows error bcz its not defined
// }

// function fun2(){
//     var output = "";
//     if (typeof myGlobal != "undefined"){
//         output += "myGlobal: " + myGlobal;
//     }
//     if(type oopsGlobal != "undefined"){
//         output += "oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }
// fun1();
// fun2();


//!Local Scopes:
function myLocal() {
    var myVar = 8;      //this is a local variable, runs only insides the function
    console.log(myVar);
}
myLocal();
// console.log(myvar);     //this line shows error bcz we calling myvar outside from the function


//!Global varable vs Local variable insides a function
var outerwear = "T-shirt";        //Global Variable

function myOutfit() {
    var outerwear = "sweater";    //Local Variable
    return outerwear;
}
console.log(myOutfit());  //this will print sweater bcz when we have same names of GV and LV, LV takes president over GV
console.log(outerwear);  //this will print T-shirt


//!Return a value from a Functionwith return:
function minus(num) {
    return num - 7;
}
console.log(minus(10));


//!Understanding Undefined value returned from a Function:
var sum = 2;
function addFive() {
    sum += 5;
}
console.log(addFive());
// console.log(sum);  //this will print 7 bcz addFive() returns undefined value


//!Assignment with a returned value:
var changed = 0;
function change(a) {
    return (a + 5) / 3;
}
changed = change(10);
console.log(changed);  //this will print 5


//!Stand in Line:
function nextInLine(arr, item) {
    arr.push(item);
    //return item;  this will return 1,2,3,4,5,6
    return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));  //JSON.stringify use to conert array into String
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


//!Boolean Values:
function welcome() {
    return true;
}


//!if Statements:
function fearNotTheOnion() {
    if (5 > 3) {
        return "wooo";
    }
    return "Blerp";
}
console.log(fearNotTheOnion());
/**********************************/
function trueOrfalse(wasThatTrue) {
    if (wasThatTrue) {
        return "A-True";
    }
    return "B-False";
}
console.log(trueOrfalse(true));    //boolean


//!Equality Statements:
function equality(a) {
    if (a == 12) {
        return "equal";
    }
    return "not equal";
}
console.log(equality(10));    //not equal
// console.log(equality('10'));     equal, doesn't matter it is a string 
//!Strict Equality operators:
function equalityStrict(a) {
    if (a === 8) {
        return "equal";
    }
    return "not equal";
}
console.log(equalityStrict('8'));  //not equal cuz its a string
// console.log(equalityStrict(8));    equal 


//!Practice:
function practice(a, b) {
    if (a == b) {               // (===) then it prints not equal
        return "equal"
    }
    return "not equal";
}
console.log(practice(5, '5'));    //equal


//!Strict Inequality operator:
function strictinEquality(a, b) {
    if (a !== b) {                       // {!=} then it prints equal
        return "not equal"
    }
    return "equal";
}
console.log(strictinEquality(5, '5'));    //not equal


//!Comparisions with the Logical And Operator:
function testLogical(val) {
    // if(val <=50){
    //     if(val >= 20){
    //         return "true";
    //     }
    // }
    if (val <= 50 && val >= 20) {  //if both conditions are true then it prints
        return "true";
    }
    return "false";
}
console.log(testLogical(10));


//!Comparisions with the Logical OR Operator:
function testLogicalOR(val) {
    if (val <= 50 || val >= 20) {  //if any of the conditions are true then
        return "true";
    }
    return "false";
}
console.log(testLogicalOR(60));

//! Golf Code:
var names = ["Holes-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "You Duffed It"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }
    else if (strokes <= par - 2) {
        return names[1];
    }
    else if (strokes == par - 1) {
        return names[2];
    }
    else if (strokes == par) {
        return names[3];
    }
    else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}
console.log(golfScore(5, 8));


//! Switch Statements:
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;

        case 2:
            answer = "delta";
            break;
        case 3:
            answer = "beta";
            break;

        case 4:
            answer = "gamma";
            break;

    }
    return answer;
}
console.log(caseInSwitch(2));


//! Default Option in switch statements:
function caseInSwitch1(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "alpha";
            break;

        case "b":
            answer = "delta";
            break;

        case "c":
            answer = "beta";
            break;

        case "d":
            answer = "gamma";
            break;

        default:                         //its like a else func.
            answer = "invalid"

    }
    return answer;
}
console.log(caseInSwitch1(2));      //invalid value


//!Multiple Identical option in switch statements:
function sequetialSizes(val) {
    var ans = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            ans = "abc";
            break;
        case 4:
        case 5:
        case 6:
            ans = "def";
            break;
        case 7:
        case 8:
        case 9:
            ans = "efg";
            break;
    }return ans;
} console.log(sequetialSizes(9));


//!Returning Boolean Value from a function:
// function isLess(a,b) {
//     if (a<b){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isLess(10,15));
function isLess(a, b) {
    return a < b;
}
console.log(isLess(10, 15));                 //it returns boolean value


//!Returning Early Pattern from function:
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    // Let's say a = 4 and b = 9.

    // Original Expression (2):

    // Math.sqrt(4) = 2               for sqrt(2) = 1.414
    // Math.sqrt(9) = 3
    // Sum = 2 + 3 = 5                1.414+1.414 = 2.828           
    // Squared: 5^2 = 25              2.828^2     = 7.999
    // Rounded: Math.round(25) = 25               = 8
}
console.log(abTest(-2, 2));


//!Counting Cards:
var count = 0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = "Hold";
    if (count > 0) {
        holdbet = "Bet";
    }
    return count + " " + holdbet;
}

cc(2); cc("K"); cc(10); cc("K"); cc("A");      //this values are storing in count variable
console.log(cc(4));


//!Build JavaScript Objects:
var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
    "his eyes": "Brown",                        //Spaces
    8: "age"
};

//!Accessing Object properties with Dot Notation:
var nameValue = ourDog.name;
var friendsValue = ourDog.friends;
console.log(friendsValue);

//!Bracket Properties:
var eyesvalue = ourDog["his eyes"];           //if the elements have spaces, so we use bracket
console.log(eyesvalue);

//!Variables:
var ageNum = 8;
var hisage = ourDog[ageNum];
console.log(hisage);

//!Update Object Properties:
ourDog.name = "Kaido";
console.log(ourDog.name);

//!Add new Properties to an Object:
ourDog['bark'] = "woof wooof";                   // using bracket notation
ourDog.bark1 = "ara araa";                      //using dot notation

console.log(ourDog.bark1);
console.log(ourDog['bark']);

delete ourDog.bark1;                           //delete

//!Testing Objects for properties:
function checkObj(checkProp) {
    if (ourDog.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}
console.log(checkObj("bark1"));


//!Manipulating Complex Objects:
var title = [{
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release year": 1973,
    "formates": ["CD", "8T", "LP"],
    "gold": true
},
{
    "artist": "shebi Hortan",
    "title": "musician",
    "release year": 1981,
    "formates": ["youtube", "insta", "X"]
}]


//! Accessing Nested Objects:
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "dashboard": "extra large"
        },
        "outside": {
            "trunk": "jeep",
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//!Accessing nested arrays:
var myPlants = [{
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
},
{
    type: "trees",
    list: ["fir", "pine", "birch"]
}];

var secondTree = myPlants[1].list[1];
console.log(secondTree);


//! Record Collection
var collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    1991: {
        albumTitle: 'Scarface',
        artist: 'Geto Boys',
        tracks: ['Id Die for You', 'Kick in the Door']
    },
    1245: {
        artist: 'Various',
        tracks: ['Run Forrest Run', 'My Life']
    },
    5439: {
        album: "Abba Gold"
    }
};
// keep a copy of the collection for test
var collection = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

updateRecords(1991, "tracks", "test");
console.log(updateRecords(5439, "artist", "Abba"));


//!Iterate through an array with a for loop:
var arr = [5, 2, 3, 4, 6];
var total = 0;

for (var i = 0; i < arr.length; i++) {
    total += arr[i];
}
console.log(total);


//!Nested Array:
function multipleAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multipleAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);


//!DO...While loops:
var myarr = [];
var i = 10;

do {
    myarr.push(i);
    i++;
} while (i < 5)
console.log(i, myarr);

//!Random Function and whole numbers:
//*Math.random = return no. btw 0 to 1, but not 1 eg: 0.215897423169
//*Math.floor(Math.random()*20) = return no. btw 0 to 20, but not 20 eg: 19, 5

//Generate random whole no. within range
function ourrandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(ourrandom(1, 9));

//!Use the parseInt function:
function strtoint(str) {
    return parseInt(str);
}
console.log(strtoint("123"));  //123

//!parseInt function with the radix:
function strtoint(str, radix) {
    return parseInt(str, radix);
}
console.log(strtoint("1010", 2));  //10 (2 is the base so it can be identified as binay by the computer)

//OR

function converttointeger(str) {
    return parseInt(str, 2);
}
console.log(converttointeger("10011"));  //19

//!Use the Conditional(Ternary) Operator:
function isEven(num) {
    return num % 2 == 0 ? "Even" : "Odd"; //condition ? statement if true : statement if false
}
console.log(isEven(10));  //Even

//Multiple conditions
function checksign(num) {
    return num > 0 ? "+ve" : num < 0 ? "-ve" : "0"
}
console.log(checksign(-10));  //-ve


//!Arrow function to write consise Anonymous Function:
//*function without any name
// var magic = function(){   
// return new Date();
// }

//using arrow func.
var magic = () => new Date();

//!Write arrow funct. with parameters:
//(-parameter-) => return value;
var myconcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myconcat([1, 2, 3], [4, 5, 6]));

//!Write higher order arrow Function:
//higher order function is a function that takes another function as an argument
//or returns a function as a result.
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);  //returns square of +ve integers

/***************************/
//!Default Parameters:
const increament = (function () {
    return function increament(number, value) {
        return number + value;
    };
})();
console.log(increament(10, 5));  //15
console.log(increament(10));  //10


//!Using rest operator with function parameters:
const sums = (function () {
    return function sums(...args) {     //sum(x,y,z)
        // const args = [x, y, z]
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sums(1, 2, 3));

//!Use the spread operator to evaluate Arrays In-place:
const arr5 = ['jan', 'feb', 'mar', 'apr', 'may'];
let arr3;
(function () {
    arr3 = [...arr5];    // change this line(arr3=arr)
    arr5[0] = 'noni'
})();
console.log(arr3);

//!Use destructuring assignment to assign variables from objects:
var vox = { x: 3.6, y: 7.4, z: 6.54 };

var x = vox.x;   // x = 3.6
var y = vox.y;   // y = 7.4
var z = vox.z;   // z = 6.54

const { x: r, y: p, z: q } = vox;  //a=3.6, b=7.4, c=6.54
console.log(r, p, q);
//
const AVG_TEMPERATURES = {
    today: 77.5, tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow: tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

//!Destructuring assignment with nested objects:
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow: { max } } = forecast;
    //or : const{tomorrow: {max: maxof tomorrow}} = forecast;}}  
    // return maxoftommorrow;
    return max;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

//!Destructuring assignment to assign variables from arrays:
const [n, m, , o] = [1, 2, 3, 4, 5, 6];
console.log(n, m, o);   // 1,2,4

let d = 8, e = 6;
(() => {
    "use strict";
    [d, e] = [e, d]
})();

console.log(e);  // 6
console.log(d);  // 8

//!Use Destructuring Assignment with the rest Operator:
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [, , , ...arr4] = list;

    return arr4;
}
const arr4 = removeFirstTwo(source);
console.log(arr4);

//!Use Destructuring Assignment to Pass an Object as a Function's Parameters:
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function () {
    return function half({ max, min }) {    //max,min are the keys of the object stats
        //      half(stats)
        return (max + min) / 2.0;
        // (stats.max + stats.min)   
        // it will return the same thing but we are not using stats, only using the keys that we need, this is used in API calls, when we getting request from AJAXrequest, APIrequest, its hold so much data, we are not using all of them, we are only using the keys that we need.
    };
})();
console.log(half(stats));


//!Create String using Templet Literals:
const person = { name: "Billie", age: 28 };
const greeting = `Hello, my name is ${person.name} and I am ${person.age} year old`;
console.log(greeting);

/*****************************/

const results = {
    success: ["max-length", "no-amd", "prefer-arrow-function"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-mixed-spaces-and-tabs"]
};

function makeList(arr8) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr8.length; i++) {
        resultDisplayArray.push(`<li cliass="text-warning"> ${arr8[i]}</li>`)
    }
    return resultDisplayArray;
}
const resultDisplayArray = makeList(results.failure);

console.log(resultDisplayArray);


//!Write Concise object Literasls Declarartions Using Simple Fields:

// const createPerson = (name, age, gender) => {
// return {
//     name: name,             key:value
//     age: age,
//     gender: gender
// };                          
//     A better way to do this

const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Zodiac Hasbro", 56, "male"));


//!Write Concise Declarative Functions:
//objects can have functions inside it
const bicyclee = {
    gear: 2,
    // setGear : function (newGear){    we dont need to write 'function', here's a better alternative
    setGear(newGear) {      //this is a function inside an object
        this.gear = newGear;
    }
};
bicyclee.setGear(5);
console.log(bicyclee.gear);


//!Use class syntax to Define a constructor Function:
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);

/***********************************/

function makeClass() {
    class Vege {
        constructor(name) {
            this.name = name;
        }
    }
    return Vege;
}
const Vege = makeClass();
const carrot = new Vege("Carrot");
console.log(carrot.name);


//!Use Getter and Setter to Control Access to an object:

function madeCLass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5 / 9 * (temp - 32);                 //this keyword is used to store variable(temp) that only accessble in particular class and '_temp', that underscore is used to signify that the variable(temp) is private 
        }
        get temprature() {
            return this._temp;
        }
        set temprature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = madeCLass();
const thermos = new Thermostat(100);
let temp = thermos.temprature;
thermos.temprature = 26;
temp = thermos.temprature;
console.log(temp);


let abs= {
    "student": "Akash",
    "class": 12,
    "age": 16,
    "grade": "A"

}

console.log(Object.keys(abs));
console.log(Object.values(abs));