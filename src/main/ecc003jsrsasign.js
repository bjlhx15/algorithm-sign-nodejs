
// 使用 eccrypto 库 支持 签名 验签  密钥交换   加密解密
//签名 验签
function ecc_ecdsa_sign(signAlgorithmName, priKey, str) {
    var Jsrsasign = require('jsrsasign');
    // 导入的Jsrsasign模块里面有很多实用的对象，对应不同的方法
    console.log(Jsrsasign)

    const privateKeyString = '-----BEGIN PRIVATE KEY-----\n' +
        priKey + '\n-----END PRIVATE KEY-----\n';

    // 传入私钥
    // 默认传入的私钥是PKCS#1的格式，所以采用readPrivateKeyFromPEMString(keyPEM)这个方法
    // rsa.readPrivateKeyFromPEMString(PrivateKey);
    // 如果后台生产出来的私钥是PKCS#8的格式，就不能用readPrivateKeyFromPEMString(keyPEM)这个方法
    const key = Jsrsasign.KEYUTIL.getKey(privateKeyString);
    // 创建 Signature 对象，设置签名编码算法
    const signature = new Jsrsasign.KJUR.crypto.Signature({ alg: signAlgorithmName });
    // 初始化
    signature.init(key);
    // 上面3行相当于这句
    // const signature = new Jsrsasign.KJUR.crypto.Signature({ alg: signAlgorithmName,prvkeypem:privateKeyString });//!这里指定 私钥 pem!

    // 传入待加密字符串
    signature.updateString(str);
    // 生成密文
    const originSign = signature.sign();
    const sign64 = Jsrsasign.hextob64(originSign);
    console.log('sign base64 =======', sign64);
    // const sign64u = Jsrsasign.hextob64u(originSign);
    // console.log('sign base64u=======', sign64u);
    return sign64;
}

function ecc_ecdsa_verify(signAlgorithmName, pubKey, sign, str) {
    var Jsrsasign = require('jsrsasign');
    // 导入的Jsrsasign模块里面有很多实用的对象，对应不同的方法
    console.log(Jsrsasign)

    const pKeyString = '-----BEGIN PUBLIC KEY-----\n' +
        pubKey + '\n-----END PUBLIC KEY-----\n';

    // 1.传入私钥
    // 默认传入的私钥是PKCS#1的格式，所以采用readPrivateKeyFromPEMString(keyPEM)这个方法
    // rsa.readPrivateKeyFromPEMString(PrivateKey);
    // 如果后台生产出来的私钥是PKCS#8的格式，就不能用readPrivateKeyFromPEMString(keyPEM)这个方法
    // const key = Jsrsasign.KEYUTIL.getKey(pKeyString);
    //2. 创建 Signature 对象，设置签名编码算法
    // const signature = new Jsrsasign.KJUR.crypto.Signature({ alg: signAlgorithmName});
    //3.初始化
    //signature.init(key)
    //上面3行另一种写法
    const signature = new Jsrsasign.KJUR.crypto.Signature({ alg: signAlgorithmName, prvkeypem: pKeyString });
    // 传入待加密字符串
    signature.updateString(str);
    var b = signature.verify(Jsrsasign.b64tohex(sign))
    // 生成密文
    console.log('sign verify =======', b);
    return b;
}

//ecc加密解密
function ecc_ecies() {
    var Jsrsasign = require('jsrsasign');
    var keypair = Jsrsasign.KEYUTIL.generateKeypair("EC","secp256k1");
    console.log(keypair)
    var pubKey=keypair.pubKeyObj.pubKeyHex
    var priKey=keypair.prvKeyObj.prvKeyHex
    console.log(Jsrsasign.hextob64(pubKey))
    console.log(Jsrsasign.hextob64(priKey))
    

}

//算法
var algorithmName = {
    SHA1withECDSA: "SHA1withECDSA",
    SHA224withECDSA: "SHA224withECDSA",
    SHA256withECDSA: "SHA256withECDSA",
    SHA384withECDSA: "SHA384withECDSA",  //Error: Message is too long
    SHA512withECDSA: "SHA512withECDSA"
}

module.exports = {
    algorithmName, ecc_ecdsa_sign, ecc_ecdsa_verify, ecc_ecies
}