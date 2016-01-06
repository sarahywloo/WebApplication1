'use strict';

////           0      1      2
//let ray = ['cat', 'dog', 'bird'];
//let obj = {a: 'cat', b: 'dog'};

//obj.a === ray[0];
//obj['a'] === ray[0];

///*
////to access the last element in the array
//ray[ray.length - 1];

//for (let i = 0; i < ray.length; i++) {

//}
//*/
//obj.a  //read as obj DOT a
//obj['a']  // read as obj AT a
//ray[0]  //read as ray AT zero

//obj.cat = 12;

//ray[10] = 'fish';
//console.log(ray.length);
////will log 11

//console.log(Object.keys(ray));

//let aKey = 'a';
//obj[aKey] === ray[0];

//let k = Object.keys(obj);
//console.log(k);  // ['a', 'b', 'cat']


////loop will iterate 3 times

//for (let i = 0; i < Object.keys(obj).length; i++) {
//        console.log(obj[Object.keys(obj)[i]]);
//}

///*
//for (let i = 0; i < k.length; i++) {
//    console.log(obj[k[i]]);
//}
//*/

//ray = ['apples', 'pears'];
//console.log(ray);
//ray.push('oranges');
//ray[100] = 'bananas';
//ray.push('kiwi');

//console.log(ray); //logs ['apples', 'pears', 'oranges', 100: 'bananas', 101: 'kiwi']
////ray.length will be 102

let fruits = [
    'apples',
    'pears',
    'oranges'
];

fruits[100];

//console.log(`splice: ${ fruits.splice(1, 1)}`);
//console.log(fruits); //logs ['apples', 'oranges']
//console.log(Object.keys(fruits));

////string templates on typescript ` ${} `

////to clear array, set array.length to zero

//log(10);
//log('cat');

function log(something: any): void {
    console.log(something);
}

function printLength(str: string): void {
    console.log(str.length);
}

//console.log('for loop');
//for (let i = 0; i < fruits.length; i++) {
//    log(fruits[i]);
//}

//console.log('forEach');
//fruits.forEach(log);
//for in loop...
//you can define a function inside of a forEach loop


//fruits.forEach(function (ele) {
//    console.log(`inner function : ${ele}`);

//});


//Vanilla 35: fruits.forEach(log);
//Ours: ourForEach(fruits,log);

ourForEach(fruits, printLength);
function ourForEach(theArray: Array<any>, theFunc: Function): void {
    for (let key in theArray) {
        console.log(key);
        theFunc(theArray[key]);
    }
}

//for in will iterate over the elements of the array instead of the length like in a for in loop

//every()
console.log(fruits.every(function (element): boolean {
    return element.length > 5;
}));


//some()
console.log(fruits.some(function (element): boolean {
    return element.length > 5;
}));


//filter()
console.log(fruits.filter(function (element): boolean {
    return element.length > 5;
}));

//filter() practice

let numbers = [];
for (let i = 0; i < 1000; i++) {
    numbers.push(i);
}
//Print out all prime numbers

console.log(numbers.filter(function (num: number): boolean {

    if (num <= 1) {
        return false;
    }
        //return true if num is prime
        //return false if num is composite
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}));

//console.log(numbers.filter(function (num: number): boolean {
//    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
//        //return true if num is prime
//        //return false if num is composite
//        if (num % i === 0) {
//            return false;
//        }
//    }
//    return true;
//}));

let names = ['cat', 'dog', 'bird', 'camel', 'aardvark'];

console.log(names.filter(function (ele) {
    return ele.indexOf('a') >= 0;
})); //prints the elements containing 'a'


//map()

console.log(names.map(function (ele) {
    return ele.length;
}));

//reduce()
console.log(names.reduce(

    function (memo, ele) {
        return memo + 1;

    }, 0));

//memo (1st arguement) is the value of the previous execution of the function, ele (2nd arguement) is the element in the array
//o is set as the beginning value for the iteration

//another way of writing the code
//function count (memo, ele) {
//    return memo + 1;
//}

//console.log(names.reduce(count, 0));

let cart = [
    { name: 'Milk', price: 23.44 },
    { name: 'Cheese', price: 3.50 },
    { name: 'Peanuts', price: 8.00 },
    { name: 'Wine', price: 7.50 }
];

console.log(cart.reduce(
    function (memo, ele) {
        return memo + ele.price;
    }, 0));

//don't mix numbers and strings...