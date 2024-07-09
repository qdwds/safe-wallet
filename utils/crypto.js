const CryptoJS = require("crypto-js");

/**
 * AES key iv 加密
 * @param {*} data 
 * @param {*} key 
 * @param {*} iv 
 * @returns 
 */
const aes_encrypt_key_iv = (data, key, iv) => {
    let encrypted = CryptoJS.AES.encrypt(
        data,
        key,
        {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
            blockSize: 256
        }
    );
    return encrypted.toString();
}

/**
 * AES key iv 解密
 * @param {*} data 
 * @param {*} key 
 * @param {*} iv 
 * @returns 
 */
const aes_decrypt_key_iv = (data, key, iv) => {
    let decrypt = CryptoJS.AES.decrypt(
        data,
        key,
        {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
            blockSize: 256
        }
    );
    return CryptoJS.enc.Utf8.stringify(decrypt)
}





/**
 * AES password 加密
 * @param {*} data 
 * @param {*} key 
 * @returns 
 */
const aes_encrypt_pass = (data, key) => {
    const crypted = CryptoJS.AES.encrypt(
        JSON.stringify(data), 
        key, 
        {
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
            blockSize: 256
        }
    );
    return crypted.toString();
}

/**
 * AES password 解密
 * @param {*} data 
 * @param {*} key 
 * @returns 
 */
const aes_decrypt_pass = (data, key) => {
    const crypted = CryptoJS.AES.decrypt(
        data, 
        key, 
        {
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
            blockSize: 256
        }
    );
    return crypted.toString(CryptoJS.enc.Utf8);
}



module.exports = {
    aes_encrypt_key_iv,
    aes_decrypt_key_iv,
    aes_encrypt_pass,
    aes_decrypt_pass
}