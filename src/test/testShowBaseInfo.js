function main() {
    const crypto = require('crypto');
    var ciphers = crypto.getCiphers();
    ciphers.forEach(element => {
        console.log(element)
    });
    console.log('----------')
    var curves=crypto.getCurves();
    curves.forEach(e=>{
        console.log(e)
    });
    // console.log(crypto.getCiphers())
    // console.log(crypto.getCurves())

}


main();