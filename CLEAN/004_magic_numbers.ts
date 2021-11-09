function restart(){
  // <NO CODE NEEDED>
}

const RESTART_TIMEOUT = 86400000;

setTimeout(restart, RESTART_TIMEOUT);

/*
* Having "magic numbers" or random numbers in the code can be confusing for other developers. It's much better to define them in a constant so that
* anyone reading the code knows what the number is supposed to represent.
*/