function decimelMultiplier(num1: number, num2: number): number {
    return Math.round((num1 * num2) *100) / 100;
}

console.log(decimelMultiplier(2.3,3.2));