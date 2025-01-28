function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const scaleFrom = document.getElementById("scaleFrom").value;
    const scaleTo = document.getElementById("scaleTo").value;
    let result;

    if (scaleFrom === "celsius") {
        if (scaleTo === "fahrenheit") {
            result = (inputTemp * 9/5) + 32;
        } else if (scaleTo === "kelvin") {
            result = inputTemp + 273.15;
        } else {
            result = inputTemp;
        }
    } else if (scaleFrom === "fahrenheit") {
        if (scaleTo === "celsius") {
            result = (inputTemp - 32) * 5/9;
        } else if (scaleTo === "kelvin") {
            result = (inputTemp - 32) * 5/9 + 273.15;
        } else {
            result = inputTemp;
        }
    } else if (scaleFrom === "kelvin") {
        if (scaleTo === "celsius") {
            result = inputTemp - 273.15;
        } else if (scaleTo === "fahrenheit") {
            result = (inputTemp - 273.15) * 9/5 + 32;
        } else {
            result = inputTemp;
        }
    }

    document.getElementById("result").textContent = `Result: ${result.toFixed(2)} ${scaleTo}`;
}
