document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = parseFloat(fahrenheitInput.value);
    let result = '';
    let calculation = '';

    // Tambahkan kondisi untuk memeriksa apakah celsiusInput diisi
    if (!isNaN(celsius) && celsiusInput.value) {
        const convertedToF = (celsius * 9 / 5) + 32;
        fahrenheitInput.value = convertedToF.toFixed(2); // Mengisi hasil konversi ke fahrenheitInput
        result = `${celsius}°C = ${convertedToF.toFixed(2)}°F`;
        calculation = `Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F):\n${celsius} * (9/5) + 32 = ${convertedToF.toFixed(2)}`;
    } else if (!isNaN(fahrenheit) && fahrenheitInput.value) {
        const convertedToC = (fahrenheit - 32) * 5 / 9;
        celsiusInput.value = convertedToC.toFixed(2); // Mengisi hasil konversi ke celsiusInput
        result = `${fahrenheit}°F = ${convertedToC.toFixed(2)}°C`;
        calculation = `Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C):\n(${fahrenheit} - 32) * (5/9) = ${convertedToC.toFixed(2)}`;
    } else {
        result = "Silakan masukkan suhu yang valid.";
    }

    document.getElementById('result').innerText = result;
    document.getElementById('calculation').innerText = calculation;
});

// Reverse functionality
document.getElementById('reverse').addEventListener('click', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    const celsiusValue = celsiusInput.value;
    const fahrenheitValue = fahrenheitInput.value;

    celsiusInput.value = fahrenheitValue ? '' : celsiusValue;
    fahrenheitInput.value = celsiusValue ? '' : fahrenheitValue;

    // Clear previous results
    document.getElementById('result').innerText = '';
    document.getElementById('calculation').innerText = '';
});