
// console.log(isEmpty(''));
// console.log(isEmpty("d"));

// console.log(isUndefined(20));
// console.log(isUndefined(undefined));
// console.log(isUndefined(null));

namespace Util {
    export function isEmpty(d: any): boolean {
        return !d;
    }

    export function isUndefined(x: any): boolean {
        return typeof x === 'undefined';
    }

    const  PI = Math.PI;
    const EXP = Math.E;
}

const EXP = 'TEXT';

console.log(Util.isEmpty(""));
console.log(Util.isEmpty("N/A"));

console.log(Util.isUndefined("xsa"));
console.log(EXP);


