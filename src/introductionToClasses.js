// Introduction to Classes
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.aboutPerson = function () {
        console.log("".concat(this.name, " is ").concat(this.age, " years old."));
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (newName) {
        if (typeof newName === "string" && newName.trim().length > 0) {
            this.name = newName;
        }
        else {
            console.error("Cannot initialize empty string as name");
        }
    };
    return Person;
}());
// Create a new instance of Person
var samir = new Person("Samir", 27);
console.log(JSON.stringify(samir)); // Log the entire object
console.log(samir.getName()); // Get the name property
samir.setName("Samir Khan"); // Set a new name
console.log(JSON.stringify(samir)); // Log the updated object
samir.aboutPerson(); // Print person details
