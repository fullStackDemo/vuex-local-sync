declare let isDone: Boolean;
declare let age: number;
declare let list: number[];
declare let str: Array<string>;
declare let x: [any, any];
declare enum Color {
    Red = 9,
    Green = 8
}
declare let c: any;
declare let someValue: string;
declare let someLength: number;
declare function f(input: boolean): number;
declare let input: any[];
declare let first: any, rest: any[];
declare let o: {
    a: string;
    b: number;
    c: string;
};
declare let a: string, b: number;
declare let demo: {
    a1: string;
    b1: number;
};
declare let a1: string, b1: number;
declare function keepWholeObject(wholeObject: {
    a?: string;
    b?: number;
}): void;
declare function set({ a, b }?: {
    a: string;
    b?: number;
}): void;
interface LabelValue {
    label?: string | number;
}
declare function printLabel(labelObj: LabelValue): void;
declare let myObj: {
    label: string;
};
declare let p1: LabelValue;
