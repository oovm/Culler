export function isNatural(n: number) {
    return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
}

export function isPostiveInteger(n: number) {
    return (n >= 1) && isNatural(n)
}