// Base class representing a student.

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

/**
 * Represents a Grade, extending the base Student class.
 */
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

// Create an instance of Grade
const rifat = new Grade("Rifat", 101, 4.5);
console.log(rifat);
console.table(rifat.getInfo());
