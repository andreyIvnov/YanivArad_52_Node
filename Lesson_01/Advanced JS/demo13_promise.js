function getResult(num) {
  const prom = new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 3000);
  });

  return prom;
}

// option 1 - then
function execAsyncDataA() {
  return new Promise((resolve) => {
    getResult(5).then((data) => resolve(data));
  });
}

execAsyncDataA().then((data) => console.log(data));
// execAsyncDataA().then(console.log);

// option 2 - async-await
async function execAsyncDataB() {
  const data = await getResult(5);
  return data;
}

execAsyncDataB().then((data) => console.log(data));
// execAsyncDataB().then(console.log);
