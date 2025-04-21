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
  getResult(5).then((data) => console.log(data));
}

execAsyncDataA();

// option 2 - async-await
async function execAsyncDataB() {
  const data = await getResult(5);
  console.log(data);
}

execAsyncDataB();
