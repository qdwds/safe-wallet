/***
 * 创建钱包
 */

const { encodeSafeWallet } = require("./utils");
const { inputValidate } = require("./utils/validate")


// 创建加密钱包
const data = await inputValidate()
encodeSafeWallet(data.key, data.iv, data.password)
