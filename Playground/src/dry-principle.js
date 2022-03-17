
// Duplicated code
// multiple use of console log
// multiple use of multiplication of item price against VAT variable
let ukVat = '1.20';
let swedishVat = '1.25';
let maltaVat = '1.18';

const itemPrice = '5.50';

let ukPrice = itemPrice * ukVat;
console.log('Uk price' + ukPrice);

let swedishPrice = itemPrice * swedishVat;
console.log('Swedish price' + swedishPrice);

let maltaPrice = itemPrice * maltaVat;
console.log('Malta price' + maltaPrice);

//refactored code
let vatCalculator = (country, vatAmount) => {
    let totalPrice = 5.50 * vatAmount;
    console.log(country + ' Price: ' + totalPrice);
}
vatCalculator('UK ', 1.20);
vatCalculator('Sweden ', 1.25);
vatCalculator('Malta ', 1.18);