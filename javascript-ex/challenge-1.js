console.log('enter program');

const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 200;

var input = prompt("What sum do you have in the bank account?");

var bankAccount = Number(input);
var amount = 0;

function calculateTotalPrice() {
    while (amount < bankAccount) {
        amount += PHONE_PRICE;

        if (amount < SPENDING_THRESHOLD) {
            amount += ACCESSORY_PRICE;
        }
    }

    return amount;
}

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatPrice(price) {
    return "$" + price.toFixed(2);
}

var pricePhoneWithAccesory = calculateTotalPrice();
var pricePhoneWithTax = calculateTax(pricePhoneWithAccesory);
var priceFormated = formatPrice(pricePhoneWithTax + pricePhoneWithAccesory);

console.log(' --> price formated ' + priceFormated);
if (amount > bankAccount) {
    console.log("you can't aforded");
} else {
    console.log("you can aforded");
}
console.log('end program');