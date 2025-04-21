const arr = [5, 2, 6, 1];

// option 1
const total1 = arr.reduce((x, y) => x + y);
console.log(total1);

// option 2
const total2 = arr.reduce((acc, el) => acc + el, 10);
console.log(total2);
