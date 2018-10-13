// console.log(isEmpty(''));
// console.log(isEmpty("d"));
// console.log(isUndefined(20));
// console.log(isUndefined(undefined));
// console.log(isUndefined(null));
var Util;
(function (Util) {
    function isEmpty(d) {
        return !d;
    }
    Util.isEmpty = isEmpty;
    function isUndefined(x) {
        return typeof x === 'undefined';
    }
    Util.isUndefined = isUndefined;
    var PI = Math.PI;
    var EXP = Math.E;
})(Util || (Util = {}));
var EXP = 'TEXT';
console.log(Util.isEmpty(""));
console.log(Util.isEmpty("N/A"));
console.log(Util.isUndefined("xsa"));
console.log(EXP);
