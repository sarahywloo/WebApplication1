'use strict';

//for loops

//infinite loop:
//for (console.log('begin'); true; console.log('iterate'));

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

obj = {
    a: 'cat',
    b: 'dog',
    c: 'pig'
};

for (let key in obj) {
    console.log(obj[key]);
}

for (let element of obj) {
    console.log(element);
}


