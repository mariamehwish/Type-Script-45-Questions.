import { error } from "console";

let age = 16;

age = 18;

console.log(age);

const myName = "Marish";
try {
    myName = "Maaya";
} catch (error) {
    console.log(`Error: can't ressign a const declared veriable.`);
}