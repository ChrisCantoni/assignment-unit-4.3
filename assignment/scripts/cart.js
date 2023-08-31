console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

let basketList = document.querySelector('#basket');
// Adding items to the basket
function addItem(item, basketArray) {
    if (isFull()) {
    basketArray.push(item);
    listItems(basketArray);
    return true;
    } else {
        basketList.innerHTML += `<h3>Your basket is full! ${item} was not added to the basket.<h3>`
        console.log(`Your basket is full, ${item} was not added to the basket`);
        return false;
    }
};
// Filling the basket with groceries, one at a time
console.log(`Adding milk to the basket, ${addItem('milk', basket)}`);
console.log(`Adding cereal to the basket, ${addItem('cereal', basket)}`);
console.log(`Basket is now ${basket}`);

console.log(`Adding jam to the basket, ${addItem('jam', basket)}`);

console.log(`Adding salami to the basket, ${addItem('salami', basket)}`);

console.log(`Adding bread to the basket, ${addItem('bread', basket)}`);

// adding a 6th item to test that isFull() works as intended
console.log(`Adding broccoli to the basket, ${addItem('broccoli', basket)}`);
    console.table(basket);

// List items in cart
function listItems(basketArray) {
    if (basketArray.length > 0) {
        basketList.innerHTML = '<h3>Here are the items in your basket</h3>';
        console.log('Here are the items in your basket!');
        for (let item of basketArray) {
            basketList.innerHTML += '<li>' + item + '</li>' 
            console.log(item);
    }} 
    else {
        console.log('Your basket has nothing in it!');
    }
}

listItems(basket);

// empties the basket
function empty(basketArray) {
    if (basketArray.length > 0) {
        console.log('The basket is now empty');
        basketArray.length = 0;
        basketList.innerHTML = '<h3>There is nothing in your basket</h3>';
    } else {
        console.log('Your basket is already empty!');
    }
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

function removeItem(item, basketArray) {
    if (basketArray.indexOf(item) == -1) {
        console.log('item not found');
        return null;
    } else {
        let remove = basketArray.indexOf(item);
        basketArray.splice(remove, 1)
        listItems(basketArray);
        return true;
    }  
}
console.log(`Jam was removed from the basket: ${removeItem('jam', basket)}`);
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
