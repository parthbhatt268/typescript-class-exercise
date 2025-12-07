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

 export default class BankAccount {
    public owner: string;
    private balance: number;

    constructor(owner: string, initialBalance:  number) {
        this.owner = owner;
        this.balance = initialBalance;
    }

    deposit(amount: number) {
        this.balance = this.balance + amount;
    }

    withdraw(amount: number) {
        this.balance = this.balance - amount;
    }

    getBalance() {
        return this.balance;
    }
 }

 const john = new BankAccount('JOHN', 1000);
 const marie = new BankAccount('MARIE', 2000);

 john.deposit(3000);
 john.withdraw(500);
 const johnBalance = john.getBalance();
 console.log('🚀 johnBalance:', johnBalance);

 marie.deposit(5000);
 marie.withdraw(8000);
 const marieBalance = marie.getBalance();
 console.log('🌙 marieBalance', marieBalance);


 