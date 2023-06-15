function calculateSquareRoot() {
    let cld = document.calculadora.cld;
    let value = cld.value;
    cld.value = Math.sqrt(eval(value));
}

function calculatePower() {
    let cld = document.calculadora.cld;
    let value = cld.value;
    cld.value += '**';
}