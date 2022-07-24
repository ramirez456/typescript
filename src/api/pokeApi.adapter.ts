import axios from 'axios';
//un adapter significa adaptador
//es una clase que se encarga de adaptar los datos que recibe la api a los datos que necesita la aplicacion y viceversa
//son datos 

export interface httpAdapater {
    get<T>(url:string): Promise<T>; 
}
export class PockeapiFetchAdapter implements httpAdapater {
    async get<T>(url: string): Promise<T>{
        const response = await fetch(url);
        const data:T = await response.json();
        return data;
    }
}
export class PokeApiAdapter implements httpAdapater{

    private readonly axios = axios;
    //T es un generico no se sabe porque pero siempre inicia con T
    async get<T>(url: string){
        const { data } = await this.axios.get<T>(url);
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