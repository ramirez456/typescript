
interface Pokemon {
    id: number;
    name: string;
    age?: number;
}
//una interfaz no puede ser istanciada una clase si
export const picacku:Pokemon = {
    id: 1,
    name: 'Pikachu',
}
export const bulbasaur: Pokemon = {
    id: 2,
    name: "name"
}
export const pockemons: Pokemon[] = [];
pockemons.push(picacku, bulbasaur);
console.log(picacku);
