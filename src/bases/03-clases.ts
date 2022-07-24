import axios from "axios";
import { Move, PockeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pockemon {
    //Standard constructor
    // constructor(id: number, name: string, age: number) {
    //     this.id = id;
    //     this.name = name;
    //     this.age = age;
    // }
    
    //shorthand constructor
    //constructor(public id: number, public name: string, public  age: number) {}
    //optimized constructor

    get imageUrl(): string {
        return `https://pockemon.com/${this.id}.png`;
    }

    constructor(
        public  readonly id: number, 
        public name: string, 
        public  age: number,
        //public imageurl: string
    ) {}
    //for defaul all is public
    //private is only for this class
    //protected is only for this class and its children
    scream(): void {
        console.log(`${this.name.toUpperCase()}!`);
    }
    
    speak(): void {
        console.log(`${this.name} says hello`);
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PockeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log(data.moves);
        return data.moves;
        
    }




    //una promesa es un trabajo a destiempo
    //y una vez que esta promesa se cumpla vamos a tener un tipo de respuesta.



}
export const charmander = new Pockemon(4, 'Charmander', 2);
charmander.name = 'Chaizard';
console.log(charmander.imageUrl);
charmander.scream();
charmander.speak();
charmander.getMoves();
