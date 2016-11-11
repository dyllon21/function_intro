const assert = require('assert');
var isFromCapeTown = function(regNumber,origin){
 var result = regNumber.startsWith("CA");
 
 return result

};

assert.equal(isFromCapeTown('CA'),true);
