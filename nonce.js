const crypto = require('crypto');
const secureRandom = require('secure-random');

const date=Date.now()
console.log(date)
function generate_nonce () {
    const noncevalue=crypto.randomBytes(16)
    return noncevalue.toString('base64')
};

console.log(generate_nonce())