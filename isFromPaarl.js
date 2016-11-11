const assert = require('assert');
var isFromPaarl = function(regNumber,origin){
 var result = regNumber.startsWith("CJ");
 return result

};
assert.equal(isFromPaarl("CJ"),true);
