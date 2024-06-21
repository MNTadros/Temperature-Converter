//setting constant var
const kelvin = 273;
const celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
let newton = celsius * (33/100);

newton = Math.floor(newton);
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);

