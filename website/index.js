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
// part 28

