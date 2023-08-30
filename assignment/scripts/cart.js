console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

// Adding items to the basket
function addItem(item) {
    if (true) {
    basket.push(item);
    return true;
    } else {
        console.log(`Your basket is full, ${item} was not added to the basket`);
        return false;
    }
};
// Filling the basket with groceries, one at a time
console.log(`Adding milk to the basket, ${addItem('milk')}`);
console.log(`Adding cereal to the basket, ${addItem('cereal')}`);
console.log(`Basket is now ${basket}`);
console.log(`Adding jam to the basket, ${addItem('jam')}`);
console.table(basket);
console.log(`Adding salami to the basket, ${addItem('salami')}`);
console.table(basket);
console.log(`Adding bread to the basket, ${addItem('bread')}`);
console.table(basket);
// adding a 6th item to test that isFull() works as intended
console.log(`Adding broccoli to the basket, ${addItem('broccoli')}`);
console.table(basket);

// List items in cart
function listItems(basketArray) {
    if (basketArray.length > 0) {
        for (let item of basketArray) {
            console.log(item);
    }} 
    else {
        console.log('Your basket has nothing in it!');
    }
}

listItems(basket);

// empties the basket
function empty(basketArray) {
    basketArray.length = 0;
    console.log('The basket is now empty');
}

// Stretch goals
const maxItems = 5;

function isFull() {
    if (basket.length <= 4) {
        return true;
    } else {
        return false;
    }
}

function removeItem(item) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i] == item) {
            basket.splice(i, 1);
            return true;
        } else if (basket[item] == -1) {
            return null;
        }
    }
}
console.log(`Jam was removed from the basket: ${removeItem('jam')}`);
console.log(basket);

empty(basket);
console.log(basket);

// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
