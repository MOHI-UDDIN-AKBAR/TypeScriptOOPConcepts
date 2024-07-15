// An abstract class representing a profile with common properties and behavior.

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

/**
 * Represents a Facebook profile, extending the base Profile class.
 */
class Facebook extends Profile {
  constructor(name: string, email: string, sex: string) {
    super(name, email, sex);
  }

  getProfile(): void {
    console.log(`Name: ${this.name}\nEmail: ${this.email}\nSex: ${this.sex}`);
  }
}

// Create an instance of Facebook
const arafat = new Facebook("Arafat", "arafat@gmail.com", "male");
arafat.getProfile();
