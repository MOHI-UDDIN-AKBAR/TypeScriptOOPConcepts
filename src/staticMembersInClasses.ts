// Static Class
class Calculation {
  static PI: number;
  constructor(PI: number) {
    Calculation.PI = PI;
  }
  static circleArea(radius: number): number {
    return Calculation.PI * (radius * radius);
  }
}

const area = new Calculation(3.1416);
console.log(Calculation.PI);
console.log(Math.round(Calculation.circleArea(3)));
