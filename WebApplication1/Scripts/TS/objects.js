'use strict';
//created a new empty object
//object literal   let obj = {};
var obj = {
    a: 'cat',
    b: undefined,
    c: 10,
    dog: true,
    truthy: false,
    anotherObj: {
        a: 'bird'
    },
};
//print bird
console.log(obj.anotherObj.a);
//do not name your key undefined!
var animal = 'cat';
var obj2 = {
    b: 'dog'
};
obj.b = 'dog';
//obj and obj2 are not the same thing even though their values may be the same
//dot is the navigation operator
