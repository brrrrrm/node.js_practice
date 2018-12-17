const _ = require('underscore');
var new_arr = [3,6,9,1,11];
var arr = [1,2,3,4,5];

console.log(new_arr[0]);
console.log(_.first(new_arr[0]));
console.log(new_arr[new_arr.length-1]);
console.log(_.last(new_arr[0]));
console.log(_.last(arr[0]));
console.log(_.first(arr[0]));
