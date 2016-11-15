const assert = require('assert');
var sameWeekday = function(date1, date2) {
    const yesterdaysDate = new Date(date1);
const differentDate = new Date(date2);
    var sameDay = yesterdaysDate.getDay() == differentDate.getDay();
    console.log(sameDay);
    return sameDay



};
assert.equal(sameWeekday('2016-11-14','2015-05-04'),true );
//assert.equal(sameWeekday(),true);
//assert.equal(sameWeekday('2016-11-14'),true);
//assert.equal(sameWeekday('2016-05-03'),true);
