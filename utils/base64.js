const { Base64 } = require('js-base64')

/**
 * base64 加密
 */
const base64Encode = (data) => Base64.encode(data);

/**
 * base64 解密
 */
const base64Decode = (data) => Base64.decode(data)


module.exports = {
    base64Encode,
    base64Decode
}