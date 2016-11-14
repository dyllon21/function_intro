const assert = require('assert');
var isWeekday = function(weekday){
  const date = new Date('2010-04-01');
  var result = weekday.startsWith(0);
  var result2 =weekday.endsWith(5);
  return result
};

assert.equal(isWeekday('weekday'),false) ;
