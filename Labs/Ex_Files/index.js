const utils = require('./filesUtils')

const func = async () => {
    try {
        const data = await utils.getPersonsByStreatName("k")
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

func();