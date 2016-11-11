const assert = require('assert');
var isFromBellville = function(regNumber,origin){
var result = regNumber.startsWith("CY");
return result
};


assert.equal(isFromBellville('CY'),true);
