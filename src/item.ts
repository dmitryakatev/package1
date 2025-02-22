export type ItemOptions = {
    value1: number
    value2: number
}

export class Item {
    private value1: number
    private value2: number

    constructor(options: ItemOptions) {
        this.value1 = options.value1
        this.value2 = options.value2
    }

    public calc(): number {
        return this.value1 + this.value2
    }
}
