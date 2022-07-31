type input = number | string;

function somerValores(input1: input, input2: input) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2;
    }
}

console.log(somerValores(1, 5));
console.log(somerValores('ola', ', tudo bem?'));
console.log(somerValores('que dia é hoje? ', 5));