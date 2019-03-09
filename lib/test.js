let isDone = true;
let age = 56;
let list = [1, 3];
let str = ['1', '5'];
let x;
x = ["3", 34];
var Color;
(function (Color) {
    Color[Color["Red"] = 9] = "Red";
    Color[Color["Green"] = 8] = "Green";
})(Color || (Color = {}));
;
let c = Color[1];
console.log(c, Object.keys(Color));
let someValue = 'this is a string';
let someLength = someValue.length;
function f(input) {
    let a = 10;
    if (input) {
        var b = a + 1;
        return b;
    }
    return b;
}
console.log(f(true));
let input = [1, 3, 4, 5, 6];
let [first, ...rest] = input;
console.log(first, rest);
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
console.log(a, b);
let demo = { a1: '1', b1: 3 };
let { a1, b1 } = demo;
function keepWholeObject(wholeObject) {
    let { a, b = '1' } = wholeObject;
    console.log(a, b);
}
keepWholeObject({});
function set({ a, b = 0 } = { a: '99' }) {
    console.log(a, b);
}
set();
function printLabel(labelObj) {
    console.log(labelObj.label);
}
let myObj = { label: 'this is a label' };
printLabel(myObj);
let p1 = { label: 99 };
console.log(p1);
p1.label = 989;
