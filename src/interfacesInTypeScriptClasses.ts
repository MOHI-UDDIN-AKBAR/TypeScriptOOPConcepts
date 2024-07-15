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

// Create an Adil instance from User
const adil = new User("Adil Khan", 15, "University of Krakow");
adil.getDetails();
