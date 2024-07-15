# TypeScriptOOPConcepts

This repository contains various examples of Object-Oriented Programming (OOP) principles implemented in TypeScript. The examples cover abstract classes, access modifiers, basic class usage, generics, inheritance, setters and getters, static properties and methods, and the use of interfaces with classes.

## Table of Contents

- [Abstract Class](#abstract-class)
- [Access Modifiers](#access-modifiers)
- [Basics of Classes](#basics-of-classes)
- [Generics with Class](#generics-with-class)
- [Inheritance](#inheritance)
- [Setters and Getters](#setters-and-getters)
- [Static Class](#static-class)
- [Interface with Class](#interface-with-class)

## Abstract Class

The `Profile` class is an abstract class that represents a profile with common properties and behaviors. The `Facebook` class extends this abstract class and provides a specific implementation of the `getProfile` method.

```typescript
abstract class Profile {
  name: string;
  email: string;
  sex: string;

  constructor(name: string, email: string, sex: string) {
    this.name = name;
    this.email = email;
    this.sex = sex;
  }

  abstract getProfile(): void;
}

class Facebook extends Profile {
  constructor(name: string, email: string, sex: string) {
    super(name, email, sex);
  }

  getProfile(): void {
    console.log(`Name: ${this.name}\nEmail: ${this.email}\nSex: ${this.sex}`);
  }
}

const arafat = new Facebook("Arafat", "arafat@gmail.com", "male");
arafat.getProfile();
```

## Access Modifiers

The `Animal` class demonstrates the use of public, private, and protected access modifiers. The `Dog` class extends `Animal` and provides additional functionality.

```typescript
class Animal {
  public name: string;
  private age: number;
  protected country: string;

  constructor(name: string, age: number, country: string) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  protected getName(): string {
    return this.name;
  }

  public setAge(modifiedAge: number): void {
    if (typeof modifiedAge === "number") {
      this.age = modifiedAge;
    }
  }

  protected getDetails(): { name: string; age: number; country?: string } {
    if (this.country && this.country.length !== 0) {
      return { name: this.getName(), age: this.age, country: this.country };
    }
    return { name: this.getName(), age: this.age };
  }
}

class Dog extends Animal {
  private sex: string;

  constructor(name: string, age: number, country: string, sex: string) {
    super(name, age, country);
    this.sex = sex;
  }

  aboutDog(): void {
    const { name, age, country } = this.getDetails();
    let locationInfo = "";
    if (country && country.length !== 0) {
      locationInfo = `, from ${country}`;
    }
    console.log(`${name} is ${age} years old${locationInfo}, sex ${this.sex}`);
  }
}

const dog = new Dog("Lucy", 2, "Poland", "female");
console.log(dog); // Only displays public properties
dog.aboutDog(); // Displays detailed information
dog.setAge(3);
console.log(dog); // Again, only displays public properties
```

## Basics of Classes

The `Person` class demonstrates basic class usage with methods to get and set properties.

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  aboutPerson(): void {
    console.log(`${this.name} is ${this.age} years old.`);
  }

  getName(): string {
    return this.name;
  }

  setName(newName: string): void {
    if (typeof newName === "string" && newName.trim().length > 0) {
      this.name = newName;
    } else {
      console.error("Cannot initialize empty string as name");
    }
  }
}

const samir: Person = new Person("Samir", 27);
console.log(JSON.stringify(samir)); // Log the entire object
console.log(samir.getName()); // Get the name property
samir.setName("Samir Khan"); // Set a new name
console.log(JSON.stringify(samir)); // Log the updated object
samir.aboutPerson(); // Print person details
```

## Generics with Class

The `Box` class is a generic class that encapsulates a value of any type, with type safety.

```typescript
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

const userName = new Box<string>("Samir");
console.log(userName.getValue());
const userId = new Box<number>(101);
console.log(userId.getValue());
const user = new Box<{ userName: string; userId: number }>({
  userName: "Samir",
  userId: 101,
});
console.log(user.getValue());
```

## Inheritance

The `Student` class represents a student, and the `Grade` class extends it, adding a grade property.

```typescript
class Student {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  getName(): string {
    return this.name;
  }
}

class Grade extends Student {
  grade: number;

  constructor(name: string, id: number, grade: number) {
    super(name, id);
    this.grade = grade;
  }

  getInfo(): { name: string; id: number; grade: number } {
    return { name: this.getName(), id: this.id, grade: this.grade };
  }
}

const rifat = new Grade("Rifat", 101, 4.5);
console.log(rifat);
console.table(rifat.getInfo());
```

## Setters and Getters

The `Dorm` class uses a getter and setter to manage the number of students.

```typescript
class Dorm {
  name: string;
  location: string;
  amountOfStudents: number;

  constructor(name: string, location: string, amountOfStudents: number) {
    this.name = name;
    this.location = location;
    this.amountOfStudents = amountOfStudents;
  }

  setCurrentAmountOfStudents(students: number): void {
    if (students >= 0) {
      this.amountOfStudents = students;
    } else {
      console.error("Number of students must be positive.");
    }
  }

  get infoAboutDorm(): string {
    return `${this.name} is a popular dorm located at ${
      this.location
    }. Almost ${this.amountOfStudents.toLocaleString()} students currently live in this dorm.`;
  }
}

const amio = new Dorm("Amio", "Poland", 1110);
console.log(amio);
amio.setCurrentAmountOfStudents(1500); // Use setter to update the property
console.log(amio.infoAboutDorm);
```

## Static Class

The `Calculation` class demonstrates the use of static properties and methods.

```typescript
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
```

## Interface with Class

The `IUser` interface is implemented by the `User` class to ensure a specific structure.

```typescript
interface IUser {
  name: string;
  age: number;
  universityName: string;
  getDetails(): void;
}

class User implements IUser {
  name: string;
  age: number;
  universityName: string;

  constructor(name: string, age: number, universityName: string) {
    this.name = name;
    this.age = age;
    this.universityName = universityName;
  }

  getDetails(): void {
    console.log(
      `${this.name} got admission at ${this.universityName} within ${this.age}`
    );
  }
}

const adil = new User("Adil Khan", 15, "University of Krakow");
adil.getDetails();
```

## Running the Examples

To run these examples, you need to have TypeScript installed. Follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/MOHI-UDDIN-AKBAR/TypeScriptOOPConcepts.git
   cd TypeScriptOOPConcepts
   ```

2. Install TypeScript if you haven't already:

   ```bash
   npm install -g typescript
   ```

3. Compile the TypeScript files:

   ```bash
   tsc
   ```

4. Run the resulting JavaScript files using Node.js:
   ```bash
   node path/to/compiled/file.js
   ```

Replace `path/to/compiled/file.js` with the path to the compiled JavaScript file you want to run

.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
