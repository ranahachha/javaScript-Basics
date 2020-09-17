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
