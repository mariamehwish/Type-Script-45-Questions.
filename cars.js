"use strict";
function createCar(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const mycar = createCar('Supra', 'Toyota Motor Corporation', { color: "Black" });
console.log(mycar);
