const convertToCelsius = function(temp) {
  return ((temp-32 )*5/9)
};

const convertToFahrenheit = function(temp) {
  return ((temp*9/5)+32)
};

//from celcius to Fahrenheit	  x°C ≘ (x *9/5+32)°F
//from fahrenheit to celcius   	x°F ≘ (x −32)*5/9°C

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
