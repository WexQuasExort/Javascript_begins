// My first JavaScript code
/*------------------------------------------------------*/
//part 1
// console.log("hi World");
// window.alert("hi world");

// This is a comment

/*
 This is 
 a multiline
 comment
*/

/*------------------------------------------------------*/
//part 2

// let text = "Ma chi solo"; //strings
// let age = 19; // numbers
// let student = true; // booleans
// age++;
// console.log(text + " " + age);
// console.log(text , age);
// console.log("Enrolled:",student);

// document.getElementById("p1").innerHTML = "Hi ";
// document.getElementById("p2").innerHTML = text +" "+ age;
// document.getElementById("p3").innerHTML = "Enrolled: " + student;

// let number = 20;
// number += 2;
// number -= 2;
// number /= 2;
// number *= 2;
// number **= 2;
// number %= 2;
// number --;
// number ++;
// number = 1 + 2 * (3 + 4);
// console.log(number);

/*------------------------------------------------------*/
//part 3
// getting an input from user

//easy way
// let username = window.prompt("what's your name");
// console.log(username)

// Difficult way HTML textbox
// let username;
// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username)
//     document.getElementById("myLabel").innerHTML = username;
// }

/*------------------------------------------------------*/
// part 4 Type conversionn

// let age = 5;
// console.log(typeof age)
// age = String(age);
// console.log(typeof age)
// age = Number(age);
// console.log(typeof age)

// let x = Number("3.14")
// x = Number("pizza") // results as NaN
// let y = String(3.14)
// let z = Boolean("") // if u assin sth like "pizza", this will return true
// console.log(x, typeof x)
// console.log(y, typeof y)
// console.log(z, typeof z)
/*------------------------------------------------------*/
// part 5 const
// const = a variable that can't be changed
// const PI = 3.14159 // can't be changed
// let radius;
// let circumference;
// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);
// circumference = 2 * PI * radius;
// console.log("The circumference is:", circumference);

/*------------------------------------------------------*/
// part 6 Math function

// let x = 3.14
// x = Math.round(3.5); // round
// x = Math.floor(3.80); // round down
// x = Math.ceil(3.14); // round up
// x = Math.pow(x, 3);
// x = Math.sqrt(x);
// x = Math.abs(x); // -3.14 -> 3.14
// let maximum = Math.max(2, x, 6);
// let minimum = Math.min(2, x, 4);
// x = Math.PI;

// console.log(x);
/*------------------------------------------------------*/
// part 7 Random number generator

// let x = Math.random() * 6 + 1 ; // range(0,6)
// console.log(x);
// console.log(Math.floor(x))
/*------------------------------------------------------*/
// part 8 useful strings and methods
// let userName = "  hello  "
// let phoneNumber = "123-456-9820"
// console.log(userName.length)
// console.log(userName.charAt(0))
// console.log(userName.indexOf("l"))
// console.log(userName.lastIndexOf("l"))
// console.log(userName.trim()) // removes spaces
// console.log(userName.toLowerCase())
// console.log(userName.toUpperCase())
// phoneNumber = phoneNumber.replaceAll("-","")
// console.log(phoneNumber)
/*------------------------------------------------------*/
// part 9 slice()
// let fullName = "Deep Learning"
// let firstName;
// let lastName;
// lastName = fullName.slice(4)
// firstName = fullName.slice(0,3)
// firstName = fullName.slice(0, fullName.indexOf(" "))
// lastName = fullName.slice(fullName.indexOf(" ") + 1)
// console.log(firstName) // just prints "code"
// console.log(lastName) // just prints "code"

/*------------------------------------------------------*/
// // part 10 method chaining
// let userName = "reza";

// // let letter = userName.charAt(0);
// // letter = letter.toUpperCase();
// // console.log(letter)
// // or
// userName = userName.charAt(0).toUpperCase() + userName.slice(1,userName.length);
// console.log(userName)

