var theFunction = function() {
    console.log('function expression');
}

theFunction();

var theParamFunction = function(num1, num2) {
    var result = num1 + num2;
    return result;
};
console.log(theParamFunction(1, 2));
