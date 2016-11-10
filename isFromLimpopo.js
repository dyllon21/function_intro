var isFromLimpopo = function(registration){
var result = registration.startsWith("DR");
var result = registration.endsWith("L");
return result

};
isFromLimpopo("registration");
