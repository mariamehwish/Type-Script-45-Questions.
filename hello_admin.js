"use strict";
let users = ['Admin', 'Hareem', 'Ahmer', 'Shaheena', 'Azfar'];
for (let user of users) {
    if (user === 'Admin') {
        console.log("Hello Admin, Welcome to dashboard, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user} thank you for logging in again.`);
    }
}
