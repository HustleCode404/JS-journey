 console.log(2 > 1);   output - true
// console.log(2 < 1);   output - false
// console.log(2 >= 1);  output - true
// console.log(2 <= 1);  output - false                      
// console.log(2 == 1);  output - true
// console.log(2 != 1);  output - true



 console.log("2" > 1);   output - true
// console.log("2" < 1);   output - false
// console.log("2" >= 1);  output - true      
// console.log("2" <= 1);  output - false
// console.log("2" == 1);  output - false
// console.log("2" != 1);  output - true
// console.log("02" > 1);  output - true



console.log(null < 0);   output - false
// console.log(null > 0);   output - false
// console.log(null == 0);  output - false
// console.log(null <= 0);  output - true
// console.log(null >= 0);  output - true

// as per examination, the reason is that an equality check == and comparisons >, <, >=, <= work differently.
// Comparisons convert null to a number, treating it as 0. So null < 0 and null > 0 are false, but null <= 0 and null >= 0 are true. 
// However, the equality check null == 0 is false because null is only equal to undefined and itself, not to any other value.



console.log(undefined < 0);   output - false
// console.log(undefined > 0);   output - false
// console.log(undefined == 0);  output - false
// console.log(undefined <= 0);  output - false
// console.log(undefined >= 0);  output - false



//strict check
console.log(2 === 1);  output - false
// console.log(2 !== 1);  output - true
// console.log("2" === 2);  output - false
// console.log("2" !== 2);  output - true
// console.log(null === undefined);  output - false
// console.log(null !== undefined);  output - true

// as per examination, the reason is that strict equality === checks for both value and type.
// So 2 === 1 is false because the values are different, "2" === 2 is false because the types are different (string vs number), 
// and null === undefined is false because they are different types.
//  The !== operator returns true in these cases because the values or types do not match.




// In summary:

// - In JavaScript, comparison operators and equality checks can yield different results based on the types of values being compared.
// - Comparison operators (<, >, <=, >=) convert values to numbers when comparing, which can lead to unexpected results with certain types (e.g., null is treated as 0).
// - The equality operator (==) performs type coercion, which can also lead to unexpected results (e.g., null == 0 is false).
// - The strict equality operator (===) checks for both value and type without coercion, providing more predictable results.

