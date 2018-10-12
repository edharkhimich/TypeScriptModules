interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void): void;
    stop(callback: (stopStatus: boolean, engineType: string) => void): void;
}

interface IAutoOptions {
    basePrice: number;
    engine: IEngine;
    state: string;
    make: string;
    model: string;
    year: number;
}
interface ITruckOptions extends IAutoOptions {
    bedLength: string;
    fourByFour: boolean;
}

class Engine implements IEngine{
    constructor(public horsePower: number, public enginetype: string) {}

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.enginetype);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineTyoe: string) => void) {
        window.setTimeout(() => {
            callback(true, this.enginetype);
        }, 1000);
    }
}

class CustomEngine implements IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void): void {
        window.setTimeout(() => {
            callback(true, "Custom Engine");
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void): void {
        window.setTimeout(() => {
            callback(true, "Custom Engine");
        }, 1000);
    }
}

class Accessory {
    constructor(public accessoryNumber: number, public title: string) {}
}
class Auto {
    private _basePrice: number;
    private _engine: IEngine;
    private _state: string;
    private _make: string;
    private _model: string;
    private _year: number;
    private _accessoryList: string;


    constructor(options: IAutoOptions) {
        this._basePrice = options.basePrice;
        this._engine = options.engine;
        this._state = options.state;
        this._make = options.make;
        this._model = options.model;
        this._year = options.year;
    }

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        this._basePrice = value;
    }

    get engine(): IEngine {
        return this._engine;
    }

    set engine(value: IEngine) {
        this._engine = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get make(): string {
        return this._make;
    }

    set make(value: string) {
        this._make = value;
    }

    get model(): string {
        return this._model;
    }

    set model(value: string) {
        this._model = value;
    }

    get year(): number {
        return this._year;
    }

    set year(value: number) {
        this._year = value;
    }

    get accessoryList(): string {
        return this._accessoryList;
    }

    set accessoryList(value: string) {
        this._accessoryList = value;
    }
}

class Truck extends Auto {
    bedLength: string;
    fourByFour: boolean;

    constructor(options: ITruckOptions) {
        super(options);
        this.bedLength = options.bedLength;
        this.fourByFour = options.fourByFour;
    }
}

window.onload = function () {
    var truck = new Truck({
        engine: new Engine(250, 'V8'),
        basePrice: 45000,
        state: 'Arizona',
        make: 'Ford',
        model: 'F-150',
        year: 2013,
        bedLength: 'Short bed',
        fourByFour: true
    });
alert(truck.bedLength);
};

