"use strict";
function decimelMultiplier(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(decimelMultiplier(2.3, 3.2));
