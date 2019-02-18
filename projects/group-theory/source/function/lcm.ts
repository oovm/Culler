import { gcd } from './gcd'

let lcm = (a: number, b: number): number => a * b / gcd(a, b)
let LCM = (l: number[]) => l.reduce(lcm)

export { lcm, LCM }