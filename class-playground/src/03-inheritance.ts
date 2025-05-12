/**
 * Exercise 03: Inheritance
 *
 * – Create a `Vehicle` base class with:
 *    • public `make: string`, `model: string`
 *    • protected `year: number`
 *    • constructor(make, model, year)
 *    • method `info(): string` that returns
 *        "{year} {make} {model}"
 *
 * – Create a subclass `ElectricVehicle` that:
 *    • extends `Vehicle`
 *    • private `batteryLevel: number` (0–100)
 *    • constructor(make, model, year, batteryLevel)
 *        • calls `super(make, model, year)`
 *        • initializes `batteryLevel`
 *    • method `charge(amount: number): void` (increase battery up to 100)
 *    • override `info()` to include battery:
 *        "{year} {make} {model} — Battery: {batteryLevel}%"
 *
 * Demo:  
 *   1. Instantiate a `Vehicle` and log `info()`.  
 *   2. Instantiate an `ElectricVehicle`, log `info()`, `charge(20)`, then log again.
 */

export default class Vehicle {
    public make: string;
    public model: string;
    protected year: number;

    constructor(make:string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    info(){
        return `Hi this is ${this.make} and model ${this.model} and year ${this.year}`
    }
}

export class ElectricVehicle extends Vehicle {
    private battery: number;

    constructor(make: string, model: string, year:number, battery: number) {
        //For super bascially when call goes to parent Those assignments happen on the same this object that your ElectricVehicle instance will become.
        super(make, model, year);
        this.battery = battery;
    }

    charge(addOn: number){
        this.battery = this.battery + addOn;
    }

    getCurrentCharge() {
        return this.battery;
    }

    info() {
       return `Hi this is Eletric with ${this.battery} and this is ${this.make} and model ${this.model} and year ${this.year}` 
    }
}

const car1 = new Vehicle('BMW', 'M5', 2027);
const car2 = new ElectricVehicle('Tesla', 'S', 2029, 88);

console.log('🔍  car1:', car1);
console.log('🌟  car2:', car2);

car2.charge(10);
console.log('🎉  car2:', car2);

