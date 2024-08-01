// ES6+ FEATURES
//Activity1: Temlate literals
//Task1: Use template literals to create a string that includes variables for a person's name and age, and log the string to console
 const name= "siraj";
 const age= 21;
 const info= `My name is ${name}, i am ${age} old `;
//  console.log( info)

//Task2: Create a multi line string using template literals
const Today= `Today is 01 august
Thursday
2024
i am learning javascript
`
// console.log(Today)

//Activity2: Destructuring: Destructuring allows to extract values from arrays or properties from objects and assign them to variables in a single statement.
 //Task3: Use array destructuring to extract the first and second elements from an array of numbers and log them
 const numbers=[1,2,3,4,5];
 const [first,second]=numbers;
//  console.log(first)
//  console.log(second)
 //Additional activity
const [,,third,,n]=numbers;
// console.log(n)

//Task4: Use Object destructuring to extract the title and author from a book object and log them to the console
const book={
    title: "Js by HC",
    author: "Hitesh Choudhary"
}

const {title,author}=book
// console.log(title);
// console.log(author);

//Activity3: Spread and Rest operator
//Task5: Use the spread operator to create a new array that includes all elements of an existing array plys additional elements, and log the new array to console.
const num1= [1,2,3,4,5]
const newArr= [...num1,6,7,8]
console.log(newArr) 

//Task6: Use the rest opereator in a function to accept an arbitrary number of arguments,sum them, and return the result.