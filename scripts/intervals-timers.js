const fnTimer = () => { console.log('Hello Word'); };
const fnInterval = () => { console.log('Hello World from interval'); };

console.log('Before Timer');
setTimeout(fnTimer, 0);
console.log('After Timer');
// const interval = setInterval(fnInterval, 2000);

// fnInterval();

// setTimeout(() => {
//   console.log('stop interval');
//   clearInterval(interval);
// }, 5000);
