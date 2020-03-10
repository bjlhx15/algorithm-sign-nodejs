//内置的

function main() {
    var algorithmName = require("../main/algorithmName")
    var sign003ecc = require("../main/sign003ecc")
    var secKey =
        'MHcCAQEEIF+jnWY1D5kbVYDNvxxo/Y+ku2uJPDwS0r/VuPZQrjjVoAoGCCqGSM49\n' +
        'AwEHoUQDQgAEurOxfSxmqIRYzJVagdZfMMSjRNNhB8i3mXyIMq704m2m52FdfKZ2\n' +
        'pQhByd5eyj3lgZ7m7jbchtdgyOF8Io/1ng==\n';
    console.log(secKey.length)
    secKey =
        "MHQCAQEEIFyz1LaWH7d5G9c+VlZT2M8P6r/PRs5GeD6Oil0EAObzoAcGBSuBBAAKoUQDQgAEi9VULVsGovWW8mG+M1w099o8v+947rIbCWMSmfRShrED2U3byqezA9jgbcHZ7z5vLfRiM0wFjlxxTBr6GecurQ==\n";
    console.log(secKey.length)

    var value = sign003ecc.eccSign("sha256"
        , secKey
        , "我是测试数据对的纷纷")
    console.log(value)
}


main();