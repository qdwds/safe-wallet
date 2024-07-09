const strList = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '!','@','#','$','%','^','&','*','(',')','_','+','-','=','`','.','<','>','?'
];

const randomCharacter = (len) => {
    let pass = '';
    
    for (let i = 0; i < len; i++) {
        var x = Math.floor(Math.random() * strList.length);
        pass += strList[x];
    }
    return pass;
}


module.exports  = {
    randomCharacter
}