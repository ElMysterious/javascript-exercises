const convertToCelsius = function(fahrenheit) {
  convertValue = (fahrenheit - 32)* 5/9
  return Math.round(convertValue * 10) / 10
};

const convertToFahrenheit = function(celsius) {
    newConvertValue = celsius * 9/5 +32
    return Math.round(newConvertValue * 10) / 10
};

convertToCelsius(-100)
convertToFahrenheit(0)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
