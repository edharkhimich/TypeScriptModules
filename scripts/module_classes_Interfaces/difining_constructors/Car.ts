class Car {

    engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }
}

class Car2 {
        constructor(public engine2: string) {}
}

class Car3 {
    engine3: string;

    constructor(engine: string){
        this.engine3 = engine;
    }

    start(){
        return "Started " + this.engine3;
    }

    stop(){
        return "Stopped " + this.engine3;
    }

}

class Car4 {
    private _engine4: string;

    constructor(engine: string){
        this._engine4 = engine;
    }

    get engine(): string {
        return this._engine4;
    }

    set engine(value: string) {
        if(value == undefined) throw 'Supply an Engine';
        this._engine4 = value;
    }
}

class Engine {
    constructor(public horsePower: number, public engineType: string) {
    }
}

class Car5 {
    private _engine: Engine;

    constructor(engine: Engine){
        this._engine = engine;
    }
}
