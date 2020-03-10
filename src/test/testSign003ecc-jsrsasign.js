

// 引入非对称加密rsa的前台签名文件（github上有，我下的版本是6.2.2）
// import Jsrsasign from "jsrsasign";
// // 导入的Jsrsasign模块里面有很多实用的对象，对应不同的方法
// console.log(Jsrsasign)
// import { KEYUTIL, KJUR, hextob64, hextob64u } from 'jsrsasign';

// 安装： npm i jsrsasign
function main() {

    // const NodeRSA = require('node-rsa');
    var Jsrsasign = require('jsrsasign');
    // 导入的Jsrsasign模块里面有很多实用的对象，对应不同的方法
console.log(Jsrsasign)
    // NodeRSA.KEYUTIL
    const privateKeyString = `
-----BEGIN PRIVATE KEY-----
MIGNAgEAMBAGByqGSM49AgEGBSuBBAAKBHYwdAIBAQQgZG9wiEoiJdbWBmomz+3HeypOlC+jDXn8OJNr9y9lhoagBwYFK4EEAAqhRANCAARnLw67KoKGGJ/ySoeiuxb+CntEKRvOQ4tC9eLIiO8lnRiXdlnVeeUCt6VsxGoaUaxN+N5+29YI29WMuOy6zACT
-----END PRIVATE KEY-----
`
    // 传入私钥
    // 默认传入的私钥是PKCS#1的格式，所以采用readPrivateKeyFromPEMString(keyPEM)这个方法
    // rsa.readPrivateKeyFromPEMString(PrivateKey);
    // 如果后台生产出来的私钥是PKCS#8的格式，就不能用readPrivateKeyFromPEMString(keyPEM)这个方法
    const key = Jsrsasign.KEYUTIL.getKey(privateKeyString);
    // const key = jsrsasign.KEYUTIL.getKey(privateKeyString);
    // 创建 Signature 对象，设置签名编码算法
    const signature = new Jsrsasign.KJUR.crypto.Signature({ alg: 'SHA256withECDSA' });
    // 初始化
    signature.init(key);
    // 传入待加密字符串
    signature.updateString("我是测试数据对的纷纷");
    // 生成密文
    const originSign = signature.sign();
    const sign64 = Jsrsasign.hextob64(originSign);
    console.log('sign base64 =======', sign64);
    // const sign64u = Jsrsasign.hextob64u(originSign);
    // console.log('sign base64u=======', sign64u);
    return originSign;

}


main();