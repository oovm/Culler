export function isNatural(n: number) {
    return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity
}


export function isPostiveInteger(n: number) {
    return (n >= 1) && isNatural(n)
}


export function isGrid(array: any[]) {
    return array.every(v => v.length == array[0].length)
}


export function flatten(array: any[]): any[] {
    return array.reduce((plane, toBeFlatten) => (plane.concat(Array.isArray(toBeFlatten) ? flatten(toBeFlatten) : toBeFlatten)), [])
}


export function isUnique(array: any[]) {
    let collection: any[] = []
    return array.every(function (item) {
        if (collection.indexOf(item) !== -1) {
            return false
        }
        else {
            collection.push(item)
            return true
        }
    })
}