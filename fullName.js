const assert = require('assert');
var greetFullname = function(firstName, lastName){
  //console.log('High five, '+ firstName, lastName); //console.log('hi, '+ name)
  //return 'hi, '+ name;
  return 'High five, '+ firstName + ' ' + lastName ;
};
assert.equal(greetFullname('Wayne',  'Rooney'), 'High five, Wayne Rooney');
assert.equal(greetFullname('Marcus',  'Rashford'), 'High five, Marcus Rashford');
