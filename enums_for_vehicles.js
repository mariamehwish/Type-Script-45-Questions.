"use strict";
var vehicles;
(function (vehicles) {
    vehicles[vehicles["Yamaha"] = 0] = "Yamaha";
    vehicles[vehicles["Supra"] = 1] = "Supra";
    vehicles[vehicles["Tesla"] = 2] = "Tesla";
})(vehicles || (vehicles = {}));
;
console.log(vehicles.Supra);
