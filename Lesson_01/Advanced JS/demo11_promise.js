function getResult(num) {
  const prom = new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 3000);
  });

  return prom;
}

getResult(5).then((data) => console.log(data));

console.log('End');
