
// 使用 eccrypto 库 支持 签名 验签  密钥交换   加密解密
//签名 验签
function ecc_ecdsa(signAlgorithmName, pubKey, priKey, str) {
    var crypto = require("crypto");
    var eccrypto = require("eccrypto");

    // A new random 32-byte private key.
    var privateKey = eccrypto.generatePrivate();
    console.log(privateKey.toString("base64"))
    // Corresponding uncompressed (65-byte) public key.
    var publicKey = eccrypto.getPublic(privateKey);
    console.log(publicKey.toString("base64"))
    // var str = "message to sign";
    // Always hash you message to sign!
    var msg = crypto.createHash(signAlgorithmName).update(str).digest();

    eccrypto.sign(privateKey, msg).then(function (sig) {
        console.log("Signature in DER format:", sig.toString("base64"));
        eccrypto.verify(publicKey, msg, sig).then(function () {
            console.log("Signature is OK");
        }).catch(function () {
            console.log("Signature is BAD");
        });
    });
}

//密钥交换
function ecc_ecdh() {
    var eccrypto = require("eccrypto");

    var privateKeyA = eccrypto.generatePrivate();
    var publicKeyA = eccrypto.getPublic(privateKeyA);
    var privateKeyB = eccrypto.generatePrivate();
    var publicKeyB = eccrypto.getPublic(privateKeyB);

    eccrypto.derive(privateKeyA, publicKeyB).then(function (sharedKey1) {
        eccrypto.derive(privateKeyB, publicKeyA).then(function (sharedKey2) {
            console.log("Both shared keys are equal:", sharedKey1.toString("base64"), sharedKey2.toString("base64"));
        });
    });
}

//ecc加密解密
function ecc_ecies() {
    var eccrypto = require("eccrypto");

    var privateKeyA = eccrypto.generatePrivate();
    var publicKeyA = eccrypto.getPublic(privateKeyA);
    var privateKeyB = eccrypto.generatePrivate();
    var publicKeyB = eccrypto.getPublic(privateKeyB);

    // Encrypting the message for B.
    eccrypto.encrypt(publicKeyB, Buffer.from("msg to b")).then(function (encrypted) {
        // B decrypting the message.
        console.log("Message to part B[encrypted]:", encrypted.ciphertext.toString("base64"));
        eccrypto.decrypt(privateKeyB, encrypted).then(function (plaintext) {
            console.log("Message to part B:", plaintext.toString());
        });
    });

    // Encrypting the message for A.
    eccrypto.encrypt(publicKeyA, Buffer.from("msg to a")).then(function (encrypted) {
        // A decrypting the message.
        console.log("Message to part A[encrypted]:", encrypted.ciphertext.toString("base64"));
        eccrypto.decrypt(privateKeyA, encrypted).then(function (plaintext) {
            console.log("Message to part A:", plaintext.toString());
        });
    });
}

//算法
var algorithmName = {
    sha1: "sha1",
    sha224: "sha224",
    sha256: "sha256",
    // sha384: "sha384",  //Error: Message is too long
    // sha512: "sha512"
}

module.exports = {
    algorithmName, ecc_ecdsa, ecc_ecdh, ecc_ecies
}