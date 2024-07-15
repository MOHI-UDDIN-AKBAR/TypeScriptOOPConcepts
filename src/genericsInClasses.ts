// Generic class to encapsulate a value of any type.

class Box<T> {
  private _value: T;

  constructor(value: T) {
    if (
      typeof value !== "object" ||
      typeof value !== "string" ||
      typeof value !== "number"
    ) {
      this._value = value;
    } else {
      throw new Error("Complex objects are not supported");
    }
  }

  getValue(): T {
    return this._value;
  }
}

// Usage examples remain unchanged
const userName = new Box<string>("Samir");
console.log(userName.getValue());
const userId = new Box<number>(101);
console.log(userId.getValue());
const user = new Box<{ userName: string; userId: number }>({
  userName: "Samir",
  userId: 101,
});
console.log(user.getValue());
