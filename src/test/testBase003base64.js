

function main() {
    var algorithm = require("../main/base003base64")
    const msg = "hello world,您好";
    //ascii→base64 汉语有问题，推荐utf8
    var value = algorithm.baseEncoderAndDecoder(msg, algorithm.encoding_type.ascii, algorithm.encoding_type.base64);
    console.log(value);
    var value = algorithm.baseEncoderAndDecoder(value, algorithm.encoding_type.base64, algorithm.encoding_type.ascii);
    console.log(value);

    //utf8-base64
    var value = algorithm.baseEncoderAndDecoder(msg, algorithm.encoding_type.utf8, algorithm.encoding_type.base64);
    console.log(value);
    var value = algorithm.baseEncoderAndDecoder(value, algorithm.encoding_type.base64, algorithm.encoding_type.utf8);
    console.log(value);


    //utf8-hex
    var value = algorithm.baseEncoderAndDecoder(msg, algorithm.encoding_type.utf8, algorithm.encoding_type.hex);
    console.log(value);
    var value = algorithm.baseEncoderAndDecoder(value, algorithm.encoding_type.hex, algorithm.encoding_type.utf8);
    console.log(value);

    //utf8-binary
    var value = algorithm.baseEncoderAndDecoder(msg, algorithm.encoding_type.utf8, algorithm.encoding_type.binary);
    console.log(value);
    var value = algorithm.baseEncoderAndDecoder(value, algorithm.encoding_type.binary, algorithm.encoding_type.utf8);
    console.log(value);
}


main();