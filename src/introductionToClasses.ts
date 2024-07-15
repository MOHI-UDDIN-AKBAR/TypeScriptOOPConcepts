// Introduction to Classes

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

// Create a new instance of Person
const samir: Person = new Person("Samir", 27);
console.log(JSON.stringify(samir)); // Log the entire object
console.log(samir.getName()); // Get the name property
samir.setName("Samir Khan"); // Set a new name
console.log(JSON.stringify(samir)); // Log the updated object
samir.aboutPerson(); // Print person details
