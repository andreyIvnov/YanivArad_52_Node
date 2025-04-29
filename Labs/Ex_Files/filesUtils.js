const jf = require('jsonfile')

const FILE = './persons.json';

const getPersons = () => {
    return jf.readFile(FILE);
}

const getPersonsByStreatName = (streatName) => {
    return new Promise((resolve, reject) => {
        getPersons()
            .then(data => {
                const filtredPersons = data.filter(per => per.address?.street?.includes(streatName))
                setTimeout(()=>{
                    resolve(filtredPersons.map(per => per.name))
                },2000)
            })
            .catch(err => reject(err))
    })
}

module.exports = { getPersonsByStreatName }