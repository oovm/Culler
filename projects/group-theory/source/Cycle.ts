import { isPostiveInteger } from "./function";

type CyclesList = number[][] | number[]
type PermutationCycles = number[]
type Cycles = number[][]
//Identity = new Cycles([])

function isValid(list: CyclesList) {
    return true
}

function simplify(list: CyclesList) {
    return list
}

//Cycles
export class Cycle {
    constructor (
        private List: CyclesList
    ) {
        if (isValid(List)) {
            this.List = simplify(List)
            console.log(this.List)
        }
        else {
            Error('not valid')
        }
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
