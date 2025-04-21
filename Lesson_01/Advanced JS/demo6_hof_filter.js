const persons = [
  { name: 'Avi', age: 20 },
  { name: 'Dana', age: 30 },
  { name: 'Yael', age: 40 },
];

const newArr = persons.filter((per) => per.name.length > 3);

console.log(newArr);
