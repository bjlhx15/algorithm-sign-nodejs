

function main(){
    var algorithmName=require("../main/algorithmName")
    var base002hmac=require("../main/base002hmac")
    base002hmac.hmac(algorithmName.hmacAlgorithmName.md5,"testSecretKey","hello world")

    base002hmac.hmac(algorithmName.hmacAlgorithmName.sha1,"testSecretKey","hello world")
    base002hmac.hmac(algorithmName.hmacAlgorithmName.sha224,"testSecretKey","hello world")
    base002hmac.hmac(algorithmName.hmacAlgorithmName.sha256,"testSecretKey","hello world")
    base002hmac.hmac(algorithmName.hmacAlgorithmName.sha384,"testSecretKey","hello world")
    base002hmac.hmac(algorithmName.hmacAlgorithmName.sha512,"testSecretKey","hello world")
}


main();