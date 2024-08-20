
//? Datatypes and variable: undefined, null, booleans, string, symbol, number, and objects
var myname = "Prajjawal";

let ourname= "kansara";

const pi = 3.14;

// Variable var:
var a;
var b =2;
console.log(b)
a= 7;
b=a;
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
var namee= "abcdef";
console.log(namee.length);
//Accessing String Characters:
console.log(namee[0]);
//String are immutable


//!Find the nth character:
console.log(namee.length-1);
console.log(namee[namee.length-1]);

//!replacing in String:
var word = "Ocygen";
var newword = word.replace('c', 'x');
console.log(newword);


//!Functions:
function wordblanks(mynoun, myadjective, myverb, myadverb){
    var result= ""
    result += "the " + myadjective+ " " + mynoun+ " " + myverb + " to the store " + myadverb
    return result;
}
console.log(wordblanks("dog", "big", "run", "quickly"));


//!Array:
var myarr = [50,60,70];
console.log(myarr[0]);
//Modify array data
myarr[1]=65;
console.log(myarr[1]);
//Access Multi-Dimensional Arrays
var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
console.log(myArray);
console.log(myArray[2][1]);


//!push()
myarr.push(["dog",3])
console.log(myarr);

//!pop()
myarr.pop()
console.log(myarr);  //remove the last element

//manipulate arrays with shift()
myarr.shift()
console.log(myarr);  //remove the first element

//manipulate array with unshift()
myarr.unshift(["cat",4])
console.log(myarr);  //add the first element


//!Write reusable with functions:
function myFunction(){
    console.log("Hello World");
}
myFunction();
myFunction();
myFunction();


//!Arguments:
function myFunctionwithargs(a,b){
    console.log(a+b);
}
myFunctionwithargs(2,3);


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
function myLocal(){
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
function minus(num){
    return num - 7;
}
console.log(minus(10));


//!Understanding Undefined value returned from a Function:
var sum= 2;
 function addFive(){       
     sum+=5;
 }
 console.log(addFive());
 // console.log(sum);  //this will print 7 bcz addFive() returns undefined value


//!Assignment with a returned value:
var changed =0;
function change(a){
    return (a+5)/3;
}
changed = change(10);
console.log(changed);  //this will print 5


//!Stand in Line:
function nextInLine(arr, item) {
    arr.push(item);
    //return item;  this will return 1,2,3,4,5,6
    return arr.shift();
}
var testArr=[1,2,3,4,5];

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
function trueOrfalse(wasThatTrue){
    if (wasThatTrue) {
        return "A-True";
    }
    return "B-False";
}
console.log(trueOrfalse(true));    //boolean


//!Equality Statements:
function equality(a){
    if(a==12){
        return "equal";
    }
        return "not equal";
}
console.log(equality(10));    //not equal
// console.log(equality('10'));     equal, doesn't matter it is a string 
//!Strict Equality operators:
function equalityStrict(a){
    if(a===8){
        return "equal";
    }
    return "not equal";
}
console.log(equalityStrict('8'));  //not equal cuz its a string
// console.log(equalityStrict(8));    equal 


//!Practice:
function practice(a,b){
    if(a==b){               // (===) then it prints not equal
        return "equal"
    }
    return "not equal";
}
console.log(practice(5,'5'));    //equal


//!Strict Inequality operator:
function strictinEquality(a,b){
    if(a!==b){                       // {!=} then it prints equal
        return "not equal"
    }
    return "equal";
}
console.log(strictinEquality(5,'5'));    //not equal


//!Comparisions with the Logical And Operator:
function testLogical(val){
    // if(val <=50){
    //     if(val >= 20){
    //         return "true";
    //     }
    // }
    if(val <=50 && val >=20){  //if both conditions are true then it prints
        return "true";
    }
    return "false";
}
console.log(testLogical(10));


//!Comparisions with the Logical OR Operator:
function testLogicalOR(val){
    if(val <=50 || val >=20){  //if any of the conditions are true then
        return "true";
        }
        return "false";
}
console.log(testLogicalOR(60));

//! Golf Code:
var names= ["Holes-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "You Duffed It"]
function golfScore(par, strokes){
    if(strokes == 1){
        return names[0];
    }
    else if(strokes <= par-2){
        return names[1];
    }
    else if(strokes == par-1){
        return names[2];
    }
    else if(strokes == par){
        return names[3];
        }
    else if(strokes == par+1){
        return names[4];
    }else if(strokes == par+2){
        return names[5];
    }else if(strokes >= par+3){
        return names[6];
    }
}
console.log(golfScore(5, 8));


//! Switch Statements:
function caseInSwitch(val){
    var answer = "";
    switch(val){
    case 1:
        answer= "alpha";
        break;

    case 2:
        answer= "delta";
        break;
    case 3:
        answer= "beta";
        break;

    case 4:
        answer= "gamma";
        break;

    }
    return answer;
}
console.log(caseInSwitch(2));


//! Default Option in switch statements:
function caseInSwitch1(val){
    var answer = "";
    switch(val){
    case "a":
        answer= "alpha";
        break;

    case "b":
        answer= "delta";
        break;

    case "c":
        answer= "beta";
        break;

    case "d":
        answer= "gamma";
        break;

    default:                         //its like a else func.
        answer = "invalid"

    }
    return answer;
}
console.log(caseInSwitch1(2));      //invalid value


//!Multiple Identical option in switch statements:
function sequetialSizes(val) {
    var ans="";
    switch(val){
    case 1:
    case 2:
    case 3:
        ans="abc";
        break;
    case 4:
    case 5:
    case 6:
        ans="def";
        break;
    case 7:
    case 8:
    case 9: 
         ans="efg";
         break;
    }return ans;
}console.log(sequetialSizes(9));


//!Returning Boolean Value from a function:
// function isLess(a,b) {
//     if (a<b){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isLess(10,15));
function isLess(a,b) {
    return a<b;
}
console.log(isLess(10,15));                 //it returns boolean value


//!Returning Early Pattern from function:
function abTest(a,b){
    if (a<0 || b<0){
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
console.log(abTest(-2,2));


//!Counting Cards:
var count = 0;
function cc(card){
    switch(card){
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
    if(count>0){
        holdbet= "Bet";
    }
    return count + " " + holdbet;
}

cc(2); cc("K"); cc(10); cc("K"); cc("A");      //this values are storing in count variable
console.log(cc(4));


//!Build JavaScript Objects:
var ourDog= {
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
var ageNum= 8;
var hisage = ourDog[ageNum];
console.log(hisage);

//!Update Object Properties:
ourDog.name = "Kaido";
console.log(ourDog.name);

//!Add new Properties to an Object:
ourDog['bark']= "woof wooof";                    // using bracket notation
ourDog.bark1 = "ara araa";                      //using dot notation

console.log(ourDog.bark1);
console.log(ourDog['bark']);

delete ourDog.bark1;                           //delete

//!Testing Objects for properties:
function checkObj(checkProp){
    if (ourDog.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }else{
        return "Not Found";
    }
}
console.log(checkObj("bark1"));


//!Manipulating Complex Objects:
var title=[{
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
        "inside":{
            "glove box": "maps",
            "dashboard": "extra large"
        },
        "outside":{
            "trunk": "jeep",
        }
    }
};

var gloveBoxContents= myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//!Accessing nested arrays:
var myPlants =[{
    type: "flowers",
    list:["rose", "tulip", "dandelion"]
},
{
    type: "trees",
    list:["fir", "pine", "birch"]
}];

var secondTree = myPlants[1].list[1];
console.log(secondTree);
