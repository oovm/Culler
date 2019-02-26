import { isPostiveInteger } from "./function";

type CyclesList = number[][] | number[]
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

function isValid(list: CyclesList) {
    return true
}

function simplify(list: CyclesList) {
    return list
}

//Cycles
export class Cycle {
    private List: Cycles;

    constructor (input: Cycles | PermutationCycles) {

        input = permute2cycle(input)

        if (isValid(input)) {
            input = simplify(input)
            console.log(input)
        }
        else {
            Error('List not Valid!')
        }

        this.List = input;
    }

    get list() { return this.List }

    //PermutationList
    sequence() {
        return this.List
    }

    //InversePermutation
    reverse() {
        return this.List
    }




}
