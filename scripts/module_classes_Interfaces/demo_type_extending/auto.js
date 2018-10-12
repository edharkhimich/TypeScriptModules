var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    Engine.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return Engine;
}());
var Accessory = /** @class */ (function () {
    function Accessory(acccessoryNumber, title) {
        this.acccessoryNumber = acccessoryNumber;
        this.title = title;
    }
    return Accessory;
}());
var Auto = /** @class */ (function () {
    function Auto(basePrice, engine, make, model) {
        this._engine = engine;
        this._basePrice = basePrice;
        this.make = make;
        this.model = model;
    }
    Auto.prototype.calculateTotal = function () {
        var taxrate = .08;
        return this._basePrice + (taxrate * this._basePrice);
    };
    Auto.prototype.addAccessories = function () {
        var accessories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessories[_i] = arguments[_i];
        }
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.acccessoryNumber + ' ' + ac.title;
        }
    };
    Auto.prototype.getAccessoryList = function () {
        return this.accessoryList;
    };
    Object.defineProperty(Auto.prototype, "basePrice", {
        get: function () {
            return this._basePrice;
        },
        set: function (price) {
            if (price <= 0)
                throw 'Price need to be >= 0';
            this._basePrice = price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (newEngine) {
            if (newEngine == undefined)
                throw 'Please supply an engine';
            this._engine = newEngine;
        },
        enumerable: true,
        configurable: true
    });
    return Auto;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(basePrice, engine, make, model, bedLength, fourByFour) {
        var _this = _super.call(this, basePrice, engine, make, model) || this;
        _this.bedLength = bedLength;
        _this.fourByFour = fourByFour;
        return _this;
    }
    return Truck;
}(Auto));
window.onload = function () {
    var truck = new Truck(4000, new Engine(300, 'V8'), 'Chevy', 'Silverado', 'Long bed', true);
    alert(truck.engine.engineType);
    alert(truck.bedLength);
    alert(truck.calculateTotal().toString());
    truck.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(4321, 'Towing pr'));
    truck.engine.start(function (status, engineType) {
        alert(engineType + ' was started ');
    });
};
