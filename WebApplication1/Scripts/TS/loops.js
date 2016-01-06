'use strict';
//for loops
//infinite loop:
//for (console.log('begin'); true; console.log('iterate'));
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log(i_1);
}
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
obj = {
    a: 'cat',
    b: 'dog',
    c: 'pig'
};
for (var key in obj) {
    console.log(obj[key]);
}
for (var _i = 0; _i < obj.length; _i++) {
    var element = obj[_i];
    console.log(element);
}
