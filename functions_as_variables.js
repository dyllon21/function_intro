var funcOne = functions(){console.log('funcOne!');};

var execFunc = function(f){f();
};
execFunc (funcOne);
