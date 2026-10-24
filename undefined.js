let car;
console.log(car);
console.log(typeof car);

let bike=null;
console.log(bike);
console.log(typeof bike); //bug in invention of javascript

let a=Symbol("java");
let b=Symbol("java");
console.log(a === b);
console.log(a == b);

//array
let c=[1,2,3,4,5];
console.log(c);
console.log(typeof c);

//object
let d={"ganesh":1,"kumar":2,"raj":3,"suresh":4,"vijay":5};  //key and value pair
console.log(d);
console.log(typeof d);

function add(){
    console.log("hello");
}
add();