/*------------------------------------------------------*/
// // part 11 if statement
// let age = -2;
// if(age>= 18){
//     console.log("You are an adult")
// }else if(age < 0){
//     console.log("You haven't been bornn yet")
// }
// else{
//     console.log("You are a child")
// }
// let online = true;
// if(online){console.log("you are online")}
/*------------------------------------------------------*/
// part 12 switch
// let grade = "C"
// switch(grade){
//     case "A":
//         console.log("You did Great")
//         break;
//     case "B":
//         console.log("You did Good")
//         break;
//     case "C":
//         console.log("You did Ok")
//         break;
//     case "F":
//         console.log("You Faild")
//         break;
//     default:
//         console.log(grade , "is not a grade")
// }
// grade = 98
// switch(true){
//     case grade>=90:
//         console.log("You did Great")
//         break;
//     case grade>=80:
//         console.log("You did Good")
//         break;
//     case grade>=70:
//         console.log("You did Ok")
//         break;
//     case grade>=60:
//         console.log("You Faild")
//         break;
//     default:
//         console.log(grade , "is not a grade")
// }
/*------------------------------------------------------*/
// part 13 strict equality operator
// let x = 3.14
// if(x == 3.14){console.log("x is equal to 3.14")}
// x = "3.14"
// if(x === 3.14){console.log("x is PI")}else{console.log("It's not PI")} // Compares datatype as well
/*------------------------------------------------------*/
// part 14 && ,|| , NOT logical operators
// let temp = 15
// let sunny = true
// if(temp >0 && temp <30 && sunny){
//     console.log("The weather is good!")
// }else{
//     console.log("The weather is bad!")
// }
// temp = -10
// if(temp <=0 || temp >=30){
//     console.log("The weather is bad!")
// }else{
//     console.log("The weather is good!")
// }

// temp = -15
// if(!(temp > 0)){
//     console.log("The weather is bad!")
// }else{
//     console.log("The weather is good!")
// }
/*------------------------------------------------------*/
// part 15 while, do while, for loops
// let counter =0;
// while (counter < 10){
//     counter ++;
//     console.log("hiiii")
// }
// do{
//     counter--;
//     console.log("bye")
// }while(counter != 1)
// for(let i=0; i<=10; i++){
//     console.log(i)
// }
/*------------------------------------------------------*/
// part 16 while, do while, for loops
// let counter =0;
// while (counter < 10){
//     counter ++;
//     console.log("hiiii")
// }
// do{
//     counter--;
//     console.log("bye")
// }while(counter != 1)
// for(let i=0; i<=10; i++){
//     console.log(i)
// }
// we could use break and continue as well
/*------------------------------------------------------*/
// part 17 functions
// let i = 3;
// function happyBirthday(j){
//     let counter = 1;
//     let sum =0 ;
//     while(counter<=j){
//         sum += counter
//         console.log("happy birthday" + counter)
//         counter ++;

//     }
//     return sum
// }
// console.log(happyBirthday(i))
/*------------------------------------------------------*/
// part 18 ternary operator
// condition ? expIfTrue : exprFalse
// let adult = checkAge(12)
// console.log(adult)
// function checkAge(age){
//     // if(age >= 18){
//     //     return true
//     // }else{
//     //     return false
//     // }
//     return age>=18 ?true:false
// }
/*------------------------------------------------------*/
// part 19 var vs let
// let = variables are limited to block scope {}
// var = variables are limited to a fucntion(){}
//example
// for(let i=0; i<2; i++){
//     // console.log(i)
// }

// for(var i=0; i<2; i++){
//     // console.log(i)
// }
// console.log(i)
// a global variable is declared using a "var" keyword which is out of any function
/*------------------------------------------------------*/
// part 20 arrays
// let fruits = ["apple","orange","banana"] // array
// fruits.push("lemon") // adds an element
// fruits.pop() // removes last element
// fruits.unshift("mango") // add an element to begining
// fruits.shift() // removes element from begining
// console.log(fruits)
// let length = fruits.length;
// let index = fruits.indexOf("lemon") // lemon does not exist so it returns -1
// console.log(length, index)
/*------------------------------------------------------*/
// part 21 loop through an array
// let prices = [5, 10, 15, 20];
// for(let i=0; i<prices.length; i++){
//     console.log(prices[i]);
// }
// for(let price of prices){
//     console.log(price)
// }
/*------------------------------------------------------*/
// part 22 sort an array of strings
// let fruits = ["apple","orange","banana", "mango"]
// fruits = fruits.sort()
// console.log(fruits)
// fruits = fruits.sort().reverse()
// console.log(fruits)
/*------------------------------------------------------*/
// part 23 2d array
// let fruits = ["apple","orange","banana", "mango"]
// let vegetables = ["carrots","onions","potatoes"]
// let meats = ["eggs","chicken","fish"]

