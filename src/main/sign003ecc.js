
function eccSign(signAlgorithmName,privateKey,srcData) {
    const crypto = require('crypto');

    const sign = crypto.createSign(signAlgorithmName);

    sign.update(srcData);

    const private_key = '-----BEGIN EC PRIVATE KEY-----\n' 
        + 
        privateKey +
        '-----END EC PRIVATE KEY-----\n';

    return sign.sign(private_key).toString('base64');
}

module.exports = {
    eccSign
}