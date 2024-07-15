class Animal {
  public name: string;
  private age: number;
  protected country: string;

  constructor(name: string, age: number, country: string) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  // Made getName protected since it's needed in derived classes
  protected getName(): string {
    return this.name;
  }

  public setAge(modifiedAge: number): void {
    if (typeof modifiedAge === "number") {
      this.age = modifiedAge;
    }
  }

  protected getDetails(): { name: string; age: number; country?: string } {
    // Explicitly handling undefined country
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

// Create a new instance from Dog class
const dog = new Dog("Lucy", 2, "Poland", "female");
console.log(dog); // Only displays public properties
dog.aboutDog(); // Displays detailed information
dog.setAge(3);
console.log(dog); // Again, only displays public properties
