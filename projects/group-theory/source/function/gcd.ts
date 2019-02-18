let gcd = (a: number, b: number): number => a ? gcd(b % a, a) : b
let GCD = (l: number[]) => l.reduce(gcd)

export { gcd, GCD }