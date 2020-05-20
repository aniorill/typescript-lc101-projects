import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[]=[];
    astronauts: Astronaut[]=[];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number{
        let sumMass: number = 0
        for (let i=0; i<items.length; i++){
            sumMass += items[i].massKg
        }
       // "returns sum of all items using each item's massKg property"
       return sumMass
    }

    currentMassKg(): number {
        
            return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        //"uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems."
    }
    canAdd(item: Payload): boolean {
        return (this.currentMassKg() +item.massKg <= this.totalCapacityKg);
        }
       // "returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg."
    
    addCargo (cargo: Cargo): boolean {
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
            //"Uses this.canAdd() to see if another item can be added. If true, adds cargo to this.cargoItems and returns true. If false, returns false."
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
        "Uses this.canAdd() to see if another astronaut can be added.If true, adds astronaut to this.astronauts and returns true.If false, returns false."
        
    }
}