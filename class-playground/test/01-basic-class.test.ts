import Person from '../src/01-basic-class';
import BankAccount from '../src/02-encapsulation';
import { ElectricVehicle } from '../src/03-inheritance';
import { CarFactory } from '../src/factory/carFactory';

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