import { CarFactory } from "./carFactory";

const BMWCar = CarFactory.create("BMW");
console.log('🎉 BMWCar:', BMWCar.drive());


const PorscheCar = CarFactory.create("Porsche");
console.log('💡 PorscheCar:', PorscheCar.drive());
