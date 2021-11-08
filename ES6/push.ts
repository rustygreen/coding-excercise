/**
 * GOAL: refactor the code below to make use of ES6 capabilities
 * to make the code simpler and easier to read. The goal of this code
 * is to combine list1 and list2 items into a single combined list (which get
 * console logged at the end). Add any of your thought processes as
 * comments to the end of this file.
 */

var list1 = ['red','blue','green'];
var list2 = ['orange','banana','grape'];

const combinedList = [];
list1.forEach(l => combinedList.push(l));
list2.forEach(l => combinedList.push(l));

console.log(combinedList);