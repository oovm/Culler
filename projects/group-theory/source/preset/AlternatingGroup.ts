import { Cycle, Group } from '..'
import { isNatural } from "../function";

function AlternatingCycle(rank: number) {
    if (!isNatural(rank)) {
        Error('Illegal Parameter!')
    }
    //if 0 1 2 empty
    //{3 -> {Cycles[{{1, 2, 3}}]}},
    //{4 -> {Cycles[{{1, 2, 3}}], Cycles[{{2, 3, 4}}]}},
    //when odd  {5 -> {Cycles[{{1, 2, 3}}], Cycles[{{1, 2, 3, 4, 5}}]}},
    //when even {6 -> {Cycles[{{1, 2, 3}}], Cycles[{{2, 3, 4, 5, 6}}]}}
}


export default new class extends Group {


    order() {


    }

}