// let groceryList = [fruits, vegetables, meats]

// for(let list of groceryList){
//     for(let item of list){
//         console.log(item)
//     }
// }
// groceryList[1][0] = "delicious"
/*------------------------------------------------------*/
// // part 24 spread operator(unpack the elements into indivitual arguments)
// let userName = "Hii"
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(...numbers)
// console.log(...userName)
// console.log(Math.max(...numbers))

// let a = [1,2,3]
// let b = [4,5,6]
// a.push(...b)
// console.log(...a)
/*------------------------------------------------------*/
// part 25 rest parameters = represents an indifinite nubmer of parameters
// let a = 1; 
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;
// console.log(sum(a, b, c, d, e))
// function sum(x, y...numbers){ // x and y are gonna be a and b
//     let total = 0
//     for(let number of numbers){
//         total += number
//     }
//     return total + x + y
// }
/*------------------------------------------------------*/
// part 26 callbacks

// let total = sum(2,3)
// function sum(x , y){
//     let result = x + y
//     return result
// }
// function displayConsole(output){
//     console.log(output)
// }
// // displayConsole(total)

// function sum(x , y, callback){
//     callback(x + y)
// }
// sum(2, 3, displayConsole)
/*------------------------------------------------------*/
// part 27 array.foreach
// let students = ["student1, student2, student3, student4"]
// students.forEach(capitalize)
// students.forEach(print)
// function capitalize (element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1)
// }
// console.log(students[0])

// function print(element){
//     console.log(element)
// }
/*------------------------------------------------------*/
// part 28 array.map = executes a provided callback function
//                     once for each array element And creates a new array
// let numbers = [1, 2, 3, 4, 5]
// let squares = numbers.map(square);
// squares.forEach(print) 

// squares = numbers.map(cube);
// squares.forEach(print) 

// function square(element){
//     return Math.pow(element ,2);
// }
// function cube (element){
//     return Math.pow(element, 3)
// }
// function print(element){
//     console.log(element)
// }
/*------------------------------------------------------*/
// part 29 array.filter() = creates a new array with all elements
//                          that pass the test provided by a function
// let ages = [18, 16, 21, 17, 19, 90]
// let adults = ages.filter(checkAge);
// function checkAge(element){
//     return element >= 18;
// }
// adults.forEach(print)
// function print(element){
//     console.log(element)
// }
/*------------------------------------------------------*/
// part 30 array.reduce() = reduces an array to a single value
// let prices= [5, 10, 15, 20, 25, 30]
// let total = prices.reduce(checkOut)
// function checkOut(total, element){
//     return total + element;
// }
// console.log("The Total is: $" + total)
/*------------------------------------------------------*/
// part 31 sort nubmers ascending and descending
// let grades = [100, 50, 90, 60, 80, 70]
// grades.sort(descendingSort)
// grades.forEach(print)
// grades.sort(ascendingSort)
// grades.forEach(print)
// function descendingSort(x , y){
//     return y - x;
// }
// function ascendingSort(x , y){
//     return x - y;
// }
// function print(element){
//     console.log(element)
// }
/*------------------------------------------------------*/
// part 32 function expressions = function without a name(anonymous function)
//                                  avoid polluting the global scope with names
//                                  Write it, then forget about it
// sayHi()
// function sayHi(){
//     console.log("Hiii!!");
// } 
// const greeting = function(){
//     console.log("hiii!!")
// }
// greeting()
/*------------------------------------------------------*/
// part 33 arrow function = compact alternative to traditional function expression
// =>
// const greeting = function(userName){
//     console.log("hi" + userName)
// }
// greeting("Reza");
// const greeting1 = (userName) => console.log("hi" + userName)
// const greeting2 = (userName, userName2) => {console.log("hi" + userName), console.log("hi" + userName2)}
// cool
// let grades =[100, 50, 90, 60, 80, 70]
// grades.sort((x,y) => x - y)
// grades.forEach((element) => console.log(element))
/*------------------------------------------------------*/
//part 34 shuffle an array(card game)
// let cards = ["A", "2", "3", "5", "6","7","8","9","JACK","QUEEN", "KING"]
// shuffle(cards)
// cards.forEach(element => console.log(element))
// function shuffle(array){
//     let currentIndex = array.length
//     while(currentIndex != 0){
//         let randomIndex = Math.floor(Math.random() * array.length)
//         currentIndex --;
//         let temp = array[currentIndex]
//         array[currentIndex] = array[randomIndex]
//         array[randomIndex] = temp
//     }
//     return array
// }
/*------------------------------------------------------*/
//part 35 nested fucntion = a funciton inside another function.
//                          Quter funcitons have access to inner function
//                          Inner functions are "hidden from outside" the outer function
//                          used in closure (future video topic)
// let userName = "Reza"
// let userInbox = 0;

