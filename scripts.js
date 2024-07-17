convertTemperature = () => {
    const tempInput = document.getElementById('input').value;
    const fromUnit = document.getElementById('from').value;
    const toUnit = document.getElementById('to').value;
    let convertedTemp;

    console.log(tempInput);
    console.log(fromUnit);
    console.log(toUnit);

    if(fromUnit === 'Celcius' && toUnit === 'Farenheit'){
        convertedTemp = (tempInput * 9/5) + 32;
        document.getElementById('result').innerHTML = convertedTemp + "F";
        document.getElementById('result').style.color = 'yellow';
        
    }
    else if (fromUnit == toUnit){
        document.getElementById('result').innerHTML = "Please select two different units";
    }
    

    else if(fromUnit === 'Farenheit' && toUnit === 'Celcius') {
        convertedTemp = (tempInput * 1.8) + 32;
        document.getElementById('result').innerHTML = convertedTemp + "C";
        document.getElementById('result').style.color = 'red';


    }
}