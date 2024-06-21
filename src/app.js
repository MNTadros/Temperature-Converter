//setting constant var
let kelvin = 500;
var celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
let newton = celsius * (33/100);

newton = Math.floor(newton);
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);

window.onload = function() {
    document.getElementById('temperatureForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let kelvin = document.getElementById('quantity').value;
        let celsius = kelvin - 273;
        let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
        let newton = Math.floor(celsius * (33 / 100));

        document.getElementById('kelvin').innerHTML = "Kelvin: " + kelvin;
        document.getElementById('cel').innerHTML = "Celsius: " + celsius;
        document.getElementById('fahrenheit').innerHTML = "Fahrenheit: " + fahrenheit;
        document.getElementById('newton').innerHTML = "Newton: " + newton;
    });
};
