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



