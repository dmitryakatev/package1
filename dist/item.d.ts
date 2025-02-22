export type ItemOptions = {
    value1: number;
    value2: number;
};
export declare class Item {
    private value1;
    private value2;
    constructor(options: ItemOptions);
    calc(): number;
}
