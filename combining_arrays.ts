let pricesSet1 = [32000,2000,45000];
let pricesSet2 = [12000,15000,60000];
let combiedPrices = [...pricesSet1,...pricesSet2].sort((a, b) => a - b);
console.log(combiedPrices); 