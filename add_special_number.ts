function adder(valueToAdd: number): (arg0: number) => number {
    return function(number: number): number {
        return number + valueToAdd;
    };
}

let add = adder(7);
console.log(add(5));