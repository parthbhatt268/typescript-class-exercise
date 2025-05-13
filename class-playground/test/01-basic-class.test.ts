import Person from '../src/01-basic-class';
import BankAccount from '../src/02-encapsulation';
import { ElectricVehicle } from '../src/03-inheritance';
import { PizzaBuilder } from '../src/Builder';
import { CarFactory } from '../src/factory/carFactory';
import ConfigManager from '../src/Singleton';

describe('test the basic class', () => {
    it('test Basic class', () => {
        const bob = new Person('bob', 24);
        expect(bob.greet()).toBe('Hi I am bob and my age is 24');
    });
});

describe('Bank Account', () => {
     let john:BankAccount;

    beforeEach(()=>{
        john = new BankAccount('John', 100);
    })

    it('check is balance is updated on deposit', () => {
        john.deposit(50);
        expect(john.getBalance()).toBe(150);
    })

    it('Check if balance is reduce on debit', () => {
        john.withdraw(40);
        expect(john.getBalance()).toBe(60);
    })
})

describe('Vehicle', () => {
    it('Check if the Car is charing', () => {
        const carx = new ElectricVehicle('Tesla', '4', 2026, 78);
        carx.charge(5);

        expect(carx.getCurrentCharge()).toBe(83);
    })
})

describe("Car Factory", () => {
    it("Check if BMW is created", () => {
        const crax = CarFactory.create('BMW');
        expect(crax.drive()).toBe('BMW car is created');
    })
})

describe("Singleton", () => {
    it("Singleton instance is unique and preserves settings", () => {
        const cfg1 = ConfigManager.getInstance();

        // Change ENV and ensure it's reflected on the “same” instance
        cfg1.set("ENV", "production");
        
        const cfg2 = ConfigManager.getInstance();
        // Both references should be to the same object
        expect(cfg2).toBe(cfg1);
        // And the updated value should persist
        expect(cfg2.get("ENV")).toBe("production");
    });
})

describe("Builder", () => {
    it("Builder creates Pizza with selected toppings", () => {
    const pizza = new PizzaBuilder("large")
        .addCheese()
        .addPepper()
        .build();

    expect(pizza.describe()).toBe("A large pizza with cheese, pepper.");
    });
})