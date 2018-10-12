class Engine {
    constructor(public horsePower: number, public engineType: string) {
    }
}

class Car {
    private _engine2: Engine;

    constructor(engine: Engine){
        this._engine2 = engine;
    }

    get engine(): Engine {
        return this._engine2;
    }

    set engine(value: Engine){
        if(value == undefined) throw 'Please supply an engine';
        this._engine2 = value;
    }

    start(){
        alert('Car engine started ' + this._engine2.engineType);
    }
}

window.onload = function () {
    var engine = new Engine(300, 'V8');
    var car = new Car (engine);
    alert(car.engine.engineType);
    alert(car.start());
};
