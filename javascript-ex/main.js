import { iterator } from "./iterator";

console.log('start program');

let arrayNumber = [];
let arrayString = ['1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a'];

const iterate = (array, fn) => {
    for (const [key, value] of array.entries()) {
        console.log(`Key = ${key}, value = ${fn()} `);
    }
};

let it = iterator(arrayNumber);

iterate(arrayNumber, it.getNext);
iterate(arrayNumber, it.getPrevious);

console.log("---------------------------------------------------------");
it = iterator(arrayString);
iterate(arrayString, it.getNext);
iterate(arrayString, it.getPrevious);

console.log('end program');