'use strict';

var Iterator = require('./iterator');

console.log('start program');

var arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayString = ['1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a'];

var it = Iterator(arrayNumber);

arrayNumber.forEach(function(element) {
    console.log('next ' + it.getNext());
}, this);

arrayNumber.forEach(function(element) {
    console.log('prev ' + it.getPrevious());

}, this);


console.log('end program');