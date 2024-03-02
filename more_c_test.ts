console.log("Equality test with strings: ", "Apple" === "Apple");

console.log("Equality test with strings: ", ("Peach" as string) != "Banana");

console.log("Lower Case Function test: ", "HELLO".toLowerCase() === "hello");

console.log("Equality test with number: "),  16 === 16 ;

console.log("Equality test with number: ", (16 as number)=== 18 );

console.log("Greater than test", 10 > 5);

console.log("less than test", 5 < 10);

console.log("Greater than and Equal to test: ", 10 >= 10);

console.log("less than or equal to test: " , 5 <= 10);

console.log("And operator test: ", 5 === 5 && 10 > 5);

console.log("or operator test: ", 5 === 5 || false);

const dishes :string[] = ['Karahi', 'Naan', 'Biryani'];
console.log('Test "Naan" in the array: ',dishes.includes("Naan"));

console.log('Testing "Qorma" is not in array: ', !dishes.includes('Qorma'));