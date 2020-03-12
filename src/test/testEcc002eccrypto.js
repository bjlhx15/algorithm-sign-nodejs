

function main() {
    var algorithm = require("../main/ecc002eccrypto") 
    //pkcs1
    var priKey =
        "MHQCAQEEID7ytsiAhdlS+hisEkdox7E2pTDP/nKmFdyKWyrqaFh/oAcGBSuBBAAKoUQDQgAEE0eb7o1ibninvBQlX8+sjigHaB4612Nn620p20zPxbKAjLa5w5M2jJwtD3v2bRDjmIeAV3AHhzxzPNt56t7B6A==";
    //普通的后端key
    var pubKey =
        "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEE0eb7o1ibninvBQlX8+sjigHaB4612Nn620p20zPxbKAjLa5w5M2jJwtD3v2bRDjmIeAV3AHhzxzPNt56t7B6A==";


    console.log("-----签名-验签-------")

    var value = algorithm.ecc_ecdsa(algorithm.algorithmName.sha1, pubKey,priKey, "hello world")
    var value = algorithm.ecc_ecdsa(algorithm.algorithmName.sha224, pubKey,priKey, "hello world")
    var value = algorithm.ecc_ecdsa(algorithm.algorithmName.sha256, pubKey,priKey, "hello world")
    // var value = algorithm.ecc_ecdsa(algorithm.algorithmName.sha384, pubKey,priKey, "hello world")
   
    console.log("-----密钥交换-------")
    algorithm.ecc_ecdh("")
    console.log("-----加密 解密-------")
    algorithm.ecc_ecies("")
}


main();