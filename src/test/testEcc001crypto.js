

function main() {
    var algorithm = require("../main/ecc001crypto")
    var msg = "我是测试数据对的 http://blog.bjlhx.top/"
    //pkcs1
    var priKey =
        "MHQCAQEEINcUbYDcGd6KPudPYTfhJKB/oRkQ4R4qtM32ctM0MQDnoAcGBSuBBAAKoUQDQgAEYfNJOtj1Xkfp9bVqoXlB4ixVhNtN7Zl+mPPiyeDrPbKNX7XhmN8EcyOhjfpbXYmJY8JItue9rajOqouS45wYpQ==\n";
    //普通的后端key
    var pubKey =
        "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEYfNJOtj1Xkfp9bVqoXlB4ixVhNtN7Zl+mPPiyeDrPbKNX7XhmN8EcyOhjfpbXYmJY8JItue9rajOqouS45wYpQ==\n";
    var pubKeyRemote =
        "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEJN5FVWR90XaFSMjVEbCGgAqrMbvHCIM0i84kVLuKpESDNgGSnz0AZt4HKElRR8MkZbzsnJdMq5gmDxTrYMyg8Q==\n";


    console.log("-----签名-验签-------")
    var value = algorithm.ecc_ecdsa_sign(algorithm.algorithmName.sha1, priKey, msg)
    console.log(value)
    algorithm.ecc_ecdsa_verify(algorithm.algorithmName.sha1, pubKey, value, msg)

    var value = algorithm.ecc_ecdsa_sign(algorithm.algorithmName.sha224, priKey, msg)
    console.log(value)
    algorithm.ecc_ecdsa_verify(algorithm.algorithmName.sha224, pubKey, value, msg)

    var value = algorithm.ecc_ecdsa_sign(algorithm.algorithmName.sha256, priKey, msg)
    console.log(value)
    algorithm.ecc_ecdsa_verify(algorithm.algorithmName.sha256, pubKey, value, msg)

    var value = algorithm.ecc_ecdsa_sign(algorithm.algorithmName.sha384, priKey, msg)
    console.log(value)
    algorithm.ecc_ecdsa_verify(algorithm.algorithmName.sha384, pubKey, value, msg)

    var value = algorithm.ecc_ecdsa_sign(algorithm.algorithmName.sha512, priKey, msg)
    console.log(value)
    algorithm.ecc_ecdsa_verify(algorithm.algorithmName.sha512, pubKey, value, msg)

    console.log("-----java的签名-验签-------")
    var javaSign = 'MEQCIEQbw0cfSMncVG/3OT+/HnNQamNAZFPLYt5uYpjCsvoZAiAI9l4hdDDJqXlfKBxovkBUtqjl8r+5BQHZfkS4QRH0/A==';
    algorithm.ecc_ecdsa_verify(algorithm.algorithmName.sha256, pubKeyRemote, javaSign, msg+":B")

    console.log("-----密钥交换-------")
    algorithm.ecc_ecdh("")
}


main();