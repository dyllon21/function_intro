const assert = require('assert');
var isFromLimpopo = function(regNumber){
var result = regNumber.startsWith("DRT");
var regNumber = regNumber.endsWith("L");

return result

};
assert.equal (isFromLimpopo('DRT','L'),true);
