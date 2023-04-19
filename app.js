const crypto = require("crypto");

const algorithm = "aes-256-cbc";

// generate 16 bytes of random data
// const initVector = crypto.randomBytes(16);
const initVector = crypto.randomBytes(16);

// secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);
var encryptedData_;

function aesEncrypt(content) {
    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
    let encryptedData = cipher.update(content, "utf-8", "hex");
    encryptedData_ = encryptedData + cipher.final("hex");
    console.log("Encrypted message: " + encryptedData_);
}
aesEncrypt("Hello suman");

// the decipher function
function aesDecrypt(word) {
    const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

    let decryptedData = decipher.update(encryptedData_, "hex", "utf-8");

    decryptedData += decipher.final("utf8");

    console.log("Decrypted message: " + decryptedData);
};

aesDecrypt()