const assert = require('assert');
var  isFromGauteng = function(regNumber,origin){
var result = regNumber.startsWith("DR");
var isFrom = regNumber.endsWith("GP");

return result

};
assert.equal(isFromGauteng('DR','GP'),true );
