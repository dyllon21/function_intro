const assert = require("assert");
var getDay = function(day) {
    var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const date = new Date();

    var dayToday = weekdays[date.getDay()];
    console.log(dayToday);
    return dayToday;



};
assert.equal(getDay('2016-11-08'), 'Tuesday');