function devideAndFindRemainder(divided: number, divisor: number): { quotient: number; remainder: number } {

    let quotient = Math.floor(divided / divisor);
    let remainder = divided % divisor;

    return{quotient, remainder};
}

console.log(devideAndFindRemainder(13,2));