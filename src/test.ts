

let isDone: Boolean = true;


let age: number = 56;

let list: number[] = [1, 3];

let str: Array<string> = ['1', '5'];

let x: [any, any];

x = ["3", 34];

enum Color { Red = 9, Green = 8 };
let c: any = Color[1];

console.log(c, Object.keys(Color));

let someValue: string = 'this is a string';

let someLength: number = (<string>someValue).length;


function f(input: boolean) {
  let a = 10;
  if (input) {
    var b = a + 1;
    return b;
  }
  return b;
}

console.log(f(true));

let input: any[] = [1, 3, 4, 5, 6];

let [first, ...rest] = input;
console.log(first, rest);


let o = {
  a: "foo",
  b: 12,
  c: "bar"
}
let { a, b } = o;
console.log(a, b);

let demo = { a1: '1', b1: 3 };
let { a1, b1 } = demo;


function keepWholeObject(wholeObject: { a?: string, b?: number }) {
  let { a, b = '1' } = wholeObject;
  console.log(a, b);
}

keepWholeObject({});



function set({ a, b = 0 } = { a: '99' }): void {
  console.log(a, b);
}

set()




interface LabelValue {
  label?: string | number
}

function printLabel(labelObj: LabelValue) {
  console.log(labelObj.label);
}

let myObj = { label: 'this is a label' };

printLabel(myObj);

let p1: LabelValue = { label: 99 };
console.log(p1);
p1.label = 989;













