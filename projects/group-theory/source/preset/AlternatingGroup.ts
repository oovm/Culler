import { Cycle, Group } from '..'
import { isNatural } from "../function";

function AlternatingCycle(rank: number) {
    if (!isNatural(rank)) {
        Error('Illegal Parameter!')
    }
    switch (true) {
        case rank in [0, 1, 2]:
            return []
        case rank == 3:
            return [
                new Cycle([[1, 2, 3]])
            ]
        case rank == 4:
            return [
                new Cycle([[1, 2, 3]]),
                new Cycle([[2, 3, 4]])
            ]
        //when odd  {5 -> {Cycles[{{1, 2, 3}}], Cycles[{{1, 2, 3, 4, 5}}]}},
        //when even {6 -> {Cycles[{{1, 2, 3}}], Cycles[{{2, 3, 4, 5, 6}}]}}

        default:
            return []

    }

}


export default class G extends Group {
    constructor (
        public rank: number
    ) {
        super();
        this.rank = rank
        this.cycles = AlternatingCycle(rank)
    }

    //http://oeis.org/A001710
    order() {
        //TODO: n!/2, use BigInt
    }

}
