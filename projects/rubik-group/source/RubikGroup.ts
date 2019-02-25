import { Group } from '@culler/group-theory'


export class RubikGroup extends Group {
    constructor (
        public rank: number
    ) {
        super()
        this.rank = rank
    }

    order(mode: string = '') {
        switch (mode) {
            default:
                return BigInt(0)
        }
    }
}