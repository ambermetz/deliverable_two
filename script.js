let clothes = '';
let event = '';

function startProgram () {
    let tempFahr = prompt ("What is the current temperature in Fahrenheit"); 

    if (tempFahr >= 70) {
        clothes = 'no jacket';
    } else if (tempFahr >=54 && tempFahr < 70) {
        clothes = 'a jacket';
    } else {
        clothes = 'a coat'
    }

console.log(clothes)

let eventType = prompt ("What type of event is it?  Casual, semi-formal, or formal? ");

    if ('casual'.toUpperCase() === eventType.toUpperCase()) {
        event = 'something comfy';
    } else if ('semi-formal'.toUpperCase() === eventType.toUpperCase()) {
        event = 'a polo';
    } else {
        event = 'a suit';
    }

console.log(event)

let result = (`Since it's ${tempFahr} degrees and you are going to a ${eventType} event, you should wear ${clothes} and ${event}.`)
console.log(result)

document.getElementById("result").innerHTML = result
}

