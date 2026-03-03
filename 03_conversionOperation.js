let score = "koni"

// console.log(typeof score);

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);


//Nan reffers to Not a Number

// score = 33; output = Number
// score = 33adc; output = NaN
// score = "33"; output = String
// score = null; output = 0
// score = undefined; output = NaN
// score = true/false; output = 1/0
// score = "koni"; output = NaN

// as per examinataion in number there are many cases with different result {(33) number,(33aed) NaN,("33") string,(null) 0,(undifined) NaN,(true/false) 1/0,("koni") NaN


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// isLoggedIn = 1; output = true
// isLoggedIn = "1"; output = true
// isLoggedIn = -1; output = true
// isLoggedIn = 0; output = false
// isLoggedIn = undefined; output = false
// isLoggedIn = null; output = false
// isLoggedIn = "koni"; output = true
// isLoggedIn = ""; output = false

// as per examinataion in boolean there are some cases were result is false (0,undifined,null); true (1,-1,string,>1)

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(typeof stringNumber);
// console.log(stringNumber);

// someNumber = 33; output = 33 but converted into srting
// isLoggedIn = -33; output = -33 but converted into srting
// isLoggedIn = "33"; output = "33" but converted into srting
// isLoggedIn = 0; output = 0 but converted into srting
// isLoggedIn = undefined; output = undefined but converted into srting
// isLoggedIn = null; output = null but converted into srting
// isLoggedIn = "koni"; output = string
// isLoggedIn = ""; output = BLANK but converted into srting

// as per examinataion in string there are all converting into string but when "" is applied alone it is resulting BLANK



//****************************************************************OPERATIONS**********************************************************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " world " 
let str3 = 698
let str4 = str1 + str2 + str3 ;

// console.log(str4)

// console.log(typeof str4);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(1 + "2" + 2);

// here the inerpitation of the code is as follows
// "1" + 2; output = "12" (string)
// 1 + "2"; output = "12" (string)
// "1" + 2 + 2; output = "122" (string) because it is left to right and first it will convert 1+2 into string and then add another 2
// 1 + 2 + "2"; output = "32" (string) because it is left to right and first it will add 1+2 into number and then convert into string and add another 2
// 1 + "2" + 2; output = "122" (string) because it is left to right and first it will convert 1+2 into string and then add another 2


// console.log(+true);
// console.log(+false);
// console.log(+"");
// console.log(+null);
// console.log(+undefined);


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// gameCounter++;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.
// html#sec-type-conversion
