

function main() {
    var algorithm = require("../main/ecc003jsrsasign")
    //pkcs1
    var priKeyPkcs1 =
        "MHQCAQEEID7ytsiAhdlS+hisEkdox7E2pTDP/nKmFdyKWyrqaFh/oAcGBSuBBAAKoUQDQgAEE0eb7o1ibninvBQlX8+sjigHaB4612Nn620p20zPxbKAjLa5w5M2jJwtD3v2bRDjmIeAV3AHhzxzPNt56t7B6A==";
    var priKeyPkcs8 =
        "MIGNAgEAMBAGByqGSM49AgEGBSuBBAAKBHYwdAIBAQQgPvK2yICF2VL6GKwSR2jHsTalMM/+cqYV3IpbKupoWH+gBwYFK4EEAAqhRANCAAQTR5vujWJueKe8FCVfz6yOKAdoHjrXY2frbSnbTM/FsoCMtrnDkzaMnC0Pe/ZtEOOYh4BXcAeHPHM823nq3sHo";
 
    //普通的后端key
    var pubKey =
        "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEE0eb7o1ibninvBQlX8+sjigHaB4612Nn620p20zPxbKAjLa5w5M2jJwtD3v2bRDjmIeAV3AHhzxzPNt56t7B6A==";

    console.log("-----签名-验签-------")

    var value = algorithm.ecc_ecdsa_sign(algorithm.algorithmName.SHA1withECDSA, priKeyPkcs8, "hello world")
    algorithm.ecc_ecdsa_verify(algorithm.algorithmName.SHA1withECDSA, pubKey, value, "hello world")

    var value = algorithm.ecc_ecdsa_sign(algorithm.algorithmName.SHA224withECDSA, priKeyPkcs8, "hello world")
    algorithm.ecc_ecdsa_verify(algorithm.algorithmName.SHA224withECDSA, pubKey, value, "hello world")

    var value = algorithm.ecc_ecdsa_sign(algorithm.algorithmName.SHA256withECDSA, priKeyPkcs8, "hello world")
    algorithm.ecc_ecdsa_verify(algorithm.algorithmName.SHA256withECDSA, pubKey, value, "hello world")

    var value = algorithm.ecc_ecdsa_sign(algorithm.algorithmName.SHA384withECDSA, priKeyPkcs8, "hello world")
    algorithm.ecc_ecdsa_verify(algorithm.algorithmName.SHA384withECDSA, pubKey, value, "hello world")

    var value = algorithm.ecc_ecdsa_sign(algorithm.algorithmName.SHA512withECDSA, priKeyPkcs8, "hello world")
    algorithm.ecc_ecdsa_verify(algorithm.algorithmName.SHA512withECDSA, pubKey, value, "hello world")

    // console.log("-----密钥交换-------")
    // algorithm.ecc_ecdh("")
    console.log("-----加密 解密-------")
    algorithm.ecc_ecies("")
}


main();