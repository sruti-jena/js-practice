// function greeet(name = 'there') {
//     if (!name) {
//         console.log('hello there');
//     }
//     else {
//         console.log(`hello ${name}`);
//     }
// }
// greeet('sio');

// function convertToFerenheit(celsius) {
//     const farenheit = (celsius * 9 / 5) + 32;
//     console.log(farenheit);
// }
// convertToFerenheit(25);

// function convertToCelsius(farenheit) {
//     const celsius = (farenheit - 32) * 5 / 9;
//     console.log(celsius);
// }
// convertToCelsius(86);


function convertTemperature(degrees, unit) {

    if (unit == 'C') {
        const farenheit = (degrees * 9 / 5) + 32;
        console.log(`${farenheit}F`);
    }
    else if (unit == 'F') {
        const celsius = (degrees - 32) * 5 / 9;
        console.log(`${celsius}C`);
    }
}
convertTemperature(25, 'C');
convertTemperature(86, 'F');



function convertLength(length, from, to) {
    if (from != 'km' && from != 'miles' && from != 'ft') {
        return `invalid unit ${from}`;
    }
    else if (to != 'km' && to != 'miles' && to != 'ft') {
        return `invalid unit ${to}`;
    }
    if (from == 'miles' && to == 'km') {
        length *= 1.6;
        return `${length}km`;

    }
    else if (from == 'km' && to == 'miles') {
        length /= 1.6;
        return `${length}miles`;
    }
    else if (from == 'km' && to == 'ft') {
        length *= 3281;
        return `${length} ft`;
    }
    else if (from == 'miles' && to == 'ft') {
        length *= 5280;
        return `${length} ft`;
    }
    else if (from == 'ft' && to == 'km') {
        length /= 3281;
        return `${length} km`;
    }
    else if (from == 'ft' && to == 'miles') {
        length /= 5280;
        return `${length} miles`;
    }
    else if (from === to) {
        return `${length} ${to}`
    }
}
console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));
console.log(convertLength(5, 'miles', 'km'));
console.log(convertLength(5, 'miles', 'ft'));
console.log(convertLength(5, 'km', 'ft'));
