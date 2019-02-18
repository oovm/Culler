import AlternatingGroup from './AlternatingGroup'
import CyclicGroup from './CyclicGroup'
import DihedralGroup from './DihedralGroup'
import SymmetricGroup from './SymmetricGroup'

export class Preset {
    Alternating(n:number) {
        AlternatingGroup
    }

    Cyclic(n:number) {
        CyclicGroup
    }

    Dihedral(n:number) {
        DihedralGroup
    }

    Symmetric(n:number) {
        SymmetricGroup
    }

}