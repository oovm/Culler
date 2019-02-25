import { Cycle } from './Cycle'

//PermutationGroup
export class Group {
    public cycles: Cycle[] = []
    /*
    constructor (
        public cycles: Cycle[]
    ) {
        this.cycles = cycles
    }
    */

    //GroupElements
    elements() {

    }

    //GroupGenerators
    generators() {

    }


    //GroupOrder
    order() {

    }

}

export default new class extends Group {


    constructor () { super() }

    //http://oeis.org/A001710
    order() {
        //TODO: n!/2, use BigInt
    }

}