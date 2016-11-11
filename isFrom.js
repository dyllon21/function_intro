const assert = require("assert");
var isFrom = function(regNumber, location){
 var result = regNumber.startsWith(location);
 return result

};

assert.equal(isFrom('CJ 98912', 'CJ'), true);

assert.equal(isFom('CJ 98912', 'CY'),true);

assert.equal(isFrom('CY 874324', 'CY'),true);

assert.equal(isFrom('CY 874324', 'CA'),false);
