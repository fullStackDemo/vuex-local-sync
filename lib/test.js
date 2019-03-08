var isDone = true;
var age = 56;
var list = [1, 3];
var str = ['1', '5'];
var x;
x = ["3", 34];
var Color;
(function (Color) {
    Color[Color["Red"] = 9] = "Red";
    Color[Color["Green"] = 8] = "Green";
})(Color || (Color = {}));
;
var c = Color[1];
console.log(c, Object.keys(Color));
var someValue = 'this is a string';
var someLength = someValue.length;
function f(input) {
    var a = 10;
    if (input) {
        var b = a + 1;
        return b;
    }
    return b;
}
console.log(f(true));
var input = [1, 3, 4, 5, 6];
var first = input[0], rest = input.slice(1);
console.log(first, rest);
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
console.log(a, b);
var demo = { a1: '1', b1: 3 };
var a1 = demo.a1, b1 = demo.b1;
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? '1' : _a;
    console.log(a, b);
}
keepWholeObject({});
function set(_a) {
    var _b = _a === void 0 ? { a: '99' } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    console.log(a, b);
}
set();
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { label: 'this is a label' };
printLabel(myObj);
var p1 = { label: 99 };
console.log(p1);
p1.label = 989;
