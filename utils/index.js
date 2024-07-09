const { Wallet } = require("ethers");
const { aes_decrypt_key_iv, aes_encrypt_key_iv, aes_encrypt_pass, aes_decrypt_pass } = require("./crypto");
const { base64Encode, base64Decode } = require("./base64");
const { writeFileSync, mkdirSync } = require("fs")
const { join } = require("path");

const path = join(__dirname, "../address/")


/**
 * 创建加密钱包
 */
const encodeSafeWallet = (key, iv, password) => {
    const wallet = Wallet.createRandom()

    // 一次加密
    const aes_key_iv_wallet = aes_encrypt_key_iv(wallet.privateKey, key, iv);
    // 二次加密
    const aes_password_wallet = aes_encrypt_pass(aes_key_iv_wallet, password);

    // 钱包地址 公共
    const addressPath = `${path}${wallet.address}`


    // 创建地址目录
    mkdirSync(addressPath, { recursive: true })


    // key iv 数据 base64加密
    saveFile(`${addressPath}/${wallet.address}.key.iv`, {
        address: wallet.address,
        key,
        iv
    })

    // password 数据 base64加密
    saveFile(`${addressPath}/${wallet.address}.password`, {
        address: wallet.address,
        password
    })

    // 钱包私钥  base64加密
    saveFile(`${addressPath}/${wallet.address}.wallet`, {
        address: wallet.address,
        privateKey: aes_password_wallet
    })

    console.log(`钱包创建成功：${wallet.address}`)
}


/**
 * 解密钱包
 */
const decodeSafeWallet = (wallet, key, iv, password) => {

    // base64解密 钱包
    const base64Wallet = JSON.parse(base64Decode(wallet))

    // 反向解密
    // 一次解密
    const aes_password_wallet = aes_decrypt_pass(base64Wallet.privateKey, password)

    // 二次解密
    const privateKey = aes_decrypt_key_iv(
        JSON.parse(aes_password_wallet),
        key,
        iv
    )

    console.log({
        address: base64Wallet.address,
        privateKey
    })
}


// base64解密password key iv
const decodePassword = (password) =>  JSON.parse(base64Decode(password))

// 保存文件到本地
const saveFile = (path, data) => {
    writeFileSync(path, base64Encode(JSON.stringify(data)))
}

module.exports = {
    encodeSafeWallet,
    decodeSafeWallet,
    decodePassword
}
