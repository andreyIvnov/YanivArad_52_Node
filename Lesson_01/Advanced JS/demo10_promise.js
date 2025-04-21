const prom = new Promise((resolve) => {
  setTimeout(() => {
    resolve('OK');
  }, 3000);
});

prom.then((data) => console.log(data));

console.log('End');
