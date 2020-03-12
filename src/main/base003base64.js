
function baseEncoderAndDecoder(srcData, encoding_type, toEncoding_type) {
    return Buffer.from(srcData, encoding_type).toString(toEncoding_type)
}
//hmac算法
var encoding_type = {
    ascii: "ascii",
    utf8: "utf8",
    utf16le: "utf16le",
    base64: "base64",
    binary: "binary",
    hex: "hex",
}

module.exports = {
    baseEncoderAndDecoder, encoding_type
}