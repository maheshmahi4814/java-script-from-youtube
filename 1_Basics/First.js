// Basic JavaScript Program

// variables
/* const account_id = 12345
let email_id = "maheshmahesh4814@gmail.com"
var city_name = "bengaluru"
account_reference = "MrSundarPichai"

console.log(account_id)*/

// Display message in console
console.log("Hello, World!");

// Store values in variables
// let name = "Mahesh";
// let age = 22;

// Display variables
// console.log("Name:", name);
// console.log("Age:", age);

// Simple addition
let a = 10;
let b = 20;
let sum = a + b;

// Display result
// console.log("Sum =", sum);

// data types

// const account_id = 12345
// let first_name = "Mahesh"
// let Account_Balance = 15000

// console.table([account_id,first_name,Account_Balance])

// notes :
// type of gives the type of any logic like null is an type of an object and 
// type of an undefined is undefined type of "Mahesh" is string and type of 3 is number 
// type of any numbers in bigger form is big int
// type of True or false is boolean and type of symbol is unique

// score = 33
// console.log(typeof score)

// console.log(score)

// for that like to check the type we can see multiple outputs like 
// "33" => 33, 33abc => NAN , True => 1 , False => 0

// let is_logged_in = "1"
// let booleanis_logged_in = Boolean(is_logged_in)
// console.log(booleanis_logged_in)

/* you can also check the logged in by like entering the name in place of 1 and
and experiment with different types* like it will give 1 => true , 0 => false
"" => false "Mahesh" => true*/

// let counter = 100
// counter++;
// console.log(counter)

// Array, objects and functions -- non primitive/Reference types 
// students = ["Mahesh" , "Sharif" , "Venkatesh"];

// let myObj = {
//     hero : "Sharuk Khan",
//     age  :  45,
//     Area : "Mumbai",

// }

// console.log(typeof myObj)

// const name = "Mahesh"


// const my_function = function(){
//     console.log("Hello World")
// }

// console.log(typeof my_function)

//non primitive data types are array, objects and functions  

//Stack and Heap

//example of stack 
// let mywebsite = "maheshthatiparthidotcom"

// let anothername = mywebsite
// console.log(anothername)

// anothername = "Fan of Jhonny Bhai"

// console.log(mywebsite)
// console.log(anothername)

// // example of heap

// let userOne = {
//     email : "maheshmahesh4814@gmail.com",
//     upi   : "user@ybl"

// }

// let userTwo  = userOne

// userTwo.email = "overseas@gmail.com"

// console.log(userOne)
// console.log(userTwo)

// // string interpolation

// const repo_count = 5

// console.log(`my name is ${name} and my repo count is ${repo_count}`)

// another method for string 



// const gameName = new String('Mahesh4814')
// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())



// for string methods prefer to go in chrome and search for new string like 
//const gameName = new String('Mahesh4814') and type gameName then you can find
// the directory of string

// console.log(Date())
// console.log(Date.now())


// array and its types with directory
const array = [1,2,3,4]
console.log(array[0])

const array2 = Array(2,3,4,5)
console.log(array2[0])

const array3 = new Array(3,4,5,6,7)
console.log(array3[0])

console.log(array.unshift(9))

console.log(array.shift())

array.unshift(2)

console.log(array)

arraypop = array.pop()
console.log(arraypop)
console.log(array)

//array with slice and splice

console.log(array)
with_slice = array.slice(1,3)
console.log(with_slice)

with_splice = array.splice(1,3)
console.log(with_splice)

console.log(Array.isArray("Mahesh"))
console.log(Array.from("Mahesh"))
console.log(Array.from({name : "Mahesh"}))

score1 = 100
score2 = 200
score3 = 300

console.log(Array.of(score1,score2,score3))

// singleton object and constructor object and object literal

//A Singleton is a design pattern that restricts
// a class to having only ONE instance throughout the entire application. No matter how
//many times you try to create an object from that class, you always get the same instance.

const mysym = Symbol("key1");

const jsuser = {
    name : "mahesh",
    "full_name" : "mahesh thatiparthi",
    [mysym] : "mykey1",
    age : 18,
    location : "bengaluru",
    email : "maheshmahesh4814",
    is_logged_in : false,
    last_logged_in : ["monday" , "Tuesday", "Wednesday"]
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full_name"])
// console.log(jsuser[mysym])
// console.log(typeof(jsuser.mysym))


// jsuser.email = "mahesh@DigitalClickTag.com"
// Object.freeze(jsuser)
// jsuser.email = "mahesh@netflix.com"
// console.log(jsuser)


// console.log(typeof jsuser[mysym]) /*shows undefined but it shows as string if it not
// in square braces*/

jsuser.greeting = function(){
    console.log("hello js user");
}

jsuser.greeting_two = function(){
    console.log(`hello js user, ${this.full_name}`);
}

jsuser.greeting();
jsuser.greeting_two();

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Sharif"
tinderuser.isLoggedIn = false

console.log(tinderuser);

const regularuser = {
    email : "something@gmail.com",
    full_name : "thatiparthi Mahesh",
    userfull_name : {
        first_Name : "Mahesh",
        Last_Name : "Thatiparthi"
    }
}

console.log(regularuser.userfull_name)
console.log(regularuser.userfull_name.first_Name)

// option chaining
console.log(regularuser.userfull_name?.first_Name)/*here first to communincate with 
like API and etc it checks if any thing exists like userfull_name like and then 
proceeds and to access values*/

const obj1 = {1: "a", 2:"b"}
const obj2 = {4: "c", 3:"d"}
const obj3 = {5: "e", 4:"f"}

const merging_through_split = {...obj1,...obj2,...obj3}
console.log(merging_through_split)
//(or)
const obj4 = Object.assign()({},obj1,obj2,obj3)
console.log(obj4)


