

function main(){
    var base001mdAndSha=require("../main/base001hash")
    base001mdAndSha.mdAndSha(base001mdAndSha.baseAlgorithmName.md5,"hello world");
    base001mdAndSha.mdAndSha(base001mdAndSha.baseAlgorithmName.sha1,"hello world");
    base001mdAndSha.mdAndSha(base001mdAndSha.baseAlgorithmName.sha224,"hello world");
    base001mdAndSha.mdAndSha(base001mdAndSha.baseAlgorithmName.sha256,"hello world");
    base001mdAndSha.mdAndSha(base001mdAndSha.baseAlgorithmName.sha384,"hello world");
    base001mdAndSha.mdAndSha(base001mdAndSha.baseAlgorithmName.sha512,"hello world");
}

main();