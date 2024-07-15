// Generic class to encapsulate a value of any type.
var Box = /** @class */ (function () {
    function Box(value) {
        if (typeof value !== "object" ||
            typeof value !== "string" ||
            typeof value !== "number") {
            this._value = value;
        }
        else {
            throw new Error("Complex objects are not supported");
        }
    }
    Box.prototype.getValue = function () {
        return this._value;
    };
    return Box;
}());
// Usage examples remain unchanged
var userName = new Box("Samir");
console.log(userName.getValue());
var userId = new Box(101);
console.log(userId.getValue());
var user = new Box({
    userName: "Samir",
    userId: 101
});
console.log(user.getValue());
