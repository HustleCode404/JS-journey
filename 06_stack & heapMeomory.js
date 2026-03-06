// Stack memory (primitive values) and Heap Memory (non-primitive values -(objects))

// Stack memory example
let a = 10;     
let b = a;      // b gets a copy of the value in a
a = 20;     // a is now 20, but b remains 10 because it holds a copy of the value
console.log(a); // Output: 20
console.log(b); // Output: 10  


// Heap memory example
let obj1 = { name: "Alice" };   
let obj2 = obj1;   // obj2 references the same object in heap memory
obj1.name = "Bob";  // Changing the name property of the object through obj1 also changes it for obj2
console.log(obj1.name); // Output: Bob
console.log(obj2.name); // Output: Bob    



// In summary,

//  primitive values are stored in stack memory and are copied when assigned to another variable,
//  while non-primitive values (objects) are stored in heap memory and variables hold references to the same object.
