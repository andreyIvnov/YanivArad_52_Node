const strUtils = require('./strUtils')

const getArrLength = (strArray) => {
    return strArray.reduce((acc, str) => acc + strUtils.getLength(str), 0);
}

module.exports = { getArrLength }