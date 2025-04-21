//1
const persons = [
    {name: 'Avi', age: 20},
    {name: 'Ron', age: 30},
    {name: 'Dana', age: 25},
]
const adultPersons = persons.filter((per) => per.age > 22 && per.age < 32);
const lengths = adultPersons.map(per => per.name.length)

// console.log(adultPersons)
// console.log(lengths)

function getArrayAverage (numArray) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (numArray && numArray.length > 0) {
                const total = numArray.reduce((x, y) => x + y);
                resolve({ average: (total / numArray.length) });
            }
            else{
                reject({ message: 'Array is incorrect. '})
            }
        },1000)
    })
}

const nums = [1, 2, 3, 4, 5, 6]
// const nums = []

async function getAverageByArray() {
    try {
        const data = await getArrayAverage(nums);
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getAverageByArray();

getArrayAverage(nums)
.then(data => console.log('then - ', data))
.catch(error => console.log('catch - ', error))