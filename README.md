# 安全钱包
加密钱包使用双AES加密方式，需要分开单独保存自己的钱包私钥和解密密钥，如果你们记下自己的密码，可以删除对应*.password文件。
## 加密解密
create.js为加密钱包脚本
unravel.js为钱包解密

## 运行

`pnpm install ` 下载相关依赖

`node create.js` 创建加密钱包

`node unravel.js` 解密加密钱包