"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = {
    make: "HP",
    model: "Envy x360",
    year: "2023",
    describe: function () {
        console.log(`This Laptop is ${this.year} ${this.model} ${this.make}.`);
    }
};
laptop.describe();
