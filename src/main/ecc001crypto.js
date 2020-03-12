
// 原生crypto 支持 签名 验签  密钥交换
//签名
function ecc_ecdsa_sign(signAlgorithmName, privateKey, srcData) {
    const crypto = require('crypto');

    const sign = crypto.createSign(signAlgorithmName);

    sign.update(srcData);

    // 注意这里是pkcs1， java后端默认是pkcs8
    const private_key = '-----BEGIN EC PRIVATE KEY-----\n' +
        privateKey +
        '-----END EC PRIVATE KEY-----\n';
    return sign.sign(private_key).toString('base64');
}

//验签
function ecc_ecdsa_verify(signAlgorithmName, publicKey,sign, srcData) {

    // 校验这里直接使用公钥，直接后端java生成的即可
    const crypto = require('crypto');
    const verify = crypto.createVerify(signAlgorithmName);
    verify.update(srcData);
    // verify.update(new Buffer(srcData, 'utf-8'));
    var public_key='-----BEGIN PUBLIC KEY-----\n' +
    publicKey
    +'-----END PUBLIC KEY-----\n';

    console.log(verify.verify(public_key, sign,"base64"));
}

//密钥交换
function ecc_ecdh(srcData) {
    const crypto = require('crypto');
    const assert = require('assert');
    // Generate Alice's keys...
    const alice = crypto.createECDH('secp521r1');
    const alice_key = alice.generateKeys();
    // Generate Bob's keys...
    const bob = crypto.createECDH('secp521r1');
    const bob_key = bob.generateKeys();
    // Exchange and generate the secret...
    const alice_secret = alice.computeSecret(bob_key);
    const bob_secret = bob.computeSecret(alice_key);
    console.log("alice_secret:" + alice_secret.toString("base64"))
    console.log("bob_secret:" + bob_secret.toString("base64"))
    assert(alice_secret, bob_secret);
}

//算法
var algorithmName = {
    sha1: "sha1",
    sha224: "sha224",
    sha256: "sha256",
    sha384: "sha384",
    sha512: "sha512"
}

module.exports = {
    algorithmName, ecc_ecdsa_sign, ecc_ecdsa_verify, ecc_ecdh
}