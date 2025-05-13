export default class Pizza {
    private size: "small" | "medium" | "large";
    private cheese: boolean;
    private pepper: boolean;
    private salt: boolean;

    constructor(builder: PizzaBuilder) {
        this.size = builder.size;
        this.cheese = builder.cheese;
        this.pepper = builder.pepper;
        this.salt = builder.salt;
    }

    describe(): string {
    const toppings = [
      this.cheese && "cheese",
      this.pepper && "pepper",
      this.salt && "salt",
    ]
      .filter(Boolean)
      .join(", ") || "plain";

    return `A ${this.size} pizza with ${toppings}.`;
  }
}

export class PizzaBuilder {
  public size: "small" | "medium" | "large";
  public cheese = false;
  public pepper = true;
  public salt = false;

  constructor(size: "small" | "medium" | "large") {
    this.size = size;
  }

  addCheese(): this {
    this.cheese = true;
    return this;
  }

  addPepper(): this {
    this.pepper = true;
    return this;
  }

  addSalt(): this {
    this.salt = true;
    return this;
  }

  build(): Pizza {
    return new Pizza(this);
  }
}
const myPizza = new PizzaBuilder("medium")
  .addCheese()
  .addPepper()
  .build();

console.log(myPizza.describe());