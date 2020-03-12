
//md5、sha1、sha224、sha256、sha384、sha512
function hmac(hmacAlgorithmName, secretKey, srcData) {
    const crypto = require('crypto');

    const hmac = crypto.createHmac(hmacAlgorithmName, secretKey);

    const value = hmac.digest('hex')
    console.log(value);
    return value;
}
//hmac算法
var hmacAlgorithmName = {
    md5: "md5",
    sha1: "sha1",
    sha224: "sha224",
    sha256: "sha256",
    sha384: "sha384",
    sha512: "sha512"
}

module.exports = {
    hmac, hmacAlgorithmName
}