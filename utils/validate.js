
const { randomCharacter } = require("./random");
const { prompt } = require('enquirer');


// 验证出入内容
const validate = (value) => {
    if (value.toLowerCase() === 'r') return true;
    if (value.length < 6) return '输入的值长度不能少于6个字符';
    return true;
}


// 输入验证
const inputValidate = async () =>{
    const response = await prompt([
        {
            type: 'input',
            name: 'key',
            message: '输入自定义KEY值，输入R为随机创建.',
            validate
        },
        {
            type: 'input',
            name: 'iv',
            message: '输入自定义IV值，输入R为随机创建.',
            validate
        },
        {
            type: 'input',
            name: 'password',
            message: '输入自定义PASSWORD值，输入R为随机创建.',
            validate
        }
    ]);

    // 根据条件生成随机值
    for (const key in response) {
        if (response[key].toLowerCase() === 'r') {
            response[key] = randomCharacter(12);
        }
    }
    console.log(response)
    return response
}


module.exports  = {
    inputValidate
}