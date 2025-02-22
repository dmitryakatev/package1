import type { Item } from './item';
export type CalcOptions = {
    value: number;
};
export declare class Calc {
    private value;
    private items;
    constructor(options: CalcOptions);
    add(item: Item): void;
    calc(): number;
}
