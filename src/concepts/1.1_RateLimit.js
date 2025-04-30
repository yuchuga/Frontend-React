// N = no of executions per second or rate limit
function schedule(fn, delay, N) {
  let executionQueue = []
  
  return function() {
    const currentTime = Date.now()
    
    // Remove timestamps older than 1 second
    executionQueue = executionQueue.filter(timestamp => currentTime - timestamp < 1000)
    
    // Check if rate limit exceeds
    if (executionQueue.length < N) {
      setTimeout(() => {
        fn()
        executionQueue.push(currentTime)
      }, delay)
    } else {
      console.log('Rate Limit Exceeded')
    }
  }
};

const fn = () => {
  console.log('Function executed at', new Date().toISOString())
};

//call schedule function
schedule(fn, 500, 5);