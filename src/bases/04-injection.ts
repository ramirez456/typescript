import { PokeApiAdapter } from '../api/pokeApi.adapter';
import { Move } from '../interfaces/pokeapi-response.interface';

export class Pockemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        private readonly http: PokeApiAdapter

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const  data  = await this.http.get(`https://pokeapi.co/api/v2/pokemon/${ this.id }`);
        console.log( data.moves );
        
        return data.moves;
    }

}

//export const charmander = new Pokemon( 4, 'Charmander' );

export const binazord = new Pockemon(4, 'binazord', new PokeApiAdapter());
console.log(binazord.getMoves());