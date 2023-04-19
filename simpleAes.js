const CryptoJS = require("crypto-js");
const express = require("express");
const app = express();

app.use(express.json());

// getEncrypted
app.post("/getEncrypted", async (req, res) => {
    try {
        const key = "1234tgbnm876trf";
        const plainText = "qwertyuiop";

        const encrypted = CryptoJS.AES.encrypt(plainText, key).toString();
        let result = encrypted;
        result = new Promise(function (resolve, reject) {
            resolve(result);
        });

        result.then((data) => {
            console.log(data);
            res.status(200).json({ encrypted: data });

        }).catch((err) => {
            console.log(err);
            res.status(404).json({ message: err });
        })

    } catch (err) {
        res.status(404).json({ message: err });
    }
});


// getDecrypted
app.post("/getDecrypted", async (req, res) => {
    try {
        const key = "1234tgbnm876trf";
        const plainText = "qwertyuiop";

        const decrypted = CryptoJS.AES.decrypt("U2FsdGVkX19DkRyW7x8yFT4xhytR0eeH09N2iK23VIQ=", key);
        let decrypted_ = decrypted.toString(CryptoJS.enc.Utf8);
        decrypted_ = new Promise(function (resolve, reject) {
            resolve(decrypted_)
        });

        decrypted_.then((data) => {
            console.log(data);
            res.status(200).json({ decrypted: data });

        }).catch((err) => {
            console.log(err);
            res.status(404).json({ message: err });
        })

    } catch (err) {
        res.status(404).json({ message: err });
    }
})



app.listen(8000, () => {
    console.log("server is running on port 8000")
})



// const key = "1234tgbnm876trf"
// const plainText = "qwertyuiop"

// const encrypted = CryptoJS.AES.encrypt(plainText, key).toString()
// console.log(encrypted, "Encrypted Text")

// const decrypted = CryptoJS.AES.decrypt(encrypted, key)
// console.log(decrypted.toString(CryptoJS.enc.Utf8), "Decrypted Text");


