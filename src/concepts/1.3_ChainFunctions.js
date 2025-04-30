const add5 = (x) => x + 5
const multiplyBy3 = (x) => x * 3
const subtract10 = async (x) => x - 10

//reduceRight applies functions from right to left
const compose = (...functions) => (input) => functions.reduceRight((acc, fn) => {
  //check if  async function
  if (acc instanceof Promise) {
    return acc.then(fn)
  }
  return fn(acc)
}, input)

const composedFunction = compose(subtract10, multiplyBy3, add5)
const result = composedFunction(7)
console.log('result', result)