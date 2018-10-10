interface Person {
    name: string;
    age: number;
    kids: number;
    calcPets: () => number;
    makeYounger: (years: number) => void;
    greet: (msg: string) => string;
}

var p: Person = {
    name: 'Edgar',
    age: 27,
    kids: 2,
    calcPets: function () {
        return this.kids * 2;
    },
    makeYounger: function (years: number) {
        this.age -= years;
    },
    greet: function (msg: string) {
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

interface SessionEval {
    addRating: (rating: number) => void;
    calcRating: () => number;
}

function sessionEvaluation(): SessionEval {
    var ratings: number[] = [];
    var addRating = (ratings: number = 5) {
        ratings.push(rating);
    }
}
