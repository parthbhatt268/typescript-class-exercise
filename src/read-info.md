# ✅ TypeScript Class & OOP Cheat Sheet

---

## 1️⃣ public / private / protected

```ts
class Person {
  public name: string; // Accessible everywhere
  private ssn: string; // Only inside this class
  protected age: number; // Class + subclasses

  constructor(name: string, ssn: string, age: number) {
    this.name = name;
    this.ssn = ssn;
    this.age = age;
  }
}
```

---

# 2️⃣ readonly (Set once, never change)

```
class User {
  public readonly id: number;

  constructor(id: number) {
    this.id = id; // ✅ allowed
  }
}

const u = new User(1);
// u.id = 2; ❌ Error
```

---

# 3️⃣ Constructor Parameter Shortcut

```
class Person {
  constructor(
    public name: string,
    public age: number,
    private password: string,
    public readonly createdAt: Date
  ) {}
}
```

---

# 4️⃣ extends & super (Inheritance)

```
class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name); // Calls parent constructor
  }
}
```

---

# 5️⃣ interface & implements

```
interface Greeter {
  greet(): string;
}

class Person implements Greeter {
  constructor(public name: string) {}

  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}
```

---

# 6️⃣ static (Belongs to the class itself)

```
class MathUtil {
  static add(a: number, b: number): number {
    return a + b;
  }
}

MathUtil.add(2, 3); // ✅ No instance needed
```

---

# 7️⃣ get & set (Getter and Setter)

```
class User {
  private _age = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) throw new Error("Invalid age");
    this._age = value;
  }
}

const u = new User();
u.age = 25;      // Calls setter
console.log(u.age); // Calls getter
```

---

# 8️⃣ abstract class

```
abstract class Shape {
  abstract area(): number; // Must be implemented
}

class Rectangle extends Shape {
  constructor(public w: number, public h: number) {
    super();
  }

  area(): number {
    return this.w * this.h;
  }
}
```

---

# 9️⃣ Optional Properties & Union Types

```
class User {
  middleName?: string; // Optional
  role: "admin" | "user";

  constructor(role: "admin" | "user") {
    this.role = role;
  }
}
```

---

# 🔟 export & import

```
// fileA.ts
export class A {}
export default class B {}

// fileB.ts
import { A } from "./fileA";
import B from "./fileA";
```

---

# ✅ Bonus: Singleton Pattern

```
class Logger {
  private static instance: Logger;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
}
```

---

# ✅ Bonus: Builder Pattern

```
class UserProfile {
  private constructor(
    public username: string,
    public email: string,
    public age?: number
  ) {}

  static builder(username: string, email: string) {
    return new UserProfileBuilder(username, email);
  }
}

class UserProfileBuilder {
  private age?: number;

  constructor(private username: string, private email: string) {}

  setAge(age: number) {
    this.age = age;
    return this;
  }

  build() {
    return new UserProfile(this.username, this.email, this.age);
  }
}
```

# ✅ Summary

• public → everywhere
• private → only same class
• protected → class + child
• readonly → set once only
• static → class-level
• extends → inheritance
• super() → parent constructor
• implements → enforce interface
• get / set → controlled access
• abstract → blueprint class
