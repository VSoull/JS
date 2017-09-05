console.log('enter program');
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var index = 0;

//iterator

function iterator(arrayArg) {

    function getNext() {
        return arrayArg[index++];
    }

    function getPrevious() {
        return arrayArg[index--];
    }

    return getNext();
}


for (var number in array) {
    console.log('iterator getNext ' + iterator(array));
}





console.log('end program');