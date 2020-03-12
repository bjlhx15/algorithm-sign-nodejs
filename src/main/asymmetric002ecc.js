
function ecc() {
    const crypto = require('crypto');
    const assert = require('assert');
    // Generate Alice's keys...
    const alice = crypto.createECDH('secp521r1');
    const alice_key = alice.generateKeys();
    console.log("a pubkey:"+alice.getPublicKey().toString("base64"))
    console.log("a prikey:"+alice.getPrivateKey().toString("base64"))

    var a=crypto.createCipher("ec","1")

    // Generate Bob's keys...
    // const bob = crypto.createECDH('secp521r1');
    // const bob_key = bob.generateKeys();
    // // Exchange and generate the secret...
    // const alice_secret = alice.computeSecret(bob_key);
    // const bob_secret = bob.computeSecret(alice_key);
    // assert(alice_secret, bob_secret);
    console.log("ok")
}

module.exports = {
    ecc
}