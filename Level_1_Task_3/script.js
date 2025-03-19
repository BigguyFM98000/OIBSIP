function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('temperature-input').value);
    const unit = document.getElementById('unit-select').value;
    let resultText = '';

    if (isNaN(inputTemp)) {
        resultText = 'Please enter a valid number.';
    } else {
        let convertedTemp;
        let unitToDisplay = '';

        if (unit === 'Celsius') {
            convertedTemp = (inputTemp * 9/5) + 32; // Celsius to Fahrenheit
            unitToDisplay = 'Fahrenheit';
        } else if (unit === 'Fahrenheit') {
            convertedTemp = (inputTemp - 32) * 5/9; // Fahrenheit to Celsius
            unitToDisplay = 'Celsius';
        } else if (unit === 'Kelvin') {
            convertedTemp = inputTemp - 273.15; // Kelvin to Celsius
            unitToDisplay = 'Celsius';
        }

        resultText = `${inputTemp}° ${unit} is equal to ${convertedTemp.toFixed(2)}° ${unitToDisplay}.`;
    }

    document.getElementById('result').innerText = resultText;
}
