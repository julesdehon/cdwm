export class Registration {
  firstName: string;
  lastName: string;
  cookieInside: string;
  cookieOutside: string;
  welcomeCocktail1: string;
  welcomeCocktail2: string;
  dietaryRequirements: string;
  truthsAndLie: string;

  constructor(
    firstName = "",
    lastName = "",
    cookieInside = "",
    cookieOutside = "",
    welcomeCocktail1 = "",
    welcomeCocktail2 = "",
    dietaryRequirements = "",
    truthsAndLie = ""
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cookieInside = cookieInside;
    this.cookieOutside = cookieOutside;
    this.welcomeCocktail1 = welcomeCocktail1;
    this.welcomeCocktail2 = welcomeCocktail2;
    this.dietaryRequirements = dietaryRequirements;
    this.truthsAndLie = truthsAndLie;
  }

  toJson(): string {
    return JSON.stringify(this);
  }

  toString(): string {
    return `Registration(
      firstName: ${this.firstName}, 
      lastName: ${this.lastName}, 
      cookieInside: ${this.cookieInside}, 
      cookieOutside: ${this.cookieOutside}, 
      welcomeCocktail1: ${this.welcomeCocktail1}, 
      welcomeCocktail2: ${this.welcomeCocktail2},
      dietaryRequirements: ${this.dietaryRequirements},
      truthsAndLie: ${this.truthsAndLie},
    )`;
  }

  validate(): boolean {
    return !!(this.firstName && this.lastName && this.cookieInside && this.cookieOutside && this.welcomeCocktail1 && this.welcomeCocktail2 && this.truthsAndLie);
  }

  static fromObject(obj: Record<string, string>): Registration {
    return new Registration(
      obj.firstName ?? "",
      obj.lastName ?? "",
      obj.cookieInside ?? "",
      obj.cookieOutside ?? "",
      obj.welcomeCocktail1 ?? "",
      obj.welcomeCocktail2 ?? "",
      obj.dietaryRequirements ?? "",
      obj.truthsAndLie ?? ""
    );
  }

  static fromJson(json: string): Registration {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }
}