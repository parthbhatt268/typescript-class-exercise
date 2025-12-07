import { Car } from "./Car";
import { BMW } from "./BMW";
import { Porsche } from "./Porsche";



export class CarFactory {
    static create(brand: 'BMW'|'Porsche'): Car {
        switch(brand) {
            case "BMW":
                return new BMW();
            case "Porsche":
                return new Porsche();
            default:
                throw new Error('Brand not found');
        }

    }
}