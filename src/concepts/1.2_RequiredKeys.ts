// Include properties that are not undefined & removes optional modifier from a property
// T - object type
// K - key
// P - generic placeholder or variable
type RequiredKeys<T> = {
  [K in keyof T]-?: T extends { [P in K]: T[K] } ? K : never
}[keyof T]

function ensureRequiredKeys<T>(obj): T {
  const requiredKeys = Object.keys(obj) as Array<RequiredKeys<T>>

  // Iterate over requiredKeys and check if key is present
  for (const key of requiredKeys) {
    if (obj[key] === undefined || obj[key] === null) {
      throw new Error(`Missing required key: ${String(key)}`)
    }
  }
  return obj
};

interface Person {
  name: string
  age?: number
  address: string
}

const validPerson: Person = {
  name: "John",
  address: "Singapore",
};

const invalidPerson: Person = {
  name: "Jane",
};

ensureRequiredKeys(validPerson) // success
ensureRequiredKeys(invalidPerson) // throws Error: Missing required key: address