// logIn()
// // adds some security, we login and then have access to display functions
// function logIn(){
//     displayUserName()
//     displayUserInbox()
//     function displayUserName(){
//         console.log("welcome" ,userName)
//     }
//     function displayUserInbox(){
//         console.log("You have", userInbox, "new messages")
//     }
// }
/*------------------------------------------------------*/
//part 36 closure = a function with preserved and private data.
//                  give you access to an outer function's scope
//                  from an inner function.
// document.getElementById("loginBtn").onclick = login();
// userInbox = 420.23
// function login(){
//     let userName = "Reza"
//     let userInbox = 1
//     function alertUser(){
//         alert(userName + " you have " + userInbox + " new messages!")
//         userInbox = 0
//     }
//     return alertUser;
// }
/*------------------------------------------------------*/
//part 37 Map = object that holds key-value pairs of any data type
// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10],
//     ["underware", 50]
// ]);

// let shoppingCart = 0;
// store.set("hat", 40)
// store.delete("hat")
// console.log(store.has("hat")) //  do we have any hat
// shoppingCart += store.get("t-shirt")
// shoppingCart += store.get("jeans")
// store.forEach((value, key) => console.log(key , "$" + value));
// console.log(store.size)
// console.log(shoppingCart)
/*------------------------------------------------------*/
//part 38 objecct = A group of properties and methods
//                  properties = what an object has
//                  methods = what an object can do
//                  use . to access properties/methods
// const car = {
//     model: "Mustang",
//     color: "red",
//     year: 2023,

//     drive: function(){
//         console.log("you drive the car")
//     },
//     brake: function(){
//         console.log("you stept on the breaks")
//     }
// }
// console.log(car.model)
// console.log(car.color)
// console.log(car.year)

// car.drive()
/*------------------------------------------------------*/
//part 39 this = reference to a particular obejct
//               the object depends on the immediate context
// const car = {
//     model: "Mustang",
//     color: "red",
//     year: 2023,
//     drive: function(){
//         console.log("you drive the car" , this.model)
//     },
//     brake: function(){
//         console.log("you stept on the breaks")
//     }
// }
// console.log(car.model)
// console.log(car.color)
// console.log(car.year)
// car.drive()

// console.log(this) // refers to window object
// this.name = "myCoolWindow" // window.name = "myCoolWindow"
/*------------------------------------------------------*/
// part 40 class = a blueprint for creating objects
//          define what properties and methods they have
//          use a constructor for unique properties
// class Player{
//     score = 0
//     pause(){
//         console.log("you paused the game")
//     }
//     exit(){
//         console.log("you exited the game")
//     }
// }
// const player1 = new Player()
// console.log(++ player1.score)
// player1.exit()
/*------------------------------------------------------*/
// part 40 constructor = a specific method of a class,
//                       accepts argumetns and assigns properties
// class Student{
//     constructor(name, age,gba){
//         this.name = name;
//         this.age = age;
//         this.gba = gba;
//     }
//     study(){
//         console.log(this.name, "is studying")
//     }
// }
// const student1 = new Student("Spongebob" , 30, 3.2)
// const student2 = new Student("Sandy" , 27, 4.0)
// console.log(student1.name)
// console.log(student1.age)
// console.log(student1.gba)
// student1.study()

