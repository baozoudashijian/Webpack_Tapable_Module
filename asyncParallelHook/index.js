const { AsyncParallelHook } = require('tapable');
const hook = new AsyncParallelHook(['name']);

console.time('cost');

hook.tapAsync('hello', (name, cb) => {
  setTimeout(() => {
    console.log(`hello ${name}`);
    cb();
  }, 2000);
});
hook.tapPromise('hello again', (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`hello ${name}, again`);
      resolve();
    }, 3000);
  });
});

hook.callAsync('ahonn', () => {
  console.log('done');
  console.timeEnd('cost');
});