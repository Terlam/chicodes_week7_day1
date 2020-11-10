// Basic Comment

/*
    Multiline comment in JavaScript

    -- Variable Declaration in JavaScript --
    Primitive types in JavaScript -- strings, integers, floats, arrays, objects (dictionaries)
*/

//String Variable
var name = 'Barbara'; //semi colon is unnecessary

// Display value to console
console.log(name)

//Integer Variable
var some_number = 30;
console.log(some_number)

// Float Variable
var some_float = 3.14
console.log(some_float)

// Array Variable
some_array = [1,2,3,4];
console.log(some_array)

// Object Variable
var some_object = {'test': 'Play this please!'}
console.log(some_object)

//JavaScript Hoisting Example

console.log(some_example)
var some_example = 'This string is a test';
console.log(some_example)

// Declaring values using let keyword
// String Concatenation

let full_statement = name + ' how are you doing?'
console.log(full_statement)


// Basic Math Operations
// Addition
let sum = 5 + 5;
console.log(sum)

// Multiplication
let product = 5 * 5;
console.log(product)

// Subtraction 
let difference = 5 -5;
console.log(difference)

// Division
let quotient = 5 / 5;
console.log(quotient)

// Exponential
let square = sum ** 2;
console.log(square)

// Finding the floor of a decimal
let find_floor = Math.floor(25.8)
console.log(find_floor)

// Finding the ceiling of a float
let find_ciel = Math.ceil(25.8)
console.log(find_ciel)

// Mind Bender
let crazy_stuff = some_float + '4'
console.log(crazy_stuff)

let crazy_stuff_2 = some_float + parseInt('4')
console.log(crazy_stuff_2) 

//JavaScript let keyword -- ES6 JavaScript Variable Creation(Safer)
let nba_goat = 'Michael Jordan';
console.log(nba_goat)

nba_goat = 'Kobe' // redeclaration
console.log(nba_goat)

// Bad Declaration - cant redeclare something using 'let'
// let nba_goat = 'LeBron'
// console.log(nba_goat)

// JavaScript const keyword -- ES6 JavaScript Variable Creation(safer)
const fav_football_team = 'Messi n em'
console.log(fav_football_team)

// CONST can't be changed. those variables are locked when you create them. 

// JavaScript Functions
// Regular Named Function in JavaScript
/* All functions have 3 parts
    -  function keyword,  
    - name of function and 
    -      body
    -    Parameters     *Bonus part
*/
function addNums(){
    let num = 4;
    let num2 = 5;

    return num + num2
}

console.log(addNums())

let multiplyNums = () =>{
    let num = 4;
    let num2 = 5
    
    return num * num2
}

console.log(multiplyNums())

// Variable Named Function with Parameters
let addNums3 = function(num,num2){
    return num + num2
}

console.log(addNums3(4,5))

//Arrow Funtion with parameters
let cubed = (num) => {
    return num ** 3
}

console.log(cubed(5))

// Self-Invoking Function
// Console.log for this example does not have to 
// be provided -- just using for easier display of
// output

console.log((function (name){
    let hello = 'Hello World ' + name;
    return hello
})('Aaron'))

/*
    JavaScript Control Flow
    If Statements
*/
function determineAge(age){
    if(age < 18){
        return 'Minor'
    } else if ( age >= 18 && age <+ 65){
        return 'Adult not retired'
    } else {
        return 'Elderly person retired'
    }
}

console.log(determineAge(30))

// JavaScript Ternary Operator
function determineAge2(age){
    return (age < 18) ? 'Minor' : (age >= 18 && age <= 65) ? 'Adult not retired' : 'Elderly person retired'
}

console.log(determineAge2(67))

// Loops in JavaScript - For Loop
// For Loop Syntax -- for keyword(counter; expression; incrementation/decrementation)

function coutntByOne(){
    // For Loop
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has stopped'
}

console.log(coutntByOne())

// cecrementing a for loop
function decreaseByOne(){
    // For Loop
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Decreasing has stopped'
}

console.log(decreaseByOne())

// While Loop - JavaScript
function countWithWhile(){
    let i = 0 // Counter
    let text = '';
    while(i < 10){
        text += `This number is...${i}\n`
        i++
    }
    return text
}

console.log(countWithWhile())

// Do While Loop -- Do the first portion at LEAST once
// If the while condition is met, perform the while loop
function countWithDoWhile(){
    let i = 0;
    let text = '';
    
    //Do
    do{
        text += `This number is now...${i}\n`
        i++
    }
    while (i > 10)
    return text
}

console.log(countWithDoWhile())

/*
    LOOPING WITH ARRAYS AND ARRAY/STRING METHODS
    ============================================
*/
// Creation of Array of Names
let group_of_names = ['Misty', 'Anna', 'Bender', 'Ash', 'Huey']
//console log the first index of the array of names
console.log(group_of_names[0]) // "Misty"

// method 1 for looping through an array
function all_names(){
    for(let i = 0; i< group_of_names.length; i++){
        console.log(group_of_names[i]) //'Misty', 'Anna', 'Bender', 'Ash', 'Huey'
    }
}

console.log(all_names())

// Method 2: Using the ForEach() method inside of an array
console.log(group_of_names
            .forEach((element) => {console.log(element)}))

//      GABATRON METHOD 2
//      ~~~~~~~~~~~~~~~~~
group_of_names.forEach((element) => {
    console.log(element)
  })

///Array.toString()
console.log(group_of_names.toString())

console.log(group_of_names.join(', '))

//Ar
console.log(group_of_names.slice(0,3))

// Array.splice()
console.log(group_of_names.splice(0,1,'Harriet Tubman'))
console.log(group_of_names)

// Remove all even indexes and replace with a new name
function replace_new_name(){
    for(let i = 0; i < group_of_names.length; i++){
        if(i % 2 == 0){
            group_of_names.splice(i,1,'Vegeta')
        }
    }
    return group_of_names
}
console.log(replace_new_name())

// Using an Array to produce a string
// Then using a string method to produce a desired result

//String.search()
console.log(group_of_names[0].search('V')) // 0=> 'Goku' G is at index 0

console.log(group_of_names[1].slice(0,3))// Ann)