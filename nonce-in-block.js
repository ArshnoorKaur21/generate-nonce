const { SHA3 } = require("sha3");
const hash = new SHA3(256);
let words = "Hello, World";
let difficulty = "000";


let nonce = 0;
let hex = "";
let check = true;

while (check) {
  hash.reset()
  hash.update(words + nonce.toString());
  let digestHex = hash.digest("hex");
//   console.log(digestHex)//generating of hashes
  if (digestHex.startsWith(difficulty)) {
    hex = digestHex;
    check = false;
  } else {
    nonce++;
  }
}

console.log("Nonce: " + nonce); 
console.log("Hex: " + hex); 