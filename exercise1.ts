/*
Write a function that receives:
- number
- a boolean or a string,
- a string or undefined
- returns a string
*/

var func = function (a: number, b: boolean|string, c?: string): string {
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("c: ", c);
    return "some string";
}

let ret = func(1, true);
console.log(ret);