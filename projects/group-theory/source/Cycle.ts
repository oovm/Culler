import { isNatural, flatten } from './function'

type PermutationCycles = number[]
type Cycles = number[][]
//Identity = new Cycles([])

//TODO: 
function permute2cycle(input: any[]): Cycles {
    if (input.every(v => typeof v != 'number')) {
        return input
    }
    return input
}


//TODO: 
function isValid(list: Cycles) {

    let flat = flatten(list)

    // All Natural Number
    if (!flat.every(isNatural)) {
        return false
    }

    return true
}


//TODO: 
function simplify(list: Cycles) {
    return list
}


//Cycles
export class Cycle {
    private List: Cycles

    constructor (input: Cycles | PermutationCycles) {

        input = permute2cycle(input)

        if (isValid(input)) {
            input = simplify(input)
            console.log(input)
        }
        else {
            Error('List not Valid!')
        }

        this.List = input
    }

    get list() { return this.List }

    //TODO: PermutationList
    sequence() {
        return this.List
    }

    //InversePermutation
    reverse() {
        const v = this.List.map(x => x.reverse())
        return this.List = simplify(v)
    }
}
