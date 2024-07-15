var Dorm = /** @class */ (function () {
    function Dorm(name, location, amountOfStudents) {
        this.name = name;
        this.location = location;
        this.amountOfStudents = amountOfStudents;
    }
    // Renamed setter to follow naming convention
    Dorm.prototype.setCurrentAmountOfStudents = function (students) {
        if (students >= 0) {
            this.amountOfStudents = students;
        }
        else {
            console.error("Number of students must be positive.");
        }
    };
    Object.defineProperty(Dorm.prototype, "infoAboutDorm", {
        get: function () {
            return "".concat(this.name, " is a popular dorm located at ").concat(this.location, ". Almost ").concat(this.amountOfStudents.toLocaleString(), " students currently live in this dorm.");
        },
        enumerable: false,
        configurable: true
    });
    return Dorm;
}());
// Create a new instance from Dorm class
var amio = new Dorm("Amio", "Poland", 1110);
console.log(amio);
amio.setCurrentAmountOfStudents(1500); // Use setter to update the property
console.log(amio.infoAboutDorm);
