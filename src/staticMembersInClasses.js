// Static Class
var Calculation = /** @class */ (function () {
    function Calculation(PI) {
        Calculation.PI = PI;
    }
    Calculation.circleArea = function (radius) {
        return Calculation.PI * (radius * radius);
    };
    return Calculation;
}());
var area = new Calculation(3.1416);
console.log(Calculation.PI);
console.log(Math.round(Calculation.circleArea(3)));
