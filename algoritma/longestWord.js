function reverseAlphabet(str) {
    let alphabets = str.match(/[a-zA-Z]/g).reverse().join('');
    let digits = str.match(/\d+/g).join('');
    return alphabets + digits;
}

console.log(reverseAlphabet("NEGIE1")); // Output: EIGEN1