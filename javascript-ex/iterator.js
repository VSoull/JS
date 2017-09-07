'use strict';

console.log('start program');

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//iterator

//invoked as an IIFE
var it = (function iterator(arrayArg) {
    var index = 0;

    function hasElement() {
        if (index <= arrayArg.length) {
            return true;
        } else {
            return false;
        }
    }

    function errorMsg(message) {
        throw new Error(message);
    }

    function getNext() {
        if (hasElement()) {
            return arrayArg[index++];
        } else {
            errorMsg('Index out of bounds.');
        }
    }

    function getPrevious() {
        if (hasElement()) {
            return arrayArg[--index];
        } else {
            errorMsg('Index out of bounds.');
        }
    }

    var iterator = {
        getNext: getNext,
        getPrevious: getPrevious
    };
    return iterator;
})(array);

//invoked as function
// var it = iterator(array);

for (var i = 0; i < array.length; i++) {
    console.log('iterator getNext ' + it.getNext());
}


for (var i = 0; i <= array.length - 1; i++) {
    console.log('iterator Prev ' + it.getPrevious());
}





console.log('end program');