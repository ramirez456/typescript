import { httpAdapater, PockeapiFetchAdapter, PokeApiAdapter } from '../api/pokeApi.adapter';
import { Move, PockeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pockemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        private readonly http: httpAdapater

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const  data  = await this.http.get<PockeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${ this.id }`);
        console.log( data.moves );
        
        return data.moves;
    }

}

//export const charmander = new Pokemon( 4, 'Charmander' );

//patron adaptador
export const binazord = new Pockemon(4, 'binazord', new PokeApiAdapter);
console.log(binazord.getMoves());