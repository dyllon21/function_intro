const assert = require("assert");
var getDay = function(day) {
    const date = new Date('2016-05-02');
    var weekday = date.getDay();
    return weekday



};
assert.equal(getDay('Sunday'), false);
