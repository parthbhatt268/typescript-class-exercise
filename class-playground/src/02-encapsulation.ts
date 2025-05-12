 /**
 * Exercise 02: Encapsulation
 * – Create a `BankAccount` class with:
 *    • A `public owner: string`
 *    • A `private balance: number`
 *    • A constructor that accepts `(owner: string, initialBalance: number)`
 *    • A `deposit(amount: number): void` method that adds to balance
 *    • A `withdraw(amount: number): boolean` method that subtracts if funds exist, returning true; otherwise leaves balance and returns false
 *    – A `getBalance(): number` public method to read the private balance
 *
 * After the class, instantiate and:
 *   1. Console.log your starting balance
 *   2. Deposit 50, withdraw 30, withdraw 500
 *   3. Console.log each result & final balance
 */
