// for loop
for(let i = 1; i<=5; i++){
    console.log(`iteration ${i}`);
}

// while loop
let count = 1;
while(count <= 5){
    console.log(`count ${count}`);
    count++
}

// do while
let num = 1;
do{
    console.log(`num ${num}`);
    num++;
}while(num <= 5);

// multiplication table
let number = 5;
for(let i = 1; i<= 10; i++){
    console.log(`${number} * ${i} = ${number * i}`);
}

// function
function addNumbers(a, b){
    return a + b;
}
console.log(addNumbers(4, 6));

function isEven(number){
    return number % 2 === 0 ? "even" : "odd";
}
console.log(isEven(6));
console.log(isEven(5));


function factorial(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result*= i;
    }
    return result;
}
  console.log(factorial(5))

//   array
let fruits = ["apple", "berry", "orange"];
fruits.push("mango");
console.log(fruits);

fruits.unshift("lemon");
console.log(fruits)
fruits.pop();
console.log(fruits);
fruits.shift()
console.log(fruits)
fruits.forEach((fruits) => {
    console.log(fruits)
})

let numbers = [10, 20, 30, 40];
let sum = 0;
numbers.forEach((num) => {
    sum+= num;
});
console.log(`sum: ${sum}`);

// object

const person ={
    name: "nefiisa",
    age: 19,
    work: "teacher",
    greet: function(){
        console.log(`hello my name is: ${this.name}`);
    },
};
console.log(person.name);
person.location = "kahda";
console.log(person.location);

let book ={
    author: "john",
    title: "javascript",
    year: 2021,
    getDetailed: function(){
        return `${this.title} by ${this.author} published ${this.year}`;
    },
};
console.log(book.getDetailed());

// task one : fizzbuzz game using loop
for(let i = 1; i<= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzBuzz");
    }else if(i % 3 === 0){
        console.log("fizz");
    }else if( i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

//task two: Temperature Converter using function
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }
  
  let celsius = 30; 
  let fahrenheit = 86; 
  
  // Convert Celsius to Fahrenheit
  console.log(`${celsius}°C is equal to ${celsiusToFahrenheit(celsius).toFixed(2)}°F`);
  
  // Convert Fahrenheit to Celsius
  console.log(`${fahrenheit}°F is equal to ${fahrenheitToCelsius(fahrenheit).toFixed(2)}°C`);
  
//task three: shopping list
let shoppingList = ["milk", "breads", "eggs"];
shoppingList.push("mango");
console.log(shoppingList);
shoppingList.pop();
console.log(shoppingList);
shoppingList.forEach((item, index)=> {
    console.log(`${index + 1} ${item}`)
})

//task four: student grade system
let student = {
    name: "balqiis",
    age: 12,
    grades: [99, 98, 100, 100, 99],
    getAverageGrade: function () {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
      },
      getDetails: function () {
        return `Name: ${this.name}, Age: ${this.age}, Average Grade: ${this.getAverageGrade()}`;
      },
    };
    
    console.log(student.getDetails());

    //5. Combined Project: Build a Library System
    const library = {
        books: [],
        addBook: function (title, author, year) {
          this.books.push({ title, author, year });
        },
        removeBook: function (title) {
          this.books = this.books.filter((book) => book.title !== title);
        },
        listBooks: function () {
          this.books.forEach((book, index) => {
            console.log(`${index + 1}: ${book.title} by ${book.author}, published in ${book.year}`);
          });
        },
      };
      
      library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
      library.addBook("1984", "George Orwell", 1949);
      library.listBooks();
      library.removeBook("1984");
      library.listBooks();
      