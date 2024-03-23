"use strict";
function devideAndFindRemainder(divided, divisor) {
    let quotient = Math.floor(divided / divisor);
    let remainder = divided % divisor;
    return { quotient, remainder };
}
console.log(devideAndFindRemainder(13, 2));
