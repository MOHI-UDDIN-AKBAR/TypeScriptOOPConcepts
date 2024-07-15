class Dorm {
  name: string;
  location: string;
  amountOfStudents: number;

  constructor(name: string, location: string, amountOfStudents: number) {
    this.name = name;
    this.location = location;
    this.amountOfStudents = amountOfStudents;
  }

  // Renamed setter to follow naming convention
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

// Create a new instance from Dorm class
const amio = new Dorm("Amio", "Poland", 1110);
console.log(amio);
amio.setCurrentAmountOfStudents(1500); // Use setter to update the property
console.log(amio.infoAboutDorm);
