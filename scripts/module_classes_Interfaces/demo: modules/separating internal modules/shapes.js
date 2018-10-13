var App;
(function (App) {
    var Shapes;
    (function (Shapes) {
        var Point = /** @class */ (function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }
            Point.prototype.getDist = function () {
                return Math.sqrt(this.x * this.y);
            };
            return Point;
        }());
        Shapes.Point = Point;
        var Rectangle = /** @class */ (function () {
            function Rectangle(height, width) {
                this.height = height;
                this.width = width;
            }
            Rectangle.prototype.getPerimeter = function () { return this.height * 2 + this.width * 2; };
            Rectangle.prototype.getArea = function () { return this.width + this.height; };
            return Rectangle;
        }());
        Shapes.Rectangle = Rectangle;
    })(Shapes = App.Shapes || (App.Shapes = {}));
})(App || (App = {}));
var Shapes = App.Shapes;
var Point = App.Shapes.Point;
var p = new Shapes.Point(2, 5);
var dist = p.getDist();
console.log('Shapes.IPoint ' + dist);
var point = new Point(2, 5);
console.log('easy' + point.getDist());
var rect = new Shapes.Rectangle(5, 7);
var perimetr = rect.getPerimeter();
