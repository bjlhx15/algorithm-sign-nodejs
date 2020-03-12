

function main(){
    var base002hmac=require("../main/base002hmac")
    base002hmac.hmac(base002hmac.hmacAlgorithmName.md5,"testSecretKey","hello world")

    base002hmac.hmac(base002hmac.hmacAlgorithmName.sha1,"testSecretKey","hello world")
    base002hmac.hmac(base002hmac.hmacAlgorithmName.sha224,"testSecretKey","hello world")
    base002hmac.hmac(base002hmac.hmacAlgorithmName.sha256,"testSecretKey","hello world")
    base002hmac.hmac(base002hmac.hmacAlgorithmName.sha384,"testSecretKey","hello world")
    base002hmac.hmac(base002hmac.hmacAlgorithmName.sha512,"testSecretKey","hello world")
}


main();