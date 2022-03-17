const firstNames = ['Mahtab', 'Jon', 'James', 'Alice', 'Chloe'];
const surnames = ['Nejad', 'Smith', 'Bond', 'lee', 'Doe'];
const prices = [200, 400, 600];
const depositPaid = [true, false];
const otherNeeds = ['AC', 'Breakfast', 'Two Single Beds', 'WiFi', 'Parking'];

const pickRandomItem = (array) => {

    //math is a library that comes as part of javascript and node
    //random gives a float between 0 and 1 (by default)
    let randomValue = Math.random();
    //rounding down to integer
    //.length finds out how many entries we have within the array
    let randomIndex = Math.floor(randomValue * array.length);
    return array[randomIndex];
}

let extractFirstName = pickRandomItem(firstNames)
let extractSurname = pickRandomItem(surnames);
let extractPrices = pickRandomItem(prices);
let extractDepositPaid = pickRandomItem(depositPaid);
let extractOtherNeeds = pickRandomItem(otherNeeds);

console.log(extractFirstName);
console.log(extractSurname);
console.log(extractPrices);
console.log(extractDepositPaid);
console.log(extractOtherNeeds);
