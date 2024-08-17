module.exports = function reverse(n) {
    const reversedString = reverseNumber(n);

    if (reversedString.toString().charAt(0) === '0') {
        return parseInt(reversedString.slice(1));
    } else {
        return parseInt(reversedString);
    }

}

function reverseNumber(number) {
    return Math.abs(number).toString().split('').reverse().join('');
}
