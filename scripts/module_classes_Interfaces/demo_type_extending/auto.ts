class Engine {
    constructor(public horsePower: number, public engineType: string){}

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engine: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}

class Accessory {
    constructor(public acccessoryNumber: number, public title: string) {}
}

class Auto {
    private _basePrice: number;
    private _engine: Engine;
    make: string;
    model: string;
    accessoryList: string;

    constructor(basePrice: number, engine: Engine, make: string, model: string) {
        this._engine = engine;
        this._basePrice = basePrice;
        this.make = make;
        this.model = model;
    }

    calculateTotal(): number {
        var taxrate = .08;
        return this._basePrice + (taxrate * this._basePrice);
    }

    addAccessories(...accessories: Accessory[]) {
        this.accessoryList = '';
        for(var i = 0; i < accessories.length; i++){
            var ac = accessories[i];
            this.accessoryList += ac.acccessoryNumber + ' ' + ac.title ;
        }
    }

    getAccessoryList(): string {
        return this.accessoryList;
    }

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(price: number){
        if(price <= 0) throw 'Price need to be >= 0';
        this._basePrice = price;
    }
    get engine(): Engine {
        return this._engine;
    }

    set engine(newEngine: Engine) {
        if (newEngine == undefined) throw 'Please supply an engine';
        this._engine = newEngine;
    }
}

class Truck extends Auto {
    bedLength: string;
    fourByFour: boolean;

    constructor(basePrice: number, engine: Engine, make: string, model: string,
                bedLength: string, fourByFour: boolean) {
        super(basePrice, engine, make, model);
        this.bedLength = bedLength;
        this.fourByFour = fourByFour;
    }
}

window.onload = function () {
    var truck = new Truck(4000, new Engine(300, 'V8'), 'Chevy', 'Silverado',
        'Long bed',true);
    alert(truck.engine.engineType);
    alert(truck.bedLength);
    alert(truck.calculateTotal().toString());
    truck.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(4321, 'Towing pr'));
    truck.engine.start((status: boolean, engineType: string) => {
        alert(engineType + ' was started ');
    });
};