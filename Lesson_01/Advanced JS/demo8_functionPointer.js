function sayHello() {
  console.log('Hello');
}

const sayGoodBye = () => {
  console.log('Good Bye');
};

function execFunc(f) {
  // some code ...
  console.log('Execute this function:');
  f();
}

execFunc(sayHello);
execFunc(sayGoodBye);
