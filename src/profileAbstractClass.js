// An abstract class representing a profile with common properties and behavior.
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
var Profile = /** @class */ (function () {
    function Profile(name, email, sex) {
        this.name = name;
        this.email = email;
        this.sex = sex;
    }
    return Profile;
}());
/**
 * Represents a Facebook profile, extending the base Profile class.
 */
var Facebook = /** @class */ (function (_super) {
    __extends(Facebook, _super);
    function Facebook(name, email, sex) {
        return _super.call(this, name, email, sex) || this;
    }
    Facebook.prototype.getProfile = function () {
        console.log("Name: ".concat(this.name, "\nEmail: ").concat(this.email, "\nSex: ").concat(this.sex));
    };
    return Facebook;
}(Profile));
// Create an instance of Facebook
var arafat = new Facebook("Arafat", "arafat@gmail.com", "male");
arafat.getProfile();
