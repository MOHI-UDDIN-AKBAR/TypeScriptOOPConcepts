var User = /** @class */ (function () {
    function User(name, age, universityName) {
        this.name = name;
        this.age = age;
        this.universityName = universityName;
    }
    User.prototype.getDetails = function () {
        console.log("".concat(this.name, " got admission at ").concat(this.universityName, " within ").concat(this.age));
    };
    return User;
}());
// Create an Adil instance from User
var adil = new User("Adil Khan", 15, "University of Krakow");
adil.getDetails();
