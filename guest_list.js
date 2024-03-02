"use strict";
let guest_list = ['Nihaal Khan', 'Baba(Nana)', 'Arfa Kareem'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr/Miss. ' + guest_list[i] +',\n\nIt is our pleasure to invite you in our party.\n \n\nThank You!')
// }
let absent_guest = 'Nihaal Khan';
let new_guest = 'Memona Hassan';
guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr/Miss. ' + guest_list[i] +',\n\nIt is our pleasure to invite you in our party.\n \n\nThank You!')
// }
// console.log(`Mr. ${absent_guest} is not coming to the dinner.`);
// console.log('Good News! we found a big table so we are anviting 3 more guests.')
guest_list.unshift('Nani Amaan');
guest_list.splice(2, 0, 'Dadi Amaaan');
guest_list.push('Dada Abu');
guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr/Miss. ' + guest_list[i] +',\n\nIt is our pleasure to invite you in our party.\n \n\nThank You!')
// }
//console.log('\nSorry we can not arrange big table, only two people will be invited.')
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    //console.log(`Sorry Mr. ${remove_guest}, You are not Invited for dinne.` );
}
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr/Miss. ' + guest_list[i] +',\n\nYou are still Invited.\n \n\nThank You!')
// }
guest_list.splice(0, 2);
console.log(guest_list);
// Exercise 19
console.log(`Total number of guest are: ${guest_list.length}`);
