'use strict';

var Iterator = function makeIterator(arrayArg) {
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

    var iteratorApi = {
        getNext: getNext,
        getPrevious: getPrevious
    };

    return iteratorApi;
};

module.exports = Iterator;