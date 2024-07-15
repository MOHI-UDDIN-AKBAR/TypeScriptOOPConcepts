var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    // Made getName protected since it's needed in derived classes
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.setAge = function (modifiedAge) {
        if (typeof modifiedAge === "number") {
            this.age = modifiedAge;
        }
    };
    Animal.prototype.getDetails = function () {
        // Explicitly handling undefined country
        if (this.country && this.country.length !== 0) {
            return { name: this.getName(), age: this.age, country: this.country };
        }
        return { name: this.getName(), age: this.age };
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, country, sex) {
        var _this = _super.call(this, name, age, country) || this;
        _this.sex = sex;
        return _this;
    }
    Dog.prototype.aboutDog = function () {
        var _a = this.getDetails(), name = _a.name, age = _a.age, country = _a.country;
        var locationInfo = "";
        if (country && country.length !== 0) {
            locationInfo = ", from ".concat(country);
        }
        console.log("".concat(name, " is ").concat(age, " years old").concat(locationInfo, ", sex ").concat(this.sex));
    };
    return Dog;
}(Animal));
// Create a new instance from Dog class
var dog = new Dog("Lucy", 2, "Poland", "female");
console.log(dog); // Only displays public properties
dog.aboutDog(); // Displays detailed information
dog.setAge(3);
console.log(dog); // Again, only displays public properties
