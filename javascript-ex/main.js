import { iterator } from "./iterator";

console.log('start program');

let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayString = ['1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a'];

let it = iterator(arrayNumber);

arrayNumber.forEach((element) => console.log('next ' + it.getNext()));
arrayNumber.forEach((element) => console.log('prev ' + it.getPrevious()));

console.log("---------------------------------------------------------");
it = iterator(arrayString);

arrayString.forEach((element) => console.log('next ' + it.getNext()));
arrayString.forEach((element) => console.log('prev ' + it.getPrevious()));

console.log('end program');