console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
    if (isFull()) {
    basket.push(item);
    return true;
    } else {
        console.log(`Your basket is full, ${item} was not added to the basket`);
        return false;
    }
};

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

function listItems(basketArray) {
    for (let item of basketArray) {
        console.log(item);
    }
}

// function listItems(basketArray){
//     for (let i = 0; i < basketArray.length; i ++){
//         console.log(basketArray[i]);
//     } 
// }
listItems(basket);

function empty(basketArray) {
    basketArray = [];
    console.log('The basket is now empty');
}

const maxItems = 5;

function isFull() {
    if (basket.length <= 4) {
        return true;
    } else {
        return false;
    }
}




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
