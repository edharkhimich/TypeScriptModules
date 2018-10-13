

namespace App.Shapes {
    export interface IPoint {
        getDist(): number;
    }

    export interface IRectangle {
        height: number;
        width: number;
        getPerimeter(): number;
        getArea(): number;
    }

    export class Point implements IPoint {
        constructor(public x: number, public y:number){}
        getDist() {
            return Math.sqrt(this.x * this.y);
        }
    }

    export class Rectangle implements IRectangle {
        constructor(public height: number, public width: number) {}
        getPerimeter() { return this.height * 2 + this.width * 2}
        getArea() { return this.width + this.height }
    }
}
import Shapes = App.Shapes;
import Point = App.Shapes.Point;

var p: Shapes.IPoint = new Shapes.Point(2, 5);
var dist = p.getDist();
console.log('Shapes.IPoint ' + dist);

var point = new Point(2, 5);
console.log('easy' + point.getDist());


var rect: Shapes.IRectangle = new Shapes.Rectangle(5, 7);
var perimetr = rect.getPerimeter();