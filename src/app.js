//setting constant relations
let kelvin = 500;
var celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
let newton = celsius * (33/100);

window.onload = function() {
    // on click get element temperatureForm
    document.getElementById('temperatureForm').addEventListener('submit', function(event) {
        event.preventDefault();

        //setting temeperature values
        let kelvin = document.getElementById('quantity').value;
        let celsius = kelvin - 273;
        let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
        let newton = Math.floor(celsius * (33 / 100));

        // updating elements to values
        document.getElementById('kelvin').innerHTML = `Kelvin(°K): ${kelvin}`;
        document.getElementById('cel').innerHTML = `Celsius(°C): ${celsius.toFixed(2)}`;
        document.getElementById('fahrenheit').innerHTML = `Fahrenheit(°F): ${fahrenheit}`;
        document.getElementById('newton').innerHTML = `Newton(°N): ${newton}`;

        // Assuming max Kelvin value is 1000
        updateThermometer('kelvin-fill', kelvin, 1000);
        // Assuming max Celsius value is 100
        updateThermometer('cel-fill', celsius, 100);
        // Assuming max Fahrenheit value is 212
        updateThermometer('fahrenheit-fill', fahrenheit, 212);
        // Assuming max Newton value is 33
        updateThermometer('newton-fill', newton, 33);
    });
};

function updateThermometer(elementId, value, max) {
    const fillHeight = (value / max) * 100;
    document.getElementById(elementId).style.height = `${fillHeight}%`;
}
