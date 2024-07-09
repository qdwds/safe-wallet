/**
 * 解密钱包
 */

const { decodeSafeWallet, decodePassword } = require("./utils")

const wallet = ""
const pass = ""
const key_iv = ""



// base 64 解密
const { password } = decodePassword(pass)
const { key, iv } = decodePassword(key_iv)

console.log(password, key, iv)
// 钱包解密
decodeSafeWallet(wallet, key, iv, password)