// console.log(student2.name)
// console.log(student2.age)
// console.log(student2.gba)
/*------------------------------------------------------*/
// part 41 static = belongs to the class, not the objects
//                  properties: useful for caches, fixed-configuration
//                  methodss : useful for utility functions
// class Car{
//     static numberOfCars = 0
//     constructor(model){
//         this.model = model
//         Car.numberOfCars +=1
//     }
//     static startRace(){
//         console.log("3...2...1...GO!")
//     }
// }
// const car1 = new Car("Mustanng")
// const car2 = new Car("Corvette")
// const car3 = new Car("BMW")
// const car4 = new Car("Ferrari")

// console.log(Car.numberOfCars)
// console.log(car1.numberOfCars)
// Car.startRace()
/*------------------------------------------------------*/
// part 42 inheritance = a child class can inherit all the
//                       methods and properties form another class
// class animal{
//     alive = true
//     name = "rabbit"
//     eat(){
//         console.log("This",this.name, "is eating")
//     }
//     sleep(){
//         console.log("This",this.name, "is sleeping")
//     }
// }

// class Rabbit extends animal{
//     name = "rabbit"
//     run(){
//         console.log("This",this.name, "is running")
//     }
// }

// class Fish extends animal{
//     name = "fish"
//     swim(){
//         console.log("This",this.name, "is swimming")
//     }
// }

// const rabbit1 = new Rabbit()
// const fish = new Fish()
// const hawk = new Rabbit()
// console.log(rabbit1.alive)
// rabbit1.eat()
// rabbit1.sleep()
// rabbit1.run()
// fish.swim();
/*------------------------------------------------------*/
// part 44  super = Refers to the parent class
//                 Commonly used to invoke constructor of parent class
// class Animal{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }
// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age)
//         this.runSpeed = runSpeed
//     }
// }
// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name, age)
//         this.swimSpeed = swimSpeed
//     }
// }
// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super(name, age)
//         this.flySpeed = flySpeed
//     }
// }
// const rabbit = new Rabbit("rabbit", 1, 40)
// const fish = new Fish("fish", 1, 40)
// const hawk = new Hawk("hawk", 1, 40)

// console.log(fish.name)
// console.log(fish.age)
// console.log(fish.swimSpeed)
/*------------------------------------------------------*/
// part 45 get = binds an object property to a function
//               when that property is accessed
//         set = binds an object property to fucntion
//               when that property is assigned a value
// class Car{
//     constructor(power){
//         this._gas = 25
//         this._power = power
//     }
//     get power(){
//         return this._power + "hp"
//     }
//     get gas(){
//         return this._gas + "L"
//     }
//     set power(value){
//         this.power = value
//     }
//     set gas(value){
//         if(value > 1010){
//             value = 1010
//         }else if(value < 0){
//             value = 0
//         }
//             this._gas = value    
//     }
// }
// let car = new Car(400)
// car.gas = 10000000000
// console.log(car.power)
// console.log(car.gas)
/*------------------------------------------------------*/
// part 46 pass objects as argumetns
// class Car{

//     constructor(model, year, color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }

// const car1 = new Car("Mustang", 2023, "red",);
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow",);

// changeColor(car3, "gold");
// displayInfo(car3);

// function displayInfo(car){
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.color);
// }
// function changeColor(car, color){
//     car.color = color;
// }
/*------------------------------------------------------*/
// part 47 array of obejct
// class Car{

//     constructor(model, year, color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
//     drive(){
//         console.log(`You drive the ${this.model}`);
//     }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");
// const car4 = new Car("Ferrari", 2025, "white");

// const cars = [car1, car2, car3, car4];

// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);

// startRace(cars);

// function startRace(cars){
//     for(const car of cars){
//         car.drive();
//     }
// }
/*------------------------------------------------------*/
// part 48
console.log("salam")