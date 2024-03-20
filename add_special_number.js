"use strict";
function adder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
let add = adder(7);
console.log(add(5));
