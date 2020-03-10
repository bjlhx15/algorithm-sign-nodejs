
//md5、sha1、sha224、sha256、sha384、sha512
function hmac(hmacAlgorithmName,secretKey,srcData) {
    const crypto = require('crypto');

    const hmac = crypto.createHmac(hmacAlgorithmName, secretKey);

    const value=hmac.digest('hex')
    console.log(value);
    return value;
}

module.exports = {
    hmac
}