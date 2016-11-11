const assert = require("assert");
var isTuesday = function(today){

var result =today.startsWith('Tu');
return result
};
assert.equal(isTuesday("today"),false);
// console.log(isTuesday('today'));
