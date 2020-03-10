
// md5 sha1 sha256 sha512
function mdAndSha(algorithmName, srcData) {
    const crypto = require('crypto');
    const hash = crypto.createHash(algorithmName);

    // 可任意多次调用update():
    hash.update(srcData);
    // hash.update('Hello, nodejs!');
    const value=hash.digest('hex')
    console.log(value);
    return value;
}
var baseAlgorithmName= {
    md5 : "md5",
    sha1 : "sha1",
    sha224 : "sha224",
    sha256 : "sha256",
    sha384 : "sha384",
    sha512 : "sha512"
}
module.exports = {
    mdAndSha,baseAlgorithmName
}