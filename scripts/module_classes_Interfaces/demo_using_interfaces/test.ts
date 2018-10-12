interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void): void;
    stop(callback: (stopStatus: boolean, engineType: string) => void): void;
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


    constructor(basePrice: number, engine: IEngine, state: string, make: string, model: string, year: number) {
        this._basePrice = basePrice;
        this._engine = engine;
        this._state = state;
        this._make = make;
        this._model = model;
        this._year = year;
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

window.onload = function () {
    var auto = new Auto(40000, new Engine(350, "V9"),
        'state', 'make','model',1998);
    var myEngine = <Engine> auto.engine;
    alert(myEngine.horsePower);
};

