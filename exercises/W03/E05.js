/////////////////
// EXERCISE 05 //
/////////////////

// concepts:
//  - %, String.fromCharCode, String.charCodeAt, ascii table, (regex if you want to get fancy)
// task:
//  - Write a Ceasar Cipher that can encrypt and decrypt (alphanumeric only)
// hint:
//  - [Ceasar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)

const plaintext = 'this is an ultra secret message, my pincode is 3452';

function ceasarCypher (str, shift) {
  /* build */
}

const encrypted = ceasarCypher(plaintext, 12);
console.log('encrypted', encrypted);
const decrypted = ceasarCypher(encrypted, -12);
console.log('decrypted', decrypted);


// desired output:
/*
encrypted ftue ue mz gxfdm eqodqf yqeemsq, yk buzoapq ue 5674
decrypted this is an ultra secret message, my pincode is 3452
*/
