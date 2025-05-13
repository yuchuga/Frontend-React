// Include properties that are not undefined & filters out optional modifier from a key
// T - object type, K - key, P - generic placeholder or variable
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T];

function validateRequiredKeys<T>(obj): T {
  const requiredKeys = Object.keys(obj) as Array<RequiredKeys<T>>

  // Iterate over requiredKeys and check if key is present
  for (const key of requiredKeys) {
    if (obj[key] === undefined) {
      throw new Error(`Missing required key: ${String(key)}`)
    }
  }
  return obj
};

interface User {
  id: number
  name?: string
  email: string
}

const validUser = {
  id: 1,
  email: "john@hotmail.com"
};

const invalidUser = {
  id: 2,
  name: "Alice"
};

validateRequiredKeys<User>(validUser) // success
validateRequiredKeys<User>(invalidUser) // throws Error: Missing required key: email