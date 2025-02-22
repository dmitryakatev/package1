import type { Item } from './item'

export type CalcOptions = {
    value: number
}

export class Calc {
    private value: number
    private items: Item[]

    constructor(options: CalcOptions) {
        this.value = options.value
        this.items = []
    }

    public add(item: Item): void {
        this.items.push(item)
    }

    public calc(): number {
        return this.items.reduce((acc, item) => acc + item.calc(), this.value)
    }
}
