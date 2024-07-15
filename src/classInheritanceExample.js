// Base class representing a student.
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
var Student = /** @class */ (function () {
    function Student(name, id) {
        this.name = name;
        this.id = id;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    return Student;
}());
/**
 * Represents a Grade, extending the base Student class.
 */
var Grade = /** @class */ (function (_super) {
    __extends(Grade, _super);
    function Grade(name, id, grade) {
        var _this = _super.call(this, name, id) || this;
        _this.grade = grade;
        return _this;
    }
    Grade.prototype.getInfo = function () {
        return { name: this.getName(), id: this.id, grade: this.grade };
    };
    return Grade;
}(Student));
// Create an instance of Grade
var rifat = new Grade("Rifat", 101, 4.5);
console.log(rifat);
console.table(rifat.getInfo());
