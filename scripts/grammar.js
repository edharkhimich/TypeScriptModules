var p = {
    name: 'Edgar',
    age: 27,
    kids: 2,
    calcPets: function () {
        return this.kids * 2;
    },
    makeYounger: function (years) {
        this.age -= years;
    },
    greet: function (msg) {
        return msg + ", " + this.name;
    }
};
var pets = p.calcPets();
console.log(pets);
p.makeYounger(15);
var newAge = p.age;
console.log(newAge);
var msg = p.greet("Hello Fucking Dude");
console.log(msg);
function sessionEvaluation() {
    var ratings = [];
    var addRating = function (ratings) {
        if (ratings === void 0) { ratings = 5; }
        ratings.push(rating);
    };
}
