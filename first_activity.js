//? Problem #1: What should the following evaluations return?
// 2 == '2'            <---true
// 'he' == 'she'       <---false
// 2 === 2             <---true
// 'true' == true      <---false
// true === true       <---true
// 'true' != true      <---true    
// 'true' !== true     <---true

//? Problem #2: What are the three different ways you can declare a variable? And what is the differences
//? between them? 

// var     <--- global scope, can be reassigned a value
// let     <--- block scope, can be reassigned a value
// const   <--- block scope, values are constant

//? Problem #3: Write a simple function for each type of these functions:

//! First-Class Function
// const firstClass = () =>{
//     console.log ('Hello World')
// }

// firstClass();

//! Higher-Order Function
// const higherOrder = (fun) =>{
//     fun;
// }

// higherOrder(firstClass())

//! Callback Function

// const callBack = () =>{
//     firstClass();
// }

// callBack();

//? Problem #4: What is the value of the console.log of “a”, “b”, and “c” shown in the code below?
// const a = 'hi';                   
// console.log(c);                      <---undefined
// const someFunction = (arg) => {
//  const b = 'bye';                    
//  if (arg) {
//  const c = 'see ya!';
//  console.log(a);                     <---'hi'
//  console.log(b);                     <---'bye'
//  }

//? Given the following data structure, write a for loop using:
//? const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//! For statement
// for(let i=0;i<someArray.length;i++){
//     console.log(someArray[i])
// }

//! For…of 

// for(let num of someArray){
//     console.log(num)
// }


//? Given the following data structure:
const someArray = [1, 2, 3, 4, 5];
//!  Use the concat() method to merge the two arrays to return: [1, 2, 3, 4, 5]
// const someArray1 = [1,2,3]
// const someArray2 = [4,5]
// console.log(someArray1.concat(someArray2))

//! Use the length property to return the length of the array
// console.log(someArray.length)

//! Use the filter() method to filter out the element “3” and return: [1, 2, 4, 5]
// const filtered = someArray.filter(num=>num!==3)
// console.log(filtered)

//! Use the find() method to find and return the value of 5.
// console.log(someArray.find(num=>num===5))

//! Use the slice() method to return back this array: [3, 4]
// console.log(someArray.slice(2,4))

//! Use the splice() method to return back this array: [1, 2, 5]
// someArray.splice(2,2)
// console.log(someArray)


//! Use the includes() method to return back TRUE when I pass in “4” into the includes method.
// console.log(someArray.includes(4))

//! Use the indexOf() method to return back the index of the element “2”
// console.log(someArray.indexOf(2))

//! Use the isArray() method to return back TRUE when I pass in the array
// console.log(Array.isArray(someArray))

//! Use the join() method to return back: “1, 2, 3, 4, 5”
// console.log(someArray.join(', '))

//! Use the map() method to return back a new array: [2, 4, 6, 8, 10]
// const newArr=someArray.map(number=>number*2)
// console.log(newArr)

//!Use the pop() method to return back a new array: [1, 2, 3, 4]
// someArray.pop()
// console.log(someArray)

//! Use the push() method to return back a new array: [1, 2, 3, 4, 5, 6]
// someArray.push(6)
// console.log(someArray)

//! Use the shift() method to return back a new array: [2, 3, 4, 5]
// someArray.shift()
// console.log(someArray)

//! Use the unshift() method to return back a new array: [0, 1, 2, 3, 4, 5]

// someArray.unshift(0)
// console.log(someArray)
//!Sort this array to return [9, 1, 3, 5] using the sort() method

// const arr = [9, 1 ,3 ,5]
// const newArr = arr.sort()
// console.log(newArr)

//!Use the reduce() method to return back the sum of all numbers in the array

// const total = someArray.reduce((prev,current)=>prev+current, 0)
// console.log(total)

//? Problem #7: Given the following data structure:
const someObject = {
 color: 'black'
}
//! Use the assign() method to add a new key value pair of: name: ‘john doe’

// Object.assign(someObject,{name: 'john doe'})


//! Use the dot notation to add a new key value pair of: age: 22

// someObject.age = 22

//! Use the bracket notation to add a new key value pair of: address: ‘123 test address’

// someObject['address'] = '123 test address'

//! Use the keys() method to return a array back of the keys: [“color”, “name”, “age”, “address”]
// console.log(Object.keys(someObject))

//!Use the values() method to return a array back of the values: [“black”, “john doe”, “22”, “123 test
//! address”]

// console.log(Object.values(someObject))
//! Use the for…in loop against this object to console.log each of the keys values.

// for(const keys in someObject){
//     console.log(someObject[keys])
// }

//? Problem #8: Given the following data structure:

const numbers = [
 {
 num: 1
 },
 {
 num: 2
 },
 {
 num: 3
 }
]

//! Use either the for statement or for…of loop to console.log each of the keys. Values.

// for(const obj of numbers){
//     console.log(obj['num'])
// }

//? Problem #9: Create a new Set() object

// const newSet = new Set([]);

//! Add a new value of: ‘john doe’

// newSet.add('john doe')

//! Check if the value of ‘john doe’ exists

// console.log(newSet.has('john doe'))

//! Remove the value of ‘john doe’

// newSet.delete('john doe')
// console.log(newSet)

//? Problem #10: Create a new Map() object

// const newMap = new Map();

//! Add a new key-value pair of: name: ‘john doe’

// newMap.set('name' , 'john doe')

//! Check if the value ‘john doe’ exists

// console.log([...newMap.values()].includes('john doe'))

//! Remove the key-value pair of ‘john doe’

// newMap.delete('name')

//? Problem #11: Explain what asynchronous programming means in 3 sentences. 

// By default, the control flow of a program starts from top to bottom in which it executes tasks one by one.
// However, asynchronous programming allows us to do multiple tasks at once by executing the next task while waiting for
// the current task to be finished. This is useful especially when certain tasks takes too long to be finished.

//? Problem #12: Explain what call back hell is. 
    

// Callback hell is basically a term for nested callbacks in which each callback waits for the previous callback to be finished.

//? Problem #13: Explain what is a promise and describe the possible states of promises. 

// Promises are used to handle asynchronous operations. These promises then have different states.
// If the asynchronous task is still ongoing, it has the pending state. If it is done and the operation is successful,
// then it has the resolved state. If the operation is unsuccessful, the promise is rejected.

//? Problem #14: What is async/await?

// The async keyword is used to determine that a function returns a promise. The await keyword is then used to
// make sure that javascript waits for the async function to be settled and then returns whether the promise is resolved or rejected.
    