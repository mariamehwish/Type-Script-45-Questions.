"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sandwich(...items) {
    console.log('Order the Sandwich');
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
}
console.log('Enjoy your Sandwich');
sandwich('Egg', 'bread', 'Ketchup');
sandwich('Petty', 'ketchup', 'Sauce', 'Cheese');
sandwich('Chicken', 'Peri Peri Sauce', 'Tomato', 'Cheese', 'Onion');
