import axios from 'axios';
//un adapter significa adaptador
//es una clase que se encarga de adaptar los datos que recibe la api a los datos que necesita la aplicacion y viceversa
//son datos 
export class PokeApiAdapter {

    private readonly axios = axios;
    
    async get(url: string){
        const { data } = await axios.get(url);
        return data;
    }   

    async post(url: string, data: any){
        return;
    }

    async put(url: string, data: any){
        return;
    }

    async patch(url: string, data: any){
        return;
    }

    async delete(url: string){
        return;
    }
}