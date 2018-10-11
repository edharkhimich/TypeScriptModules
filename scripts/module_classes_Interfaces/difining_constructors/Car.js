var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    return Car;
}());
var Car2 = /** @class */ (function () {
    function Car2(engine2) {
        this.engine2 = engine2;
    }
    return Car2;
}());
var Car3 = /** @class */ (function () {
    function Car3(engine) {
        this.engine3 = engine;
    }
    Car3.prototype.start = function () {
        return "Started " + this.engine3;
    };
    Car3.prototype.stop = function () {
        return "Stopped " + this.engine3;
    };
    return Car3;
}());
var Car4 = /** @class */ (function () {
    function Car4(engine) {
        this._engine4 = engine;
    }
    Object.defineProperty(Car4.prototype, "engine", {
        get: function () {
            return this._engine4;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Supply an Engine';
            this._engine4 = value;
        },
        enumerable: true,
        configurable: true
    });
    return Car4;
}());
var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Car5 = /** @class */ (function () {
    function Car5(engine) {
        this._engine = engine;
    }
    return Car5;
}());
