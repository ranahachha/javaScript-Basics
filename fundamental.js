console.log("hello");
setTimeout(function(){
    console.log("how are you");
},5000);
console.log("Neekhil");

/* Destructuring: unpacks values from array or properties from obects into distinct variables */

//Array Destructuring

const degree = [
    "S.L.C",
    "Plus 2",
    "Bachelors",
    "Masters"
];

const [a, b, c, d] = degree;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//object destructuring

const beer = {
    brand: "Heineken Original",
    est: 1873,
    alc: 5   
}

const {brand, est, alc} = beer;
console.log(`${brand} was established in ${est}. The beer alcohol volume is ${alc}%.`)

// assigning a different name than the object property name

const{brand : make, est : estd, alc: alcohol} = beer;
console.log(`${make} was established in ${estd}. The beer alcohol volume is ${alcohol}%.`)

/* spread: spread operator takes an array or any iterables and spreads its value across
Eg without spread operator to concatinate two arrays. */

const communicable = [
    "Zika",
    "Ebola",
    "Mrsa",
    "hiv/aids"
]
const noncommnicable = [
    "cancer",
    "diabetes",
    "Asthma"
]

const disease = communicable.concat(noncommnicable);
disease.forEach(disease => console.log(disease));

//with spread perator

const allDisease = [
    ...communicable,
    "cancer",
    "diabetes",
    "Asthma"
]

console.log("-----------------------------------")
allDisease.forEach(disease => console.log(disease));

/* spread operator can be used as function argument
Eg. without spread operator */

function add(a, b, c){
    console.log(a+b+c);
}

const args = [10, 20, 30];
add.apply(null, args);

//eg. with spread operator

add(...args);

/* rest operator: allows to represent indefinite number of arguments as an Array
rest operator collects multiple elements and "condenses" them into a single element */

function mul(...num){
    let total = 1;
    for(const i of num){//for..of iterates over value for..in iterates over properties
        total = total * i;
    }
    return total;
}
console.log(mul(2, 3, 4));

console.log("--------------------------");

/* js function: the difference between named and anonymous function is that
anonymous function is declared at runtime: means defined and called at the same Time */

//eg. named function
function name(){
    //body 
}

//eg. anonymous function

const noname = function(){
    //body
}
/* 
Higher-Order-Functions : Functions that operate on other functions, either by 
taking them as arguments or by returning them, are called higher-order functions */

function greaterThan(n) {
    return m => m > n;
  }
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));//true

function multiplier(factor){
    return x => x * factor;
}
let double = multiplier(2);
console.log(double(2));

let triple = multiplier(3);
console.log(triple(3));

console.log(double);

/* map function: creates and returns a new array with 
each element being the result of the callback function.
You shouldn't be using map if:
you're not using the array it returns; and/or
you're not returning a value from the callback. */ 

const user = [
    { name: 'Robin', isDeveloper: true },
    { name: 'Markus', isDeveloper: false },
    { name: 'John', isDeveloper: true },
    { name: 'Neekhil', isDeveloper: true}
];

user.map(user => console.log(user.name));

/* filter: filter returns new array with elements that passes the test through callback
if no element passes test empty array will be returned */
console.log("---------------------");
user.filter(user => user.isDeveloper).map(user => console.log(user.name));

/* reduce method  executes a reducer function (that you provide) on each element of the array,
 resulting in single output value. */

 const numbers = [1, 2, 3, 4, 5, 6];

 //sum is a reducer function 
 let sum = (acc, val) => acc + val;

 let result = numbers.reduce(sum);
 console.log(result);


 //class

 class Guitar{
     constructor(brand, price){
         this.brand = brand;
         this.price = price;
     }

     display(){
         return `${this.brand} costs ${this.price}`;
     }
 }

 let g1 = new Guitar("cort", 150);
 console.log(g1.display());

 //class inheritance

 class Acoustic extends Guitar{
     constructor(brand, price, color){
         super(brand, price);
         this.color = color;
     }
     display(){
        return `${this.brand} costs ${this.price}. It is ${this.color}`;
     }
 }

 let acoustic1= new Acoustic("cort", 150, "Red");
 console.log(acoustic1.display());

 //getter and setter

 class Person {
     constructor(name, vorname){
         this.name = name;
         this.vorname = vorname;
     }
     get desc(){
         return `${this.name} ${this.vorname} is a student`;
     }
     set desc(value) {
         const parts = value.split(' ');

         this.name = parts[0];
         this.vorname = parts[1];
     }
 }

 let p = new Person();
 p.desc = 'Rai Neekhil' // getter and setter are now obj properties
 console.log(p.desc);







