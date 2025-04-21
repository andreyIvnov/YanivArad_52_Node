function getResult(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num < 10) {
        resolve(num * 2);
      } else {
        reject('The number must be smaller than 10');
      }
    }, 3000);
  });
}

// then
getResult(5)
  .then((data) => console.log('1:', data))
  .catch((error) => console.log('2:', error));

// async-await
async function aux_func() {
  try {
    const data = await getResult(5);
    console.log('1:', data);
  } catch (error) {
    console.log('2:', error);
  }
}

aux_func();
